import React from "react";
import "./EducationalAbout.css";
import { FaCheckCircle } from "react-icons/fa";

import aboutImage from "../../assets/project-3.webp";

const EducationalAbout = () => {
  return (
    <section className="eduportabout-section">

      {/* Top Heading */}
      <div className="eduportabout-header">
        <h2>About Eduport Portal</h2>
        <p>
          How promotion excellent curiosity yet attempted happiness Gay prosperous
          impression had conviction For every delay death ask to style Me mean able
          my by in they Extremity now strangers contained.
        </p>
      </div>

      {/* Main Content */}
      <div className="eduportabout-grid">

        {/* LEFT IMAGE */}
        <div className="eduportabout-image-wrapper">
          <img src={aboutImage} alt="Students meeting" />

          {/* Decorative SVG */}
          <div className="eduportabout-decorative-dots">
            <svg viewBox="0 0 200 200">
              {[...Array(28)].map((_, i) => {
                const angle = (i / 28) * Math.PI * 2;
                const radius = 70;
                return (
                  <ellipse
                    key={i}
                    cx={100 + radius * Math.cos(angle)}
                    cy={100 + radius * Math.sin(angle)}
                    rx="4"
                    ry="10"
                    fill="#111"
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="eduportabout-content">

          <h3>
            35,000+ happy students joined with us to achieve their goals
          </h3>

          <p>
            How promotion excellent curiosity yet attempted happiness Gay
            prosperous impression had conviction For every delay death ask to style
            Me mean able my by in they Extremity now strangers contained breakfast
            him discourse additions Sincerity collected contented led now perpetual
            extremely forfeited.
          </p>

          <p>
            Happiness prosperous impression had conviction For every delay in they
            Extremity now strangers contained breakfast him discourse additions
            Sincerity collected contented led now perpetual extremely forfeited.
          </p>

          {/* CHECKLIST */}
          <ul className="eduportabout-checklist">
            <li><FaCheckCircle /> Setup and installation takes less time</li>
            <li><FaCheckCircle /> Professional and easy to use software</li>
            <li><FaCheckCircle /> Perfect for any device with pixel-perfect design</li>
            <li><FaCheckCircle /> Setup and installation too fast</li>
          </ul>

          {/* PROGRESS BARS */}
          <div className="eduportabout-progress-grid">

            <div className="eduportabout-progress-item">
              <div className="eduportabout-progress-label">
                <span>Enterprise customer</span>
                <span>85%</span>
              </div>
              <div className="eduportabout-progress-bar">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="eduportabout-progress-item">
              <div className="eduportabout-progress-label">
                <span>Accurate Course</span>
                <span>90%</span>
              </div>
              <div className="eduportabout-progress-bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </div>

            <div className="eduportabout-progress-item">
              <div className="eduportabout-progress-label">
                <span>Languages</span>
                <span>75%</span>
              </div>
              <div className="eduportabout-progress-bar">
                <div style={{ width: "75%" }}></div>
              </div>
            </div>

            <div className="eduportabout-progress-item">
              <div className="eduportabout-progress-label">
                <span>Instructors</span>
                <span>95%</span>
              </div>
              <div className="eduportabout-progress-bar">
                <div style={{ width: "95%" }}></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationalAbout;
