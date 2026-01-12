import React from "react";
import { Layout } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/AppFooter";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />

      <Content style={{ marginTop: 70 }}>
        <Outlet />
      </Content>

      <Footer />
    </Layout>
  );
};

export default AppLayout;
