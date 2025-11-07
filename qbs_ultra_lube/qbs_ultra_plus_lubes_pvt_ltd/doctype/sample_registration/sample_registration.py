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
            "Valvoline Cummins (I) Pvt. Ltd. (Lube oil)": "VCPLLO",
            "Valvoline Cummins (I) Pvt. Ltd.  (Lube oil)": "VCPLLO",  # Handle double space
            "Petronas": "PLI",
            "Valvoline Cummins (I) Pvt. Ltd. (coolant)": "VCPLC",
            "Valvoline Cummins (I) Pvt. Ltd.  (coolant)": "VCPLC",  # Handle double space
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
            "Exxon Mobil": "EM"
        }

        # === Step 2: Check direct match first (avoids regex issues with parentheses) ===
        prefix = prefix_map.get(customer)
        
        # === Step 3: Fallback if no direct match found ===
        if not prefix:
            # Generate prefix from initials
            prefix = "".join([word[0].upper() for word in customer.split() if word and word[0].isalpha()])

        # === Step 4: Get last used number for this prefix ===
        # Get ALL records with this prefix and find the maximum number
        all_records = frappe.db.sql(
            """SELECT name FROM `tabSample Registration`
               WHERE name LIKE %s""",
            (prefix + "/%",)
        )

        max_number = 0
        if all_records:
            # Extract all numbers and find the maximum
            for record in all_records:
                try:
                    num_str = record[0].split("/")[-1]
                    # Extract only numeric part (handles cases like "0016-01")
                    num = int(num_str.split("-")[0])
                    if num > max_number:
                        max_number = num
                except (ValueError, IndexError):
                    continue
        
        new_number = str(max_number + 1).zfill(4)
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
