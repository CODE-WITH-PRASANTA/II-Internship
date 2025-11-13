import React from "react";
import { useNavigate } from "react-router-dom";
import "./InstructorDashboardPage.css";

const InstructorDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddCourse = () => {
    navigate("/add-new-course"); // ✅ Redirects to Add New Course page
  };

  return (
    <div className="instructor-dashboard-page-container">
      {/* Header Section */}
      <header className="instructor-dashboard-page-header">
        <h1 className="instructor-dashboard-page-title">Dashboard</h1>
        <nav className="instructor-dashboard-page-breadcrumb">
          <span>Home</span>
          <span className="instructor-dashboard-page-breadcrumb-separator">—</span>
          <span className="instructor-dashboard-page-breadcrumb-active">Dashboard</span>
        </nav>
      </header>

      {/* Profile Card */}
      <section className="instructor-dashboard-page-profile-card">
        <div className="instructor-dashboard-page-profile-info">
          <div className="instructor-dashboard-page-profile-avatar">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="instructor-dashboard-page-avatar-img"
            />
            <span className="instructor-dashboard-page-verified-badge">✔</span>
          </div>
          <div className="instructor-dashboard-page-profile-details">
            <h2 className="instructor-dashboard-page-profile-name">
              Eugene Andre{" "}
              <span className="instructor-dashboard-page-edit-icon">✎</span>
            </h2>
            <p className="instructor-dashboard-page-profile-role">Instructor</p>
          </div>
        </div>

        <div className="instructor-dashboard-page-profile-buttons">
          <button
            className="instructor-dashboard-page-btn instructor-dashboard-page-add-course"
            onClick={handleAddCourse}
          >
            Add New Course
          </button>
          <button className="instructor-dashboard-page-btn instructor-dashboard-page-student-dashboard">
            Student Dashboard
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstructorDashboardPage;
