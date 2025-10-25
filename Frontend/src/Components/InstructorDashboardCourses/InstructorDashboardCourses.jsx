import React from "react";
import course1 from "../../assets/courses-1.webp";
import course2 from "../../assets/courses-2.webp";
import course3 from "../../assets/courses-3.webp";
import course4 from "../../assets/courses-4.webp";
import "./InstructorDashboardCourses.css";

const InstructorDashboardCourses = () => {
  const courses = [
    { img: course1, name: "Building Scalable APIs With GraphQL", enrolled: 120, status: "Live", price: "$149" },
    { img: course2, name: "Mastering Python For Beginners", enrolled: 95, status: "Draft", price: "$99" },
    { img: course3, name: "React JS Complete Guide", enrolled: 180, status: "Live", price: "$199" },
    { img: course4, name: "Advanced NodeJS Development", enrolled: 70, status: "Pending", price: "$129" },
  ];

  return (
    <div className="instructordashboardcourses-wrapper">
      {/* === Recent Courses Table === */}
      <div className="instructordashboardcourses-recent-courses">
        <div className="instructordashboardcourses-recent-header">
          <h3>My Courses</h3>
          <span className="instructordashboardcourses-viewall">View All</span>
        </div>

        <div className="instructordashboardcourses-table-wrapper">
          <table className="instructordashboardcourses-table">
            <thead>
              <tr>
                <th>Course Title</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td className="instructordashboardcourses-course-cell">
                    <img src={course.img} alt={course.name} />
                    {course.name}
                  </td>
                  <td>{course.enrolled}</td>
                  <td>
                    <span
                      className={`instructordashboardcourses-status ${
                        course.status.toLowerCase()
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td>{course.price}</td>
                  <td>
                    <button className="instructordashboardcourses-edit-btn">✏️</button>
                    <button className="instructordashboardcourses-delete-btn">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination + Entries */}
        <div className="instructordashboardcourses-pagination-wrapper">
          <div className="instructordashboardcourses-pagination-info">
            Showing 1 to 8 of 20 entries
          </div>
          <div className="instructordashboardcourses-pagination">
            <span className="instructordashboardcourses-page active">1</span>
            <span className="instructordashboardcourses-page">2</span>
            <span className="instructordashboardcourses-page">3</span>
            <span className="instructordashboardcourses-page">4</span>
            <span className="instructordashboardcourses-page">5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardCourses;
