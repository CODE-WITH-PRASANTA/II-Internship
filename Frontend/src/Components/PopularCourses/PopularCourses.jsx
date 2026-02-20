import React, { useState } from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import "./PopularCourses.css";

/* ===== IMPORT IMAGES ===== */
import img1 from "../../assets/course_thumb01.webp";
import img2 from "../../assets/course_thumb04.webp";
import img3 from "../../assets/course_thumb05.webp";
import img4 from "../../assets/course_thumb06.webp";

const coursesData = [
  {
    id: 1,
    category: "Development",
    title: "Learning JavaScript With Imagination",
    author: "David Millar",
    price: "₹15.00",
    rating: "4.8",
    image: img1,
    tab: "Development",
  },
  {
    id: 2,
    category: "Design",
    title: "The Complete Graphic Design for Beginners",
    author: "David Millar",
    price: "₹19.00",
    rating: "4.5",
    image: img2,
    tab: "Design",
  },
  {
    id: 3,
    category: "Marketing",
    title: "Learning Digital Marketing on Facebook",
    author: "David Millar",
    price: "₹24.00",
    rating: "4.3",
    image: img3,
    tab: "Business",
  },
  {
    id: 4,
    category: "Business",
    title: "Financial Analyst Training & Investing Course",
    author: "David Millar",
    price: "₹12.00",
    rating: "4.8",
    image: img4,
    tab: "Business",
  },
];

const tabs = ["All Courses", "Design", "Business", "Development"];

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState("All Courses");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses =
    activeTab === "All Courses"
      ? coursesData
      : coursesData.filter((c) => c.tab === activeTab);

  const coursesPerPage = 1; // Mobile pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <section className="Popular-Courses-section">
      <div className="Popular-Courses-container">

        {/* Header */}
        <div className="Popular-Courses-header">
          <span className="Popular-Courses-badge">Top Class Courses</span>
          <h2>Explore Our World's Best Courses</h2>
          <p>When known printer took a galley of type scramble edmake</p>
        </div>

        {/* Tabs (Visible on all devices) */}
        <div className="Popular-Courses-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="Popular-Courses-grid">
          {(window.innerWidth <= 768 ? paginatedCourses : filteredCourses)
            .map((course) => (
              <div className="Popular-Courses-card" key={course.id}>
                <img
                  src={course.image}
                  alt={course.title}
                  className="Popular-Courses-img"
                />

                <div className="Popular-Courses-body">
                  <div className="Popular-Courses-top">
                    <span className="Popular-Courses-category">
                      {course.category}
                    </span>
                    <span className="Popular-Courses-rating">
                      <FaStar className="Popular-Courses-star" /> ({course.rating})
                    </span>
                  </div>

                  <h3>{course.title}</h3>
                  <p className="Popular-Courses-author">
                    By {course.author}
                  </p>

                  <div className="Popular-Courses-bottom">
                    <button className="Popular-Courses-btn">
                      Enroll Now <FaArrowRight />
                    </button>
                    <span className="Popular-Courses-price">
                      {course.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile Pagination */}
        <div className="Popular-Courses-pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;
