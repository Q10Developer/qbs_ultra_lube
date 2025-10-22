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
	Get sample registration summary by customer showing Today, This Month, and This Year counts
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Get date ranges
	today_date = getdate(today())
	first_day_of_month = get_first_day(today())
	last_day_of_month = get_last_day(today())
	first_day_of_year = getdate(f"{today_date.year}-01-01")
	last_day_of_year = getdate(f"{today_date.year}-12-31")
	
	# Base conditions
	conditions = "1=1"
	if filters.get("type_of_sample"):
		conditions += f" AND type_of_sample = '{filters.get('type_of_sample')}'"
	
	# Query for today's data
	today_query = f"""
		SELECT 
			name_of_customer,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE DATE(date_of_sample__receipt) = '{today_date}'
		AND {conditions}
		AND docstatus < 2
		GROUP BY name_of_customer
		ORDER BY count DESC
		LIMIT 10
	"""
	
	# Query for this month's data
	month_query = f"""
		SELECT 
			name_of_customer,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE DATE(date_of_sample__receipt) BETWEEN '{first_day_of_month}' AND '{last_day_of_month}'
		AND {conditions}
		AND docstatus < 2
		GROUP BY name_of_customer
		ORDER BY count DESC
		LIMIT 10
	"""
	
	# Query for this year's data
	year_query = f"""
		SELECT 
			name_of_customer,
			COUNT(*) as count
		FROM `tabSample Registration`
		WHERE DATE(date_of_sample__receipt) BETWEEN '{first_day_of_year}' AND '{last_day_of_year}'
		AND {conditions}
		AND docstatus < 2
		GROUP BY name_of_customer
		ORDER BY count DESC
		LIMIT 10
	"""
	
	today_data = frappe.db.sql(today_query, as_dict=True)
	month_data = frappe.db.sql(month_query, as_dict=True)
	year_data = frappe.db.sql(year_query, as_dict=True)
	
	# Get all unique customers
	all_customers = set()
	for data in [today_data, month_data, year_data]:
		for row in data:
			if row.name_of_customer:
				all_customers.add(row.name_of_customer)
	
	# Convert to dict for easy lookup
	today_dict = {row.name_of_customer: row.count for row in today_data if row.name_of_customer}
	month_dict = {row.name_of_customer: row.count for row in month_data if row.name_of_customer}
	year_dict = {row.name_of_customer: row.count for row in year_data if row.name_of_customer}
	
	# Prepare data for chart - sort by year count (most active customers)
	customers = sorted(list(all_customers), key=lambda x: year_dict.get(x, 0), reverse=True)[:10]
	
	today_values = [today_dict.get(customer, 0) for customer in customers]
	month_values = [month_dict.get(customer, 0) for customer in customers]
	year_values = [year_dict.get(customer, 0) for customer in customers]
	
	return {
		"labels": customers,
		"datasets": [
			{
				"name": _("Today"),
				"values": today_values
			},
			{
				"name": _("This Month"),
				"values": month_values
			},
			{
				"name": _("This Year"),
				"values": year_values
			}
		],
		"type": "bar"
	}

