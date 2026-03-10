import React, { useState, useEffect } from "react";
import "./CourseOverview.css";
import API from "../../api/api";
import {
  FiChevronDown,
  FiChevronUp,
  FiVideo,
  FiThumbsUp,
  FiThumbsDown,
  FiHeart,
} from "react-icons/fi";

function CourseOverview({ course }) {
  const [open, setOpen] = useState(1);

  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      if (!course?._id) return;

      const res = await API.get(`/reviews/internship/${course._id}`);

      setReviews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!course?._id) return;

    fetchReviews();

    const interval = setInterval(() => {
      fetchReviews();
    }, 5000);

    return () => clearInterval(interval);
  }, [course]);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className="cd-wrapper">
      {/* ================= OVERVIEW ================= */}
      <div className="cd-card">
        <h2 className="cd-title">Course Overview</h2>

        <p
          className="cd-text"
          dangerouslySetInnerHTML={{ __html: course.description }}
        ></p>
        {/* <p className="cd-text">{course.description}</p> */}

        <h3 className="cd-subtitle">Who Should Enroll?</h3>

        <ul className="cd-list">
          <li>
            <strong>Department:</strong> {course.department}
          </li>
          <li>
            <strong>Duration:</strong> {course.duration}
          </li>
          <li>
            <strong>Location:</strong> {course.location}
          </li>
          <li>
            <strong>Qualification:</strong> {course.qualification}
          </li>
          <li>
            <strong>Skills Required:</strong> {course.skills}
          </li>
        </ul>
      </div>

      {/* ================= CURRICULUM ================= */}
      {/* <div className="cd-card">
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
      </div> */}

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
        <h2 className="cd-title">Item Reviews - {reviews.length}</h2>

        <div className="cd-review-container">
          {reviews.map((review, i) => (
            <div className="cd-review" key={review._id || i}>
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "men" : "women"}/${40 + i}.jpg`}
                alt={review.name}
              />

              <div className="cd-review-content">
                <div className="cd-review-top">
                  <h4>{review.name}</h4>
                  <span className="cd-date">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="cd-text">{review.review}</p>

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
    </div>
  );
}

export default CourseOverview;
