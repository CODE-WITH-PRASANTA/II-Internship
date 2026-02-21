import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Lucide Icons
import {
  FolderPlusIcon,
  TrophyIcon,
  MessageSquareIcon,
} from "lucide-react";

// React Icons (Heroicons)
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
import companylogo from "../Asserts/IIIT LOGO (2).png";

const navItems = [
  { icon: <GridIcon />, name: "Dashboard", path: "/" },

  {
    icon: <UserCircleIcon />,
    name: "Instructor Profile",
    path: "/main-instructor",
  },

  {
    icon: <PhotographIcon />,
    name: "Home Event Gallery",
    path: "/events/upload",
  },

  {
    icon: <UsersIcon />,
    name: "Learning Partners",
    path: "/learning-partners",
  },
 
  {
  icon: <UserCircleIcon />,
  name: "Instructor Management",
  path: "/instructor-management",
},

{
  icon: <ClipboardListIcon />,
  name: "Career Management",
  path: "/career-management",
},
  // ================= COURSE MANAGEMENT =================
  {
    icon: <BookOpenIcon />,
    name: "Course Management",
    subItems: [
      { name: "Course Posting", path: "/course/post" },
      { name: "Manage Courses", path: "/course/manage" },
      { name: "Course Approval", path: "/course/approval" },
    ],
  },

  // ================= SUCCESS STORIES =================
  {
    icon: <TrophyIcon />,
    name: "Success Stories",
    subItems: [
      { name: "Add Success Story", path: "/success-story/post" },
      { name: "Story Preview", path: "/success-story/preview" },
      { name: "Client Reviews", path: "/success-story/review" },
    ],
  },

  // ================= INSTRUCTOR MANAGEMENT =================
  {
    icon: <UserCircleIcon />,
    name: "Instructor Management",
    subItems: [
      { name: "Add Instructor", path: "/instructor/add" },
      { name: "Manage Instructors", path: "/instructor/manage" },
      { name: "Assign Courses", path: "/instructor/assign-courses" },
      { name: "Assignments", path: "/instructor/assignments" },
      { name: "Payments & Payouts", path: "/instructor/payment" },
      { name: "Attendance Management", path: "/instructor/attendance" },
    ],
  },
<<<<<<< HEAD

 // ================= CAREER MANAGEMENT =================
{
  icon: <ClipboardListIcon />,
  name: "Career Management",
  subItems: [
    { name: "Post Job", path: "/career/post-job" },
    { name: "Manage Jobs", path: "/career/manage-jobs" },
    { name: "Applications", path: "/career/applications" },
    { name: "Career Settings", path: "/career/settings" },
=======
// ================= NOTICE MANAGEMENT =================
  
 {
  icon: <BellIcon />,
  name: "Notice Management",
  subItems: [
    { name: "Post Notice", path: "/admin/notices/post" },
    { name: "Notice Preview", path: "/admin/notices/preview" },
>>>>>>> 150aabe9894bfb8275a514b934aca0ee8ef967ee
  ],
},
  // ================= CATEGORY =================
  {
    icon: <FolderPlusIcon />,
    name: "Category Management",
    subItems: [
      { name: "Create Category", path: "/category/create" },
      { name: "Category Overview", path: "/category/preview" },
    ],
  },

  // ================= TESTIMONIALS =================
  {
    icon: <MessageSquareIcon />,
    name: "Testimonials",
    subItems: [
      { name: "Add Testimonial", path: "/testimonial/add" },
      { name: "View Testimonials", path: "/testimonial/view" },
    ],
  },

  // ================= STUDENT MANAGEMENT =================
  {
    icon: <UsersIcon />,
    name: "Student Management",
    subItems: [
      { name: "Enroll Student", path: "/student/enroll" },
      { name: "Manage Students", path: "/student/manage" },
      { name: "Internship Progress", path: "/student/progress" },
      { name: "Student Assignments", path: "/student/assignments" },
      { name: "Payment Tracking", path: "/student/payment" },
      { name: "Attendance & Leave", path: "/student/attendance" },
    ],
  },

  // ================= GALLERY MANAGEMENT =================
  {
    icon: <PhotographIcon />,
    name: "Gallery Management",
    subItems: [
      { name: "Video Management", path: "/gallery/videos" },
      { name: "Photo Management", path: "/gallery/photos" },
      { name: "Online Media Management", path: "/gallery/online-media" },
      { name: "News Management", path: "/gallery/news" },
    ],
  },

  // ================= PROJECT MANAGEMENT =================
  {
    icon: <ClipboardListIcon />,
    name: "Project Management",
    subItems: [
      { name: "Add Project", path: "/project/add" },
      { name: "Manage Projects", path: "/project/manage" },
      { name: "Project Assignments", path: "/project/assignments" },
    ],
  },

  // ================= PAYMENT MANAGEMENT =================
  {
    icon: <CreditCardIcon />,
    name: "Financial Management",
    subItems: [
      { name: "Transaction History", path: "/payment/history" },
      { name: "Pending Payments", path: "/payment/pending" },
      { name: "Generate Invoice", path: "/payment/invoice" },
    ],
  },

  // ================= FEEDBACK =================
  {
    icon: <ChatIcon />,
    name: "Feedback Management",
    subItems: [
      { name: "Submit Feedback", path: "/feedback/add" },
      { name: "Feedback Overview", path: "/feedback/view" },
    ],
  },

  // ================= REPORTS =================
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

  // ================= NOTIFICATIONS =================
  {
    icon: <BellIcon />,
    name: "Notifications",
    subItems: [
      { name: "Send Notification", path: "/notifications/send" },
      { name: "Inbox Management", path: "/notifications/manage" },
    ],
  },

  

  // ================= MEDIA =================
  {
    icon: <PhotographIcon />,
    name: "Media Management",
    subItems: [
      { name: "Course Materials", path: "/media/course-materials" },
      { name: "Certificates", path: "/media/certificates" },
    ],
  },

  // ================= SETTINGS =================
  {
    icon: <CogIcon />,
    name: "System Settings",
    subItems: [
      { name: "Platform Settings", path: "/settings/platform" },
      { name: "Admin Users", path: "/settings/admin-users" },
      { name: "System Configuration", path: "/settings/system-config" },
    ],
  },
];
const AppSidebar = () => {
  const { isExpanded, isMobileOpen, isHovered } = useSidebar();
  const location = useLocation();

  const [openSubmenu, setOpenSubmenu] = useState<{ index: number } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<number, number>>({});
  const subMenuRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  useEffect(() => {
    let matched = false;
    navItems.forEach((nav, index) => {
      nav.subItems?.forEach((sub) => {
        if (isActive(sub.path)) {
          setOpenSubmenu({ index });
          matched = true;
        }
      });
    });
    if (!matched) setOpenSubmenu(null);
  }, [location.pathname]);

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
      className={`fixed top-16 lg:top-0 left-0 px-5 
      h-[calc(100vh-64px)] lg:h-screen 
      overflow-hidden z-50 
      bg-[#1e293b]
      border-r border-[#334155]
      text-[#cbd5e1]
      transition-all duration-300
      ${isExpanded || isMobileOpen || isHovered ? "w-[320px]" : "w-[95px]"}
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >

      {/* LOGO */}
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

      {/* MENU */}
      <div className="flex flex-col h-full overflow-y-auto pr-2 no-scrollbar duration-300">
        <nav>
          <h2
            className={`mb-4 text-xs uppercase text-[#64748b] flex leading-[20px]
            ${!isExpanded && !isHovered ? "lg:justify-center" : ""}`}
          >
            {isExpanded || isHovered || isMobileOpen ? (
              "Main Menu"
            ) : (
              <HorizontaLDots className="size-6 text-[#94a3b8]" />
            )}
          </h2>

          <ul className="flex flex-col gap-4">
            {navItems.map((nav, index) => (
              <li key={nav.name}>
                {nav.subItems ? (
                  <button
                    onClick={() => handleSubmenuToggle(index)}
                    className={`menu-item group cursor-pointer ${
                      openSubmenu?.index === index
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    } ${!isExpanded && !isHovered ? "lg:justify-center" : ""}`}
                  >
                    <span className="menu-item-icon-size">{nav.icon}</span>

                    {(isExpanded || isHovered || isMobileOpen) && (
                      <>
                        <span className="menu-item-text whitespace-nowrap overflow-hidden text-ellipsis">
                          {nav.name}
                        </span>
                        <ChevronDownIcon
                          className={`ml-auto w-5 h-5 transition-all ${
                            openSubmenu?.index === index ? "rotate-180" : ""
                          }`}
                        />
                      </>
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
                      <span className="menu-item-icon-size">{nav.icon}</span>
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <span className="menu-item-text whitespace-nowrap overflow-hidden text-ellipsis">
                          {nav.name}
                        </span>
                      )}
                    </Link>
                  )
                )}

                {nav.subItems &&
                  (isExpanded || isHovered || isMobileOpen) && (
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
                          <li key={sub.path}>
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