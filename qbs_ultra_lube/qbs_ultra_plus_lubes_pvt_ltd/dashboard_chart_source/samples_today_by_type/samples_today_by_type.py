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
	Shows distribution of sample types for a selected date
	Filterable by date and customer
	"""
	filters = frappe.parse_json(filters) or {}
	
	# Get selected date from filters, default to today
	selected_date = filters.get("selected_date") or today()
	today_date = getdate(selected_date)
	
	# Customer filter (optional)
	customer_condition = ""
	if filters.get("name_of_customer"):
		customer_name = filters.get('name_of_customer').replace("'", "''")
		customer_condition = f"AND name_of_customer = '{customer_name}'"
	
	# If customer filter is applied, group by customer; otherwise aggregate all customers
	if filters.get("name_of_customer"):
		query = f"""
			SELECT 
				type_of_sample,
				name_of_customer,
				COUNT(*) as count
			FROM `tabSample Registration`
			WHERE docstatus < 2
			AND DATE(date_of_sample__receipt) = '{today_date}'
			AND type_of_sample IS NOT NULL
			{customer_condition}
			GROUP BY type_of_sample, name_of_customer
			ORDER BY count DESC
			LIMIT 10
		"""
	else:
		# Aggregate by type_of_sample only (sum across all customers)
		query = f"""
			SELECT 
				type_of_sample,
				SUM(count) as count
			FROM (
				SELECT 
					type_of_sample,
					name_of_customer,
					COUNT(*) as count
				FROM `tabSample Registration`
				WHERE docstatus < 2
				AND DATE(date_of_sample__receipt) = '{today_date}'
				AND type_of_sample IS NOT NULL
				GROUP BY type_of_sample, name_of_customer
			) as subquery
			GROUP BY type_of_sample
			ORDER BY count DESC
			LIMIT 10
		"""
	
	data = frappe.db.sql(query, as_dict=True)
	
	if not data:
		return {
			"labels": [_("No Data")],
			"datasets": [{"name": _("Count"), "values": [0]}],
			"type": "pie",
			"customer_name": filters.get("name_of_customer") or "All Customers"
		}
	
	labels = [_(row.type_of_sample) for row in data]
	values = [row.count for row in data]
	
	# Get customer name from filters
	customer_name = filters.get("name_of_customer") or "All Customers"
	
	# Create custom HTML banner for customer name
	custom_html = f"""
	<div class='customer-name-banner' style='
		background: linear-gradient(135deg, #667eea 0%, #764ba2dd 100%);
		color: white;
		padding: 12px 20px;
		margin: -10px -10px 15px -10px;
		border-radius: 8px;
		font-weight: 600;
		font-size: 16px;
		display: flex;
		align-items: center;
		gap: 10px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.15);
	'>
		<span style='font-size: 24px;'>📅</span>
		<span>Customer: <strong style='font-size: 18px;'>{customer_name}</strong></span>
	</div>
	"""
	
	return {
		"labels": labels,
		"datasets": [{"name": _("Count"), "values": values}],
		"type": "pie",
		"customer_name": customer_name,
		"custom_options": {
			"custom_html": custom_html
		}
	}




