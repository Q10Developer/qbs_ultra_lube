# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class SampleParameters(Document):
      pass

@frappe.whitelist()
def set_customer_as_per_item(start, page_len, code):
    tup = frappe.db.sql("""
        SELECT mc.customer_name
        FROM `tabMulti Customer` mc
        INNER JOIN `tabSample Parameters` sp
            ON mc.parent = sp.item_code
        WHERE sp.item_code = %s
        LIMIT %s OFFSET %s
    """, (code, int(page_len), int(start)))

    if len(tup) == 1:
        return tup[0][0]
    return ""