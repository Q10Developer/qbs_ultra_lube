frappe.provide("frappe.dashboards.chart_sources");

frappe.dashboards.chart_sources["Sample Trend Over Time"] = {
	method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.dashboard_chart_source.sample_trend_over_time.sample_trend_over_time.get",
	filters: [
		{
			fieldname: "name_of_customer",
			label: __("Customer"),
			fieldtype: "Link",
			options: "Customer"
		}
	]
};

