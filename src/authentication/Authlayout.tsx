// src/components/AuthLayout.tsx
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#eef2ff", // light background for login/register
      }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;
