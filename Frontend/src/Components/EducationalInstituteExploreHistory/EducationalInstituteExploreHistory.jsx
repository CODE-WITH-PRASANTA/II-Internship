// EducationalInstituteExploreHistory.js
import React from 'react';
import './EducationalInstituteExploreHistory.css';
import history from "../../assets/history.webp";
import { FaCheckCircle } from "react-icons/fa";

const EducationalInstituteExploreHistory = () => {
  return (
    <div className="educationalinstitute-explore-container">
      <div className="educationalinstitute-explore-content">
        <div className="educationalinstitute-left">
          <div className="educationalinstitute-header">
            <h1>Explore Our History & Core Value</h1>
            <p>
              You made all the required mock ups for commissioned layout, got all the approvals, built a tested code base or had them built, you decided on a content management system, got a license for it or adapted open source software for your client's needs.
            </p>
          </div>

          <div className="educationalinstitute-features">
            <div className="educationalinstitute-feature">
              <FaCheckCircle className="educationalinstitute-check-icon" />
              <div className="feature-text">
                <h3>Wide Range Of Courses</h3>
                <p>Choose from thousands of subjects and skills.</p>
              </div>
            </div>
            <div className="educationalinstitute-feature">
              <FaCheckCircle className="educationalinstitute-check-icon" />
              <div className="feature-text">
                <h3>Cost-Effective</h3>
                <p>Often more affordable than traditional classroom learning.</p>
              </div>
            </div>
            <div className="educationalinstitute-feature">
              <FaCheckCircle className="educationalinstitute-check-icon" />
              <div className="feature-text">
                <h3>Global Networking</h3>
                <p>Connect with learners and instructors from around the world.</p>
              </div>
            </div>
          </div>

          <button className="educationalinstitute-membership-btn">Get Membership</button>
        </div>

        <div className="educationalinstitute-right">
          <img src={history} alt="history" className="educationalinstitute-history-image" />
          <div className="educationalinstitute-people-images">
            <div className="educationalinstitute-person-image" style={{ backgroundColor: 'green' }}></div>
            <div className="educationalinstitute-person-image" style={{ backgroundColor: 'red' }}></div>
            <div className="educationalinstitute-person-image" style={{ backgroundColor: 'orange' }}></div>
            <div className="educationalinstitute-person-image" style={{ backgroundColor: 'purple' }}></div>
            <div className="educationalinstitute-person-image" style={{ backgroundColor: 'teal' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalInstituteExploreHistory;
