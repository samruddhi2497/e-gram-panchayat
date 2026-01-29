import React, { useState } from "react";
import { AllServicesList, AllService } from "../../../mockdata/mockdata";
import "../../Citizen/applications/Applicationservices.css";


const AllServicesPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(AllServicesList.map(s => s.category)))];

  const filteredServices = AllServicesList.filter(
    (s) =>
      (category === "All" || s.category === category) &&
      (s.name.toLowerCase().includes(search.toLowerCase()) || s.id.toLowerCase().includes(search.toLowerCase()))
  );

  const handleApply = (service: AllService) => {
    if(service.status === "Available") {
      alert(`Applying for ${service.name}`);
      // Here you can open a modal or navigate to form page
    }
  }

  return (
    <div className="all-services-container">
      <h2 className="page-heading">All Services</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by Service Name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="category-dropdown">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Department</th>
              <th>Category</th>
              <th>Description</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Approved Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.length > 0 ? (
              filteredServices.map((s) => (
                <tr key={s.id}>
                  <td>{s.name}</td>
                  <td>{s.department}</td>
                  <td>{s.category}</td>
                  <td>{s.description}</td>
                  <td><span className={`status-chip ${s.status.toLowerCase()}`}>{s.status}</span></td>
                  <td>{s.appliedDate || "-"}</td>
                  <td>{s.approvedDate || "-"}</td>
                  <td>
                    <button 
                      className={`apply-btn ${s.status !== "Available" ? "disabled" : ""}`} 
                      onClick={() => handleApply(s)}
                      disabled={s.status !== "Available"}
                    >
                      Apply
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} style={{ textAlign: "center" }}>No services found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllServicesPage;
