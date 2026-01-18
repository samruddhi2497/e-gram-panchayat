import React, { useState } from "react";
import { Layout, Menu, Dropdown, Button, Drawer } from "antd";
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
  MenuOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/Style/Navbar.css";
import logo from "../assets/e-gramLogo.jpg";

const { Header } = Layout;

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState("EN");
  const [drawerOpen, setDrawerOpen] = useState(false);

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

  const navItems = (
    <Menu
      mode="vertical"
      selectedKeys={[location.pathname]}
      onClick={() => setDrawerOpen(false)}
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
  );

  return (
    <Header className="navbar">
      {/* LOGO */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="E-Gram Panchayat" />
        <span>E-Gram Panchayat</span>
      </div>

      {/* DESKTOP MENU */}
      <Menu
        mode="horizontal"
        selectedKeys={[location.pathname]}
        className="nav-menu desktop-menu"
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
      <div className="right-actions desktop-actions">
        <Dropdown overlay={languageMenu}>
          <Button className="lang-btn" icon={<GlobalOutlined />}>
            {language}
          </Button>
        </Dropdown>

        <Dropdown overlay={loginMenu}>
          <Button type="primary" icon={<LoginOutlined />} className="login-btn">
            Login
          </Button>
        </Dropdown>
      </div>

      {/* MOBILE MENU ICON */}
      <Button
  className="mobile-menu-btn"
  shape="circle"
  icon={<MenuOutlined />}
  onClick={() => setDrawerOpen(true)}
/>


      {/* MOBILE DRAWER */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        {navItems}

        <div style={{ marginTop: 20 }}>
          <Dropdown overlay={languageMenu}>
            <Button block icon={<GlobalOutlined />}>
              Language : {language}
            </Button>
          </Dropdown>

          <Dropdown overlay={loginMenu}>
            <Button block type="primary" icon={<LoginOutlined />} style={{ marginTop: 12 }}>
              Login
            </Button>
          </Dropdown>
        </div>
      </Drawer>
    </Header>
  );
};

export default Navbar;
