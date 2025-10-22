frappe.provide("frappe.dashboards.chart_sources");

frappe.dashboards.chart_sources["Sample Registration Summary"] = {
	method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.dashboard_chart_source.sample_registration_summary.sample_registration_summary.get",
	filters: [
		{
			fieldname: "type_of_sample",
			label: __("Type of Sample"),
			fieldtype: "Link",
			options: "Sample Types"
		}
	]
};

