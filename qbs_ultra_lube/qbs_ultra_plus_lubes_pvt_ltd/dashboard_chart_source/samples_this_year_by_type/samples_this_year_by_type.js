frappe.provide("frappe.dashboards.chart_sources");

frappe.dashboards.chart_sources["Samples This Year by Type"] = {
	method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.dashboard_chart_source.samples_this_year_by_type.samples_this_year_by_type.get",
	filters: [
		{
			fieldname: "name_of_customer",
			label: __("Customer"),
			fieldtype: "Link",
			options: "Customer"
		}
	]
};

