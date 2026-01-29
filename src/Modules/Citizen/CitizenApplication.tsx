import React from "react";
import { useNavigate } from "react-router-dom";
import "../Citizen/applications/Applicationservices.css";
import {
  pendingServicesData,
  approvedServicesData,
  rejectedServicesData,
} from "../../mockdata/mockdata";

const MyApplications: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="approved-container">
      <h2 className="page-heading">My Applications</h2>

      {/* ===== Cards Section ===== */}
      <div className="applications-cards">
        <div
          className="app-card pending"
          onClick={() => navigate("/citizen/pending")}
        >
          <h4>Pending</h4>
          <p>{pendingServicesData.length}</p>
        </div>

        <div
          className="app-card approved"
          onClick={() => navigate("/citizen/approved")}
        >
          <h4>Approved</h4>
          <p>{approvedServicesData.length}</p>
        </div>

        <div
          className="app-card rejected"
          onClick={() => navigate("/citizen/rejected")}
        >
          <h4>Rejected</h4>
          <p>{rejectedServicesData.length}</p>
        </div>
      </div>

      {/* ===== See All Services Button ===== */}
      <button
        className="see-all-btn"
        onClick={() => navigate("/citizen/allservices")}
      >
        See All Services
      </button>
    </div>
  );
};

export default MyApplications;
