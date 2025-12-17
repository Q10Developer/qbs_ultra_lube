// Copyright (c) 2025, Astha and contributors
// For license information, please see license.txt



frappe.query_reports["Sample Reg"] = {
    "filters": [
{
    "fieldname": "customer",
    "label": __("Customer"),
    "fieldtype": "MultiSelectList",
    "options": "Customer",
    "get_data": function(txt) {
        return frappe.db.get_link_options("Customer", txt);
    }
},

        {
            "fieldname": "from_date",
            "label": __("From Date"),
            "fieldtype": "Date"
        },
        {
            "fieldname": "to_date",
            "label": __("To Date"),
            "fieldtype": "Date"
        },
        {
    "fieldname": "type_of_sample",
    "label": __("Sample Type"),
    "fieldtype": "Link",
    "options": "Sample Types",
    
}

    ],

    // onload(report) {
    //     // Reset dates on every load  
    //     report.set_filter_value("from_date", null);
    //     report.set_filter_value("to_date", null);

    //     // Add button  
    //     report.page.add_inner_button(__("Sample Registration Report"), function() {
    //         const filters = report.get_values();
    //         frappe.call({
    //             method: "rentals.rentals.report.sample_registration.sample_registration.execute",
    //             args: { filters },
    //             callback: function(r) {
    //                 const data = r.message && r.message[1];
    //                 if (data) {
    //                     open_custom_report_window(data);
    //                 } else {
    //                     frappe.msgprint(__("Could not fetch report data."));
    //                 }
    //             }
    //         });
    //     });
    // }
};


function open_custom_report_window(data) {
    if (!data || data.length === 0) {
        frappe.msgprint(__("No data to display."));
        return;
    }

    const pivoted_data = {};
    const sample_types = new Set();
    
    data.forEach(row => {
        if (row.type_of_sample) {
            sample_types.add(row.type_of_sample);
        }
        const customer = row.customer_name;
        
        if (!pivoted_data[customer]) {
            pivoted_data[customer] = { "customer_name": customer };
        }
        
        const field_prefix = row.type_of_sample.toLowerCase().replace(/ /g, '_').replace(/\./g, '');
        pivoted_data[customer][`${field_prefix}_td`] = row.created_today;
        pivoted_data[customer][`${field_prefix}_mtd`] = row.created_this_month;
        pivoted_data[customer][`${field_prefix}_ytd`] = row.created_this_year;
    });

    const final_data = Object.values(pivoted_data);
    const sorted_sample_types = Array.from(sample_types).sort();

    const tableHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Sample Summary Report</title>
            <style>
                body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; padding: 20px; }
                table { width: 100%; border-collapse: collapse; font-size: 13px; }
                th, td { border: 1px solid #d1d8dd; padding: 8px; text-align: center; }
                th { background-color: #f5f7fa; font-weight: bold; }
                .print-button { padding: 8px 16px; background-color: #2490ef; color: white; border: none; border-radius: 4px; cursor: pointer; margin-bottom: 20px; }
                @media print { .print-button { display: none; } }
            </style>
        </head>
        <body>
            <h2>Sample Summary Report</h2>
            <table>
                <thead>
                    <tr>
                        <th rowspan="2" style="vertical-align: middle;">Name of Customer</th>
                        ${sorted_sample_types.map(st => `<th colspan="3">${st}</th>`).join('')}
                    </tr>
                    <tr>
                        ${sorted_sample_types.map(() => `<th>TD</th><th>MTD</th><th>YTD</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${final_data.map(row => `
                        <tr>
                            <td>${row.customer_name || 'N/A'}</td>
                            ${sorted_sample_types.map(st => {
                                const field_prefix = st.toLowerCase().replace(/ /g, '_').replace(/\./g, '');
                                const td = row[`${field_prefix}_td`] || 0;
                                const mtd = row[`${field_prefix}_mtd`] || 0;
                                const ytd = row[`${field_prefix}_ytd`] || 0;
                                return `<td>${td}</td><td>${mtd}</td><td>${ytd}</td>`;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </body>
        </html>
    `;

    const newWindow = window.open('', '_blank');
    newWindow.document.write(tableHTML);
    newWindow.document.close();
}



