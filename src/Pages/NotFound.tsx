import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: 150 }}>
      <h1>404 - Page Not Found</h1>
      <Button type="primary" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
