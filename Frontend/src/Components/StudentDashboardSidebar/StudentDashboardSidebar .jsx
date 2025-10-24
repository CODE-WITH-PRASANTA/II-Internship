import React from "react";
import { FiHome, FiHelpCircle } from "react-icons/fi";
import { BsBook, BsHeart } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import { BsWallet2 } from "react-icons/bs";
import avatar from "../../assets/course-avatar-1.webp";
import "./StudentDashboardSidebar.css";

const StudentDashboardSidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { name: "dashboard", icon: <FiHome />, label: "Dashboard" },
    { name: "allcourses", icon: <FiHome />, label: "All Courses" },
    { name: "subscription", icon: <BsBook />, label: "My Subscription" },
    { name: "course", icon: <BiBookContent />, label: "Course Resume" },
    { name: "wishlist", icon: <BsHeart />, label: "Wishlist" },
    { name: "payment", icon: <BsWallet2 />, label: "Payment Info" },
    { name: "help", icon: <FiHelpCircle />, label: "Help & Support" },
  ];

  return (
    <aside className="studentdashboard-sidebar">
      {/* Profile */}
      <div className="studentdashboard-profile">
        <img src={avatar} alt="Avatar" className="studentdashboard-avatar" />
        <div className="studentdashboard-profile-info">
          <h3>Ryan Mitchell</h3>
          <p>Platinum – Exp. 15 Dec 2025</p>
        </div>
        <div className="studentdashboard-stats">
          <div>
            <strong>12</strong>
            <span>Courses</span>
          </div>
          <div>
            <strong>156</strong>
            <span>Lessons</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="studentdashboard-nav">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={activeTab === item.name ? "active" : ""}
            onClick={() => setActiveTab(item.name)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default StudentDashboardSidebar;
