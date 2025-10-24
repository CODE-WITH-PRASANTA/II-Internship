import React from 'react';
import './EducationalInstituteWorkProcess.css';

import icon1 from "../../assets/icon1.webp";
import icon2 from "../../assets/icon2.webp";
import icon3 from "../../assets/icon3.webp";

const EducationalInstituteWorkProcess = () => {
  return (
    <div className="educationalinstitute-work-process">
      <h2>Work & Process</h2>
      <p className="educationalinstitute-subheading">Working Process for Join And Benefits</p>
      <div className="educationalinstitute-steps">
        <div className="educationalinstitute-step">
          <div className="educationalinstitute-icon">
            <img src={icon1} alt="Find Course" />
          </div>
          <h3>Find Course</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="educationalinstitute-step">
          <div className="educationalinstitute-icon">
            <img src={icon2} alt="Book Your Seat" />
          </div>
          <h3>Book Your Seat</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div className="educationalinstitute-step">
          <div className="educationalinstitute-icon">
            <img src={icon3} alt="Get Certified" />
          </div>
          <h3>Get Certified</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
      </div>
    </div>
  );
};

export default EducationalInstituteWorkProcess;
