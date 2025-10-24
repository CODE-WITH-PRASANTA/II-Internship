// EducationalInstituteLearnUp.js
import React from 'react';
import './EducationalInstituteLearnUp.css';
import learn2 from "../../assets/learn2.webp";
import { FaCheck } from 'react-icons/fa';

const EducationalInstituteLearnUp = () => {
  return (
    <div className="educationalinstitute-learnup-container">
      <div className="educationalinstitute-left-section">
        <img src={learn2} alt="LearnUp" />
      </div>
      <div className="educationalinstitute-right-section">
        <h2>Why LearnUp Learning Platform?</h2>
        <p>We're developing an innovative Bootstrap-powered UI Kit tool designed specifically for developers, engineers, full-stack developers, and digital agencies.</p>
        <p>You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs.</p>
        
        <ul>
          <li><span className="educationalinstitute-check"><FaCheck /></span> Wide Range of Courses</li>
          <li><span className="educationalinstitute-check"><FaCheck /></span> Cost-Effective</li>
          <li><span className="educationalinstitute-check"><FaCheck /></span> Global Networking</li>
          <li><span className="educationalinstitute-check"><FaCheck /></span> Get Certificate</li>
        </ul>

        <button className="educationalinstitute-create-account-btn">Create an Account</button>
      </div>
    </div>
  );
};

export default EducationalInstituteLearnUp;
