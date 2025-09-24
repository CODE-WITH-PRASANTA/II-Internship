import React from "react";
import "./Partners.css";

const logos = [
  "", // put logo paths or leave blank for placeholders
  "",
  "",
  "",
  "",
  "",
  "",
  ""
];

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        {/* Left text section */}
        <div className="partners-text">
          <p className="small-heading">OUR PARTNERS</p>
          <h2 className="partners-title">Learn with Our Partners</h2>
          <div className="underline"></div>
          <p className="partners-desc">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
            tempor incididunt.
          </p>
        </div>

        {/* Right logos grid */}
        <div className="partners-logos">
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
