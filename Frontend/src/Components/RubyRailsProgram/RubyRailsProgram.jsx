import React, { useState } from "react";
import "./RubyRailsProgram.css";
import { CheckSquare, BookOpen, Users, X } from "lucide-react";
import { getImageUrl } from "../../api/api";

import courseImg from "../../assets/category-1.webp";

const RubyRailsProgram = ({ course }) => {
  const [open, setOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/fis26HvvDII";

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
            <img
              src={course.image ? getImageUrl(course.image) : courseImg}
              alt={course.title}
              className="course-header-img"
            />

            <div className="badges">
              <span className="badge beginner">Beginner</span>
              <span className="badge pro">Pro</span>
            </div>

            <h1>{course.title}</h1>

            <div className="meta-row">
              <span>
                <CheckSquare size={18} /> {course.duration}
              </span>

              <span>
                <BookOpen size={18} /> {course.modules || "Training Modules"}
              </span>

              <span>
                <Users size={18} /> Mentor: {course.mentor}
              </span>
            </div>

            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />

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
            />
          </div>
        </div>
      )}
    </>
  );
};

export default RubyRailsProgram;
