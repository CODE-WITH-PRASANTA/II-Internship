import React from "react";
import "./FeaturesHeader.css";
import bg1 from "../../assets/bg4.webp";

const FeaturesHeader = () => {
  return (
    <section
      className="features-header"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="features-overlay">
        <h1 className="features-title">GET MANY MORE FEATURES</h1>
        <p className="features-subtitle">Home</p>
      </div>
    </section>
  );
};

export default FeaturesHeader;
