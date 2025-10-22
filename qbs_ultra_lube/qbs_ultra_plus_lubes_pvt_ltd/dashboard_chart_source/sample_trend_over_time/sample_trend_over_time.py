# Copyright (c) 2025, Astha and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.utils import today, get_first_day, getdate, add_days
from frappe.utils.dashboard import cache_source
from datetime import timedelta


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
	Line Chart - Sample Trend Over Time
	X-axis: Date
	Y-axis: Count of Sample Registrations
	Line per: Type of Sample
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Default to last 30 days
	to_date_val = getdate(today())
	from_date_val = add_days(to_date_val, -30)
	
	# Customer filter (optional)
	customer_condition = ""
	if filters.get("name_of_customer"):
		# Escape single quotes to prevent SQL injection
		customer_name = filters.get('name_of_customer').replace("'", "''")
		customer_condition = f"AND name_of_customer = '{customer_name}'"
	
	# Query to get daily data grouped by date and type
	query = f"""
		SELECT 
			DATE(date_of_sample__receipt) as date,
			type_of_sample,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE docstatus < 2
		AND DATE(date_of_sample__receipt) BETWEEN '{from_date_val}' AND '{to_date_val}'
		AND type_of_sample IS NOT NULL
		{customer_condition}
		GROUP BY DATE(date_of_sample__receipt), type_of_sample
		ORDER BY date, type_of_sample
	"""
	
	data = frappe.db.sql(query, as_dict=True)
	
	# Get all dates in range
	dates = []
	current_date = from_date_val
	while current_date <= to_date_val:
		dates.append(current_date.strftime('%Y-%m-%d'))
		current_date = add_days(current_date, 1)
	
	# Get unique sample types
	sample_types = set()
	for row in data:
		sample_types.add(row.type_of_sample)
	
	sample_types = sorted(list(sample_types))[:5]  # Limit to top 5 types for readability
	
	# Build datasets for each sample type
	datasets = []
	for sample_type in sample_types:
		values = []
		for date_str in dates:
			count = 0
			for row in data:
				if row.date.strftime('%Y-%m-%d') == date_str and row.type_of_sample == sample_type:
					count = row.count
					break
			values.append(count)
		
		datasets.append({
			"name": _(sample_type or "No Type"),
			"values": values
		})
	
	return {
		"labels": dates,
		"datasets": datasets,
		"type": "line"
	}

