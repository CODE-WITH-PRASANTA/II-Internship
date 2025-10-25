import React from "react";
import "./InstructorDashboardHeader.css";
import { FaBell, FaUserCircle } from "react-icons/fa";

const InstructorDashboardHeader = () => {
  return (
    <header className="instructordashboard-header">
      <div className="instructordashboard-header-left">
        <h1>Instructor Dashboard</h1>
      </div>

      <div className="instructordashboard-header-right">
        <div className="instructordashboard-search">
          <input type="text" placeholder="Search courses..." />
        </div>

        <div className="instructordashboard-icons">
          <FaBell className="instructordashboard-icon" />
          <FaUserCircle className="instructordashboard-icon user-icon" />
        </div>
      </div>
    </header>
  );
};

export default InstructorDashboardHeader;
