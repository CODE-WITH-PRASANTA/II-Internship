import React from "react";
import { Laptop, GraduationCap, Diamond, DollarSign } from "lucide-react";
import course1 from "../../assets/courses-1.webp";
import course2 from "../../assets/courses-2.webp";
import course3 from "../../assets/courses-3.webp";
import course4 from "../../assets/courses-4.webp";
import "./InstructorDashboardStats.css";

const InstructorDashboardStats = () => {
  const stats = [
    {
      title: "Total Courses",
      value: "42",
      icon: <Laptop size={28} color="#3BA55D" />,
      color: "#E6F4EA",
    },
    {
      title: "Total Students",
      value: "44k",
      icon: <GraduationCap size={28} color="#FF6B6B" />,
      color: "#FFE9E6",
    },
    {
      title: "Enrolled Students",
      value: "17k",
      icon: <Diamond size={28} color="#3B6CFF" />,
      color: "#E6F0FF",
    },
    {
      title: "Monthly Revenue",
      value: "$4.2k",
      icon: <DollarSign size={28} color="#FFB74D" />,
      color: "#FFF7E6",
    },
  ];

  const courses = [
    { img: course1, name: "Building Scalable APIs With GraphQL", selling: 42, amount: "$18,432", period: "06 months" },
    { img: course2, name: "Mastering Python For Beginners", selling: 36, amount: "$20,560", period: "09 months" },
    { img: course3, name: "React JS Complete Guide", selling: 44, amount: "$45,550", period: "12 months" },
    { img: course4, name: "Advanced NodeJS Development", selling: 65, amount: "$22,568", period: "18 months" },
  ];

  return (
    <div className="instructordashboardstats-wrapper">
      {/* Stats Cards */}
      <div className="instructordashboardstats-cards">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="instructordashboardstats-card"
            style={{ backgroundColor: stat.color }}
          >
            <div className="instructordashboardstats-icon">{stat.icon}</div>
            <div>
              <h2 className="instructordashboardstats-value">{stat.value}</h2>
              <p className="instructordashboardstats-title">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Courses Table */}
      <div className="instructordashboardstats-recent-courses">
        <div className="instructordashboardstats-recent-header">
          <h3>Recent Selling Courses</h3>
          <span className="instructordashboardstats-viewall">View All</span>
        </div>

        <div className="instructordashboardstats-table-wrapper">
          <table className="instructordashboardstats-table">
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Selling</th>
                <th>Amount</th>
                <th>Period</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="instructordashboardstats-course-cell">
                    <img src={course.img} alt={course.name} />
                    {course.name}
                  </td>
                  <td>{course.selling}</td>
                  <td>{course.amount}</td>
                  <td>
                    <span className="instructordashboardstats-period">{course.period}</span>
                  </td>
                  <td>
                    <button className="instructordashboardstats-edit-btn">✏️</button>
                    <button className="instructordashboardstats-delete-btn">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination + Entries */}
        <div className="instructordashboardstats-pagination-wrapper">
          <div className="instructordashboardstats-pagination-info">
            Showing 1 to 8 of 20 entries
          </div>
          <div className="instructordashboardstats-pagination">
            <span className="instructordashboardstats-page active">1</span>
            <span className="instructordashboardstats-page">2</span>
            <span className="instructordashboardstats-page">3</span>
            <span className="instructordashboardstats-page">4</span>
            <span className="instructordashboardstats-page">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardStats;
