import React from "react";
import "./InstructorDashboardMain.css";
import InstructorDashboardStats from "../InstructorDashboardStats/InstructorDashboardStats";
import InstructorDashboardCourses from "../InstructorDashboardCourses/InstructorDashboardCourses";
import InstructorDashboardCreateCourse from "../InstructorDashboardCreateCourse/InstructorDashboardCreateCourse";
import InstructorDashboardEarning from "../InstructorDashboardEarning/InstructorDashboardEarning";
import InstructorDashboardStudents from "../InstructorDashboardStudents/InstructorDashboardStudents";
import InstructorDashboardOrders from "../InstructorDashboardOrders/InstructorDashboardOrders";
import InstructorDashboardReviews from "../InstructorDashboardReviews/InstructorDashboardReviews";
import InstructorDashboardPayout from "../InstructorDashboardPayout/InstructorDashboardPayout";
import InstructorDashboardHelp from "../InstructorDashboardHelp/InstructorDashboardHelp";

// Import all dashboard sections


const InstructorDashboardMain = ({ activeSection }) => {
  // Handle section switching
  switch (activeSection) {
    case "dashboard":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardStats />
          
        </div>
      );

    case "courses":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardCourses />
        </div>
      );

    case "createcourse":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardCreateCourse />
        </div>
      );

    case "earning":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardEarning />
        </div>
      );

    case "students":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardStudents />
        </div>
      );

    case "myorders":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardOrders />
        </div>
      );

    case "reviews":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardReviews />
        </div>
      );

    case "payout":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardPayout />
        </div>
      );

    case "help&support":
      return (
        <div className="instructordashboard-main">
          <InstructorDashboardHelp />
        </div>
      );

    default:
      return (
        <div className="instructordashboard-main">
          <h2>Section Not Found</h2>
        </div>
      );
  }
};

export default InstructorDashboardMain;
