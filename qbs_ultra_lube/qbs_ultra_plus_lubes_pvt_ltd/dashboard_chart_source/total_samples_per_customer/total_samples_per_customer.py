# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import today, get_first_day, get_last_day, getdate
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
	Stacked Bar Chart - Total Samples per Customer (by Type)
	X-axis: Customer Name
	Y-axis: Total Sample Registrations (stacked by type)
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Default to current month
	first_day = get_first_day(today())
	last_day = get_last_day(today())
	
	# Query to get data grouped by customer and type for current month
	query = f"""
		SELECT 
			name_of_customer,
			type_of_sample,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE docstatus < 2
		AND name_of_customer IS NOT NULL
		AND type_of_sample IS NOT NULL
		AND DATE(date_of_sample__receipt) BETWEEN '{first_day}' AND '{last_day}'
		GROUP BY name_of_customer, type_of_sample
		ORDER BY name_of_customer, count DESC
	"""
	
	data = frappe.db.sql(query, as_dict=True)
	
	# Get unique customers and sample types
	customers = []
	sample_types = set()
	
	for row in data:
		if row.name_of_customer not in customers:
			customers.append(row.name_of_customer)
		sample_types.add(row.type_of_sample)
	
	# Limit to top 10 customers by total count
	customer_totals = {}
	for row in data:
		customer_totals[row.name_of_customer] = customer_totals.get(row.name_of_customer, 0) + row.count
	
	top_customers = sorted(customer_totals.items(), key=lambda x: x[1], reverse=True)[:10]
	customers = [c[0] for c in top_customers]
	sample_types = sorted(list(sample_types))
	
	# Build datasets for each sample type (for stacking)
	datasets = []
	for sample_type in sample_types:
		values = []
		for customer in customers:
			count = 0
			for row in data:
				if row.name_of_customer == customer and row.type_of_sample == sample_type:
					count = row.count
					break
			values.append(count)
		
		datasets.append({
			"name": _(sample_type or "No Type"),
			"values": values
		})
	
	return {
		"labels": customers,
		"datasets": datasets,
		"type": "bar"
	}





