import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "../components/Welcome";
import LoginPage from "../authentication/Login";
import AdminDashboard from "../Modules/Admin/AdminDashboard";
import StaffDashboard from "../Modules/Staff/StaffDashboard";
import CitizenDashboard from "../Modules/Citizen/CitizenDashboard";
import NotFound from "../Pages/NotFound";
import Navbar from "../components/Navbar";
import Register from "../authentication/Register";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<LoginPage />} />
      {/* <Route path="/login" element={<Login />} /> */}
     <Route path="/register" element={<Register/>} />


      {/* Dashboard Pages */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/citizen" element={<CitizenDashboard />} />

     <Route path="/navbar" element={<Navbar/>} />
      {/* Catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
