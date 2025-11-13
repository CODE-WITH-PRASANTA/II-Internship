import React, { useState, useEffect } from "react";
import "./LogIn.css";
import image from "../../../Asserts/auth-1.webp";
import icon from "../../../Asserts/IIIT LOGO (2).png";

const LogIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`login-container ${fadeIn ? "fade-in" : ""}`}>
      {/* Left Illustration */}
      <div className="login-left">
        <img src={image} alt="Illustration" className="login-image slide-in-left" />
        <h1 className="login-welcome slide-in-left">
          Welcome to <span>IIT</span> Courses
        </h1>
        <p className="login-description slide-in-left">
          Platform designed to help organizations, educators, and learners
          manage, deliver, and track learning and training activities.
        </p>
        <div className="login-slider">
          <span className="login-dot"></span>
          <span className="login-dot"></span>
          <span className="login-dot active"></span>
        </div>
      </div>

      {/* Right Form */}
      <div className="login-right">
        <div className="login-logo slide-in-right">
          <img src={icon} alt="Logo" />
        </div>

        <form className="login-form slide-in-right" onSubmit={handleLogin}>
          <h2 className="login-title">Sign into Your Account</h2>

          <label>Email *</label>
          <div className="login-input-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="login-input-icon">📧</span>
          </div>

          <label>Password *</label>
          <div className="login-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="login-input-icon login-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="login-forgot">
              Forgot Password ?
            </a>
          </div>

          <button type="submit" className="login-button">
            Login 
          </button>

          <div className="login-divider">Or</div>

          <div className="login-socials">
            <button type="button" className="login-google">
              <span>G</span> Google
            </button>
            <button type="button" className="login-facebook">
              <span>F</span> Facebook
            </button>
          </div>

          <p className="login-signup">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>

        <a href="#" className="login-back">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
};

export default LogIn;
