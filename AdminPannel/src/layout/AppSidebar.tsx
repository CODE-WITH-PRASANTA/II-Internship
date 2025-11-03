import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FolderPlusIcon,
  TrophyIcon,
  MessageSquareIcon,
} from "lucide-react";

// ✅ React Icons imports
import {
  HiOutlineViewGrid as GridIcon,
  HiOutlineUserCircle as UserCircleIcon,
  HiOutlineBookOpen as BookOpenIcon,
  HiOutlineUsers as UsersIcon,
  HiOutlineClipboardList as ClipboardListIcon,
  HiOutlineCreditCard as CreditCardIcon,
  HiOutlineChat as ChatIcon,
  HiOutlineChartBar as ChartBarIcon,
  HiOutlineBell as BellIcon,
  HiOutlinePhotograph as PhotographIcon,
  HiOutlineCog as CogIcon,
  HiOutlineDotsHorizontal as HorizontaLDots,
  HiChevronDown as ChevronDownIcon,
} from "react-icons/hi";

import { useSidebar } from "../context/SidebarContext";
import companylogo from "../Asserts/IIIT LOGO (2).png"; // fixed spelling

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string }[];
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Dashboard Overview", path: "/" },

  {
    icon: <BookOpenIcon />,
    name: "Course Management",
    subItems: [
      { name: "Add New Course", path: "/course/post" },
      { name: "Manage Courses", path: "/course/manage" },
      { name: "Course Preview", path: "/course/preview" },
    ],
  },

  {
    icon: <UserCircleIcon />,
    name: "Instructor Management",
    subItems: [
      { name: "Add Instructor", path: "/instructor/add" },
      { name: "Manage Instructors", path: "/instructor/manage" },
      { name: "Assign Courses", path: "/instructor/assign-courses" },
      { name: "Assignments", path: "/instructor/assignments" },
      { name: "Payment & Payouts", path: "/instructor/payment" },
      { name: "Attendance & Leave", path: "/instructor/attendance" },
    ],
  },

  {
    icon: <FolderPlusIcon />,
    name: "Category Management",
    subItems: [
      { name: "Add New Category", path: "/category/create" },
      { name: "Category Overview", path: "/category/preview" },
    ],
  },

  {
    icon: <TrophyIcon />,
    name: "Success Stories",
    subItems: [
      { name: "Create Story", path: "/success-story/create" },
      { name: "Client Reviews", path: "/success-story/review" },
    ],
  },

  {
    icon: <MessageSquareIcon />,
    name: "Testimonials",
    subItems: [
      { name: "Add Testimonial", path: "/testimonial/add" },
      { name: "View Testimonials", path: "/testimonial/view" },
    ],
  },

  {
    icon: <UsersIcon />,
    name: "Student Management",
    subItems: [
      { name: "Enroll Student", path: "/student/enroll" },
      { name: "Manage Students", path: "/student/manage" },
      { name: "Internship Progress", path: "/student/progress" },
      { name: "Assignments", path: "/student/assignments" },
      { name: "Payment Tracking", path: "/student/payment" },
      { name: "Attendance & Leave", path: "/student/attendance" },
    ],
  },

  {
    icon: <ClipboardListIcon />,
    name: "Internship Projects",
    subItems: [
      { name: "Add Project", path: "/project/add" },
      { name: "Manage Projects", path: "/project/manage" },
      { name: "Student Assignments", path: "/project/assignments" },
    ],
  },

  {
    icon: <CreditCardIcon />,
    name: "Payment Management",
    subItems: [
      { name: "Transaction History", path: "/payment/history" },
      { name: "Pending Payments", path: "/payment/pending" },
      { name: "Generate Invoice", path: "/payment/invoice" },
    ],
  },

  {
    icon: <ChatIcon />,
    name: "User Feedback",
    subItems: [
      { name: "Submit Feedback", path: "/feedback/add" },
      { name: "Feedback Overview", path: "/feedback/view" },
    ],
  },

  {
    icon: <ChartBarIcon />,
    name: "Analytics & Reports",
    subItems: [
      { name: "Student Reports", path: "/reports/students" },
      { name: "Course Reports", path: "/reports/courses" },
      { name: "Instructor Reports", path: "/reports/instructors" },
      { name: "Payment Reports", path: "/reports/payments" },
      { name: "Attendance Reports", path: "/reports/attendance" },
    ],
  },

  {
    icon: <BellIcon />,
    name: "Notifications Center",
    subItems: [
      { name: "Send Notifications", path: "/notifications/send" },
      { name: "Inbox Management", path: "/notifications/manage" },
    ],
  },

  {
    icon: <PhotographIcon />,
    name: "Media Library",
    subItems: [
      { name: "Upload Course Materials", path: "/media/course-materials" },
      { name: "Upload Certificates", path: "/media/certificates" },
    ],
  },

  {
    icon: <CogIcon />,
    name: "System Settings",
    subItems: [
      { name: "Platform Configuration", path: "/settings/platform" },
      { name: "Admin Accounts", path: "/settings/admin-users" },
      { name: "System Preferences", path: "/settings/system-config" },
    ],
  },
];


