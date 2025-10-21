import React from "react";
import "./TermsAndConditionBanner.css";

const TermsAndConditionBanner = () => {
  return (
    <section className="termsandconditionbanner-banner">
      <div className="termsandconditionbanner-bgshape termsandconditionbanner-shape-left"></div>
      <div className="termsandconditionbanner-bgshape termsandconditionbanner-shape-right"></div>
      <div className="termsandconditionbanner-dots"></div>
      <div className="termsandconditionbanner-waveicon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="termsandconditionbanner-content">
        <h1>Terms and Conditions</h1>
        <p className="termsandconditionbanner-breadcrumb">
          Home <span>›</span> Pages <span>›</span> Terms and Conditions
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditionBanner;
