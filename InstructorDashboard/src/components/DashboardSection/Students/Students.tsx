import React, { useState } from "react";
import "./Students.css";
import { FiEye, FiMessageSquare, FiList, FiGrid } from "react-icons/fi";

interface Student {
  id: string;
  name: string;
  img: string;
  enrollDate: string;
  progress: number;
  courses: number;
}

const students: Student[] = [
  { id: "#STU020", name: "Thompson Hicks", img: "https://randomuser.me/api/portraits/men/1.jpg", enrollDate: "22 Aug 2025", progress: 0, courses: 10 },
  { id: "#STU019", name: "Jennifer Tovar", img: "https://randomuser.me/api/portraits/women/2.jpg", enrollDate: "10 Aug 2025", progress: 15, courses: 8 },
  { id: "#STU018", name: "James Schulte", img: "https://randomuser.me/api/portraits/men/3.jpg", enrollDate: "26 Jul 2025", progress: 60, courses: 12 },
  { id: "#STU017", name: "Kristy Cardona", img: "https://randomuser.me/api/portraits/women/4.jpg", enrollDate: "12 Jul 2025", progress: 20, courses: 17 },
  { id: "#STU016", name: "William Aragon", img: "https://randomuser.me/api/portraits/men/5.jpg", enrollDate: "02 Jul 2025", progress: 10, courses: 9 },
  { id: "#STU015", name: "Shirley Lis", img: "https://randomuser.me/api/portraits/women/6.jpg", enrollDate: "25 Jun 2025", progress: 80, courses: 15 },
  { id: "#STU014", name: "John Brewer", img: "https://randomuser.me/api/portraits/men/7.jpg", enrollDate: "17 Jun 2025", progress: 40, courses: 13 },
  { id: "#STU013", name: "Doris Hughes", img: "https://randomuser.me/api/portraits/women/8.jpg", enrollDate: "04 Jun 2025", progress: 50, courses: 17 },
];

const Students: React.FC = () => {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <div className="students-container">
      {/* Header */}
      <div className="students-header">
        <h2 className="students-title">Students</h2>
        <div className="students-icons">
          <button
            className={`students-btn ${view === "list" ? "active" : ""}`}
            onClick={() => setView("list")}
          >
            <FiList className="students-icon" />
          </button>
          <button
            className={`students-btn ${view === "grid" ? "active" : ""}`}
            onClick={() => setView("grid")}
          >
            <FiGrid className="students-icon" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="students-search-container">
        <input
          type="text"
          className="students-search"
          placeholder="🔍 Search"
        />
      </div>

      {/* List View */}
      {view === "list" && (
        <div className="students-table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>
                <th>Enroll Date</th>
                <th>Progress</th>
                <th>Courses</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s.id}>
                  <td className="students-id">{s.id}</td>
                  <td>
                    <div className="students-info">
                      <img src={s.img} alt={s.name} className="students-avatar" />
                      <span>{s.name}</span>
                    </div>
                  </td>
                  <td>{s.enrollDate}</td>
                  <td>
                    <div className="students-progress">
                      <div
                        className="students-progress-bar"
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                    <span className="students-progress-text">{s.progress}%</span>
                  </td>
                  <td>{s.courses}</td>
                  <td>
                    <div className="students-actions">
                      <FiEye className="students-action-icon" />
                      <FiMessageSquare className="students-action-icon" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
{view === "grid" && (
  <div className="students-grid">
    {students.map((s) => (
      <div className="students-card" key={s.id}>
        {/* Avatar above header */}
        <img src={s.img} alt={s.name} className="students-card-avatar" />

        {/* Name header */}
        <div className="students-card-header">
          {s.name}
        </div>

        {/* Info section */}
        <div className="students-card-info">
          <div>
            <span>Enroll</span>
            <span>{s.enrollDate}</span>
          </div>
          <div>
            <span>Courses</span>
            <span>{s.courses}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="students-card-actions">
          <FiEye className="students-action-icon" />
          <FiMessageSquare className="students-action-icon" />
        </div>
      </div>
    ))}
  </div>
)}


    </div>
  );
};

export default Students;
