import React from "react";
import {
  Clock,
  PlayCircle,
  BarChart,
  Star,
  Heart,
} from "lucide-react";
import subject1 from "../../assets/subject1.webp";
import subject2 from "../../assets/subject2.webp";
import subject3 from "../../assets/subject3.webp";
import subject4 from "../../assets/subject4.webp";
import avatar1 from "../../assets/sub-avt-1.webp";
import avatar2 from "../../assets/sub-avt-2.webp";
import avatar3 from "../../assets/sub-avt-3.webp";
import avatar4 from "../../assets/sub-avt-4.webp";
import "./CoursesSection.css";

const CoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Angular – The Complete Guider",
      tag: "Development",
      time: "21h 56m",
      lectures: 52,
      level: "Intermediate",
      rating: 4.5,
      free: true,
      image: subject1,
      author: "Jacqueline Miller",
      avatar: avatar1,
      desc: "Satisfied conveying a dependent contented he gentleman agreeable do be.",
    },
    {
      id: 2,
      title: "The Complete Digital Marketing Course - 12 Courses in 1",
      tag: "Marketing",
      time: "6h 56m",
      lectures: 82,
      level: "Beginner",
      rating: 4.5,
      free: false,
      image: subject2,
      author: "Larry Lawson",
      avatar: avatar2,
      desc: "Explained propriety off out perpetual his you. Dependent content.",
    },
    {
      id: 3,
      title: "The Ultimate Copywriting Course - Write Copy That Sells",
      tag: "Development",
      time: "13h 30m",
      lectures: 72,
      level: "All level",
      rating: 4.8,
      free: false,
      image: subject3,
      author: "Louis Crawford",
      avatar: avatar3,
      desc: "Insipidity the sufficient discretion imprudence resolution sir him.",
    },
    {
      id: 4,
      title: "Create a Design System in Figma",
      tag: "Design",
      time: "7h 50m",
      lectures: 21,
      level: "All level",
      rating: 4.0,
      free: false,
      image: subject4,
      author: "Frances Guerrero",
      avatar: avatar4,
      desc: "Fulfilled direction use continual set him propriety continued.",
    },
  ];

  return (
    <section className="courses-section">
      <div className="courses-header">
        <h2>Showing 1–7 of 32 result</h2>
        <div className="view-options">
          <button className="grid-view active">
            <i className="fas fa-th-large"></i>
          </button>
          <button className="list-view">
            <i className="fas fa-list"></i>
          </button>
          <select>
            <option>Sort by</option>
          </select>
        </div>
      </div>

      {/* ✅ Fixed Courses Container Section */}
      <div className="courses-container">
        {/* Courses List (left side) */}
        <div className="courses-list">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                {course.free && <span className="free-tag">Free</span>}

                {/* Top right icons */}
                <div className="course-top-icons">
                  <div className="rating">
                    <Star className="star" size={15} />
                    <span>{course.rating}</span>
                  </div>
                  <Heart className="heart" size={15} />
                </div>
              </div>

              <div className="course-content">
                <span className={`course-tag ${course.tag.toLowerCase()}`}>
                  {course.tag}
                </span>
                <h4>{course.title}</h4>
                <p>{course.desc}</p>
                <div className="course-meta">
                  <span>
                    <Clock size={16} /> {course.time}
                  </span>
                  <span>
                    <PlayCircle size={16} /> {course.lectures} lectures
                  </span>
                  <span>
                    <BarChart size={16} /> {course.level}
                  </span>
                </div>
                <div className="course-footer">
                  <div className="course-author">
                    <img src={course.avatar} alt={course.author} />
                    <span>{course.author}</span>
                  </div>
                </div>
                <button className="view-btn">View more</button>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Filters (right side) */}
        <aside className="courses-filters">
          <div className="filter-box">
            <h3>Category</h3>
            <ul className="courses-filter-list">
              {[
                "All",
                "Development",
                "Design",
                "Accounting",
                "Translation",
                "Finance",
                "Legal",
                "Photography",
                "Writing",
                "Marketing",
              ].map((item, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" />
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-box">
            <h3>Price Level</h3>
            <div className="filter-tags">
              <button>All</button>
              <button>Free</button>
              <button>Paid</button>
            </div>
          </div>

          <div className="filter-box">
            <h3>Skill Level</h3>
            <div className="filter-tags">
              <button>All levels</button>
              <button>Beginner</button>
              <button>Intermediate</button>
              <button>Advanced</button>
            </div>
          </div>

          <div className="filter-box">
            <h3>Language</h3>
            <div className="filter-tags">
              <button>English</button>
              <button>Francas</button>
              <button>Hindi</button>
              <button>Russian</button>
              <button>Spanish</button>
              <button>Bengali</button>
              <button>Portuguese</button>
            </div>
          </div>

          <button className="filter-btn">Filter Results</button>
        </aside>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button>«</button>
        <button>1</button>
        <button className="active">2</button>
        <button>3</button>
        <button>…</button>
        <button>6</button>
        <button>»</button>
      </div>
    </section>
  );
};

export default CoursesSection;
