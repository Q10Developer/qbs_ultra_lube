frappe.ui.form.on('Item', {
	setup(frm) {
        frm.fields_dict['custom_type_of_sample'].get_query = function(doc, cdt, cdn) {
            return {
                query: 'qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.doctype.multi_type_of_sample.multi_type_of_sample.get_non_parent_sample_types'
            };
        };
    }
})