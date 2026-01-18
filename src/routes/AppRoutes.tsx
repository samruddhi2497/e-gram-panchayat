import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "../components/Welcome";
import LoginPage from "../authentication/Login";
import Register from "../authentication/Register";
import Navbar from "../components/Navbar";
import NotFound from "../Pages/NotFound";

// Dashboards
import AdminDashboard from "../Modules/Admin/AdminDashboard";
import StaffDashboard from "../Modules/Staff/StaffDashboard";

// Citizen Layout
import CitizenLayout from "../Modules/Citizen/CitiLayout/CitizenLayout";

// Citizen Pages
import CitizenDashboard from "../Modules/Citizen/CitizenDashboard";
import CitizenApprovedServices from "../Modules/Citizen/CitizenApprovedServices";
import CitizenPendingServices from "../Modules/Citizen/CitizenPendingServices";
// import CitizenAllServices from "../Modules/Citizen/CitizenAllServices";
import CitizenApplyServices from "../Modules/Citizen/CitizenApplyServices";
import CitizenApplications from "../Modules/Citizen/CitizenApplication";
import CitizenProfile from "../Modules/Citizen/CitizenProfile";
import CitizenService from "../Modules/Citizen/CitizenService";
// import CitizenTaxes from "../Modules/Citizen/CitizenTaxes";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboards */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />

      {/* Citizen Nested Routes */}
      <Route path="/citizen" element={<CitizenLayout/>}>
        <Route index element={<CitizenDashboard />} />
        <Route path="dashboard" element={<CitizenDashboard />} />
        <Route path="approved" element={<CitizenApprovedServices />} />
        <Route path="pending" element={<CitizenPendingServices />} />
        {/* <Route path="services" element={<CitizenAllServices/>} /> */}
        <Route path="services/apply/:id" element={<CitizenApplyServices/>} />
        <Route path="applications" element={<CitizenApplications />} />
        <Route path="profile" element={<CitizenProfile />} />
        <Route path="services" element={<CitizenService/>} />

        {/* <Route path="taxes" element={<CitizenTaxes />} /> */}
      </Route>

      {/* Extra */}
      <Route path="/navbar" element={<Navbar />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
