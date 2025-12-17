// // Copyright (c) 2025, Astha and contributors
// // For license information, please see license.txt

frappe.ui.form.on("Sample Parameters", {
	item_code: function(frm){
        if(frm.doc.item_code){
            frappe.call({
                method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.doctype.sample_parameters.sample_parameters.set_customer_as_per_item",
                args: { 
                    start: 0,
                    page_len: 20,
                    code: frm.doc.item_code
                },
                callback: function(r) {
                    if (r.message) {
                        frm.set_value("customer", r.message);
                    }
                }
            })
        }
    }
});
