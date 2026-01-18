// import React from 'react'

export default function StaffDashboard() {
  return (
    <div>StaffDashboard</div>
  )
}
// :root {
//   --primary: #2563eb;
//   --success: #16a34a;
//   --warning: #d97706;
//   --danger: #dc2626;
//   --bg: #f1f5f9;
//   --text-muted: #64748b;
//   --card-shadow: 0 10px 20px rgba(0,0,0,0.08);
//   --help-shadow: 0 6px 16px rgba(0,0,0,0.06);
// }

// /* ===== Layout ===== */
// .citizen-layout { display:flex; min-height:100vh; }
// .main-area { flex:1; display:flex; flex-direction:column; min-width:0; }

// /* ===== Sidebar ===== */
// .sidebar {
//   width:240px; background:linear-gradient(180deg,#0f172a,#020617);
//   color:white; padding:16px; transition:0.3s;
// }
// .sidebar.collapsed { width:72px; }
// .sidebar-header { display:flex; align-items:center; gap:10px; margin-bottom:24px; }
// .sidebar nav a {
//   display:flex; align-items:center; gap:12px; padding:10px; border-radius:8px;
//   color:#cbd5f5; cursor:pointer; white-space:nowrap;
// }
// .sidebar nav a:hover { background:#1e293b; color:white; }
// .sidebar nav .icon { font-size:20px; min-width:24px; text-align:center; }
// .sidebar.collapsed nav .text { display:none; }

// /* ===== Topbar ===== */
// .topbar { height:60px; display:flex; align-items:center; gap:12px; padding:0 16px; box-shadow:0 2px 6px rgba(0,0,0,0.05); background:white; }
// .menu-btn { background:none; border:none; font-size:22px; cursor:pointer; }

// /* ===== Page Content ===== */
// .page-content { padding:16px; width:100%; box-sizing:border-box; }

// /* ===== Dashboard ===== */
// .dashboard-container { background:var(--bg); padding:24px; font-family:"Segoe UI",sans-serif; min-height:calc(100vh-60px); width:100%; max-width:1200px; margin:auto; }
// .dashboard-header { display:flex; justify-content:space-between; align-items:center; }
// .dashboard-header h1 { font-size:26px; }
// .quote { color:#475569; margin-top:4px; }
// .profile-box { display:flex; align-items:center; gap:10px; }
// .profile-box img { width:44px; height:44px; border-radius:50%; }
// .village { font-size:12px; color:var(--text-muted); }

// /* Status Cards */
// .status-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin:24px 0; }
// .status-card { padding:20px; border-radius:14px; color:white; box-shadow:var(--card-shadow); }
// .status-card h4 { font-weight:500; }
// .status-card p { font-size:32px; font-weight:bold; }
// .status-card.approved { background:linear-gradient(135deg,var(--success),#22c55e); }
// .status-card.pending { background:linear-gradient(135deg,var(--warning),#f59e0b); }
// .status-card.rejected { background:linear-gradient(135deg,var(--danger),#ef4444); }

// /* Quick Actions */
// .quick-actions { display:flex; gap:12px; margin-bottom:24px; flex-wrap:wrap; }
// .quick-actions button { padding:10px 18px; border-radius:10px; border:none; cursor:pointer; background:#e2e8f0; }
// .quick-actions .primary { background:var(--primary); color:white; }

// /* Applications Table */
// .applications-section { background:white; padding:20px; border-radius:16px; box-shadow:0 8px 20px rgba(0,0,0,0.05); overflow-x:auto; }
// .app-table { width:100%; min-width:600px; border-collapse:collapse; }
// .app-table th,.app-table td { padding:12px; border-bottom:1px solid #e5e7eb; text-align:left; }
// .badge { padding:4px 12px; border-radius:999px; font-size:12px; color:white; }
// .badge.approved { background:var(--success); }
// .badge.pending { background:var(--warning); }
// .badge.rejected { background:var(--danger); }
// .link-btn { background:none; border:none; color:var(--primary); cursor:pointer; font-weight:500; }

// /* Help Section */
// .help-section { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:24px; }
// .help-card { background:white; padding:18px; border-radius:14px; text-align:center; cursor:pointer; box-shadow:var(--help-shadow); }

// /* ===== Responsive ===== */
// @media (max-width:1024px){ .status-cards,.help-section{ grid-template-columns:repeat(2,1fr); } }
// @media (max-width:768px){
//   .dashboard-header{flex-direction:column;align-items:flex-start;gap:12px;}
//   .status-cards,.help-section{grid-template-columns:1fr;}
//   .quick-actions button{width:100%;}
//   .sidebar{position:fixed;height:100%;transform:translateX(-100%);z-index:2000;}
//   .sidebar.open{transform:translateX(0);}
//   .main-area{width:100%;}
// }
// @media (max-width:480px){
//   .dashboard-container{padding:16px;}
//   .dashboard-header h1{font-size:20px;}
//   .quote{font-size:13px;}
//   .status-card p{font-size:24px;}
//   .help-card{padding:14px;}
// }
