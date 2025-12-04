import frappe

# ======================================================
# Prefix Mapping (Company + Customer)
# ======================================================

PREFIX_MAP = {
    # --------------------- COMPANY PREFIXES ---------------------
    "West Coast Lubricants & Asphalts Pvt. Ltd.": "WCL",
    "Ultra Plus Lubes Pvt. Ltd": "UPL1",
    "Ultra Plus Lubes Pvt. Ltd Unit IV": "UPL4",

    # --------------------- CUSTOMER PREFIXES ---------------------
    "Ultra Plus Lubes Pvt. Ltd.- Unit 1": "UPL1",
    "Ultra Plus Lubes Pvt. Ltd.- Unit 4": "UPL4",
    "West Coast Lubricants & Asphalts Pvt. Ltd.": "WCL",

    # --------------------- OTHER CUSTOMERS ----------------------
    "Valvoline Cummins (I) Pvt. Ltd. (Lube oil)": "VCPLL",
    "Valvoline Cummins (I) Pvt. Ltd.  (Lube oil)": "VCPLL",
    "Petronas": "PLI",
    "Valvoline Cummins (I) Pvt. Ltd. (coolant)": "VCPLC",
    "Valvoline Cummins (I) Pvt. Ltd.  (coolant)": "VCPLC",
    "BASF (Coolant)": "BASFC",
    "G S Caltex": "GSC",
    "G S Caltex (Base Oil Trading)": "GSCT",
    "Nynas": "NYNAS",
    "Sperry": "SPERRY",
    "BASF (Brake Fluid)": "BASFB",
    "Raj Petro (Solvent)": "RPS",
    "Raj Petro (Blending)": "RPB",
    "Shell India Marketing Pvt. Ltd.": "SIMPL",
    "Castrol (I) Pvt. Ltd.": "CIL",
    "ENSOOILS": "EO",
    "Exxon Mobil": "EM",
}

# List of dual-prefix customers
DUAL_PREFIX_CUSTOMERS = {
    "Ultra Plus Lubes Pvt. Ltd.- Unit 1",
    "Ultra Plus Lubes Pvt. Ltd.- Unit 4",
    "West Coast Lubricants & Asphalts Pvt. Ltd.",
}

# List of dual-prefix companies
DUAL_PREFIX_COMPANIES = {
    "Ultra Plus Lubes Pvt. Ltd",
    "Ultra Plus Lubes Pvt. Ltd Unit IV",
    "West Coast Lubricants & Asphalts Pvt. Ltd."
}

# ======================================================
# Generate Sample Code
# ======================================================
def generate_sample_code(customer_name, company_name):

    customer_name = (customer_name or "").strip()
    company_name = (company_name or "").strip()

    customer_prefix = PREFIX_MAP.get(customer_name)
    company_prefix = PREFIX_MAP.get(company_name)

    if not customer_prefix:
        frappe.throw(f"Missing prefix mapping for Customer: {customer_name}")
    if not company_prefix:
        frappe.throw(f"Missing prefix mapping for Company: {company_name}")

    # ======================================================
    # CASE 1: Dual-prefix format
    # ======================================================
    if customer_name in DUAL_PREFIX_CUSTOMERS and company_name in DUAL_PREFIX_COMPANIES:

        dual_prefix = f"{company_prefix}/{customer_prefix}"

        series_key = f"{company_prefix}_{customer_prefix}"
        counter_name = f"sample_counter_{series_key}"

        # Safe SQL lookup (no ORDER BY)
        res = frappe.db.sql(
            "SELECT current FROM `tabSeries` WHERE name=%s LIMIT 1",
            (counter_name,)
        )
        last_number = res[0][0] if res else None

        if last_number:
            next_number = int(last_number) + 1
        else:
            existing = frappe.db.sql("""
                SELECT name FROM `tabSample Registration`
                WHERE name LIKE %s
            """, (dual_prefix + "/%",), as_dict=True)

            max_num = 0
            for row in existing:
                try:
                    num = int(row.name.split("/")[-1])
                    max_num = max(max_num, num)
                except:
                    pass

            next_number = max_num + 1

            if frappe.db.exists("Series", counter_name):
                frappe.db.sql("UPDATE `tabSeries` SET current=%s WHERE name=%s",
                              (max_num, counter_name))
            else:
                frappe.db.sql(
                    "INSERT INTO `tabSeries` (name, current) VALUES (%s, %s)",
                    (counter_name, max_num)
                )

        frappe.db.sql(
            "UPDATE `tabSeries` SET current=%s WHERE name=%s",
            (next_number, counter_name)
        )

        return f"{dual_prefix}/{next_number:04d}"

    # ======================================================
    # CASE 2: Normal Prefix (all others)
    # ======================================================
    prefix = customer_prefix

    records = frappe.db.sql("""
        SELECT name FROM `tabSample Registration`
        WHERE name LIKE %s
    """, (prefix + "/%",))

    max_num = 0
    for row in records:
        try:
            num = int(row[0].split('/')[-1])
            max_num = max(max_num, num)
        except:
            pass

    next_number = max_num + 1

    return f"{prefix}/{next_number:04d}"


# ======================================================
# Hook: Before Insert
# ======================================================
def set_sample_code(doc, method=None):
    if not doc.name or doc.name.startswith("new-sample"):

        company_name = doc.get("company")
        customer_name = doc.get("name_of_customer")

        if company_name and customer_name:
            doc.name = generate_sample_code(customer_name, company_name)


# ======================================================
# Item filter API
# ======================================================
@frappe.whitelist()
def get_filtered_items(doctype, txt, searchfield, start, page_len, filters):
    type_of_sample = filters.get("type_of_sample")
    customer_name = filters.get("customer_name")

    conditions = []
    values = []

    if type_of_sample:
        conditions.append("mts.type_of_sample = %s")
        values.append(type_of_sample)

    if customer_name:
        conditions.append("mc.customer_name = %s")
        values.append(customer_name)

    values.extend([f"%{txt}%", f"%{txt}%", start, page_len])
    where_clause = " AND ".join(conditions) or "1=1"

    return frappe.db.sql(f"""
        SELECT 
            i.name AS value,
            i.item_name AS label,
            CONCAT(
                i.name, ', ', 
                i.item_name, ', ',
                GROUP_CONCAT(DISTINCT mts.type_of_sample SEPARATOR ' , ')
            ) AS description
        FROM `tabItem` i
        LEFT JOIN `tabMulti Type of Sample` mts 
            ON mts.parent = i.name 
        LEFT JOIN `tabMulti Customer` mc 
            ON mc.parent = i.name
        WHERE {where_clause}
        AND (i.item_name LIKE %s OR i.name LIKE %s)
        GROUP BY i.name, i.item_name
        LIMIT %s, %s
    """, tuple(values))
