import React from 'react';
import './CourseWefound.css';

import Wefound1 from '../../assets/Wefound1.webp';
import Wefound2 from '../../assets/we2.webp';
import AgnilMarcho from '../../assets/150.webp';
import CodyL from '../../assets/CodyL.webp';

const CourseWefound = () => {
  const courses = [
    {
      id: 1,
      title: "Backend Development With Node.Js: Building Scalable Web Apps",
      category: "Development",
      rating: "4.9",
      instructor: "Agnil Marcho",
      duration: "21h 56m",
      lectures: "31 lectures",
      level: "Intermediate",
      courseImage: Wefound1,
      instructorImage: AgnilMarcho,
      description:
        "Explore our curated collection of courses designed to enhance your web design and development skills. From mastering HTML and CSS to advanced JavaScript techniques."
    },
    {
      id: 2,
      title: "HTML Mastery: Complete Guide To HTML From Basics To Advanced",
      category: "Development",
      rating: "4.9",
      instructor: "Cody L.",
      duration: "21h 56m",
      lectures: "32 lectures",
      level: "Intermediate",
      courseImage: Wefound2,
      instructorImage: CodyL,
      description:
        "Explore our curated collection of courses designed to enhance your web design and development skills. From mastering HTML and CSS to advanced JavaScript techniques."
    }
  ];

  return (
    <div className="course-cards-wrapper">
      {courses.map((course) => (
        <div key={course.id} className="course-horizontal-card">

          {/* IMAGE */}
          <div className="card-image-container">
            <img src={course.courseImage} alt="Course" />
            <span className="badge-free">Free</span>
          </div>

          {/* CONTENT */}
          <div className="card-content">

            <div className="content-top">
              <span className="category-tag">{course.category}</span>
              <div className="rating-heart">
                <span className="star">★ {course.rating}</span>
                <span className="heart">♡</span>
              </div>
            </div>

            <h2 className="course-title">{course.title}</h2>
            <p className="course-desc">{course.description}</p>

            <div className="course-meta">
              <span>⏱ {course.duration}</span>
              <span>▦ {course.lectures}</span>
              <span>📊 {course.level}</span>
            </div>

            <div className="card-footer">
              <div className="instructor">
                <img src={course.instructorImage} alt="" />
                <span>{course.instructor}</span>
              </div>

              <button className="view-btn">View more</button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseWefound;
