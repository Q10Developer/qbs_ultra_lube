/**
 * Auto-inject Customer Labels on Dashboard
 * This script runs automatically on all pages and adds customer labels to dashboard charts
 */

frappe.ready(function() {
    // Check if we're on the Sample Registration Analytics dashboard
    if (window.location.pathname.includes('dashboard-view') && 
        window.location.pathname.includes('Sample')) {
        
        console.log('🎯 Dashboard detected - preparing to add customer labels...');
        
        // Wait for charts to load, then add labels
        setTimeout(function() {
            addCustomerLabelsToDashboard();
        }, 2000);
        
        // Also add on any dynamic updates
        if (typeof frappe !== 'undefined' && frappe.after_ajax) {
            frappe.after_ajax(function() {
                setTimeout(addCustomerLabelsToDashboard, 1000);
            });
        }
    }
});

function addCustomerLabelsToDashboard() {
    console.log('🚀 Adding customer labels to dashboard charts...');
    
    const chartConfigs = [
        {
            name: "Today's Samples by Type",
            color: "#667eea",
            icon: "📅"
        },
        {
            name: "This Month's Samples by Type",
            color: "#11998e",
            icon: "📊"
        },
        {
            name: "This Year's Samples by Type",
            color: "#f093fb",
            icon: "📈"
        }
    ];
    
    let labelsAdded = 0;
    
    // Find all elements and check their text content
    document.querySelectorAll('*').forEach(function(element) {
        const text = element.textContent.trim();
        
        chartConfigs.forEach(function(config) {
            if (text === config.name) {
                // Check if label already exists
                if (element.querySelector('.customer-label-banner')) {
                    return;
                }
                
                // Create customer label banner
                const banner = document.createElement('div');
                banner.className = 'customer-label-banner';
                banner.style.cssText = 
                    'background: linear-gradient(135deg, ' + config.color + ' 0%, ' + config.color + 'dd 100%);' +
                    'color: white;' +
                    'padding: 12px 20px;' +
                    'margin: 10px 0;' +
                    'border-radius: 8px;' +
                    'font-weight: 600;' +
                    'font-size: 16px;' +
                    'display: flex;' +
                    'align-items: center;' +
                    'gap: 10px;' +
                    'box-shadow: 0 2px 8px rgba(0,0,0,0.15);';
                
                banner.innerHTML = 
                    '<span style="font-size: 24px;">' + config.icon + '</span>' +
                    '<span>Customer: <strong style="font-size: 18px;">All Customers</strong></span>';
                
                // Insert banner after the title
                if (element.parentElement) {
                    element.parentElement.insertBefore(banner, element.nextSibling);
                    labelsAdded++;
                    console.log('✅ Added customer label for: ' + config.name);
                }
            }
        });
    });
    
    if (labelsAdded > 0) {
        console.log('✅ SUCCESS! Added ' + labelsAdded + ' customer labels to dashboard');
    } else {
        console.log('⚠️  No charts found to label. Charts may not be loaded yet.');
    }
}

// Export function for manual use if needed
window.addCustomerLabelsToDashboard = addCustomerLabelsToDashboard;




