import React from "react";
import "../Citizen/Citizen.css";
import { citizen, AllServicesList, approvedServicesData, pendingServicesData, rejectedServicesData} from "../../mockdata/mockdata";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const CitizenDashboard: React.FC = () => {
  const navigate = useNavigate();

const hour = new Date().getHours();
const greeting =
  hour < 12 ? "Good Morning" :
  hour < 18 ? "Good Afternoon" :
  "Good Evening";

const summary = {
  approved: approvedServicesData.length,
  pending: pendingServicesData.length,
  rejected: rejectedServicesData.length,
  all_services: AllServicesList.length,
};
const applicationsNeedingDocs = pendingServicesData.filter(
  app => app.stage === "Waiting for Documents"
);

const chartData = [
  { name: "Approved", value: summary.approved },
  { name: "Pending", value: summary.pending },
  { name: "Rejected", value: summary.rejected },
  { name: "All Services", value: summary.all_services },
];

  // const COLORS = ["#16a34a", "#d97706", "#dc2626"];
  const COLORS = ["#16a34a", "#d97706", "#dc2626", "#2563eb"];


  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          {/* <h1>Welcome, {citizen.name} 👋</h1> */}
          <h1>{greeting}, {citizen.name} 👋</h1>

          <p className="quote">Access government services anytime, anywhere</p>
        

        </div>
      </div>
      {/*dashboard-header END */}
{applicationsNeedingDocs.length > 0 && (
  <div className="notice-banner">
    ⚠️ {applicationsNeedingDocs.length} {applicationsNeedingDocs.length === 1 ? "application is" : "applications are"} waiting for documents
  </div>
)}
{/* card approve reject all pending  */}
     <div className="status-cards-wrapper">
      <div className="status-cards">

        <div
          className="status-card approved"
          onClick={() => navigate("/citizen/approved")}
        >
          <h4>Approved Applications</h4>
          <p>{summary.approved}</p>
        </div>

        <div
          className="status-card pending"
          onClick={() => navigate("/citizen/pending")}
        >
          <h4>Pending Applications</h4>
          <p>{summary.pending}</p>
        </div>

        <div
          className="status-card rejected"
          onClick={() => navigate("/citizen/rejected")}
        >
          <h4>Rejected Applications</h4>
          <p>{summary.rejected}</p>
        </div>
        <div
          className="status-card all_services"
          onClick={() => navigate("/citizen/allservices")}
        >
          <h4>All service</h4>
          <p>{summary.all_services}</p>
        </div>
      </div>
    </div>
      {/* Chart Section */}
      <div className="chart-section">
        <h3>Application Status Overview</h3>
        <PieChart width={350} height={350}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
            paddingAngle={4}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
     {/* bar section  */}
     
      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="primary" onClick={() => navigate("/citizen/services")}>📝 Apply Service</button>
<button onClick={() => navigate("/citizen/applications")}>📂 My Applications</button>
<button onClick={() => navigate("/citizen/track")}>📍 Track Status</button>
<button onClick={() => navigate("/citizen/certificates")}>📜 Certificates</button>

      </div>

      {/* Help Section */}
      <div className="help-section">
        <div className="help-card">❓ How to Apply</div>
        <div className="help-card">📞 Contact Panchayat</div>
        <div className="help-card">📝 Raise Complaint</div>
      </div>
    </div>
  );
};

export default CitizenDashboard;



// remove navbar 
// color of cards 