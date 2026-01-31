import React, { useState } from "react";
import { staffComplaints } from "./staffMockData";
import { useNavigate } from "react-router-dom";
import "../Staff/Staff.css"
const StaffAllComplaints = () => {
  const navigate = useNavigate();
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");

  const filtered = staffComplaints.filter(c =>
    (priorityFilter === "All" || c.priority === priorityFilter) &&
    (deptFilter === "All" || c.department === deptFilter)
  );

  return (
    <div>
      <h2>All Complaints</h2>

      <div className="filters">
        <select onChange={(e) => setPriorityFilter(e.target.value)}>
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select onChange={(e) => setDeptFilter(e.target.value)}>
          <option>All</option>
          <option>Water</option>
          <option>Road</option>
          <option>Electricity</option>
        </select>
      </div>

      <table className="gov-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Citizen</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(c => (
            <tr key={c.id}>
              <td>#{c.id}</td>
              <td>{c.citizen}</td>
              <td>{c.department}</td>
              <td>{c.priority}</td>
              <td>{c.status}</td>
              <td>{new Date(c.date).toLocaleDateString()}</td>
              <td>
                <button onClick={() => navigate(`/staff/complaint/${c.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffAllComplaints;
