import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import "../../Citizen/applications/Applicationservices.css";
import { rejectedServicesData, RejectedService } from "../../../mockdata/mockdata";

const RejectedServices: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  // Filter logic
  const filteredServices = rejectedServicesData.filter((service) =>
    service.serviceName.toLowerCase().includes(search.toLowerCase()) ||
    service.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="approved-container">
      <h2 className="page-heading">Rejected Services</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by Service Name or Application ID..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="approved-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service: RejectedService) => (
            <div key={service.id} className="approved-card">
              <h3>{service.serviceName}</h3>

              <p><strong>Application ID:</strong> {service.id}</p>
              <p><strong>Department:</strong> {service.department}</p>
              <p><strong>Rejected On:</strong> {service.rejectionDate}</p>

              <p className="status rejected">❌ Rejected</p>
              <p><strong>Reason:</strong> {service.reason}</p>

              <div className="card-actions">
                {/* ✅ Navigate to View Details page */}
                <button
                  className="view-btn"
                  onClick={() => navigate(`/citizen/service/${service.id}`)}
                >
                  👁 View Details
                </button>

                {/* ✅ Navigate to Apply Again page */}
                <button
                  className="download-btn"
                  onClick={() => navigate(`/citizen/service/apply/${service.id}`)}
                >
                  🔁 Apply Again
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No rejected services found</p>
        )}
      </div>
    </div>
  );
};

export default RejectedServices;
