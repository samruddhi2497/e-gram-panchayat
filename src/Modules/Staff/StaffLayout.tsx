import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserOutlined } from "@ant-design/icons";

import "../../Modules/Staff/Staff.css";

const StaffLayout: React.FC = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="citizen-layout">
      {/* Sidebar */}
      <aside
        className={`sidebar 
          ${collapsed ? "collapsed" : ""} 
          ${mobileOpen ? "open" : ""}`}
      >
        <div className="sidebar-header">
          <span className="logo">🏛️</span>
          {!collapsed && <h2>E-Gram</h2>}
        </div>

        <nav>
  <NavLink to="/Staff"><span>📊</span>{!collapsed && "Dashboard"}</NavLink>
  <NavLink to="/staff/complaints"><span>📝</span>{!collapsed && "Complaint"}</NavLink>
  <NavLink to="/staff/applications"><span>📂</span>{!collapsed && "Applications"}</NavLink>
  <NavLink to="/citizen/pending"><span>📍</span>{!collapsed && "Track Application"}</NavLink>
  <NavLink to="/citizen/approved"><span>📜</span>{!collapsed && "Certificates"}</NavLink>
  <NavLink to="/citizen/profile"><span>👤</span>{!collapsed && "Profile"}</NavLink>
  <NavLink to="/logout"><span>🚪</span>{!collapsed && "Logout"}</NavLink>
</nav>

      </aside>
{mobileOpen && (
  <div 
    className="overlay"
    onClick={() => setMobileOpen(false)}
  />
)}

      {/* Main Area */}
      <div className="main-area">
        {/* Topbar */}
        <div className="topbar">
          <button
            className="menu-btn"
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileOpen(!mobileOpen);
              } else {
                setCollapsed(!collapsed);
              }
            }}
          >
            ☰
          </button>

          <span className="top-title">Staff Dashboard</span>
        <div className="topbar-right">
        <div
  
         className="profile-btn"
        onClick={() => navigate("/citizen/profile")}
         >
           <UserOutlined className="profile-icon" />
  </div>
</div>

        </div>

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
    
  );
  
};


export default StaffLayout;
