import React, { useState } from "react";
import StudentDashboardSidebar from "../../Components/StudentDashboardSidebar/StudentDashboardSidebar ";
import StudentDashboardDashboard from "../../Components/StudentDashboardDashboard/StudentDashboardDashboard";
import StudentDashboardMySubscription from "../../Components/StudentDashboardMySubscription/StudentDashboardMySubscription";
import StudentDashboardCourseResume from "../../Components/StudentDashboardCourseResume/StudentDashboardCourseResume";
import StudentDashboardWishlist from "../../Components/StudentDashboardWishlist/StudentDashboardWishlist";
import StudentDashboardPaymentInfo from "../../Components/StudentDashboardPaymentInfo/StudentDashboardPaymentInfo";
import StudentDashboardHelpSupport from "../../Components/StudentDashboardHelpSupport/StudentDashboardHelpSupport";
import "./StudentDashboard.css";
import StudentDashboardAllCourses from "../../Components/StudentDashboardAllCourses/StudentDashboardAllCourses";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <StudentDashboardDashboard />;
      case "allcourses":
         return <StudentDashboardAllCourses />;
      case "subscription":
        return <StudentDashboardMySubscription />;
      case "course":
        return <StudentDashboardCourseResume />;    
      case "wishlist":
        return <StudentDashboardWishlist />;
      case "payment":
        return <StudentDashboardPaymentInfo />;
      case "help":
        return <StudentDashboardHelpSupport />;
      default:
        return <StudentDashboardDashboard />;
    }
  };

  return (
    
    <div className="studentdashboard-wrapper">
      <StudentDashboardSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <main className="studentdashboard-main">{renderContent()}</main>
    </div>
  );
};

export default StudentDashboard;
