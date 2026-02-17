import React from "react";
import "./ForgotPassword.css";
import bgImage from "../../assets/grid8.webp";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="xmfp-container">
      <div className="xmfp-card">

        {/* LEFT SIDE */}
        <div
          className="xmfp-left"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="xmfp-overlay">
            <h1 className="xmfp-logo">i3 Internship</h1>

            <div className="xmfp-left-content">
              <p className="xmfp-welcome">Welcome to</p>
              <h2>We're a Digital Agency.</h2>
              <p className="xmfp-desc">
                We are glad to see you again! Get access to your Orders,
                Wishlist and Recommendations.
              </p>
            </div>

            <div className="xmfp-signin">
              <p>Don't have an account?</p>
              <Link to="/Register" className="xmfp-link">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="xmfp-right">
          <h2 className="xmfp-title">Reset Password</h2>
          <p className="xmfp-subtitle">
            Enter the email address or mobile number associated with your account.
          </p>

          <label>Email or Mobile Number</label>
          <input
            type="text"
            placeholder="Email Or Mobile Number"
            className="xmfp-input"
          />

          <button className="xmfp-btn">Continue</button>

          <div className="xmfp-return">
            Return to?{" "}
            <Link to="/login" className="xmfp-return-link">
              Log in
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
