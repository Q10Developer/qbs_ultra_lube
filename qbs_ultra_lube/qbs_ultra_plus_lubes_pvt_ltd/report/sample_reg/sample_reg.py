# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt
import frappe
from frappe import _
import json

@frappe.whitelist()
@frappe.whitelist()
def execute(filters=None):
    if filters and isinstance(filters, str):
        try:
            filters = json.loads(filters)
        except (json.JSONDecodeError, TypeError):
            filters = {}

    columns = get_columns()
    conditions, values = get_conditions(filters)
    data = get_data(conditions, values)

    if data:
        total_td = sum(row.get("created_today", 0) for row in data)
        total_mtd = sum(row.get("created_this_month", 0) for row in data)
        total_ytd = sum(row.get("created_this_year", 0) for row in data)

        total_row = {
            "customer_name": "Total",
            "type_of_sample": "",
            "created_today": total_td,
            "created_this_month": total_mtd,
            "created_this_year": total_ytd
        }

        data.append(total_row)

    chart = get_chart_data(data, filters)

    return columns, data, None, chart



def get_columns():
    return [
        { "label": _("Customer Name"), "fieldname": "customer_name", "fieldtype": "Link", "options": "Customer", "width": 250 },
        { "label": _("Sample Type"), "fieldname": "type_of_sample", "fieldtype": "Data", "width": 200 },
        { "label": _("TD"), "fieldname": "created_today", "fieldtype": "Int", "width": 180 },
        { "label": _("MTD"), "fieldname": "created_this_month", "fieldtype": "Int", "width": 200 },
        { "label": _("YTD"), "fieldname": "created_this_year", "fieldtype": "Int", "width": 180 }
    ]


def get_conditions(filters):
    conditions = ["docstatus = 1"]
    values = {}

    if not filters:
        return conditions, values


    if filters.get("customer"):
        customer_list = filters.get("customer")

        if isinstance(customer_list, str):
            customer_list = [
                c.strip()
                for c in customer_list.split(",")
                if c.strip()
            ]

        conditions.append("name_of_customer IN %(customer)s")
        values["customer"] = customer_list

    if filters.get("type_of_sample"):
        conditions.append("type_of_sample = %(type_of_sample)s")
        values["type_of_sample"] = filters.get("type_of_sample")

    # From Date filter
    if filters.get("from_date"):
        conditions.append("date_of_sample__receipt >= %(from_date)s")
        values["from_date"] = filters.get("from_date")

    # To Date filter
    if filters.get("to_date"):
        conditions.append("date_of_sample__receipt <= %(to_date)s")
        values["to_date"] = filters.get("to_date")

    return conditions, values


def get_data(conditions, values):
    sql_query = f"""
        SELECT
            name_of_customer AS customer_name,
            type_of_sample,
            SUM(CASE WHEN DATE(date_of_sample__receipt) = CURDATE() THEN 1 ELSE 0 END) AS created_today,
            SUM(CASE WHEN YEAR(date_of_sample__receipt) = YEAR(CURDATE())
                     AND MONTH(date_of_sample__receipt) = MONTH(CURDATE())
                THEN 1 ELSE 0 END) AS created_this_month,
            SUM(CASE WHEN YEAR(date_of_sample__receipt) = YEAR(CURDATE())
                THEN 1 ELSE 0 END) AS created_this_year
        FROM `tabSample Registration`
        WHERE {" AND ".join(conditions)}
        GROUP BY name_of_customer, type_of_sample
        ORDER BY name_of_customer, type_of_sample
    """
    return frappe.db.sql(sql_query, values, as_dict=True)


def get_chart_data(data, filters=None):
    if not data:
        return None

    filters = filters or {}
    customer_filter = filters.get("customer")

    if customer_filter:
        labels = [row['type_of_sample'] for row in data]
        datasets = [
            { "name": "YTD", "values": [row['created_this_year'] for row in data] },
            { "name": "MTD", "values": [row['created_this_month'] for row in data] }
        ]
        chart_type = "pie"
        stacked = 0

    else:
        customers = sorted(list(set(d['customer_name'] for d in data if d.get('customer_name'))))
        sample_types = sorted(list(set(d['type_of_sample'] for d in data if d.get('type_of_sample'))))

        labels = customers
        pivot_data = {}

        for row in data:
            customer = row['customer_name']
            sample_type = row['type_of_sample']

            if not customer or not sample_type:
                continue

            if customer not in pivot_data:
                pivot_data[customer] = {}

            pivot_data[customer][sample_type] = row.get('created_this_year', 0)

        datasets = []
        for st in sample_types:
            values = [pivot_data.get(cust, {}).get(st, 0) for cust in customers]
            datasets.append({"name": st, "values": values})

        chart_type = "bar"
        stacked = 1

    return {
        "data": {
            "labels": labels,
            "datasets": datasets
        },
        "type": chart_type,
        "stacked": stacked,
        "height": 900
    }


