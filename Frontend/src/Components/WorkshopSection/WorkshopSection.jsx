//jsx//

import React from "react";
import {
  FaPlay,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";
import "./WorkshopSection.css";

/* ===== IMPORT IMAGES ===== */
import workshopImg from "../../assets/Workshop-img.webp";
import workshopShape from "../../assets/workshop_shape.webp";

const WorkshopSection = () => {
  return (
    <section className="Workshop-Section-section">
      <div className="Workshop-Section-container">

        {/* ===== LEFT IMAGE SIDE ===== */}
        <div className="Workshop-Section-left">
          <div className="Workshop-Section-image-wrapper">
            <img
              src={workshopImg}
              alt="Workshop"
              className="Workshop-Section-main-img"
            />

            {/* Floating shape image */}
            <img
              src={workshopShape}
              alt="Live Class"
              className="Workshop-Section-floating-shape"
            />

            {/* Play Button */}
            <div className="Workshop-Section-play-btn">
              <FaPlay />
            </div>
          </div>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="Workshop-Section-right">
          <span className="Workshop-Section-tag">Free Workshop</span>

          <h2>Join Our Free Workshops</h2>

          <p className="Workshop-Section-desc">
            Edhen an unknown printer took a galley of type and scrambled it to
            make a type specimen bookas survived not only five centuries.
            Edhen an unknown printer took a galley of type and scrambled.
          </p>

          <div className="Workshop-Section-feature-grid">
            <div className="Workshop-Section-feature-item">
              <div className="Workshop-Section-icon Workshop-Section-icon-pink">
                <FaChalkboardTeacher />
              </div>
              <div>
                <h4>Smooth Virtual Live Classes</h4>
                <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
              </div>
            </div>

            <div className="Workshop-Section-feature-item">
              <div className="Workshop-Section-icon Workshop-Section-icon-blue">
                <FaGraduationCap />
              </div>
              <div>
                <h4>99% Graduation Complete</h4>
                <p>Edhen an unknown printer Rtook galley of type scrambled.</p>
              </div>
            </div>
          </div>

          <button className="Workshop-Section-join-btn">
            Quick Join Now <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
