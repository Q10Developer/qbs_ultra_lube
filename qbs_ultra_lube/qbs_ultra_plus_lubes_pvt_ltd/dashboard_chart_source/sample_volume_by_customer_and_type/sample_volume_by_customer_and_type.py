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
	Grouped Bar Chart - Sample Volume by Customer and Type
	X-axis: Customer Name
	Y-axis: Count of Sample Registrations
	Grouped by: Type of Sample
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Date filtering - handle filter values from dropdown
	date_condition = ""
	date_range = filters.get("date_range", "This Year")
	
	if date_range == "Today":
		date_condition = f"AND DATE(date_of_sample__receipt) = '{getdate(today())}'"
	elif date_range == "This Month":
		first_day = get_first_day(today())
		last_day = get_last_day(today())
		date_condition = f"AND DATE(date_of_sample__receipt) BETWEEN '{first_day}' AND '{last_day}'"
	elif date_range == "This Year":
		year = getdate(today()).year
		date_condition = f"AND YEAR(date_of_sample__receipt) = {year}"
	# else "All Time" - no date filter
	
	# Query to get data grouped by customer and type
	query = f"""
		SELECT 
			name_of_customer,
			type_of_sample,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE docstatus < 2
		AND name_of_customer IS NOT NULL
		AND type_of_sample IS NOT NULL
		{date_condition}
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
	
	# Limit to top 10 customers
	customers = customers[:10]
	sample_types = sorted(list(sample_types))
	
	# Build datasets for each sample type
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

