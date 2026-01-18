import React from "react";
import "../Citizen/Citizen.css";

import {
  citizen,
  applications,
} from "../../mockdata/mockdata";

// ----------------------------
const CitizenDashboard: React.FC = () => {
  const summary = {
    approved: applications.filter(a => a.status === "Approved").length,
    pending: applications.filter(a => a.status === "Pending").length,
    rejected: applications.filter(a => a.status === "Rejected").length,
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome, {citizen.name} 👋</h1>
          <p className="quote">
            Access government services anytime, anywhere
          </p>
        </div>

        <div className="profile-box">
          <img src={citizen.profilePhoto} alt="profile" />
          <div>
            <strong>{citizen.name}</strong>
            <span className="village">{citizen.village}</span>
          </div>
        </div>
      </div>

      {/* Status Summary */}
      <div className="status-cards">
        <div className="status-card approved">
          <h4>Approved</h4>
          <p>{summary.approved}</p>
        </div>

        <div className="status-card pending">
          <h4>Pending</h4>
          <p>{summary.pending}</p>
        </div>

        <div className="status-card rejected">
          <h4>Rejected</h4>
          <p>{summary.rejected}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="primary">📝 Apply Service</button>
        <button>📂 My Applications</button>
        <button>📍 Track Status</button>
        <button>📜 Certificates</button>
      </div>

      {/* Applications */}
      <div className="applications-section">
        <div className="section-header">
          <h2>Recent Applications</h2>
          <span className="link">View All</span>
        </div>

        <table className="app-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map(app => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.serviceName}</td>
                <td>{app.appliedDate}</td>
                <td>
                  <span className={`badge ${app.status.toLowerCase()}`}>
                    {app.status}
                  </span>
                </td>
                <td>
                  {app.status === "Approved" ? (
                    <button className="link-btn">Download</button>
                  ) : (
                    <button className="link-btn">View</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Help */}
      <div className="help-section">
        <div className="help-card">❓ How to Apply</div>
        <div className="help-card">📞 Contact Panchayat</div>
        <div className="help-card">📝 Raise Complaint</div>
      </div>
    </div>
  );
};

export default CitizenDashboard;
