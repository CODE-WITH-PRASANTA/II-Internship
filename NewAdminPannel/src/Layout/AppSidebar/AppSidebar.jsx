import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AppSidebar.css";
import logo from "../../assets/IIIT LOGO (2).png";

import {
  LayoutDashboard,
  UserCircle,
  Image,
  Users,
  ClipboardList,
  BookOpen,
  Briefcase,
  Trophy,
  Bell,
  FolderPlus,
  MessageSquare,
  CreditCard,
  BarChart3,
  Cog,
  ChevronDown
} from "lucide-react";

const menuItems = [
  { icon: <LayoutDashboard size={20} />, name: "Dashboard", path: "/" },
  { icon: <UserCircle size={20} />, name: "Instructor Profile", path: "/main-instructor" },
  { icon: <Image size={20} />, name: "Home Event Gallery", path: "/events/upload" },
  { icon: <Users size={20} />, name: "Learning Partners", path: "/learning-partners" },
  { icon: <ClipboardList size={20} />, name: "Career Management", path: "/career-management" },

  {
    icon: <BookOpen size={20} />,
    name: "Course Management",
    subItems: [
      { name: "Course Posting", path: "/course/post" },
      { name: "Manage Courses", path: "/course/manage" },
      { name: "Course Approval", path: "/course/approval" },
    ],
  },

  {
    icon: <Briefcase size={20} />,
    name: "Internship Management",
    subItems: [
      { name: "Post Internship", path: "/internship/post" },
      { name: "Preview Internship", path: "/internship/preview" },
    ],
  },

  {
    icon: <Trophy size={20} />,
    name: "Success Stories",
    subItems: [
      { name: "Add Success Story", path: "/success-story/post" },
      { name: "Story Preview", path: "/success-story/preview" },
      { name: "Client Reviews", path: "/success-story/review" },
    ],
  },

  {
    icon: <Bell size={20} />,
    name: "Notice Management",
    subItems: [
      { name: "Post Notice", path: "/admin/notices/post" },
      { name: "Notice Preview", path: "/admin/notices/preview" },
    ],
  },

  {
    icon: <FolderPlus size={20} />,
    name: "Category Management",
    subItems: [
      { name: "Create Category", path: "/category/create" },
      { name: "Category Overview", path: "/category/preview" },
    ],
  },

  {
    icon: <MessageSquare size={20} />,
    name: "Testimonials",
    subItems: [
      { name: "Add Testimonial", path: "/testimonial/add" },
      { name: "View Testimonials", path: "/testimonial/view" },
    ],
  },

  {
    icon: <Users size={20} />,
    name: "Student Management",
    subItems: [
      { name: "Enroll Student", path: "/student/enroll" },
      { name: "Manage Students", path: "/student/manage" },
    ],
  },

  {
    icon: <CreditCard size={20} />,
    name: "Financial Management",
    subItems: [
      { name: "Transaction History", path: "/payment/history" },
      { name: "Pending Payments", path: "/payment/pending" },
    ],
  },

  {
    icon: <BarChart3 size={20} />,
    name: "Analytics & Reports",
    subItems: [
      { name: "Student Reports", path: "/reports/students" },
      { name: "Course Reports", path: "/reports/courses" },
    ],
  },

  {
    icon: <MessageSquare size={20} />,
    name: "Feedback Management",
    subItems: [
      { name: "Submit Feedback", path: "/feedback/add" },
      { name: "Feedback Overview", path: "/feedback/view" },
    ],
  },

  {
    icon: <Cog size={20} />,
    name: "System Settings",
    subItems: [
      { name: "Platform Settings", path: "/settings/platform" },
      { name: "Admin Users", path: "/settings/admin-users" },
      { name: "System Configuration", path: "/settings/system-config" },
    ],
  },
];

const AppSidebar = ({ collapsed }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i, hasSub) => {
    if (!hasSub) return;
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <aside className={`AppSidebar ${collapsed ? "collapsed" : ""}`}>
      
      {/* Logo */}
      <div className="AppSidebar-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* Menu */}
      <div className="AppSidebar-menu">
        {menuItems.map((item, i) => (
          <div key={i}>
            
            {/* NORMAL LINK ITEM */}
            {!item.subItems ? (
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `AppSidebar-item ${isActive ? "active" : ""}`
                }
              >
                <span className="icon">{item.icon}</span>
                {!collapsed && <span className="label">{item.name}</span>}
              </NavLink>
            ) : (
              <>
                {/* PARENT WITH DROPDOWN */}
                <div
                  className="AppSidebar-item"
                  onClick={() => toggle(i, item.subItems)}
                >
                  <span className="icon">{item.icon}</span>
                  {!collapsed && (
                    <>
                      <span className="label">{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`arrow ${openIndex === i ? "open" : ""}`}
                      />
                    </>
                  )}
                </div>

                {/* SUBMENU */}
                {!collapsed && openIndex === i && (
                  <div className="AppSidebar-sub">
                    {item.subItems.map((sub, idx) => (
                      <NavLink
                        key={idx}
                        to={sub.path}
                        className={({ isActive }) =>
                          `AppSidebar-subItem ${isActive ? "activeSub" : ""}`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default AppSidebar;