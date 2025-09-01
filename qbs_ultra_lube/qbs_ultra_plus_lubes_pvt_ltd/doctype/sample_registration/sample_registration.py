import frappe
from frappe.model.document import Document

class SampleRegistration(Document):
    def autoname(self):

        if getattr(self, 'custom_generated_name', None):
           
            self.name = self.custom_generated_name
            return

        
        if self.name_of_customer and "Castrol (I) Pvt. Ltd." in self.name_of_customer:
            prefix = "CIL"
        else:
            prefix = "".join([word[0].upper() for word in self.name_of_customer.split() if word])

        last = frappe.db.sql(
            """SELECT name FROM `tabSample Registration`
               WHERE name LIKE %s AND name NOT REGEXP '.*-[0-9]+$'
               ORDER BY creation DESC LIMIT 1""",
            (prefix + "/%"),
        )

        if last:
            last_number = int(last[0][0].split("/")[-1])
            new_number = str(last_number + 1).zfill(4)
        else:
            new_number = "0001"

        new_name = f"{prefix}/{new_number}"
        self.name = new_name


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