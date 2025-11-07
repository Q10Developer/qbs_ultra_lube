frappe.provide("frappe.dashboards.chart_sources");

frappe.dashboards.chart_sources["Samples This Year by Type"] = {
	method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.dashboard_chart_source.samples_this_year_by_type.samples_this_year_by_type.get",
	filters: [
		{
			fieldname: "selected_year",
			label: __("Year"),
			fieldtype: "Int",
			default: new Date().getFullYear()
		},
		{
			fieldname: "name_of_customer",
			label: __("Customer"),
			fieldtype: "Link",
			options: "Customer"
		}
	]
};

// Override the render method for this specific chart
$(document).on('frappe:chart-rendered', function(e, chart, data) {
	if (chart && chart.chart_name === "Samples This Year by Type" && data && data.custom_options) {
		const customHTML = data.custom_options.custom_html;
		if (customHTML && chart.$wrapper) {
			setTimeout(() => {
				if (!chart.$wrapper.find('.customer-name-banner').length) {
					chart.$wrapper.prepend(customHTML);
				}
			}, 100);
		}
	}
});
