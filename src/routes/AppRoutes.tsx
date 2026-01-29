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


import CitizenApplications from "../Modules/Citizen/CitizenApplication";
import CitizenProfile from "../Modules/Citizen/CitizenProfile";
import CitizenService from "../Modules/Citizen/CitizenService";
import ApprovedServices from "../Modules/Citizen/applications/ApprovedServices";
import RejectedServices from "../Modules/Citizen/applications/RejectedServices";
import PendingServices from "../Modules/Citizen/applications/PendingServices";
import ApplyAgain from "../Modules/Citizen/CitiBtnPerform/ApplyAgain";
import ServiceDetail from "../Modules/Citizen/CitiBtnPerform/ServiceDetail";
import CitizenApplyServices from "../Modules/Citizen/CitizenApplyServices";
import AllServices from "../Modules/Citizen/applications/AllServices";
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
        <Route path="approved" element={<ApprovedServices/>} />
        <Route path="pending" element={<PendingServices/>} />
        <Route path="rejected" element={<RejectedServices/>} />

        {/* <Route path="services" element={<CitizenAllServices/>} /> */}
        <Route path="/citizen/CitizenApplyServices" element={<CitizenApplyServices/>} />

        <Route path="applications" element={<CitizenApplications />} />
        <Route path="profile" element={<CitizenProfile />} />
        <Route path="services" element={<CitizenService/>} />
        <Route path="/citizen/service/:id" element={<ServiceDetail/>} />
        <Route path="/citizen/service/apply/:id" element={<ApplyAgain/>} />
        <Route path="/citizen/allservices" element={< AllServices/>} />


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
