import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { staffApplications } from "../Staff/staffMockData";
import "./Staff.css";

type StatusType = "Approved" | "Pending" | "Rejected";

const StaffAllApplications: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusType | "All">("All");

  const filteredApplications = staffApplications.filter(app =>
    (statusFilter === "All" || app.status === statusFilter) &&
    (app.citizen.toLowerCase().includes(search.toLowerCase()) ||
     app.service.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="staff-dashboard">
      <h2 className="page-title">All Applications</h2>

      <div style={{ margin: "16px 0", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search by Citizen / Service"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", flex: 1, minWidth: 200 }}
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusType | "All")}
          style={{ padding: "8px" }}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <table className="gov-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Citizen</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map(app => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.citizen}</td>
              <td>{app.service}</td>
              <td className={`status-${app.status.toLowerCase()}`}>{app.status}</td>
              <td>
                {app.status === "Pending" ? (
                  <button
                    className="btn-primary"
                    onClick={() => navigate(`/staff/approve/${app.id}`)}
                  >
                    Verify
                  </button>
                ) : (
                  <span style={{ color: "#888" }}>View Only</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffAllApplications;
