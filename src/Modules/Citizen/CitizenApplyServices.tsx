import React, { useState } from "react";
import "../Citizen/Citizen.css"; // Dashboard आणि layout सारखी CSS वापरली

interface ServiceForm {
  serviceName: string;
  description: string;
}

const CitizenApplyServices: React.FC = () => {
  const [form, setForm] = useState<ServiceForm>({
    serviceName: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Service Applied:", form);
    setSubmitted(true);
    setForm({ serviceName: "", description: "" });
  };

  return (
    <div className="dashboard-container">
      <h2>📝 Apply for a Service</h2>
      {submitted && (
        <div className="success-msg">
          ✅ Service applied successfully!
        </div>
      )}

      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Service Name
          <input
            type="text"
            name="serviceName"
            value={form.serviceName}
            onChange={handleChange}
            placeholder="Enter service name"
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter description"
            rows={4}
          />
        </label>

        <button type="submit" className="primary">
          Apply
        </button>
      </form>
    </div>
  );
};

export default CitizenApplyServices;
