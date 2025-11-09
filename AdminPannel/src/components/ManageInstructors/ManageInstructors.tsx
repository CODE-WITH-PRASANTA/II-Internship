import React from "react";
import { Search, MoreHorizontal, Users, Book, Mail } from "lucide-react";
import "./ManageInstructors.css";

interface Instructor {
  name: string;
  role: string;
  students: string;
  courses: number;
  rating: number;
  avatar: string;
}

const ManageInstructors: React.FC = () => {
  const instructors: Instructor[] = [
    {
      name: "Lori Stevens",
      role: "Web Designer",
      students: "5,354",
      courses: 15,
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=20",
    },
    {
      name: "Carolyn Ortiz",
      role: "Web Developer",
      students: "15,523",
      courses: 10,
      rating: 4,
      avatar: "https://i.pravatar.cc/80?img=21",
    },
    {
      name: "Dennis Barrett",
      role: "Developer and Instructor",
      students: "2,546",
      courses: 9,
      rating: 4,
      avatar: "https://i.pravatar.cc/80?img=22",
    },
    {
      name: "Billy Vasquez",
      role: "Full Stack Web Developer",
      students: "12,786",
      courses: 7,
      rating: 4,
      avatar: "https://i.pravatar.cc/80?img=23",
    },
    {
      name: "Jacqueline Miller",
      role: "Engineering Architect",
      students: "21,245",
      courses: 5,
      rating: 4,
      avatar: "https://i.pravatar.cc/80?img=24",
    },
    {
      name: "Amanda Reed",
      role: "Medical Science",
      students: "8,546",
      courses: 6,
      rating: 5,
      avatar: "https://i.pravatar.cc/80?img=25",
    },
  ];

  return (
    <div className="instructor-wrapper">
      <h1 className="page-title">Instructors</h1>

      {/* Search and View Switch */}
      <div className="top-bar">
        <div className="search-box">
          <Search className="icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="view-icons">
          <button className="view-btn active">▦</button>
          <button className="view-btn">≣</button>
        </div>
      </div>

      {/* Instructor Cards */}
      <div className="grid-cards">
        {instructors.map((ins, idx) => (
          <div className="inst-card" key={idx}>
            <div className="inst-header">
              <div className="inst-info">
                <img src={ins.avatar} className="inst-avatar" alt={ins.name} />
                <div>
                  <h2 className="inst-name">{ins.name}</h2>
                  <p className="inst-role">{ins.role}</p>
                </div>
              </div>
              <span title="More Options">
                <MoreHorizontal className="more-icon" />
              </span>
            </div>

            <div className="inst-stats">
              <div className="stat-row">
                <Users className="stat-icon users" />
                <span>Total Students</span>
                <span className="stat-value">{ins.students}</span>
              </div>
              <div className="stat-row">
                <Book className="stat-icon courses" />
                <span>Total Courses</span>
                <span className="stat-value">
                  {ins.courses.toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="inst-footer">
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < ins.rating ? "star filled" : "star empty"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span title="Send Email">
                <Mail className="mail-icon" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="footer-row">
        <span>Showing 1 to 6 of 20 entries</span>
        <div className="pagination">
          <button>{"<"}</button>
          <button>1</button>
          <button className="active">2</button>
          <button>3</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default ManageInstructors;
