# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Viscometer100C(Document):
	pass

@frappe.whitelist()
def get_viscometer100_filtered(doctype, txt, searchfield, start, page_len, filters):
    company = filters.get("company")

    result = frappe.db.sql("""
        SELECT DISTINCT v.name
        FROM `tabViscometer 100C` v
        JOIN `tabMulti Company` mc ON mc.parent = v.name
        WHERE mc.company_name = %s AND v.is_active = 1
        AND v.name LIKE %s
        LIMIT %s OFFSET %s
    """, (company, f"%{txt}%", page_len, start), as_dict=True)

    return [[row["name"], row["name"]] for row in result]