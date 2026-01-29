import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { approvedServicesData, ApprovedService } from "../../../mockdata/mockdata";
import { rejectedServicesData, RejectedService } from "../../../mockdata/mockdata";

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find approved service
  const approvedService: ApprovedService | undefined = approvedServicesData.find(
    (s: ApprovedService) => s.id === id
  );

  let status: "approved" | "rejected" = "approved";
  let service: ApprovedService | RejectedService;

  if (approvedService) {
    service = approvedService;
  } else {
    const rejectedService: RejectedService | undefined = rejectedServicesData.find(
      (s: RejectedService) => s.id === id
    );
    if (!rejectedService) return <p style={{ padding: "20px" }}>Service not found</p>;
    service = rejectedService;
    status = "rejected";
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{service.serviceName}</h2>
      <p><strong>Application ID:</strong> {service.id}</p>
      <p><strong>Department:</strong> {service.department}</p>

      {status === "approved" ? (
        <p><strong>Approved On:</strong> {(service as ApprovedService).approvalDate}</p>
      ) : (
        <>
          <p><strong>Rejected On:</strong> {(service as RejectedService).rejectionDate}</p>
          <p><strong>Reason:</strong> {(service as RejectedService).reason}</p>
        </>
      )}

      <p className={`status ${status}`}>
        {status === "approved" ? "✅ Approved" : "❌ Rejected"}
      </p>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {status === "approved" ? (
          <button
            style={{
              background: "#16a34a",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => window.open((service as ApprovedService).certificateUrl, "_blank")}
          >
            ⬇ Download Certificate
          </button>
        ) : (
          <button
            style={{
              background: "#ef4444",
              color: "white",
              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/citizen/service/apply/${service.id}`)}
          >
            🔁 Apply Again
          </button>
        )}

        <button
          style={{
            background: "#e2e8f0",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate(-1)}
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
