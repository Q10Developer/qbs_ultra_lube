frappe.provide("frappe.dashboards.chart_sources");

frappe.dashboards.chart_sources["Sample Volume by Customer and Type"] = {
	method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.dashboard_chart_source.sample_volume_by_customer_and_type.sample_volume_by_customer_and_type.get",
	filters: [
		{
			fieldname: "date_range",
			label: __("Date Range"),
			fieldtype: "Select",
			options: ["All Time", "Today", "This Month", "This Year"],
			default: "This Year"
		}
	]
};


