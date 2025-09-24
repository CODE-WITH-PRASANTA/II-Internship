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
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT: logo + about */}
        <div className="footer-col footer-about">
          <div className="brand">
            <div className="brand-circle">e</div>
            <div className="brand-name">
              <span className="brand-title">Edu</span><span className="brand-sub">Blink</span>
            </div>
          </div>

          <p className="about-text">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusmod tempor incidid unt labore dolore.
          </p>

          <div className="contact-lines">
            <p><strong>Add:</strong> 70-80 Upper St Norwich NR2</p>
            <p><strong>Call:</strong> +01 123 5641 231</p>
            <p><strong>Email:</strong> info@edublink.co</p>
          </div>
        </div>

        {/* MIDDLE: Online Platform */}
        <div className="footer-col footer-links">
          <h3 className="col-title">Online Platform</h3>
          <ul className="col-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Course</a></li>
            <li><a href="#">Instructor</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Instructor Details</a></li>
            <li><a href="#">Purchase Guide</a></li>
          </ul>
        </div>

        {/* MIDDLE: Links */}
        <div className="footer-col footer-links">
          <h3 className="col-title">Links</h3>
          <ul className="col-list">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">News & Articles</a></li>
            <li><a href="#">FAQ’s</a></li>
            <li><a href="#">Coming Soon</a></li>
            <li><a href="#">Sign In/Registration</a></li>
          </ul>
        </div>

        {/* RIGHT: Subscribe + social */}
        <div className="footer-col footer-subscribe">
          <h3 className="col-title">Contacts</h3>
          <p className="subscribe-note">
            Enter your email address to register to our newsletter subscription
          </p>

          {/* single inline box: input + button */}
          <div className="subscribe-box">
            <input className="subscribe-input" type="email" placeholder="Your email" />
            <button className="subscribe-btn">Subscribe →</button>
          </div>

          {/* social icons inline */}
          <div className="social-row">
            <a href="#" className="social facebook" aria-label="facebook"><FaFacebookF /></a>
            <a href="#" className="social linkedin" aria-label="linkedin"><FaLinkedinIn /></a>
            <a href="#" className="social instagram" aria-label="instagram"><FaInstagram /></a>
            <a href="#" className="social twitter" aria-label="twitter"><FaTwitter /></a>
            <a href="#" className="social youtube" aria-label="youtube"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>Copyright 2025 <a href="#">EduBlink</a> | Developed By <a href="#">DevsBlink</a>. All Rights Reserved</p>
      </div>

      {/* back to top (floating) */}
      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        <FaChevronUp />
      </button>
    </footer>
  );
};

export default Footer;
