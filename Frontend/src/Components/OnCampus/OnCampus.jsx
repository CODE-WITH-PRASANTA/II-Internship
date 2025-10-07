import React, { useState, useEffect } from "react";
import "./OnCampus.css";
import {
  FaStar,
  FaUserGraduate,
  FaBook,
  FaCogs,
  FaBuilding,
  FaSearch,
  FaArrowRight,
  FaTree,
  FaUtensils,
  FaBed,
  FaBookOpen,
  FaRegStickyNote
} from "react-icons/fa";

import i1 from "../../assets/oc1.webp";
import i2 from "../../assets/oc2.webp";
import i3 from "../../assets/oc3.webp";
import i4 from "../../assets/oc4.webp";
import i5 from "../../assets/oc5.webp";
import i6 from "../../assets/oc6.webp";
import i7 from "../../assets/oc7.webp";
import i8 from "../../assets/oc8.webp";

const OnCampus = () => {
  const images = [i1, i2, i3, i4, i5, i6, i7, i8];

  const allCourses = Array(36)
    .fill(null)
    .map((_, i) => ({
      image: images[i % images.length],
      title: "Building Foundations in Physics Concepts",
      category: "Public",
      rating: "4.9",
      tags: ["Engineering", "Data Analytics", "BCA"],
      amenities: [
        { name: "Playground", icon: <FaTree /> },
        { name: "Canteen", icon: <FaUtensils /> },
        { name: "Hostel", icon: <FaBed /> },
        { name: "Library", icon: <FaBookOpen /> },
        { name: "Stationary", icon: <FaRegStickyNote /> }
      ]
    }));

  const [currentPage, setCurrentPage] = useState(1);
  const [fade, setFade] = useState(false);

  const coursesPerPage = 12;
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = allCourses.slice(indexOfFirstCourse, indexOfLastCourse);

  const totalPages = Math.ceil(allCourses.length / coursesPerPage);

  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const section = document.querySelector(".oncampus-page");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="oncampus-page">
      <div className="oncampus-header">
        <h2>
          We Found <span>{allCourses.length} Courses</span> Available For You
        </h2>
        <div className="oncampus-search-bar">
          <input type="text" placeholder="Search Course here ..." />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className={`oncampus-grid ${fade ? "fade-in" : ""}`}>
        {currentCourses.map((course, index) => (
          <div key={index} className="oncampus-course-card">
            <div className="oncampus-course-image">
              <img src={course.image} alt="Course" />
              <div className="oncampus-admission-tag">
                <FaBuilding /> Admission Open
              </div>
            </div>

            <div className="oncampus-course-content">
              <div className="oncampus-course-meta">
                <span className="meta-item">
                  <FaUserGraduate /> {course.category}
                </span>
                <span className="meta-item">
                  <FaStar /> {course.rating}
                </span>
              </div>

              <h3 className="oncampus-course-title">{course.title}</h3>

              <div className="oncampus-course-tags">
                {course.tags.map((tag, i) => (
                  <span key={i} className="tag-item">
                    <FaBook /> {tag}
                  </span>
                ))}
              </div>

              {/* AMENITIES GRID */}
              <div className="oncampus-course-amenities">
                {course.amenities.map((amenity, i) => (
                  <div key={i} className="amenity-item">
                    {amenity.icon} {amenity.name}
                  </div>
                ))}
              </div>

              <div className="view-all-programs">
                View All Programs <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OnCampus;