// =============================
// SIDEBAR COMPONENT
// =============================
const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState<{ index: number } | null>(
    null
  );
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );

  // ✅ FIXED — proper type for numeric index
  const subMenuRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let matched = false;
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((sub) => {
          if (isActive(sub.path)) {
            setOpenSubmenu({ index });
            matched = true;
          }
        });
      }
    });
    if (!matched) setOpenSubmenu(null);
  }, [location, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = openSubmenu.index;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prev) => ({
          ...prev,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) => (prev?.index === index ? null : { index }));
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
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
          />
        </Link>
      </div>

      {/* MENU SECTION */}
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav>
          <h2
            className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
              !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
            }`}
          >
            {isExpanded || isHovered || isMobileOpen ? (
              "Main Menu"
            ) : (
              <HorizontaLDots className="size-6" />
            )}
          </h2>

          <ul className="flex flex-col gap-4">
            {navItems.map((nav, index) => (
              <li key={nav.name}>
                {nav.subItems ? (
                  <button
                    onClick={() => handleSubmenuToggle(index)}
                    className={`menu-item group ${
                      openSubmenu?.index === index
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    } cursor-pointer ${
                      !isExpanded && !isHovered
                        ? "lg:justify-center"
                        : "lg:justify-start"
                    }`}
                  >
                    <span
                      className={`menu-item-icon-size ${
                        openSubmenu?.index === index
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      {nav.icon}
                    </span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">{nav.name}</span>
                    )}
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <ChevronDownIcon
                        className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                          openSubmenu?.index === index
                            ? "rotate-180 text-brand-500"
                            : ""
                        }`}
                      />
                    )}
                  </button>
                ) : (
                  nav.path && (
                    <Link
                      to={nav.path}
                      className={`menu-item group ${
                        isActive(nav.path)
                          ? "menu-item-active"
                          : "menu-item-inactive"
                      }`}
                    >
                      <span
                        className={`menu-item-icon-size ${
                          isActive(nav.path)
                            ? "menu-item-icon-active"
                            : "menu-item-icon-inactive"
                        }`}
                      >
                        {nav.icon}
                      </span>
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span className="menu-item-text">{nav.name}</span>
                      )}
                    </Link>
                  )
                )}

                {/* ✅ FIXED REFS */}
                {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                  <div
                    ref={(el) => {
                      subMenuRefs.current[index] = el;
                    }}
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      height:
                        openSubmenu?.index === index
                          ? `${subMenuHeight[index]}px`
                          : "0px",
                    }}
                  >
                    <ul className="mt-2 space-y-1 ml-9">
                      {nav.subItems.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className={`menu-dropdown-item ${
                              isActive(sub.path)
                                ? "menu-dropdown-item-active"
                                : "menu-dropdown-item-inactive"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
