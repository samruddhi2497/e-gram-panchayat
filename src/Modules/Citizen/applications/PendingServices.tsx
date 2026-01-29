import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Citizen/applications/Applicationservices.css";
import { pendingServicesData, PendingService } from "../../../mockdata/mockdata";

const PendingServices: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Filter logic
  const filteredServices = pendingServicesData.filter((service) =>
    service.serviceName.toLowerCase().includes(search.toLowerCase()) ||
    service.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="approved-container">
      <h2 className="page-heading">Pending Services</h2>

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
          filteredServices.map((service: PendingService) => (
            <div key={service.id} className="approved-card">
              <h3>{service.serviceName}</h3>
              <p><strong>Application ID:</strong> {service.id}</p>
              <p><strong>Department:</strong> {service.department}</p>
              <p><strong>Applied On:</strong> {service.appliedDate}</p>
              <p><strong>Stage:</strong> {service.stage}</p>
              <p className="status pending">⏳ Pending</p>

              <div className="card-actions">
                <button
                  className="view-btn"
                  onClick={() => navigate(`/citizen/service/${service.id}`)}
                >
                  👁 View Details
                </button>

                <button
                  className="download-btn"
                  onClick={() => navigate(`/citizen/service/upload/${service.id}`)}
                >
                  📤 Upload Docs
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No pending services found</p>
        )}
      </div>
    </div>
  );
};

export default PendingServices;
