import React from "react";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <section className="contactuspage-banner">
      <div className="contactuspage-bgshape contactuspage-shape-left"></div>
      <div className="contactuspage-bgshape contactuspage-shape-right"></div>
      <div className="contactuspage-dots"></div>
      <div className="contactuspage-waveicon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="contactuspage-content">
        <h1>Contact Me</h1>
        <p className="contactuspage-breadcrumb">
          Home <span>›</span> Pages <span>›</span> Contact Me
        </p>
      </div>
    </section>
  );
};

export default ContactUsPage;
