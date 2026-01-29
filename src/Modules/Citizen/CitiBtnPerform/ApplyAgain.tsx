import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { rejectedServicesData } from "../../../mockdata/mockdata";

const ApplyAgain: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = rejectedServicesData.find((s) => s.id === id);

  const [formData, setFormData] = useState({
    serviceName: service?.serviceName || "",
    department: service?.department || "",
    applicantName: "",
    documents: "",
  });

  if (!service) return <p style={{ padding: "20px" }}>Service not found</p>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Re-applied for ${formData.serviceName}!`);
    navigate("/citizen/rejected"); // back to rejected page
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Re-Apply: {formData.serviceName}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "400px" }}>
        <label>
          Applicant Name:
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Department:
          <input type="text" name="department" value={formData.department} readOnly />
        </label>
        <label>
          Documents:
          <textarea name="documents" value={formData.documents} onChange={handleChange} required />
        </label>

        <button type="submit" style={{ padding: "8px 12px", background: "#16a34a", color: "white", borderRadius: "6px", border: "none", cursor: "pointer" }}>
          Submit
        </button>
        <button type="button" onClick={() => navigate(-1)} style={{ padding: "8px 12px", background: "#e2e8f0", borderRadius: "6px", border: "none", cursor: "pointer" }}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ApplyAgain;
