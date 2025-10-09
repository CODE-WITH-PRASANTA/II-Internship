import React from "react";
import "./SocialIcons.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons-section">
      <div className="social-icons">
        <a href="#" className="icon facebook" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="icon twitter" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="icon instagram" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" className="icon youtube" aria-label="YouTube"><FaYoutube /></a>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-text">
        © 2025 <span>PR WEBSTOCK</span> — All rights reserved.
      </div>
    </div>
  );
};

export default SocialIcons;
