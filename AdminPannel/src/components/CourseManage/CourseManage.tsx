//tsx//

import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import "./CourseManage.css";

interface Course {
  id: number;
  image: string;
  title: string;
  level: string;
  teacher: string;
  designation: string;
  language: string;
  rating: number;
  price: string;
  timeline: string;
  students: number;
  lessons: number;
}

const courses: Course[] = [
  {
    id: 1,
    image: "https://picsum.photos/200?1",
    title: "Web Design Fundamentals",
    level: "Beginner",
    teacher: "Lori Stevens",
    designation: "UI/UX Designer",
    language: "English",
    rating: 5,
    price: "4,999",
    timeline: "6 Weeks",
    students: 15567,
    lessons: 32,
  },
  {
    id: 2,
    image: "https://picsum.photos/200?2",
    title: "Bootstrap 5 From Scratch",
    level: "Intermediate",
    teacher: "Billy Vasquez",
    designation: "Frontend Engineer",
    language: "English",
    rating: 4,
    price: "3,999",
    timeline: "4 Weeks",
    students: 16584,
    lessons: 24,
  },
  {
    id: 3,
    image: "https://picsum.photos/200?3",
    title: "Graphic Design Masterclass",
    level: "All Level",
    teacher: "Carolyn Ortiz",
    designation: "Graphic Designer",
    language: "Hindi",
    rating: 3,
    price: "5,499",
    timeline: "8 Weeks",
    students: 6458,
    lessons: 40,
  },
];

const ManageCourses: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("list");

  return (
    <div className="mc-wrapper">

      {/* Header */}
      <div className="mc-header">
        <h2 className="mc-title">Manage Courses</h2>

        <div className="mc-header-right">
          <div className="mc-view-toggle">
            <button
              className={`mc-toggle-btn ${view === "grid" ? "mc-active" : ""}`}
              onClick={() => setView("grid")}
            >
              <FiGrid />
            </button>
            <button
              className={`mc-toggle-btn ${view === "list" ? "mc-active" : ""}`}
              onClick={() => setView("list")}
            >
              <FiList />
            </button>
          </div>

          <button className="mc-add-btn">Create Course</button>
        </div>
      </div>

      {/* ================= LIST VIEW ================= */}
      {view === "list" && (
        <div className="mc-table-wrapper">
          <table className="mc-table">
            <thead className="mc-thead">
              <tr>
                <th>Course</th>
                <th>Level</th>
                <th>Teacher</th>
                <th>Language</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Timeline</th>
                <th>Students</th>
                <th>Lessons</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="mc-row">
                  <td className="mc-course-info">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="mc-course-img"
                    />
                    <span>{course.title}</span>
                  </td>

                  <td>{course.level}</td>

                  <td className="mc-teacher-info">
                    <strong>{course.teacher}</strong>
                    <small>{course.designation}</small>
                  </td>

                  <td>{course.language}</td>

                  <td className="mc-rating">
                    {"★".repeat(course.rating)}
                    {"☆".repeat(5 - course.rating)}
                  </td>

                  <td>₹{course.price}</td>
                  <td>{course.timeline}</td>
                  <td>{course.students.toLocaleString()}</td>
                  <td>{course.lessons}</td>

                  <td className="mc-actions">
                    <button className="mc-edit">✏️</button>
                    <button className="mc-delete">🗑️</button>
                    <button className="mc-view">👁️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ================= GRID VIEW ================= */}
      {view === "grid" && (
        <div className="mc-grid-wrapper">
          {courses.map((course) => (
            <div className="mc-card" key={course.id}>
              <img
                src={course.image}
                alt={course.title}
                className="mc-card-img"
              />

              <div className="mc-card-body">
                <h3 className="mc-card-title">{course.title}</h3>
                <p className="mc-card-level">{course.level}</p>

                <div className="mc-card-teacher">
                  <strong>{course.teacher}</strong>
                  <span>{course.designation}</span>
                </div>

                <div className="mc-rating">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </div>

                <div className="mc-card-meta">
                  <span>₹{course.price}</span>
                  <span>{course.timeline}</span>
                </div>

                <div className="mc-card-meta-small">
                  <span>{course.students.toLocaleString()} Students</span>
                  <span>{course.lessons} Lessons</span>
                </div>

                <div className="mc-actions">
                  <button className="mc-edit">✏️</button>
                  <button className="mc-delete">🗑️</button>
                  <button className="mc-view">👁️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageCourses;