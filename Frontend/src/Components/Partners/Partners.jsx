import React from "react";
import "./Partners.css";

// Assets
import Brand1 from "../../assets/brand-01.webp";
import Brand2 from "../../assets/brand-02.webp";
import Brand3 from "../../assets/brand-03.webp";
import Brand4 from "../../assets/brand-04.webp";
import Brand5 from "../../assets/brand-05.webp";
import Brand6 from "../../assets/brand-02.webp";
import Brand7 from "../../assets/brand-03.webp";
import Brand8 from "../../assets/brand-01.webp";

import Dotshape from "../../assets/shape-2.png";

const logos = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7, Brand8];

const Partners = () => {
  return (
    <section className="partner-section">
      {/* Dot Shape Decoration */}
      <img src={Dotshape} alt="dot-shape" className="partner-dotshape" />

      <div className="partner-container">
        {/* Left text section */}
        <div className="partner-text">
          <p className="partner-small-heading">OUR PARTNERS</p>
          <h2 className="partner-title">Learn with Our Partners</h2>
          <div className="partner-underline"></div>
          <p className="partner-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt.
          </p>
        </div>

        {/* Right logos grid */}
        <div className="partner-logos">
          {logos.map((logo, index) => (
            <div key={index} className="partner-card">
              <img src={logo} alt={`partner-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
