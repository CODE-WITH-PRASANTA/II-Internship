import React, { useState } from "react";
import "./RubyRailsProgram.css";
import { CheckSquare, BookOpen, Users, X } from "lucide-react";

import courseImg from "../../assets/category-1.webp";

const RubyRailsProgram = () => {
  const [open, setOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/fis26HvvDII"; // Random YouTube Video

  return (
    <>
      <section className="course-hero">
        <div className="course-hero-wrapper">

          {/* LEFT VIDEO */}
          <div className="video-box">
            <img src={courseImg} alt="course" />

            <div className="play-button" onClick={() => setOpen(true)}>
              <div className="play-circle">▶</div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="course-info">

            <div className="badges">
              <span className="badge beginner">Beginner</span>
              <span className="badge pro">Pro</span>
            </div>

            <h1>Ruby On Rails Program</h1>

            <div className="meta-row">
              <span><CheckSquare size={18}/> 10 - 20 weeks</span>
              <span><BookOpen size={18}/> 102 Lectures</span>
              <span><Users size={18}/> 502 Student Enrolled</span>
            </div>

            <p className="description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
            </p>

            <div className="rating">
              <div className="stars">★★★★★</div>
              <span className="rating-value">4.9</span>
              <span className="reviews">(2.24k Reviews)</span>
            </div>

          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {open && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-btn" onClick={() => setOpen(false)}>
              <X size={22} />
            </button>
            <iframe
              width="100%"
              height="450"
              src={videoUrl}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default RubyRailsProgram;
