import React from "react";
import "../Citizen/Citizen.css";
import { citizen, applications } from "../../mockdata/mockdata";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CitizenDashboard: React.FC = () => {
  const navigate = useNavigate();

  const summary = {
    approved: applications.filter(a => a.status === "Approved").length,
    pending: applications.filter(a => a.status === "Pending").length,
    rejected: applications.filter(a => a.status === "Rejected").length,
  };

  const chartData = [
    { name: "Approved", value: summary.approved },
    { name: "Pending", value: summary.pending },
    { name: "Rejected", value: summary.rejected },
  ];

  const COLORS = ["#16a34a", "#d97706", "#dc2626"];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {citizen.name} 👋</h1>
          <p className="quote">Access government services anytime, anywhere</p>
        </div>
      </div>

      {/* Bigger & Attractive Status Cards */}
      <div className="status-cards-wrapper">
        <div className="status-cards">
          <div className="status-card approved" onClick={() => navigate("/citizen/approved")}>
            <h4>Approved</h4>
            <p>{summary.approved}</p>
          </div>

          <div className="status-card pending" onClick={() => navigate("/citizen/pending")}>
            <h4>Pending</h4>
            <p>{summary.pending}</p>
          </div>

          <div className="status-card rejected" onClick={() => navigate("/citizen/rejected")}>
            <h4>Rejected</h4>
            <p>{summary.rejected}</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        <h3>Application Status Overview</h3>
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
            paddingAngle={4}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="primary">📝 Apply Service</button>
        <button>📂 My Applications</button>
        <button>📍 Track Status</button>
        <button>📜 Certificates</button>
      </div>

      {/* Help Section */}
      <div className="help-section">
        <div className="help-card">❓ How to Apply</div>
        <div className="help-card">📞 Contact Panchayat</div>
        <div className="help-card">📝 Raise Complaint</div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
