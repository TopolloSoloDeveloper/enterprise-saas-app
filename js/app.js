/* ==========================================================================
   APPLICATION NAVIGATION & INTERACTION ENGINE (js/app.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Anima SaaS Application Engine Initialized.');
});

// Toggle between Public Landing Page and Internal Application Shell
function launchAppWorkspace() {
    document.getElementById('public-landing').classList.add('hidden');
    document.getElementById('app-shell').classList.add('active');
    switchAppView('view-l1', null);
}

function exitToLandingPage() {
    document.getElementById('app-shell').classList.remove('active');
    document.getElementById('public-landing').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4-Level Deep Navigation Router
function switchAppView(viewId, navElement) {
    // Hide all view sections
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Activate selected view
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // Update Breadcrumb Trail Dynamically
    const breadcrumbMap = {
        'view-l1': 'Global Dashboard (Level 1)',
        'view-l2': 'Content Repository > Digital Asset Management (Level 2)',
        'view-l3': 'Content Repository > Brand & Marketing Hub (Level 3)',
        'view-l4': 'Content Repository > Brand Hub > Asset Inspector (Level 4)'
    };

    const breadcrumbElement = document.getElementById('breadcrumb-path');
    if (breadcrumbElement && breadcrumbMap[viewId]) {
        breadcrumbElement.innerHTML = breadcrumbMap[viewId];
    }

    // Highlight active sidebar link
    if (navElement) {
        document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
        navElement.classList.add('active');
    }

    // Close Mobile Drawer if open
    closeMobileSidebar();
}

// Subtree Toggle for Deep Navigation Tree
function toggleNavSubtree(treeId) {
    const subtree = document.getElementById(treeId);
    if (subtree) {
        subtree.classList.toggle('open');
    }
}

// Inspector Metadata Tabs
function switchInspectorTab(button, tabId) {
    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content-pane').forEach(pane => pane.style.display = 'none');

    button.classList.add('active');
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.style.display = 'block';
    }
}

// Mobile Sidebar Drawer Controller
function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-backdrop');
    sidebar.classList.toggle('mobile-open');
    if (overlay) overlay.classList.toggle('mobile-open');
}

function closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const overlay = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('mobile-open');
}
