import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronUp,
} from "react-icons/fa";

const Footer = () => {
  const Footer_scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="Footer-section">
      <div className="Footer-inner">

       <div className="Footer-col Footer-about">
  <div className="Footer-brand">
    <div className="Footer-brand-circle">I</div>
    <div className="Footer-brand-name">
      <span className="Footer-brand-title">International</span>
      <span className="Footer-brand-sub">Institute of Internship</span>
    </div>
  </div>

  <p className="Footer-about-text">
    The International Institute of Internship is your ultimate platform for modern learning, internship opportunities, updates on programs, and connecting with top mentors globally.
  </p>

  <div className="Footer-contact-lines">
    <p><strong>Address:</strong> 70-80 Upper St Norwich NR2</p>
    <p><strong>Call:</strong> +01 123 5641 231</p>
    <p><strong>Email:</strong> info@eduinternship.co</p>
  </div>
</div>



        {/* MIDDLE: Platform Links */}
        <div className="Footer-col Footer-links">
          <h3 className="Footer-col-title">Online Platform</h3>
          <ul className="Footer-col-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Instructor</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Instructor Details</a></li>
            <li><a href="#">Purchase Guide</a></li>
          </ul>
        </div>

        {/* MIDDLE: Useful Links */}
        <div className="Footer-col Footer-links">
          <h3 className="Footer-col-title">Useful Links</h3>
          <ul className="Footer-col-list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">News & Articles</a></li>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Sign In/Registration</a></li>
          </ul>
        </div>

        {/* RIGHT: Subscribe + Social */}
        <div className="Footer-col Footer-subscribe">
          <h3 className="Footer-col-title">Subscribe</h3>
          <p className="Footer-subscribe-note">
            Enter your email address to get the latest updates from EduBlink
          </p>

          <div className="Footer-subscribe-box">
            <input
              className="Footer-subscribe-input"
              type="email"
              placeholder="Your email"
            />
            <button className="Footer-subscribe-btn">Subscribe</button>
          </div>

          <div className="Footer-social-row">
            <a href="#" className="Footer-social facebook" aria-label="facebook"><FaFacebookF /></a>
            <a href="#" className="Footer-social linkedin" aria-label="linkedin"><FaLinkedinIn /></a>
            <a href="#" className="Footer-social instagram" aria-label="instagram"><FaInstagram /></a>
            <a href="#" className="Footer-social twitter" aria-label="twitter"><FaTwitter /></a>
            <a href="#" className="Footer-social youtube" aria-label="youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
          
      <div className="Footer-bottom">
        <p>
          Copyright © 2025. Powered by: <strong>DPKHRC Trust</strong> | Design & Develop | ♡ <strong>PR Webstock</strong>
        </p>
      </div>


    </footer>
  );
};

export default Footer;
