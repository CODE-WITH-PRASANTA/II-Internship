import React from 'react';
import './HelpSection.css';
import help from "../../assets/help.webp"

const HelpSection = () => {
  return (
    <section className="help-section">
      <h1 className="help-title">I can help you with</h1>
      <p className="help-subtitle">Most frequent questions and answers</p>

      <div className="help-grid-container">
        {/* Left Side Boxes */}
        <div className="help-box help-box-top-left">
          <i className="icon">&#128100;</i>
          <h3>1:1 Coaching</h3>
          <p>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</p>
        </div>
        <div className="help-box help-box-bottom-left">
          <i className="icon">&#127919;</i>
          <h3>Life Programs</h3>
          <p>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</p>
        </div>

        {/* Center Image */}
        <div className="help-center-image">
          <img src={help} alt="Coach" />
        </div>

        {/* Right Side Boxes */}
        <div className="help-box help-box-top-right">
          <i className="icon">&#127800;</i>
          <h3>Self Development</h3>
          <p>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</p>
        </div>
        <div className="help-box help-box-bottom-right">
          <i className="icon">&#127793;</i>
          <h3>Support</h3>
          <p>Magnetized strongly enough pre vending domain overeus all initial results to estimate.</p>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
