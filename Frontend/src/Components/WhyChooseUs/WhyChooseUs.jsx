import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./WhyChooseUs.css";

/* ===== IMPORT IMAGE ===== */
import studentImg from "../../assets/student.webp";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* ===== LEFT CONTENT ===== */}
        <div className="why-left">
          <h2>
            Why Students <span>Choose</span> Us for
            <br />
            Gain Their Knowledge
          </h2>

          <p className="desc">
            Helping employees gain skills and providing career development often
            take a back seat to business priorities but workplace better right
            now. Seventy percent of workers think that.
          </p>

          <ul className="why-list">
            <li><FaCheckCircle /> Free for physically handcraft</li>
            <li><FaCheckCircle /> Easy to enroll courses</li>
            <li><FaCheckCircle /> Course certificate for particular course</li>
          </ul>

          <button className="about-btn">More about us</button>
        </div>

        {/* ===== RIGHT IMAGE COLLAGE ===== */}
        <div className="why-right">
          <div className="image-grid">

            {/* Decorative blocks */}
            <div className="square yellow"></div>
            <div className="square blue"></div>

            {/* Main collage image */}
            <img src={studentImg} alt="Students" className="students-img" />

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
