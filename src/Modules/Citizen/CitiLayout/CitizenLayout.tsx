import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../Citizen/Citizen.css";

const CitizenLayout: React.FC = () => {
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
  <NavLink to="/citizen/dashboard"><span>📊</span>{!collapsed && "Dashboard"}</NavLink>
  <NavLink to="/citizen/CitizenApplyServices"><span>📝</span>{!collapsed && "Apply Service"}</NavLink>
  <NavLink to="/citizen/applications"><span>📂</span>{!collapsed && "My Applications"}</NavLink>
  <NavLink to="/citizen/pending"><span>📍</span>{!collapsed && "Track Application"}</NavLink>
  <NavLink to="/citizen/approved"><span>📜</span>{!collapsed && "Certificates"}</NavLink>
  <NavLink to="/citizen/profile"><span>👤</span>{!collapsed && "Profile"}</NavLink>
  <NavLink to="/logout"><span>🚪</span>{!collapsed && "Logout"}</NavLink>
</nav>

      </aside>

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

          <span className="top-title">Citizen Dashboard</span>
        </div>

        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CitizenLayout;
