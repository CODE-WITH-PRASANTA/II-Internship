import React from "react";
import "./CertificateSection.css";

// Assets
import QualityCertificatebg from "../../assets/quality-certi-bg.svg";
import dotshape from "../../assets/shape-2.png";

const CertificateSection = () => {
  return (
    <section
      className="certificate-section"
      style={{ backgroundImage: `url(${QualityCertificatebg})` }}
    >
      {/* Decorative Shapes */}
      <img src={dotshape} alt="dot-shape" className="dot-shape dot-shape-left" />
      <img src={dotshape} alt="dot-shape" className="dot-shape dot-shape-right" />

      {/* Content */}
      <div className="certificate-content">
        <h2>
          Get Your Quality Skills <span>Certificate</span> <br />
          Through EduBlink
        </h2>
        <button className="cta-btn">Get started now →</button>
      </div>
    </section>
  );
};

export default CertificateSection;
