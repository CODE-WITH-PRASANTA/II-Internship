import React from "react";
import { FaLaptopCode, FaGraduationCap, FaCertificate } from "react-icons/fa";

// Import course images
import course1 from "../../assets/courses-1.webp";
import course2 from "../../assets/courses-2.webp";
import course3 from "../../assets/courses-3.webp";
import course4 from "../../assets/courses-4.webp";


import "./StudentDashboardDashboard.css";

const courses = [
  { id: 1, img: course1, title: "UX/UI Design Essentials", lessons: "12 of 12", time: "10h 50m", progress: 100, color: "green" },
  { id: 2, img: course2, title: "Backend Development With Node.Js", lessons: "7 of 18", time: "20h 10m", progress: 40, color: "yellow" },
  { id: 3, img: course3, title: "Web Development Bootcamp", lessons: "17 of 17", time: "12h 40m", progress: 100, color: "green" },
  { id: 4, img: course4, title: "React JS Advanced Concepts", lessons: "8 of 12", time: "15h 30m", progress: 65, color: "yellow" },
  { id: 5, img: course1, title: "Python for Data Science", lessons: "10 of 15", time: "18h 20m", progress: 50, color: "yellow" },
  { id: 6, img: course2, title: "Fullstack JavaScript Mastery", lessons: "15 of 20", time: "25h 10m", progress: 75, color: "yellow" },
];

const StudentDashboardDashboard = () => {
  return (
    <div className="studentdashboard-dashboard">
      <h2>Dashboard</h2>

      {/* Summary Cards */}
      <div className="studentdashboard-summarycards">
        <div className="studentdashboard-card">
          <div className="studentdashboard-icon blue"><FaLaptopCode /></div>
          <h3>42</h3>
          <p>Total Courses</p>
        </div>
        <div className="studentdashboard-card">
          <div className="studentdashboard-icon orange"><FaGraduationCap /></div>
          <h3>38</h3>
          <p>Completed Lessons</p>
        </div>
        <div className="studentdashboard-card">
          <div className="studentdashboard-icon green"><FaCertificate /></div>
          <h3>04</h3>
          <p>Achieved Certificates</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="studentdashboard-courseheader">
        <h3>Browse All Courses</h3>
        <a href="#">View All</a>
      </div>

      <div className="studentdashboard-coursegrid">
        {courses.map(course => (
          <div key={course.id} className="studentdashboard-coursecard">
            <div className="studentdashboard-courseimg">
              <span className="studentdashboard-timer">{course.time}</span>
              <img src={course.img} alt={course.title} />
            </div>
            <div className="studentdashboard-coursecontent">
              <h4>{course.title}</h4>
              <p>{course.lessons} Lessons Complete</p>
              <div className={`studentdashboard-progressbar ${course.color}`}>
                <div style={{ width: `${course.progress}%` }}></div>
              </div>
              <p className="studentdashboard-progresspercent">{course.progress}%</p>
              <button>Course Resume ↗</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboardDashboard;
