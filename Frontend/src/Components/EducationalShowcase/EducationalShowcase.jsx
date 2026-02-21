import React from "react";
import "./EducationalShowcase.css";

import smallImageTop from "../../assets/A-1.webp";
import smallImageBottom from "../../assets/A-2.webp";
import mainImage from "../../assets/A-3.webp";
import bottomRightImage from "../../assets/A-4.webp";

const EducationalShowcase = () => {
  return (
    <section className="eduportshowcase-section">

      {/* HEADER TEXT */}
      <div className="eduportshowcase-header">
        <h2>
          Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.
         
        </h2>
      </div>

      {/* CONTENT GRID */}
      <div className="eduportshowcase-grid">

        {/* LEFT COLUMN */}
        <div className="eduportshowcase-left">
          <img
            src={smallImageTop}
            alt="Students discussion"
            className="eduportshowcase-small-top"
          />

          <img
            src={smallImageBottom}
            alt="Online learning"
            className="eduportshowcase-small-bottom"
          />
        </div>

        {/* CENTER COLUMN */}
        <div className="eduportshowcase-center">
          <img
            src={mainImage}
            alt="Main showcase"
            className="eduportshowcase-main-image"
          />

          {/* Decorative dots */}
          <div className="eduportshowcase-dots"></div>

          
         
              
            
          
        </div>

        {/* RIGHT COLUMN */}
        <div className="eduportshowcase-right">
          <div className="eduportshowcase-orange-card">
            <span>Our goal:</span>
            <h3>
              “Be open to new ideas and approaches.
              Develop your problem-solving skills.”
            </h3>
          </div>

          <img
            src={bottomRightImage}
            alt="Students group"
            className="eduportshowcase-bottom-image"
          />
        </div>

      </div>
    </section>
  );
};

export default EducationalShowcase;
