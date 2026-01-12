import React, { useState } from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  LoginOutlined,
  UserOutlined,
  TeamOutlined,
  SafetyOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/Style/Navbar.css";
import logo from "../assets/e-gramLogo.jpg";

// import logo from "../assets/e-gramLogo.jpg";


const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState("EN");

  const loginMenu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />} onClick={() => navigate("/login?role=citizen")}>
        Citizen Login
      </Menu.Item>
      <Menu.Item icon={<TeamOutlined />} onClick={() => navigate("/login?role=staff")}>
        Staff Login
      </Menu.Item>
      <Menu.Item icon={<SafetyOutlined />} onClick={() => navigate("/login?role=admin")}>
        Admin Login
      </Menu.Item>
    </Menu>
  );

  const languageMenu = (
    <Menu onClick={(e) => setLanguage(e.key)}>
      <Menu.Item key="EN">English</Menu.Item>
      <Menu.Item key="HI">हिंदी</Menu.Item>
      <Menu.Item key="MR">मराठी</Menu.Item>
    </Menu>
  );

  return (
    <Header className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        {/* <img src="src\assets\e-gramLogo.jpg" alt="E-Gram Panchayat" /> */}
        <img src={logo} alt="E-Gram Panchayat" />

        <span>E-Gram Panchayat</span>
      </div>

      {/* MENU */}
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        className="nav-menu"
      >
        <Menu.Item key="/" icon={<HomeOutlined />} onClick={() => navigate("/")}>
          Home
        </Menu.Item>

        <Menu.Item key="/services" icon={<AppstoreOutlined />}>
          Services
        </Menu.Item>

        <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
          About
        </Menu.Item>

        <Menu.Item key="/contact" icon={<PhoneOutlined />}>
          Contact
        </Menu.Item>

        <Menu.Item key="/register" icon={<UserOutlined />} onClick={() => navigate("/register")}>
          Register
        </Menu.Item>
      </Menu>

      {/* RIGHT ACTIONS */}
      <div className="right-actions">
        {/* Language */}
        <Dropdown overlay={languageMenu} placement="bottomRight">
          <Button className="lang-btn" icon={<GlobalOutlined />}>
            {language}
          </Button>
        </Dropdown>

        {/* Login */}
        <Dropdown overlay={loginMenu} placement="bottomRight">
          <Button type="primary" icon={<LoginOutlined />} className="login-btn">
            Login
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
