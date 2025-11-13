import React, { useState } from "react";
import "./Courses.css";
import {
  List,
  Grid,
  Star,
  Edit3,
  Trash2,
  Clock,
  BookOpen,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Courses: React.FC = () => {
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 4;

  const courses = [
    {
      id: 1,
      img: "https://i.ibb.co/xXyCf3s/uiux.jpg",
      title: "Information About UI/UX Design Degree",
      lessons: 11,
      quizzes: 2,
      time: "03:15:00",
      students: 600,
      price: "$160",
      rating: 4.5,
      reviews: 300,
      status: "published",
    },
    {
      id: 2,
      img: "https://i.ibb.co/VqfRtKf/wordpress.jpg",
      title: "Wordpress for Beginners - Master Wordpress Quickly",
      lessons: 11,
      quizzes: 2,
      time: "03:15:00",
      students: 500,
      price: "$180",
      rating: 4.2,
      reviews: 430,
      status: "pending",
    },
    {
      id: 3,
      img: "https://i.ibb.co/znvMtpJ/sketch.jpg",
      title: "Sketch from A to Z (2024): Become an app designer",
      lessons: 11,
      quizzes: 2,
      time: "03:15:00",
      students: 300,
      price: "$200",
      rating: 4.7,
      reviews: 140,
      status: "draft",
    },
    {
      id: 4,
      img: "https://i.ibb.co/hM8pL4f/responsive.jpg",
      title: "Build Responsive Real World Websites with Crash Course",
      lessons: 11,
      quizzes: 2,
      time: "03:15:00",
      students: 400,
      price: "$220",
      rating: 4.4,
      reviews: 260,
      status: "published",
    },
    {
      id: 5,
      img: "https://i.ibb.co/xXyCf3s/uiux.jpg",
      title: "Learn Adobe XD for Beginners",
      lessons: 10,
      quizzes: 3,
      time: "02:45:00",
      students: 700,
      price: "$150",
      rating: 4.6,
      reviews: 350,
      status: "published",
    },
  ];

  const totalPages = Math.ceil(courses.length / coursesPerPage);
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="courses-container">
      {/* ====== TOP STATS ====== */}
      <div className="courses-stats">
        <div className="courses-card active">
          <h3>Active Courses</h3>
          <p>45</p>
        </div>
        <div className="courses-card pending">
          <h3>Pending Courses</h3>
          <p>21</p>
        </div>
        <div className="courses-card draft">
          <h3>Draft Courses</h3>
          <p>15</p>
        </div>
        <div className="courses-card free">
          <h3>Free Courses</h3>
          <p>16</p>
        </div>
        <div className="courses-card paid">
          <h3>Paid Courses</h3>
          <p>21</p>
        </div>
      </div>

      {/* ====== TITLE ====== */}
      <h2 className="courses-title">Courses</h2>

      {/* ====== FILTER & SEARCH ====== */}
      <div className="courses-filterbar">
        <select className="courses-select">
          <option>Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Draft</option>
        </select>

        <div className="courses-search">
          <input type="text" placeholder="Search courses..." />
        </div>

        <div className="courses-view-icons">
          <button
            className={`list-btn ${viewMode === "list" ? "active" : ""}`}
            onClick={() => setViewMode("list")}
          >
            <List size={20} />
          </button>
          <button
            className={`grid-btn ${viewMode === "grid" ? "active" : ""}`}
            onClick={() => setViewMode("grid")}
          >
            <Grid size={20} />
          </button>
        </div>
      </div>

      {/* ====== COURSE CONTENT ====== */}
      {viewMode === "list" ? (
        <div className="courses-table">
          <div className="courses-header">
            <span>Course Name</span>
            <span>Students</span>
            <span>Price</span>
            <span>Ratings</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {currentCourses.map((course) => (
            <div key={course.id} className="courses-row">
              <div className="courses-info">
                <img src={course.img} alt={course.title} className="courses-img" />
                <div>
                  <h4>{course.title}</h4>
                  <p className="courses-meta">
                    <BookOpen size={14} /> {course.lessons} Lessons &nbsp;&nbsp;
                    <HelpCircle size={14} /> {course.quizzes} Quizzes &nbsp;&nbsp;
                    <Clock size={14} /> {course.time} Hours
                  </p>
                </div>
              </div>
              <span>{course.students}</span>
              <span>{course.price}</span>
              <span className="courses-rating">
                <Star size={14} fill="#facc15" color="#facc15" />{" "}
                {course.rating} ({course.reviews})
              </span>
              <span className={`courses-status ${course.status}`}>
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </span>
              <div className="courses-actions">
                <Edit3 size={18} />
                <Trash2 size={18} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="courses-grid">
          {currentCourses.map((course) => (
            <div key={course.id} className="courses-grid-card">
              <img src={course.img} alt={course.title} className="courses-grid-img" />
              <h4>{course.title}</h4>
              <p className="courses-meta">
                <BookOpen size={14} /> {course.lessons} Lessons &nbsp;&nbsp;
                <HelpCircle size={14} /> {course.quizzes} Quizzes
              </p>
              <p className="courses-rating">
                <Star size={14} fill="#facc15" color="#facc15" /> {course.rating} (
                {course.reviews})
              </p>
              <p className={`courses-status ${course.status}`}>
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </p>
              <div className="courses-actions">
                <Edit3 size={18} />
                <Trash2 size={18} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ====== PAGINATION ====== */}
<div className="courses-pagination">
  <button onClick={handlePrev} disabled={currentPage === 1}>
    <ChevronLeft size={18} />
  </button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button onClick={handleNext} disabled={currentPage === totalPages}>
    <ChevronRight size={18} />
  </button>
</div>

    </div>
  );
};

export default Courses;
