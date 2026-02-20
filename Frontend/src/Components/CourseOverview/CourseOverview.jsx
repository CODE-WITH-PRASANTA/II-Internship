import React, { useState } from "react";
import "./CourseOverview.css";
import {
  FiChevronDown,
  FiChevronUp,
  FiVideo,
  FiThumbsUp,
  FiThumbsDown,
  FiHeart,
} from "react-icons/fi";

function CourseOverview() {
  const [open, setOpen] = useState(1);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="cd-wrapper">
      {/* ================= OVERVIEW ================= */}
      <div className="cd-card">
        <h2 className="cd-title">Course Overview</h2>

        <p className="cd-text">
          Learn the fundamental principles and practices of modern web design in
          this comprehensive course. Whether you're a beginner or looking to
          refresh your skills, you'll dive into HTML5, CSS3, responsive design,
          and more.
        </p>

        <p className="cd-text">
          Unlock your creativity and master the art of web design with this
          all-in-one course. This course blends theory with real-world projects
          to ensure you're job-ready by the end.
        </p>

        <h3 className="cd-subtitle">Who Should Enroll?</h3>

        <ul className="cd-list">
          <li>Beginners interested in starting a career in web design</li>
          <li>Developers looking to expand their skills into design</li>
          <li>Students pursuing careers in tech, design, or media</li>
          <li>Freelancers who want to expand their service offerings</li>
          <li>Entrepreneurs and business owners</li>
        </ul>
      </div>

      {/* ================= CURRICULUM ================= */}
      <div className="cd-card">
        <h2 className="cd-title">Course Curriculum</h2>

        <div className="cd-accordion">
          <div className="cd-acc-head" onClick={() => toggle(1)}>
            <span>Part 01: How To Learn Web Designing Step By Step</span>
            {open === 1 ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {open === 1 && (
            <div className="cd-acc-body">
              {[
                "Web Designing Beginner",
                "Startup Designing with HTML5 & CSS3",
                "How To Call Google Map iFrame",
                "Create Drop Down Navigation Using CSS3",
                "How to Create Sticky Navigation Using JS",
              ].map((item, i) => (
                <div className="cd-lecture" key={i}>
                  <div className="cd-lecture-left">
                    <FiVideo />
                    <span>Lecture {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="cd-lecture-title">{item}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {[
          "Part 02: Learn Web Designing In Basic Level",
          "Part 03: Learn Web Designing In Advance Level",
          "Part 04: How To Become Success In Designing & Development?",
        ].map((t, i) => (
          <div className="cd-accordion small" key={i}>
            <div className="cd-acc-head">
              <span>{t}</span>
              <FiChevronDown />
            </div>
          </div>
        ))}
      </div>

      {/* ================= RATING ================= */}
      <div className="cd-card cd-rating">
        <div className="cd-rating-score">
          <h1>4.2</h1>
          <p>out of 5.0</p>
        </div>

        <div className="cd-rating-bars">
          {[
            ["5 Star", 85],
            ["4 Star", 75],
            ["3 Star", 53],
            ["1 Star", 20],
          ].map((r, i) => (
            <div className="cd-bar" key={i}>
              <span>{r[0]}</span>
              <div className="cd-bar-track">
                <div style={{ width: r[1] + "%" }} />
              </div>
              <span>{r[1]}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= INSTRUCTOR ================= */}
      <div className="cd-card cd-instructor">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Instructor"
        />

        <div>
          <h3>Adam K. Marck</h3>
          <p className="cd-meta">72 Videos • 102 Lectures • 15+ Year Exp.</p>

          <p className="cd-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
        </div>
      </div>

      {/* ================= REVIEWS ================= */}
      <div className="cd-card">
        <h2 className="cd-title">Item Reviews - 3</h2>

        {["Josaph Manrty", "Rita Chawla", "Adam Wilson"].map((n, i) => (
          <div className="cd-review" key={i}>
            <img
              src={`https://randomuser.me/api/portraits/${
                i === 1 ? "women" : "men"
              }/${40 + i}.jpg`}
              alt={n}
            />

            <div className="cd-review-content">
              <div className="cd-review-top">
                <h4>{n}</h4>
                <span className="cd-date">27 Oct 2025</span>
              </div>

              <p className="cd-text">
                Commodo est luctus eget. Proin in nunc laoreet justo volutpat
                blandit enim.
              </p>

              <div className="cd-review-actions">
                <FiThumbsUp /> 12
                <FiThumbsDown /> 1
                <FiHeart /> 7
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseOverview;