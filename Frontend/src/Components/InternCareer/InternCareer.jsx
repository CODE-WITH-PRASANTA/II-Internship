import React from "react";
import "./InternCareer.css";
import careerImg from "../../assets/career-background.webp"; // update with actual path

function InternCareer() {
  return (
    <section className="interncareer">
      {/* Animated background circles */}
      <div className="interncareer-bg">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
      </div>

      <div className="interncareer-container">
        <div className="interncareer-text">
          <h2 className="interncareer-title">
            Carrier
            <span className="interncareer-underline"></span>
          </h2>
          <p className="interncareer-desc">
            We help companies to focus on core business by taking over complete
            responsibility. We provide both black-box and white-box testing on
            demand.
          </p>
        </div>

        <div className="interncareer-image">
          <img src={careerImg} alt="career growth" />
        </div>
      </div>

      {/* Modern wavy bottom design */}
      <div className="interncareer-bottom-line">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C360,140 1080,20 1440,80 L1440,120 L0,120 Z"
            fill="#e3ecff"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default InternCareer;
