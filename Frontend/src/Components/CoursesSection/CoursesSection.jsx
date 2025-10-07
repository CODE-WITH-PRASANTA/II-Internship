import React, { useState } from "react";
import "./CoursesSection.css";
import { FaUserGraduate, FaStar, FaClock, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import i1 from "../../assets/oc1.webp";
import i2 from "../../assets/oc2.webp";
import i3 from "../../assets/oc3.webp";
import i4 from "../../assets/oc4.webp";
import i5 from "../../assets/oc5.webp";
import i6 from "../../assets/oc6.webp";
import i7 from "../../assets/oc7.webp";
import i8 from "../../assets/oc8.webp";

const CoursesSection = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8];

  const courses = Array(48)
    .fill({
      category: "Music Fundamentals",
      title: "Advanced Product Design Online Course",
      students: "9,943 students",
      rating: "4.5",
      duration: "2h 30m",
      price: "$35",
      instructor: "Jacob Collier",
    })
    .map((c, i) => ({ ...c, image: images[i % images.length] }));

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="course-section">
      {/* Header */}
      <div className="course-header">
        <h2>
          We Found <span>{courses.length} Courses</span> Available For You
        </h2>

        <div className="course-search">
          <input type="text" placeholder="Search Course here ..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="course-grid">
        {currentCourses.map((course, index) => (
          <motion.div
            className="course-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <div className="course-image">
              <motion.img
                src={course.image}
                alt="Course"
                initial={{ scale: 1, y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, rotate: 2 }}
              />
              <div className="course-price">{course.price}</div>
            </div>

            <div className="course-content">
              <p className="course-category">{course.category}</p>
              <h3 className="course-title">{course.title}</h3>

              <div className="course-meta">
                <span>
                  <FaUserGraduate /> {course.students}
                </span>
                <span>
                  <FaStar /> {course.rating}
                </span>
                <span>
                  <FaClock /> {course.duration}
                </span>
              </div>

              <div className="course-footer">
                <button className="instructor-btn">by {course.instructor}</button>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          className="pagination-nav"
          onClick={() => changePage(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft /> Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`page-number ${currentPage === i + 1 ? "active-page" : ""}`}
            onClick={() => changePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pagination-nav"
          onClick={() => changePage(currentPage < totalPages ? currentPage + 1 : totalPages)}
          disabled={currentPage === totalPages}
        >
          Next <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CoursesSection;
