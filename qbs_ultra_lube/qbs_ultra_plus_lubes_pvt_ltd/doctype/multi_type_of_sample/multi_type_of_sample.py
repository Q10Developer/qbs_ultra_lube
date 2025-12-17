# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class MultiTypeofSample(Document):
	pass

@frappe.whitelist()
def get_non_parent_sample_types(doctype, txt, searchfield, start, page_len, filters):
	return frappe.db.sql(f"""
		SELECT st.sample_name
		FROM `tabSample Types` st
		WHERE st.is_parent=0
		   AND st.sample_name LIKE %s
        LIMIT %s OFFSET %s
	""", (f"%{txt}%", int(page_len), int(start)));