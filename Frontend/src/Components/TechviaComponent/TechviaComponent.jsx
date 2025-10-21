import React from 'react';
import './TechviaComponent.css';

const TechviaComponent = () => {
  return (
    <div className="techviacomponent-container">
      {/* Top Row: Button on left, Text on right */}
      <div className="techviacomponent-top-row">
        <div className="techviacomponent-about-us">
          <div className="techviacomponent-about-us-button">About Us</div>
        </div>
        <p className="techviacomponent-text">
          At Techvia, we believe technology should empower you — not frustrate you. That's why we provide fast, reliable, and friendly tech support tailored to your <span className="techviacomponent-highlight">needs</span>. <span className="techviacomponent-highlight">From fixing everyday computer glitches to solving complex network challenges, we've got you covered.</span>
        </p>
      </div>

      {/* Stats Section */}
      <div className="techviacomponent-stats-container">
        <div className="techviacomponent-stat">
          <h2>50,000+</h2>
          <p>Trusted globally across multiple industries and communities.</p>
        </div>
        <div className="techviacomponent-stat">
          <h2>15+</h2>
          <p>Years of experience delivering reliable tech support worldwide.</p>
        </div>
        <div className="techviacomponent-stat">
          <h2>10,000+</h2>
          <p>Issues resolved efficiently for our satisfied customers.</p>
        </div>
        <div className="techviacomponent-stat">
          <h2>99%</h2>
          <p>Customer satisfaction rate from our global client base.</p>
        </div>
      </div>
    </div>
  );
};

export default TechviaComponent;
