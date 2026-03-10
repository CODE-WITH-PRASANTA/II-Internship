import React, { useEffect, useState } from "react";
import API, { getImageUrl } from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./CourseWefound.css";

import AgnilMarcho from "../../assets/150.webp";
import CodyL from "../../assets/CodyL.webp";

const CourseWefound = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const res = await API.get("/internships/all");

      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="course-cards-wrapper">
      {courses.map((course, index) => (
        <div key={course._id || index} className="course-horizontal-card">
          {/* IMAGE */}

          <div className="card-image-container">
            <img
              src={
                course.image ? getImageUrl(course.image) : "/placeholder.webp"
              }
              alt={course.title}
            />

            <span className="badge-free">
              {course.internshipCostType === "Free of Cost" ? "Free" : "Paid"}
            </span>
          </div>

          {/* CONTENT */}

          <div className="card-content">
            <div className="content-top">
              <span className="category-tag">{course.department}</span>

              <div className="rating-heart">
                <span className="star">★ 4.9</span>
                <span className="heart">♡</span>
              </div>
            </div>

            <h2 className="course-title">{course.title}</h2>

            <p
              className="course-desc"
              dangerouslySetInnerHTML={{ __html: course.description }}
            ></p>

            <div className="course-meta">
              <span>⏱ {course.duration}</span>
              <span>▦ 30 lectures</span>
              <span>📊 Intermediate</span>
            </div>

            <div className="card-footer">
              <div className="instructor">
                <img src={index % 2 === 0 ? AgnilMarcho : CodyL} alt="" />
                <span>{course.mentor}</span>
              </div>

              {/* VIEW DETAILS BUTTON */}

              <button
                className="view-btn"
                onClick={() => navigate(`/RunningDetails/${course._id}`)}
              >
                View more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseWefound;
