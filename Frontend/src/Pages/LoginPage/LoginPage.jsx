import React from "react";
import "./LoginPage.css";
import loginImg from "../../assets/grid8.webp";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="xmee-container">
      <div className="xmee-card">

        {/* LEFT SIDE */}
        <div
          className="xmee-left"
          style={{ backgroundImage: `url(${loginImg})` }}
        >
          <div className="xmee-overlay">
            <h1 className="xmee-logo">i3 Internship</h1>

            <div className="xmee-left-content">
              <p className="xmee-welcome">Welcome to</p>
              <h2>We're a Digital Agency.</h2>
              <p className="xmee-desc">
                We are glad to see you again! Get access to your Orders,
                Wishlist and Recommendations.
              </p>
            </div>

            <div className="xmee-register">
              <p>Don't have an account?</p>
              <Link to="/Register" className="xmee-link">
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="xmee-right">
          <h2 className="xmee-login-title">Log In</h2>
          <p className="xmee-subtitle">
            Log In to try our amazing services
          </p>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="xmee-input"
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="xmee-input"
          />

          <Link to="/forgotpassword" className="xmee-forgot">
            Forgot Password?
          </Link>

          <button className="xmee-login-btn">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
