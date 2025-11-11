import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineViewGrid as DashboardIcon,
  HiOutlineUserCircle as ProfileIcon,
  HiOutlineBookOpen as CourseIcon,
  HiOutlineSpeakerphone as AnnouncementIcon,
  HiOutlineClipboardList as AssignmentIcon,
  HiOutlineUsers as StudentIcon,
  HiOutlineQuestionMarkCircle as QuizIcon,
  HiOutlineClipboardCheck as ResultIcon,
  HiOutlineBadgeCheck as CertificateIcon,
  HiOutlineCurrencyRupee as EarningsIcon,
  HiOutlineCreditCard as PayoutIcon,
  HiOutlineDocumentReport as StatementIcon,
  HiOutlineChatAlt2 as MessageIcon,
  HiOutlineSupport as TicketIcon,
  HiOutlineCog as SettingIcon,
  HiOutlineLogout as LogoutIcon,
  HiOutlineChevronDown as ChevronDownIcon,
} from "react-icons/hi";
import companylogo from "../Asserts/IIIT LOGO (2).png";
import { useSidebar } from "../context/SidebarContext";

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
}


interface Category {
  title: string;
  items: NavItem[];
  dropdown?: boolean;
}

// ==============================
// CATEGORY-WISE NAVIGATION
// ==============================
const categories: Category[] = [
  {
    title: "General",
    items: [
      { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
      { name: "My Profile", icon: <ProfileIcon />, path: "/profile" },
      { name: "Courses", icon: <CourseIcon />, path: "/courses" },
      { name: "Announcements", icon: <AnnouncementIcon />, path: "/announcements" },
      { name: "Assignments", icon: <AssignmentIcon />, path: "/assignments" },
      { name: "Students", icon: <StudentIcon />, path: "/students" },
      { name: "Quiz", icon: <QuizIcon />, path: "/quiz" },
      { name: "Quiz Results", icon: <ResultIcon />, path: "/quiz-results" },
      { name: "Certificates", icon: <CertificateIcon />, path: "/certificates" },
    ],
  },
  {
    title: "Financial",
    dropdown: true,
    items: [
      { name: "Earnings", icon: <EarningsIcon />, path: "/earnings" },
      { name: "Payout", icon: <PayoutIcon />, path: "/payout" },
      { name: "Statements", icon: <StatementIcon />, path: "/statements" },
    ],
  },
  {
    title: "Communication",
    dropdown: true,
    items: [
      { name: "Messages", icon: <MessageIcon />, path: "/messages" },
      { name: "Support Tickets", icon: <TicketIcon />, path: "/support-tickets" },
    ],
  },
  {
    title: "Account & System",
    dropdown: true,
    items: [
      { name: "Account Settings", icon: <SettingIcon />, path: "/account-settings" },
      { name: "Settings", icon: <SettingIcon />, path: "/settings" },
      { name: "Logout", icon: <LogoutIcon />, path: "/logout" },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        if (isActive(item.path)) setOpenDropdown(cat.title);
      });
    });
  }, [location, isActive]);

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-50 mt-16 lg:mt-0 h-screen bg-white dark:bg-gray-900 dark:border-gray-800 border-r border-gray-200 text-gray-900 flex flex-col transition-all duration-300 ease-in-out
        ${
          isExpanded || isMobileOpen
            ? "w-[280px]"
            : isHovered
            ? "w-[280px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO SECTION */}
      <div
        className={`py-5 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          <img
            src={companylogo}
            alt="Company Logo"
            width={isExpanded || isHovered || isMobileOpen ? 150 : 32}
            height={isExpanded || isHovered || isMobileOpen ? 40 : 32}
            className="rounded-lg transition-all"
          />
        </Link>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="flex flex-col overflow-y-auto px-1 pb-5 no-scrollbar">
        <h2
          className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
            !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
          }`}
        >
          {isExpanded || isHovered || isMobileOpen ? "Main Menu" : "•"}
        </h2>

        <ul className="flex flex-col gap-3">
          {categories.map((cat) => (
            <li key={cat.title}>
              {/* CATEGORY HEADER */}
              {(isExpanded || isHovered || isMobileOpen) && (
                <p className="text-xs uppercase text-gray-500 font-semibold mb-1 ml-3 tracking-wide">
                  {cat.title}
                </p>
              )}

              {/* CATEGORY CONTENT */}
              {cat.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(cat.title)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                      ${
                        openDropdown === cat.title
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <ChevronDownIcon
                        className={`w-5 h-5 transition-transform ${
                          openDropdown === cat.title ? "rotate-180" : ""
                        }`}
                      />
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span>{cat.title}</span>
                      )}
                    </div>
                  </button>

                  {/* DROPDOWN ITEMS */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ml-6 ${
                      openDropdown === cat.title ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <ul className="mt-2 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3">
                      {cat.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm transition-colors ${
                              isActive(item.path)
                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-300"
                            }`}
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 font-medium"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        } ${!isExpanded && !isHovered ? "lg:justify-center" : ""}`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        {(isExpanded || isHovered || isMobileOpen) && (
                          <span>{item.name}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
