# Sample Registration Dashboard Chart

## Overview
A custom dashboard chart has been created for the **Sample Registration** DocType that displays sample registration counts by customer for Today, This Month, and This Year.

## Features

### Chart Details
- **Chart Name**: Sample Registration Summary by Customer
- **Chart Type**: Bar Chart (Grouped)
- **X-axis**: Customer Name (top 10 customers)
- **Y-axis**: Count of Sample Registrations
- **Datasets**:
  1. **Today** - Sample registrations from today
  2. **This Month** - Sample registrations from current month
  3. **This Year** - Sample registrations from current year

### Filtering
- Optional filter by "Type of Sample"
- Date field used: `date_of_sample__receipt`

## Files Created

1. **Chart Data Function**
   - Path: `qbs_ultra_lube/qbs_ultra_plus_lubes_pvt_ltd/doctype/sample_registration/sample_registration_chart.py`
   - Method: `get_sample_registration_summary()`
   - Returns chart data in Frappe Chart format

2. **Dashboard Web Page**
   - Path: `qbs_ultra_lube/www/sample-registration-dashboard.html`
   - Path: `qbs_ultra_lube/www/sample-registration-dashboard.py`
   - Accessible at: `/sample-registration-dashboard`

3. **List View Integration**
   - Modified: `sample_registration.js`
   - Added "Customer Dashboard" button in list view toolbar

## Usage

### Access the Dashboard

1. **From Sample Registration List View**:
   - Go to Sample Registration list
   - Click the "Customer Dashboard" button in the toolbar
   - Dashboard opens in a new tab

2. **Direct Access**:
   - Navigate to: `https://your-site.com/sample-registration-dashboard`

### How It Works

1. The chart queries the `Sample Registration` DocType
2. Groups data by `name_of_customer`
3. Counts registrations for three time periods:
   - Today: `DATE(date_of_sample__receipt) = today`
   - This Month: `date_of_sample__receipt BETWEEN first_day AND last_day of current month`
   - This Year: `date_of_sample__receipt BETWEEN Jan 1 AND Dec 31 of current year`
4. Returns top 10 customers by registration count
5. Displays as a grouped bar chart

### API Endpoint

The chart data can be accessed programmatically:

```python
import frappe

# Call the chart function
result = frappe.call(
    'qbs_ultra_lube.qbs_ultra_plus_lubes_pvt_ltd.doctype.sample_registration.sample_registration_chart.get_sample_registration_summary',
    filters={'type_of_sample': 'Your Sample Type'}  # Optional
)

# Result format:
# {
#     "labels": ["Customer 1", "Customer 2", ...],
#     "datasets": [
#         {"name": "Today", "values": [5, 3, ...]},
#         {"name": "This Month", "values": [25, 18, ...]},
#         {"name": "This Year", "values": [150, 95, ...]}
#     ]
# }
```

## Customization

### Change Time Periods
Edit `sample_registration_chart.py` and modify the SQL queries for different date ranges.

### Change Customer Limit
Modify the `LIMIT 10` in the SQL queries to show more or fewer customers.

### Add More Filters
Add filter conditions to the `conditions` variable in the chart function.

### Customize Chart Appearance
Edit `sample-registration-dashboard.html` to modify:
- Chart colors: `colors: ['#7cd6fd', '#5e64ff', '#743ee2']`
- Chart height: `height: 400`
- Bar spacing: `spaceRatio: 0.5`
- Enable stacked bars: `stacked: 1`

## Testing

The chart function has been tested and confirmed working:
```
✅ Chart function test successful!
Labels: ['Castrol (I) Pvt. Ltd.', 'Exxon Mobil', 'G S Caltex', 'Shell India Marketing Pvt. Ltd.', 'Valvoline Cummins (I) Pvt. Ltd.  (Lube oil)']
Datasets: 3 datasets
```

## Next Steps

1. Clear cache: `bench --site your-site clear-cache`
2. Refresh your browser
3. Navigate to Sample Registration list
4. Click "Customer Dashboard" button to view the chart

## Troubleshooting

If the dashboard doesn't show:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Clear Frappe cache: `bench --site your-site clear-cache`
3. Restart bench: `bench restart`
4. Check browser console for JavaScript errors

