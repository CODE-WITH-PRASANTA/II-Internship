import React, { useState } from "react";
import "./SignInAndLogIn.css";
import log1 from "../../assets/log-1.webp";
import log2 from "../../assets/log-2.webp";
import { Eye, EyeOff } from "lucide-react";
import { FaApple, FaGoogle } from "react-icons/fa";

const SignInAndLogIn = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signinlogin-wrapper">
      {/* Top Section */}
      <div className="signinlogin-top">
        <img src={log1} alt="avatar-decor" className="decor-img left" />
        <img src={log2} alt="avatar-decor" className="decor-img right" />
      </div>

      {/* Center Form Card */}
      <div className="signinlogin-card">
        <div className="signinlogin-logo">
          <div className="logo-shape">ℓ</div>
        </div>
        <h2 className="signinlogin-title">Hi! Welcome To</h2>
        <h3 className="signinlogin-subtitle">LearnUp Online Study Center</h3>

        {/* Tabs */}
        <div className="signinlogin-tabs">
          <span
            className={activeTab === "signin" ? "active" : ""}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </span>
          <span
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Register
          </span>
        </div>

        {/* Divider line */}
        <div className="signinlogin-tab-line">
          <div
            className={`line-indicator ${activeTab === "register" ? "right" : "left"}`}
          ></div>
        </div>

        {/* Form */}
        <form className="signinlogin-form">
          {activeTab === "register" && (
            <div className="name-fields">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
          )}

          <input type="email" placeholder="Enter your email.." />

          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Sign In mode extras */}
          {activeTab === "signin" && (
            <div className="signin-options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          )}

          <button type="submit" className="signinlogin-btn">
            {activeTab === "register" ? "Sign Up" : "Sign In"}
          </button>

          {/* Register mode extras */}
          {activeTab === "register" && (
            <>
              <div className="or-divider">
                <span>OR</span>
              </div>
              <div className="social-signup">
                <button className="apple-btn">
                  <FaApple size={18} /> Sign up with Apple
                </button>
                <button className="google-btn">
                  <FaGoogle size={18} /> Sign up with Google
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignInAndLogIn;
