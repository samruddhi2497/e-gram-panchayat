import React from "react";
import {
  HomeOutlined,
  FileTextOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <span className="logo">E-Gram</span>
      </div>

      <nav>
        <a>
          <HomeOutlined className="icon" />
          <span className="text">Dashboard</span>
        </a>

        <a>
          <FileTextOutlined className="icon" />
          <span className="text">Services</span>
        </a>

        <a>
          <CheckCircleOutlined className="icon" />
          <span className="text">Approved</span>
        </a>

        <a>
          <ClockCircleOutlined className="icon" />
          <span className="text">Pending</span>
        </a>

        <a>
          <CloseCircleOutlined className="icon" />
          <span className="text">Rejected</span>
        </a>

        <a>
          <UserOutlined className="icon" />
          <span className="text">Profile</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
