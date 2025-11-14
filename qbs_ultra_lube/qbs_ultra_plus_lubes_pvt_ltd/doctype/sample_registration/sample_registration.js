
// Copyright (c) 2025, Astha and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sample Registration', {
    refresh(frm) {
        
    },
    refresh: function(frm) {
        if (!frm.is_new()) {
            frm.add_custom_button(__('Reanalysis/Resample'), function() {
                frappe.call({
                    method: "qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.doctype.sample_registration.sample_registration.create_duplicate",
                    args: { docname: frm.doc.name },
                    callback: function(r) {
                        if (!r.exc) {
                            let new_doc = r.message;
                            frappe.msgprint("Resample Record created: " + new_doc.name);
                            frappe.set_route("Form", "Sample Registration", new_doc.name);
                        }
                    }
                });
            });
        }
    }
});
