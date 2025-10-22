import frappe
from frappe.model import meta

def execute():
    # Table name for the DocType
    table_name = "tabSample Parameters"

    # Get all columns and their types
    columns = frappe.db.sql(f"SHOW COLUMNS FROM `{table_name}`", as_dict=True)

    # Loop through columns and alter those with varchar(140)
    for col in columns:
        if col["Type"].lower().startswith("varchar(140)"):
            fieldname = col["Field"]
            frappe.db.sql(f"""
                ALTER TABLE `{table_name}`
                MODIFY COLUMN `{fieldname}` VARCHAR(15)
            """)
            frappe.logger().info(f"✅ Updated column: {fieldname} → VARCHAR(15)")

    frappe.db.commit()
    frappe.logger().info(f"🎯 All varchar(140) columns in {table_name} changed to varchar(15).")
