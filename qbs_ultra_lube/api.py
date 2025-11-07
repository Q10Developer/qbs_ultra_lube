import frappe

# Customer to Prefix Mapping
CUSTOMER_PREFIX_MAPPING = {
    "Valvoline Cummins (I) Pvt. Ltd. (Lube oil)": "VCPLLO",
    "Valvoline Cummins (I) Pvt. Ltd.  (Lube oil)": "VCPLLO",  # Handle double space
    "Petronas": "PLI",
    "Valvoline Cummins (I) Pvt. Ltd. (coolant)": "VCPLC",
    "Valvoline Cummins (I) Pvt. Ltd.  (coolant)": "VCPLC",  # Handle double space
    "BASF (Coolant)": "BASFC",
    "G S Caltex": "GSC",
    "G S Caltex (Base Oil Trading)": "GSCT",
    "Nynas": "NYNAS",
    "Sperry": "SPERRY",
    "BASF (Brake Fluid)": "BASFB",
    "Raj Petro (Solvent)": "RPS",
    "Raj Petro (Blending)": "RPB",
    "Shell India Marketing Pvt. Ltd.": "SIMPL",
    "Castrol (I) Pvt. Ltd.": "CIL",
    "ENSOOILS": "EO",
    "Exxon Mobil": "EM"
}

def generate_sample_code(customer_name):
    """
    Generate a unique sample code based on customer name.
    Format: {PREFIX}/{4-digit running number}
    Maintains independent counters for each customer.
    
    Args:
        customer_name: Name of the customer
        
    Returns:
        str: Generated sample code (e.g., "VCPLLO/0001")
    """
    customer_name = (customer_name or "").strip()
    
    # Get the prefix for the customer
    prefix = CUSTOMER_PREFIX_MAPPING.get(customer_name)
    
    if not prefix:
        frappe.throw(f"No prefix mapping found for customer: {customer_name}")
    
    # Get or create counter for this prefix
    counter_name = f"sample_counter_{prefix}"
    
    # Try to get existing counter from Singles table or use custom approach
    try:
        # Check if Series exists
        series_exists = frappe.db.exists("Series", counter_name)
        
        # Get the last used number for this prefix
        last_number = frappe.db.get_value(
            "Series",
            {"name": counter_name},
            "current"
        )
        
        # If series exists and has a valid counter (> 0), use it
        if series_exists and last_number and int(last_number) > 0:
            next_number = int(last_number) + 1
        else:
            # Series doesn't exist OR current is 0, check for existing records with this prefix
            # Get all records with this prefix and find the maximum number
            all_codes = frappe.db.sql("""
                SELECT name 
                FROM `tabSample Registration` 
                WHERE name LIKE %s 
            """, (f"{prefix}/%",), as_dict=True)
            
            if all_codes:
                # Extract all numbers and find the maximum
                max_number = 0
                for code in all_codes:
                    try:
                        num_str = code.name.split('/')[-1]
                        num = int(num_str)
                        if num > max_number:
                            max_number = num
                    except (ValueError, IndexError):
                        continue
                
                current_number = max_number
                next_number = max_number + 1
            else:
                current_number = 0
                next_number = 1
            
            # Create or update series entry with the correct current value
            if series_exists:
                # Update existing series
                frappe.db.set_value("Series", counter_name, "current", current_number)
            else:
                # Create new series entry
                frappe.get_doc({
                    "doctype": "Series",
                    "name": counter_name,
                    "current": current_number
                }).insert(ignore_permissions=True)
        
        # Update the counter with next number
        frappe.db.set_value("Series", counter_name, "current", next_number)
        
    except Exception as e:
        # Fallback: Use a simpler counter mechanism with a custom table approach
        # Get all records with this prefix and find the maximum number
        all_codes = frappe.db.sql("""
            SELECT name 
            FROM `tabSample Registration` 
            WHERE name LIKE %s 
        """, (f"{prefix}/%",), as_dict=True)
        
        if all_codes:
            # Extract all numbers and find the maximum
            max_number = 0
            for code in all_codes:
                try:
                    num_str = code.name.split('/')[-1]
                    num = int(num_str)
                    if num > max_number:
                        max_number = num
                except (ValueError, IndexError):
                    continue
            next_number = max_number + 1
        else:
            next_number = 1
    
    # Format the code with 4-digit zero-padded number
    sample_code = f"{prefix}/{next_number:04d}"
    
    return sample_code

def set_sample_code(doc, method=None):
    """
    Hook function to be called before inserting a Sample Registration document.
    Automatically generates and sets the sample code based on customer.
    
    Args:
        doc: Sample Registration document instance
        method: Hook method name (optional)
    """
    if not doc.name or doc.name.startswith("new-sample"):
        # Generate the sample code based on customer
        customer_name = doc.get("name_of_customer")
        
        if customer_name:
            sample_code = generate_sample_code(customer_name)
            doc.name = sample_code

@frappe.whitelist()
def get_filtered_items(doctype, txt, searchfield, start, page_len, filters):
    type_of_sample = filters.get("type_of_sample")
    customer_name = filters.get("customer_name")

    # Build dynamic conditions
    conditions = []
    values = []

    if type_of_sample:
        conditions.append("mts.type_of_sample = %s")
        values.append(type_of_sample)

    if customer_name:
        conditions.append("i.custom_customer_name = %s")
        values.append(customer_name)

    values.extend([f"%{txt}%", f"%{txt}%", start, page_len])

    where_clause = " AND ".join(conditions)

    return frappe.db.sql(f"""
        SELECT 
            i.name AS value,               
            i.item_name AS label,         
            CONCAT(i.name, ', ', i.item_name, ', ', GROUP_CONCAT(mts.type_of_sample SEPARATOR ' , ')) AS description
        FROM `tabMulti Type of Sample` mts
        INNER JOIN `tabItem` i ON i.name = mts.parent
        WHERE {where_clause}
        AND mts.parenttype = 'Item'
        AND (i.item_name LIKE %s OR i.name LIKE %s)
        GROUP BY i.name, i.item_name
        LIMIT %s, %s
    """, tuple(values))
