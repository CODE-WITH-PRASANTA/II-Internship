import React, { useState } from "react";
import "./InstructorDashboardSidebar.css";
import avatar1 from "../../assets/course-avatar-1.webp";
import {
  LayoutDashboard,
  BookOpen,
  PlusSquare,
  Wallet,
  Users,
  ShoppingBag,
  Star,
  DollarSign,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Courses", icon: <BookOpen size={18} /> },
  { label: "Create Course", icon: <PlusSquare size={18} /> },
  { label: "Earning", icon: <Wallet size={18} /> },
  { label: "Students", icon: <Users size={18} /> },
  { label: "My Orders", icon: <ShoppingBag size={18} /> },
  { label: "Reviews", icon: <Star size={18} /> },
  { label: "Payout", icon: <DollarSign size={18} /> },
  { label: "Help & Support", icon: <HelpCircle size={18} /> },
];

const InstructorDashboardSidebar = ({ activeSection, setActiveSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClick = (item) => {
    const sectionId = item.label.toLowerCase().replace(/ /g, "");
    setActiveSection(sectionId);
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsSidebarOpen(true)}
      >
        <Menu size={20} style={{ marginRight: "5px" }} />
        Dashboard Menu
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`instructordashboard-sidebar ${
          isSidebarOpen ? "sidebar-open" : ""
        }`}
      >
        {/* Close Button for Mobile */}
        <button
          className="sidebar-close-btn"
          onClick={() => setIsSidebarOpen(false)}
        >
          <X size={20} />
        </button>

        {/* Profile Section */}
        <div className="instructordashboard-profile">
          <div className="instructordashboard-avatar-wrapper">
            <img
              src={avatar1}
              alt="Instructor Avatar"
              className="instructordashboard-avatar"
            />
          </div>
          <h3 className="instructordashboard-name">Adam L. Markram</h3>
          <p className="instructordashboard-rating">
            ⭐ 4.9 <span>(2.15k Reviews)</span>
          </p>
          <div className="instructordashboard-meta">
            <p>
              <strong>42,570</strong> Students
            </p>
            <p>
              <strong>46+</strong> Courses
            </p>
          </div>
        </div>

        {/* Menu Section */}
        <ul className="instructordashboard-menu">
          {menuItems.map((item) => {
            const isActive =
              activeSection === item.label.toLowerCase().replace(/ /g, "");
            return (
              <li
                key={item.label}
                className={`instructordashboard-menu-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleClick(item)}
              >
                <span className="instructordashboard-menu-icon">{item.icon}</span>
                <span className="instructordashboard-menu-text">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default InstructorDashboardSidebar;
