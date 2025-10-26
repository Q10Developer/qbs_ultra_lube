# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import today, getdate
from frappe.utils.dashboard import cache_source


@frappe.whitelist()
@cache_source
def get(
	chart_name=None,
	chart=None,
	no_cache=None,
	filters=None,
	from_date=None,
	to_date=None,
	timespan=None,
	time_interval=None,
	heatmap_year=None,
):
	"""
	Pie Chart - Today's Samples by Type
	Shows distribution of sample types for today
	Filterable by customer
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Customer filter (optional)
	customer_condition = ""
	if filters.get("name_of_customer"):
		customer_name = filters.get('name_of_customer').replace("'", "''")
		customer_condition = f"AND name_of_customer = '{customer_name}'"
	
	# Query for today's data by type
	today_date = getdate(today())
	query = f"""
		SELECT 
			type_of_sample,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE docstatus < 2
		AND DATE(date_of_sample__receipt) = '{today_date}'
		AND type_of_sample IS NOT NULL
		{customer_condition}
		GROUP BY type_of_sample
		ORDER BY count DESC
		LIMIT 10
	"""
	
	data = frappe.db.sql(query, as_dict=True)
	
	if not data:
		return {
			"labels": [_("No Data")],
			"datasets": [{"name": _("Count"), "values": [0]}],
			"type": "pie"
		}
	
	labels = [_(row.type_of_sample) for row in data]
	values = [row.count for row in data]
	
	return {
		"labels": labels,
		"datasets": [{"name": _("Count"), "values": values}],
		"type": "pie"
	}

