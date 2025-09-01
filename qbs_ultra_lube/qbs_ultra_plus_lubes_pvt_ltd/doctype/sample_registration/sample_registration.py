# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SampleRegistration(Document):
	pass

@frappe.whitelist()
def create_duplicate(docname):
    doc = frappe.get_doc("Sample Registration", docname)
    existing = frappe.get_all("Sample Registration",
        filters=[["name", "like", f"{doc.name}-%"]],
        pluck="name"
    )
    suffix = str(len(existing) + 1).zfill(2)
    new_doc = frappe.copy_doc(doc)
    new_doc.name = f"{doc.name}-{suffix}"
    new_doc.insert(ignore_permissions=True)
    frappe.db.commit()
    return new_doc.as_dict()