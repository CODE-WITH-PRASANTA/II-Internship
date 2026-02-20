import React from "react";
import "./RunningDeveloper.css";
import {
  FaCheckCircle,
  FaShoppingCart,
  FaUserAlt,
  FaBook,
  FaGamepad,
  FaClock,
  FaFlag,
  FaShieldAlt,
  FaTag,
} from "react-icons/fa";

const RunningDeveloper = () => {
  return (
    <div className="running-dev-wrapper">

      {/* LEFT CARD */}
      <div className="running-dev-card">

        {/* Profile Header */}
        <div className="running-dev-profile">
          <img
            src="https://i.imgur.com/4ZQZ4bE.jpeg"
            alt="profile"
            className="running-dev-img"
          />
          <div>
            <h3 className="running-dev-name">Adam K. Marck</h3>
            <p className="running-dev-role">
              Full-Stack Developer from Las Vegas
            </p>
          </div>
        </div>

        <hr className="running-dev-divider" />

        {/* Discount */}
        <span className="running-dev-discount">25% off</span>

        {/* Price */}
        <h2 className="running-dev-price">$179.45</h2>

        {/* Course Features */}
        <h3 className="running-dev-section-title">Course Features</h3>

        <ul className="running-dev-list">
          <li><FaCheckCircle className="running-dev-icon" /> Fully Programming</li>
          <li><FaCheckCircle className="running-dev-icon" /> Help Code to Code</li>
          <li><FaCheckCircle className="running-dev-icon" /> Free Trial 7 Days</li>
          <li><FaCheckCircle className="running-dev-icon" /> Unlimited Videos</li>
          <li><FaCheckCircle className="running-dev-icon" /> 24x7 Support</li>
        </ul>

        {/* Buttons */}
        <button className="running-dev-cart-btn">
          <FaShoppingCart /> Add To Cart
        </button>

        <button className="running-dev-enroll-btn">Enrolled Now</button>
      </div>

      {/* RIGHT CARD */}
      <div className="running-dev-features-card">
        <h3 className="running-dev-section-title">Course Features</h3>

        <div className="running-dev-features-grid">

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaUserAlt className="running-dev-feature-icon" />
              <span>Student Enrolled</span>
            </div>
            <span className="running-dev-feature-value">1740</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaBook className="running-dev-feature-icon" />
              <span>Lectures</span>
            </div>
            <span className="running-dev-feature-value">10</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaGamepad className="running-dev-feature-icon" />
              <span>Quizzes</span>
            </div>
            <span className="running-dev-feature-value">4</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaClock className="running-dev-feature-icon" />
              <span>Duration</span>
            </div>
            <span className="running-dev-feature-value">60h 40min</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaTag className="running-dev-feature-icon" />
              <span>Skill Level</span>
            </div>
            <span className="running-dev-feature-value">Beginner</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaFlag className="running-dev-feature-icon" />
              <span>Language</span>
            </div>
            <span className="running-dev-feature-value">English</span>
          </div>

          <div className="running-dev-feature-row">
            <div className="running-dev-feature-left">
              <FaShieldAlt className="running-dev-feature-icon" />
              <span>Certification</span>
            </div>
            <span className="running-dev-feature-value">Yes</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RunningDeveloper;
