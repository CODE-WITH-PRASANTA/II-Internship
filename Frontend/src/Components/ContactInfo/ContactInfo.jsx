import React from "react";
import "./ContactInfo.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import con1 from "../../assets/contact-me.webp";

const ContactInfo = () => {
  return (
    <section className="contactinfo-section">
      <div className="contactinfo-container">
        <div className="contactinfo-image-wrapper">
          <div className="contactinfo-decor decor-red"></div>
          <div className="contactinfo-decor decor-green"></div>
          <div className="contactinfo-decor decor-dots"></div>

          <div className="contactinfo-image">
            <img src={con1} alt="Contact" />
          </div>
        </div>

        <div className="contactinfo-content">
          <h2>
            I will Answer all Your <br /> <span>Questions</span>
          </h2>

          <div className="contactinfo-info">
            <h3>Address</h3>
            <p>
              Studio 76d, Riley Ford, North Michael chester,
              <br />
              CF99 6QQ
            </p>
          </div>

          <div className="contactinfo-info">
            <h3>Email</h3>
            <p>edublink@example.com</p>
          </div>

          <div className="contactinfo-info">
            <h3>Phone</h3>
            <p>(+091) 413 554 8598</p>
          </div>

          <div className="contactinfo-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
