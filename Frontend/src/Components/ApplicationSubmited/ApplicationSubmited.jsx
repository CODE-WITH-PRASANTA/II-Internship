import React from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ApplicationSubmited.css";

const ApplicationSubmited = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/"); // change this if your home route is different
  };

  return (
    <div className="i3success-container">
      <div className="i3success-content">

        {/* Check Icon */}
        <div className="i3success-icon-wrapper">
          <FaCheck className="i3success-icon" />
        </div>

        {/* Title */}
        <h1 className="i3success-title">
          Application Submitted
        </h1>

        {/* Subtitle */}
        <p className="i3success-subtitle">
          Thanks for your interest!
        </p>

        <p className="i3success-description">
          Our review team will review your application and call you for interview
        </p>

        {/* Button */}
        <button 
          className="i3success-btn"
          onClick={handleBackHome}
        >
          Back To Home
        </button>

      </div>
    </div>
  );
};

export default ApplicationSubmited;
