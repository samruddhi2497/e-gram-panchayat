import React from "react";
import { Layout, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "../components/Style/AppFooter.css";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer className="footer">
      <Row gutter={32}>
        {/* ABOUT */}
        <Col xs={24} md={8}>
          <h3>E-Gram Panchayat</h3>
          <p>
            E-Gram Panchayat is a digital governance initiative aimed at
            delivering transparent, efficient, and citizen-centric services to
            rural India through a secure online platform.
          </p>
        </Col>

        {/* QUICK LINKS */}
        <Col xs={24} md={8}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Track Application</li>
            <li>Contact Us</li>
          </ul>
        </Col>

        {/* CONTACT */}
        <Col xs={24} md={8}>
          <h3>Contact</h3>
          <p>
            <EnvironmentOutlined /> Gram Panchayat Office, Maharashtra
          </p>
          <p>
            <PhoneOutlined /> +91 98765 43210
          </p>
          <p>
            <MailOutlined /> support@egrampanchayat.gov.in
          </p>
        </Col>
      </Row>

      <div className="footer-bottom">
        © {new Date().getFullYear()} E-Gram Panchayat | Government of India
      </div>
    </Footer>
  );
};

export default AppFooter;
