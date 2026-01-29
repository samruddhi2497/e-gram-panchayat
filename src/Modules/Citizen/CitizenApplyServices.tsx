import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Citizen/citizenapplyservices.css";
import { servicesList, Service } from "../../mockdata/mockdata";
import { pendingServicesData } from "../../mockdata/mockdata";

const CitizenApplyServices: React.FC = () => {
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [idProof, setIdProof] = useState<File | null>(null);
  const [documents, setDocuments] = useState<File[]>([]);
  const [error, setError] = useState("");

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!selectedService || !applicantName || !dob || !address || !idProof) {
      setError("Please fill all required fields and upload ID proof");
      return;
    }

    // Mock adding to pendingServicesData
    const newPendingService = {
      id: `GRM${Math.floor(Math.random() * 1000)}`,
      serviceName: selectedService.name,
      department: selectedService.department,
      appliedDate: new Date().toLocaleDateString(),
      stage: "Under Review",
    };

    pendingServicesData.push(newPendingService); // Mock push
    alert("Application submitted successfully!");

    // Navigate to Pending Services page
    navigate("/citizen/pending");
  };

  return (
    <div className="approved-container">
      <h2 className="page-heading">Apply New Service</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="apply-form">
        {/* Service Dropdown */}
        <label>Choose Service:</label>
        <select
  value={selectedService?.id || ""}
  onChange={(e) =>
    setSelectedService(
      servicesList.find((s) => s.id === e.target.value) || null
    )
  }
  required
>
  <option value="">-- Select Service --</option>
  {servicesList.map((service) => (
    <option key={service.id} value={service.id}>
      {service.name}
    </option>
  ))}
</select>

        {/* Auto-fill Department */}
        <label>Department:</label>
        <input type="text" value={selectedService?.department || ""} disabled />

        {/* Applicant Details */}
        <label>Full Name:</label>
        <input
          type="text"
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
          required
        />

        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        {/* File Uploads */}
        <label>ID Proof:</label>
        <input
          type="file"
          onChange={(e) => setIdProof(e.target.files ? e.target.files[0] : null)}
          required
        />

        <label>Supporting Documents:</label>
        <input
          type="file"
          multiple
          onChange={(e) => setDocuments(e.target.files ? Array.from(e.target.files) : [])}
        />

        <button type="submit" className="download-btn">
          📝 Submit Application
        </button>
      </form>
    </div>
  );
};

export default CitizenApplyServices;
