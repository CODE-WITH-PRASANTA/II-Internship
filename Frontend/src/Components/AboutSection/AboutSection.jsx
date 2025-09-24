import React from "react";
import { FaPlayCircle, FaAward, FaCheck } from "react-icons/fa";
import "./AboutSection.css";
import aboutimage from "../../assets/about-01.webp"

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Image Area */}
        <div className="about-image-area">
          <img src={aboutimage} alt="Learning" className="about-main-image" />

          {/* Video Play Overlay */}
          <div className="about-video-overlay">
            <FaPlayCircle className="play-icon" />
          </div>

          {/* Awards Badge */}
          <div className="about-award-badge">
            <FaAward className="award-icon" />
            <div className="award-text">
              <h3>29+</h3>
              <p>Wonderful Awards</p>
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="dots-red"></div>
          <div className="dots-green"></div>
        </div>

        {/* Right Text Area */}
        <div className="about-text-area">
          <p className="about-small-title">ABOUT US</p>
          <h2 className="about-title">
            Learn & Grow Your Skills <span className="highlight">From Anywhere</span>
          </h2>
          <p className="about-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod ex
            tempor incididunt labore dolore magna aliqua enim minim veniam quis
            nostrud exercitation ullamco laboris.
          </p>

          <ul className="about-features">
            <li><FaCheck className="check-icon" /> Expert Trainers</li>
            <li><FaCheck className="check-icon" /> Online Remote Learning</li>
            <li><FaCheck className="check-icon" /> Lifetime Access</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
