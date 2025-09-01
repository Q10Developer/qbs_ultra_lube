import frappe

@frappe.whitelist()
def get_filtered_items(doctype, txt, searchfield, start, page_len, filters):
    type_of_sample = filters.get("type_of_sample")
    customer_name = filters.get("customer_name")

    # Build dynamic conditions
    conditions = []
    values = []

    if type_of_sample:
        conditions.append("mts.type_of_sample = %s")
        values.append(type_of_sample)

    if customer_name:
        conditions.append("i.custom_customer_name = %s")
        values.append(customer_name)

    values.extend([f"%{txt}%", f"%{txt}%", start, page_len])

    where_clause = " AND ".join(conditions)

    return frappe.db.sql(f"""
        SELECT 
            i.name AS value,               
            i.item_name AS label,         
            CONCAT(i.name, ', ', i.item_name, ', ', GROUP_CONCAT(mts.type_of_sample SEPARATOR ' , ')) AS description
        FROM `tabMulti Type of Sample` mts
        INNER JOIN `tabItem` i ON i.name = mts.parent
        WHERE {where_clause}
        AND mts.parenttype = 'Item'
        AND (i.item_name LIKE %s OR i.name LIKE %s)
        GROUP BY i.name, i.item_name
        LIMIT %s, %s
    """, tuple(values))
