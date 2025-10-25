import React, { useState } from "react";
import "./InstructorDashboard.css";
import InstructorDashboardSidebar from "../../Components/InstructorDashboardSidebar/InstructorDashboardSidebar";
import InstructorDashboardHeader from "../../Components/InstructorDashboardHeader/InstructorDashboardHeader";
import InstructorDashboardMain from "../../Components/InstructorDashboardMain/InstructorDashboardMain";

const InstructorDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="instructordashboard-wrapper">
      <div className="instructordashboard-container">
        {/* Sidebar */}
        <InstructorDashboardSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main Content */}
        <div className="instructordashboard-content">
          <InstructorDashboardHeader />
          <InstructorDashboardMain activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboard;
