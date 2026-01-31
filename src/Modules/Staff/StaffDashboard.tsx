// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from "recharts";
import "./Staff.css";
import { staffApplications, staffComplaints } from "../Staff/staffMockData";

type StatusType = "Approved" | "Pending" | "Rejected";
type AppStatusData = { name: StatusType; value: number };
type DeptData = { department: string; applications: number };

const COLORS = ["#2e7d32", "#f59e0b", "#c62828"];

const getApplicationStatusData = (): AppStatusData[] => {
  const counts: { [key in StatusType]: number } = { Approved: 0, Pending: 0, Rejected: 0 };
  staffApplications.forEach(a => {
    if (counts[a.status as StatusType] !== undefined) counts[a.status as StatusType]++;
  });
  return [
    { name: "Approved", value: counts.Approved },
    { name: "Pending", value: counts.Pending },
    { name: "Rejected", value: counts.Rejected },
  ];
};

const getDepartmentApplicationsData = (): DeptData[] => {
  const deptCounts: { [key: string]: number } = {};
  staffApplications.forEach(a => {
    deptCounts[a.department] = (deptCounts[a.department] || 0) + 1;
  });
  return Object.entries(deptCounts).map(([department, applications]) => ({ department, applications }));
};

const StaffDashboard: React.FC = () => {
  const navigate = useNavigate();

  const summary = {
    total: staffApplications.length,
    pending: staffApplications.filter(a => a.status === "Pending").length,
    approved: staffApplications.filter(a => a.status === "Approved").length,
    rejected: staffApplications.filter(a => a.status === "Rejected").length,
  };

  // 🔥 Priority sorting
  const priorityOrder: Record<string, number> = { High: 1, Medium: 2, Low: 3 };

  const recentComplaints = [...staffComplaints]
    .sort((a, b) => {
      if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 5);

  const pieData = getApplicationStatusData();
  const barData = getDepartmentApplicationsData();

  return (
    <div className="staff-dashboard">
      <h2 className="page-title">Staff Dashboard</h2>

      {/* ✅ SUMMARY CARDS WITH FILTER ROUTING */}
      <div className="card-row">
        <div className="gov-card" onClick={() => navigate("/staff/applications")}>
          <h4>Total Applications</h4>
          <p>{summary.total}</p>
        </div>

        <div className="gov-card warning" onClick={() => navigate("/staff/applications?status=Pending")}>
          <h4>Pending</h4>
          <p>{summary.pending}</p>
        </div>

        <div className="gov-card success" onClick={() => navigate("/staff/applications?status=Approved")}>
          <h4>Approved</h4>
          <p>{summary.approved}</p>
        </div>

        <div className="gov-card danger" onClick={() => navigate("/staff/applications?status=Rejected")}>
          <h4>Rejected</h4>
          <p>{summary.rejected}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-wrapper">
        <div className="chart-card">
          <h4>Application Status</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Department Applications</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applications" fill="#0b3d91" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔥 RECENT COMPLAINTS CARDS */}
      <div className="recent-complaints">
        <div className="section-header">
          <h3>Recent Complaints</h3>
          <button className="btn-primary" onClick={() => navigate("/staff/complaints")}>
            View All
          </button>
        </div>

        <div className="complaint-cards">
          {recentComplaints.map(c => (
            <div key={c.id} className="complaint-card" onClick={() => navigate(`/staff/complaint/${c.id}`)}>
              <div className="card-top">
                <span className="cid">#{c.id}</span>
                <span className={`priority-badge ${c.priority.toLowerCase()}`}>{c.priority}</span>
              </div>
              <h4>{c.department} Issue</h4>
              <p className="citizen">{c.citizen}</p>
              <p className="date">{new Date(c.date).toLocaleString()}</p>
              <div className="status">{c.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
