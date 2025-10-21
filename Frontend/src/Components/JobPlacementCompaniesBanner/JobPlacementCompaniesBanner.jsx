import React from "react";
import "./JobPlacementCompaniesBanner.css";

const JobPlacementCompaniesBanner = () => {
  return (
    <section className="jobplacementcompaniesbanner-banner">
      <div className="jobplacementcompaniesbanner-bgshape jobplacementcompaniesbanner-shape-left"></div>
      <div className="jobplacementcompaniesbanner-bgshape jobplacementcompaniesbanner-shape-right"></div>
      <div className="jobplacementcompaniesbanner-dots"></div>
      <div className="jobplacementcompaniesbanner-waveicon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="jobplacementcompaniesbanner-content">
        <h1>Job Placement Companies</h1>
        <p className="jobplacementcompaniesbanner-breadcrumb">
          Home <span>›</span> Pages <span>›</span> Job Placement Companies
        </p>
      </div>
    </section>
  );
};

export default JobPlacementCompaniesBanner;
