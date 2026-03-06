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
  Briefcase,
  Bell,
  FolderPlus,
  MessageSquare,
  CreditCard,
  ChevronDown,
  PlayCircle
} from "lucide-react"; 

const menuItems = [
  { icon: <LayoutDashboard size={20} />, name: "Dashboard", path: "/" },

  { icon: <UserCircle size={20} />, name: "Instructor Profile", path: "/main-instructor" },

  { icon: <Image size={20} />, name: "Home Event Gallery", path: "/events/upload" },

  { icon: <Users size={20} />, name: "Learning Partners", path: "/learning-partners" },

  { icon: <ClipboardList size={20} />, name: "Career Management", path: "/career-management" },

  {
    icon: <PlayCircle size={20} />,
    name: "Running Internships",
    subItems: [
      { name: "Post Running Internship", path: "/running-internships/post" },
      { name: "Preview Running Internship", path: "/running-internships/preview" },
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
    icon: <CreditCard size={20} />,
    name: "Financial Management",
    subItems: [
      { name: "Transaction History", path: "/payment/history" },
      { name: "Pending Payments", path: "/payment/pending" },
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
];

const AppSidebar = ({ collapsed, mobileOpen, setMobileOpen }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i, hasSub) => {
    if (!hasSub) return;
    setOpenIndex(openIndex === i ? null : i);
  };

  const closeMobile = () => {
    if (window.innerWidth <= 768) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <aside
        className={`AppSidebar 
        ${collapsed ? "collapsed" : ""} 
        ${mobileOpen ? "mobile-open" : ""}`}
      >
        {/* Logo */}
        <div className="AppSidebar-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu */}
        <div className="AppSidebar-menu">
          {menuItems.map((item, i) => (
            <div key={i}>
              {!item.subItems ? (
                <NavLink
                  to={item.path}
                  end
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `AppSidebar-item ${isActive ? "active" : ""}`
                  }
                >
                  <span className="icon">{item.icon}</span>
                  {!collapsed && <span className="label">{item.name}</span>}
                </NavLink>
              ) : (
                <>
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

                  {!collapsed && openIndex === i && (
                    <div className="AppSidebar-sub">
                      {item.subItems.map((sub, idx) => (
                        <NavLink
                          key={idx}
                          to={sub.path}
                          onClick={closeMobile}
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

      {/* Overlay for Mobile */}
      {mobileOpen && (
        <div
          className="sidebarOverlay"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default AppSidebar;