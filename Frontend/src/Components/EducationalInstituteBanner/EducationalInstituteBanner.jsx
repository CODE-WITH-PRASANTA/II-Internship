import React, { useState, useEffect, useRef } from "react";
import "./EducationalInstituteBanner.css";
import bg1 from "../../assets/bg-new.webp";
import bg2 from "../../assets/bg2.webp";
import edu1 from "../../assets/edu1.webp";
import edu2 from "../../assets/edu2.webp";
import edu3 from "../../assets/edu3.webp";
import edu4 from "../../assets/edu4.webp";
import edu5 from "../../assets/edu5.webp";
import edu6 from "../../assets/edu6.webp";
import edu7 from "../../assets/edu7.webp";
import edu8 from "../../assets/edu8.webp";
import edu9 from "../../assets/edu9.webp";

import { FaMicrophone, FaVideo, FaPhoneAlt, FaVolumeUp, FaUsers } from "react-icons/fa";

const EducationalInstituteBanner = () => {
  const sliderRef = useRef(null);
  const sliderImages = [edu1, edu2, edu3, edu4, edu5, edu6, edu7, edu8, edu9];

  // Infinite smooth auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const step = 1; // pixels per frame
    const scrollSlider = () => {
      scrollAmount += step;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
      requestAnimationFrame(scrollSlider);
    };
    scrollSlider();
  }, []);

  return (
    <>
      {/* ===== BANNER SECTION ===== */}
      <section
        className="educationalinstitutebanner-container"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="educationalinstitutebanner-overlay">
          <div className="educationalinstitutebanner-content">
            <h1 className="educationalinstitutebanner-title">
              Empowering Future Minds with <br /> Smart Learning Solutions
            </h1>
            <p className="educationalinstitutebanner-subtitle">
              Experience interactive education through live sessions, real-time discussions, and cutting-edge tools built for every student.
            </p>
            <div className="educationalinstitutebanner-buttons">
              <button className="get-started-btn">Get Started</button>
              <div className="watch-video-btn">
                <span className="play-icon">▶</span> Watch Video
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LIVE CLASS SECTION (OVERLAP) ===== */}
      <section className="educationalinstitutebanner-live-section">
        <div className="live-card">
          <div className="live-badge">
            <span className="live-dot">●</span> LIVE <span className="live-time">04:32:22</span>
          </div>

          {/* Static background image (not slider) */}
          <img
            src={bg2}
            alt="Live class"
            className="live-image"
          />

          {/* Video control icons */}
          <div className="live-controls">
            <div className="control-btn"><FaMicrophone /></div>
            <div className="control-btn"><FaVideo /></div>
            <div className="control-btn end"><FaPhoneAlt /></div>
            <div className="control-btn"><FaVolumeUp /></div>
            <div className="control-btn"><FaUsers /></div>
          </div>
        </div>

        {/* ===== AUTO IMAGE SLIDER ===== */}
        <div className="educationalinstitutebanner-slider" ref={sliderRef}>
          {[...sliderImages, ...sliderImages].map((img, i) => (
            <div key={i} className="slider-img-box">
              <img src={img} alt={`edu${i}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default EducationalInstituteBanner;
