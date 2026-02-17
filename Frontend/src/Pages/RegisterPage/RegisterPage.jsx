import React from "react";
import "./RegisterPage.css";
import signupImg from "../../assets/grid8.webp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="xmsu-container">
      <div className="xmsu-card">

        {/* LEFT SIDE */}
        <div
          className="xmsu-left"
          style={{ backgroundImage: `url(${signupImg})` }}
        >
          <div className="xmsu-overlay">
            <h1 className="xmsu-logo">i3 Internship</h1>

            <div className="xmsu-left-content">
              <p className="xmsu-welcome">Welcome to</p>
              <h2>We're a Digital Agency.</h2>
              <p className="xmsu-desc">
                We are glad to see you again! Get access to your Orders,
                Wishlist and Recommendations.
              </p>
            </div>

            <div className="xmsu-register">
              <p>Already have an account?</p>
              <Link to="/login" className="xmsu-link">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="xmsu-right">
          <h2 className="xmsu-title">Sign Up</h2>
          <p className="xmsu-subtitle">
            Sign Up to try our amazing services
          </p>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="xmsu-input"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="xmsu-input"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="xmsu-input"
          />

          <div className="xmsu-checkbox">
            <input type="checkbox" id="terms" className="xmsu-check-input" />
            <label htmlFor="terms" className="xmsu-check-label">
              I agree with Terms of Service. Terms Of Payments and Privacy Policy
            </label>
          </div>

          <button className="xmsu-btn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
