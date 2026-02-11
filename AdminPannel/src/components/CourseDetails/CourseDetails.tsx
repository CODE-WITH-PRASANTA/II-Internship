import React, { useState } from "react";
import "./CourseDetails.css";
import { FiGrid, FiList, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

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

const dummyCourses: Course[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    title: "React Dashboard Mastery",
    level: "Beginner",
    teacher: "Arjun Patel",
    designation: "UI/UX Expert",
    language: "English",
    rating: 5,
    price: "₹4,999",
    timeline: "6 Weeks",
    students: 1200,
    lessons: 42,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    title: "Scalable React Apps",
    level: "Advanced",
    teacher: "Meera Khan",
    designation: "Software Architect",
    language: "English",
    rating: 4,
    price: "₹6,499",
    timeline: "8 Weeks",
    students: 980,
    lessons: 55,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    title: "Frontend with AI",
    level: "Intermediate",
    teacher: "Kiran Rao",
    designation: "AI Engineer",
    language: "Hindi",
    rating: 5,
    price: "₹5,999",
    timeline: "5 Weeks",
    students: 1500,
    lessons: 38,
  },
];

const PreviewCourse: React.FC = () => {
  const [view, setView] = useState<"grid" | "list">("list");

  return (
    <div className="preview-wrapper">
      {/* HEADER */}
      <div className="preview-header">
        <h2>Course Preview</h2>

        <div className="view-icons">
          <FiGrid
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          />
          <FiList
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          />
        </div>
      </div>

      {/* ================= LIST VIEW (TABLE) ================= */}
      {view === "list" && (
        <div className="table-wrapper">
          <table className="course-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Instructor</th>
                <th>Level</th>
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
              {dummyCourses.map(course => (
                <tr key={course.id}>
                  {/* COURSE */}
                  <td>
                    <div className="course-cell">
                      <img src={course.image} alt={course.title} />
                      <span>{course.title}</span>
                    </div>
                  </td>

                  {/* INSTRUCTOR */}
                  <td>
                    <div className="instructor-cell">
                      <strong>{course.teacher}</strong>
                      <small>{course.designation}</small>
                    </div>
                  </td>

                  <td>{course.level}</td>
                  <td>{course.language}</td>

                  {/* RATING */}
                  <td>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < course.rating ? "active" : ""}
                        />
                      ))}
                    </div>
                  </td>

                  <td>{course.price}</td>
                  <td>{course.timeline}</td>
                  <td>{course.students}</td>
                  <td>{course.lessons}</td>

                  {/* ACTION */}
                  <td>
                    <div className="table-actions">
                      <button className="view">
                        <FiEye />
                      </button>
                      <button className="edit">
                        <FiEdit />
                      </button>
                      <button className="delete">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PreviewCourse;
