import React, { useState, useContext, FormEvent } from "react";
import { AuthContext, User } from "../context/AuthContext";
import "../authentication/auth.css";
import AuthLayout from "../authentication/Authlayout";

const Register: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "citizen" as "citizen" | "staff" | "admin",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData: User = { email: formData.email, role: formData.role };
    login(userData);
    alert("Registration Successful!");
  };

  return (
    <AuthLayout>
      <div className="auth-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="citizen">Citizen</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
