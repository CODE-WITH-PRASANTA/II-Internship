import React from "react";
import "./PrivacyPolicyBanner.css";

const PrivacyPolicyBanner = () => {
  return (
    <section className="privacypolicybanner-banner">
      <div className="privacypolicybanner-bgshape privacypolicybanner-shape-left"></div>
      <div className="privacypolicybanner-bgshape privacypolicybanner-shape-right"></div>
      <div className="privacypolicybanner-dots"></div>
      <div className="privacypolicybanner-waveicon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="privacypolicybanner-content">
        <h1>Privacy Policy</h1>
        <p className="privacypolicybanner-breadcrumb">
          Home <span>›</span> Pages <span>›</span> Privacy Policy
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyBanner;
