# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import today, getdate, add_days
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
	Customer Sample Activity - Shows customer activity over recent period
	X-axis: Customer Name
	Y-axis: Number of Recent Registrations
	Color/Group: Type of Sample
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Last 7 days activity
	to_date_val = getdate(today())
	from_date_val = add_days(to_date_val, -7)
	
	# Query recent activity
	query = f"""
		SELECT 
			name_of_customer,
			type_of_sample,
			COUNT(*) as count,
			MAX(DATE(date_of_sample__receipt)) as last_date
		FROM `tabSample Registration`
		WHERE docstatus < 2
		AND DATE(date_of_sample__receipt) BETWEEN '{from_date_val}' AND '{to_date_val}'
		AND name_of_customer IS NOT NULL
		GROUP BY name_of_customer, type_of_sample
		ORDER BY count DESC
		LIMIT 50
	"""
	
	data = frappe.db.sql(query, as_dict=True)
	
	# Group by sample type for visualization
	type_groups = {}
	for row in data:
		sample_type = row.type_of_sample or "Other"
		if sample_type not in type_groups:
			type_groups[sample_type] = {
				"customers": [],
				"values": []
			}
		type_groups[sample_type]["customers"].append(row.name_of_customer)
		type_groups[sample_type]["values"].append(row.count)
	
	# Get all unique customers
	all_customers = list(set([row.name_of_customer for row in data]))[:15]
	
	# Build datasets
	datasets = []
	for sample_type, group_data in type_groups.items():
		values = []
		for customer in all_customers:
			if customer in group_data["customers"]:
				idx = group_data["customers"].index(customer)
				values.append(group_data["values"][idx])
			else:
				values.append(0)
		
		datasets.append({
			"name": _(sample_type),
			"values": values
		})
	
	return {
		"labels": all_customers,
		"datasets": datasets,
		"type": "bar"
	}

