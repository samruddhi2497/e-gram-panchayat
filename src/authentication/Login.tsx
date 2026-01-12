import React, { useState, useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuthContext, User } from "../context/AuthContext";
import { Button, Select, Input, Form } from "antd";
import "../authentication/auth.css";
import AuthLayout from "../authentication/Authlayout";

const Login: React.FC = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role") || "citizen";

  const [role, setRole] = useState<"citizen" | "staff" | "admin">(roleParam as any);

  const onFinish = (values: any) => {
    const userData: User = { email: values.email, role };
    login(userData);
    navigate(`/${role}`);
  };

  useEffect(() => {
    setRole(roleParam as any);
  }, [roleParam]);

  return (
    <AuthLayout>
      <div className="auth-container">
        <h2>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h2>
        <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400, margin: "0 auto" }}>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Select value={role} onChange={(value) => setRole(value)}>
              <Select.Option value="citizen">Citizen</Select.Option>
              <Select.Option value="staff">Staff</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </div>
    </AuthLayout>
  );
};

export default Login;
