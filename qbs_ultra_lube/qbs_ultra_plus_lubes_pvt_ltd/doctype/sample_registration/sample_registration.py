import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc
import re


class SampleRegistration(Document):
    def autoname(self):
        # Allow manual override
        if getattr(self, 'custom_generated_name', None):
            self.name = self.custom_generated_name
            return

        customer = (self.name_of_customer or "").strip()

        # === Step 1: Define Prefix Rules ===
        prefix_map = {
            "Valvoline Cummins (I) Pvt. Ltd.": {
                "Lube oil": "VCPLL",
                "Coolant": "VCPLC"
            },
            "Shell India Marketing Pvt. Ltd.": "SIMPL",
            "G S Caltex": "GSC",
            "Exxon Mobil": "EM",
            "BASF": {
                "Brake Fluid": "BASFB",
                "Coolant": "BASFC"
            },
            "Castrol (I) Pvt. Ltd.": "CIL",
        }

        prefix = None
        subcategory = None

        # === Step 2: Identify main customer & subcategory properly ===
        # If brackets are at the end, like "BASF (Coolant)" → subcategory = "Coolant"
        match = re.match(r'^(.*?)(?:\s*\(([^)]+)\))?$', customer)
        if match:
            main_customer = match.group(1).strip()
            subcategory_candidate = match.group(2).strip() if match.group(2) else None

            # Only treat it as a subcategory if the main_customer itself
            # is in the prefix_map (meaning parentheses are not part of company name)
            if main_customer in prefix_map and isinstance(prefix_map[main_customer], dict):
                subcategory = subcategory_candidate
        else:
            main_customer = customer

        # === Step 3: Resolve prefix from mapping ===
        if main_customer in prefix_map:
            value = prefix_map[main_customer]
            if isinstance(value, dict):
                prefix = value.get(subcategory)
            else:
                prefix = value

        # === Step 4: Fallback if no match found ===
        if not prefix:
            prefix = "".join([word[0].upper() for word in main_customer.split() if word])

        # === Step 5: Get last used number for this prefix ===
        last = frappe.db.sql(
            """SELECT name FROM `tabSample Registration`
               WHERE name LIKE %s AND name REGEXP %s
               ORDER BY creation DESC LIMIT 1""",
            (prefix + "/%", f"^{prefix}/[0-9]+$")
        )

        if last:
            try:
                last_number = int(last[0][0].split("/")[-1])
                new_number = str(last_number + 1).zfill(4)
            except Exception:
                new_number = "0001"
        else:
            new_number = "0001"

        self.name = f"{prefix}/{new_number}"



@frappe.whitelist()
def create_duplicate(docname):
    original_doc = frappe.get_doc("Sample Registration", docname)
    base_name = docname.split('-')[0]

    existing_duplicates = frappe.db.sql(
        """SELECT name FROM `tabSample Registration`
           WHERE name LIKE %s""",
        (base_name + "-%")
    )

    max_suffix = 0
    if existing_duplicates:
        for d in existing_duplicates:
            try:
                suffix_num = int(d[0].split('-')[-1])
                if suffix_num > max_suffix:
                    max_suffix = suffix_num
            except (IndexError, ValueError):
                pass

    next_suffix_num = max_suffix + 1
    new_suffix = str(next_suffix_num).zfill(2)

    final_new_name = f"{base_name}-{new_suffix}"

    new_doc = frappe.copy_doc(original_doc)
    new_doc.docstatus = 0
    new_doc.custom_generated_name = final_new_name
    new_doc.insert(ignore_permissions=True)
    frappe.db.commit()

    return new_doc.as_dict()
