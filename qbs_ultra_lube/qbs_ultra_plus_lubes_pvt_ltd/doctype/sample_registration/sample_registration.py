import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc


class SampleRegistration(Document):

    def autoname(self):

        # Allow manual override for duplicate functionality
        if getattr(self, 'custom_generated_name', None):
            self.name = self.custom_generated_name
            return

        customer = (self.name_of_customer or "").strip()
        company = (self.company or "").strip()

        # ======================================================
        # PREFIX MAP (COMPANY + CUSTOMER)
        # ======================================================
        prefix_map = {

            # ---------- COMPANY PREFIXES ----------
            "West Coast Lubricants & Asphalts Pvt. Ltd.": "WCL",
            "Ultra Plus Lubes Pvt. Ltd": "UPL1",
            "Ultra Plus Lubes Pvt. Ltd Unit IV": "UPL4",

            # ---------- CUSTOMER PREFIXES ----------
            "Ultra Plus Lubes Pvt. Ltd.- Unit 1": "UPL1",
            "Ultra Plus Lubes Pvt. Ltd.- Unit 4": "UPL4",
            "West Coast Lubricants & Asphalts Pvt. Ltd.": "WCL",

            # ---------- OTHER CUSTOMERS ----------
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

        # ======================================================
        # DUAL PREFIX COMPANY + CUSTOMER SET
        # ======================================================
        dual_prefix_companies = {
            "West Coast Lubricants & Asphalts Pvt. Ltd.",
            "Ultra Plus Lubes Pvt. Ltd",
            "Ultra Plus Lubes Pvt. Ltd Unit IV"
        }

        dual_prefix_customers = {
            "Ultra Plus Lubes Pvt. Ltd.- Unit 1",
            "Ultra Plus Lubes Pvt. Ltd.- Unit 4",
            "West Coast Lubricants & Asphalts Pvt. Ltd."
        }

        # ======================================================
        # DUAL-PREFIX LOGIC
        # ======================================================
        if company in dual_prefix_companies and customer in dual_prefix_customers:

            company_prefix = prefix_map.get(company)
            customer_prefix = prefix_map.get(customer)

            # Validate that both prefixes were found
            if not company_prefix:
                frappe.throw(f"Missing prefix mapping for Company: {company}")
            if not customer_prefix:
                frappe.throw(f"Missing prefix mapping for Customer: {customer}")

            dual_prefix = f"{company_prefix}/{customer_prefix}"

            # Find last used running number
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

            new_num = str(max_num + 1).zfill(4)
            self.name = f"{dual_prefix}/{new_num}"
            return

        # ======================================================
        # NORMAL AUTONAME (all other customers)
        # ======================================================
        prefix = prefix_map.get(customer)

        if not prefix:
            prefix = "".join([w[0].upper() for w in customer.split() if w])

        # find last number
        all_records = frappe.db.sql("""
            SELECT name FROM `tabSample Registration`
            WHERE name LIKE %s
        """, (prefix + "/%",))

        max_number = 0
        for record in all_records:
            try:
                num = int(record[0].split("/")[-1].split("-")[0])
                max_number = max(max_number, num)
            except:
                pass

        new_number = str(max_number + 1).zfill(4)
        self.name = f"{prefix}/{new_number}"


# =================================================================
# DUPLICATE CREATION
# =================================================================
@frappe.whitelist()
def create_duplicate(docname):
    original_doc = frappe.get_doc("Sample Registration", docname)
    base_name = docname.split('-')[0]

    existing_duplicates = frappe.db.sql(
        """SELECT name FROM `tabSample Registration`
           WHERE name LIKE %s""",
        (base_name + "-%",)
    )

    max_suffix = 0
    for d in existing_duplicates:
        try:
            suffix_num = int(d[0].split('-')[-1])
            max_suffix = max(max_suffix, suffix_num)
        except:
            pass

    new_suffix = str(max_suffix + 1).zfill(2)
    final_new_name = f"{base_name}-{new_suffix}"

    new_doc = frappe.copy_doc(original_doc)
    new_doc.docstatus = 0
    new_doc.custom_generated_name = final_new_name
    new_doc.insert(ignore_permissions=True)
    frappe.db.commit()

    return new_doc.as_dict()
