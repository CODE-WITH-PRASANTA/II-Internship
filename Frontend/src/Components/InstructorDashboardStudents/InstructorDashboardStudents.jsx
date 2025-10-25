import React from "react";
import { Search, MessageCircle, UserX } from "lucide-react"; // updated icons
import "./InstructorDashboardStudents.css";
import av1 from "../../assets/course-avatar-1.webp";
import av2 from "../../assets/course-avatar-2.webp";
import av3 from "../../assets/course-avatar-3.webp";
import av4 from "../../assets/course-avatar-4.webp";
import av5 from "../../assets/course-avatar-5.webp";

const InstructorDashboardStudents = () => {
  const students = [
    {
      name: "Jake Thompson",
      location: "Las Vegas",
      progress: 80,
      courses: 12,
      date: "10 Jan 2025",
      image: av1,
    },
    {
      name: "Chris Walker",
      location: "San Diego",
      progress: 60,
      courses: 16,
      date: "12 Feb 2025",
      image: av2,
    },
    {
      name: "Ryan Mitchell",
      location: "San Francisco",
      progress: 70,
      courses: 21,
      date: "06 Mar 2025",
      image: av3,
    },
    {
      name: "Matt Cooper",
      location: "San Antonio",
      progress: 50,
      courses: 17,
      date: "02 Apr 2025",
      image: av4,
    },
    {
      name: "Emily Parker",
      location: "Las Vegas",
      progress: 60,
      courses: 22,
      date: "06 Apr 2025",
      image: av5,
    },
  ];

  return (
    <div className="instructordashboard-students-wrapper">
      <h2 className="instructordashboard-students-title">All Students</h2>

      {/* Search + Filter Bar */}
      <div className="instructordashboard-students-filters">
        <div className="instructordashboard-search-box">
          <Search size={18} />
          <input type="text" placeholder="Search" />
        </div>
        <select className="instructordashboard-select">
          <option>Free</option>
          <option>Premium</option>
        </select>
      </div>

      {/* Table Section */}
      <div className="instructordashboard-students-table-wrapper">
        <table className="instructordashboard-students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Progress</th>
              <th>Courses</th>
              <th>Enrolled Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>
                  <div className="instructordashboard-student-info">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="instructordashboard-student-img"
                    />
                    <div>
                      <h4 className="instructordashboard-student-name">{s.name}</h4>
                      <p className="instructordashboard-student-location">
                        📍 {s.location}
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="instructordashboard-progress-wrapper">
                    <span className="instructordashboard-progress-text">
                      {s.progress}%
                    </span>
                    <div className="instructordashboard-progress-bar">
                      <div
                        className="instructordashboard-progress-fill"
                        style={{ width: `${s.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td>{s.courses}</td>
                <td>{s.date}</td>
                <td className="instructordashboard-actions">
                  <button className="instructordashboard-chat-btn">
                    <MessageCircle size={18} />
                  </button>
                  <button className="instructordashboard-block-btn">
                    <UserX size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorDashboardStudents;
