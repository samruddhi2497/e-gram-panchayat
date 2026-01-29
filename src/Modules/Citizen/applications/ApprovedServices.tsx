import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import
import "../../Citizen/applications/Applicationservices.css";
import { approvedServicesData, ApprovedService } from "../../../mockdata/mockdata";

const ApprovedServices: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ Hook

  // Filter logic
  const filteredServices = approvedServicesData.filter((service: ApprovedService) =>
    service.serviceName.toLowerCase().includes(search.toLowerCase()) ||
    service.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="approved-container">
      <h2 className="page-heading">Approved Services</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by Service Name or Application ID..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="approved-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service: ApprovedService) => (
            <div key={service.id} className="approved-card">
              <h3>{service.serviceName}</h3>

              <p><strong>Application ID:</strong> {service.id}</p>
              <p><strong>Department:</strong> {service.department}</p>
              <p><strong>Approved On:</strong> {service.approvalDate}</p>

              <p className="status">✅ Approved</p>

              <div className="card-actions">
                {/* ✅ Download Certificate */}
                <button
                  className="download-btn"
                  onClick={() => window.open(service.certificateUrl, "_blank")}
                >
                  ⬇ Download Certificate
                </button>

                {/* ✅ Navigate to View Details page */}
                <button
                  className="view-btn"
                  onClick={() => navigate(`/citizen/service/${service.id}`)}
                >
                  👁 View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">❌ No services found</p>
        )}
      </div>
    </div>
  );
};

export default ApprovedServices;
