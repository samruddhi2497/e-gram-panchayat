import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/Style/WelcomePage.css";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-wrapper">

      <main className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="badge">Digital GramPanchayat</div>

          <h2 className="main-title">
            Welcome to <span className="highlight-orange">E-Gram Panchayat</span> <br />
            <span className="highlight-green">Digital Services Portal</span>
          </h2>

          <p className="description">
            Streamline citizen services with our secure and transparent digital platform. 
            Apply for services, track applications, and access government schemes all in one place.
          </p>

          <button className="cta-button" onClick={() => navigate("/register")}>
            Get Started – Register Now
          </button>
        </div>
      </main>


      {/* SERVICES SECTION */}
      <section className="services">
        <h2>Available Services</h2>
        <p>Apply online for essential Gram Panchayat services</p>

        <div className="service-grid">
          <div className="service-card new">
            <span className="new-badge">NEW</span>
            <h3>Birth Certificate</h3>
            <p>Apply for birth certificate digitally.</p>
          </div>

          <div className="service-card">
            <h3>Death Certificate</h3>
            <p>Online death registration & certificate.</p>
          </div>

          <div className="service-card">
            <h3>Income Certificate</h3>
            <p>Apply & track income certificate status.</p>
          </div>

          <div className="service-card">
            <h3>Residence Certificate</h3>
            <p>Proof of residence application.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How to Apply (Govt Form Process)</h2>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Register / Login</h4>
            <p>Create account using mobile & Aadhaar details.</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h4>Select Service</h4>
            <p>Choose required Gram Panchayat service.</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h4>Fill Form</h4>
            <p>Enter details & upload required documents.</p>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <h4>Track Status</h4>
            <p>Track application until approval.</p>
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="final-cta">
        <h2>Start Using Digital Gram Panchayat Services</h2>
        <button onClick={() => navigate("/register")}>
          Get Started
        </button>
      </section>

    </div>
  );
};

export default Welcome;
