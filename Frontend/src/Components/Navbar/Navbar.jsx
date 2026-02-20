import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/IIIT LOGO (2).png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [internshipOpen, setInternshipOpen] = useState(false);
  const [partnersOpen, setPartnersOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileInternshipOpen, setMobileInternshipOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);

  /* ===== STOP BACKGROUND SCROLL WHEN DRAWER OPEN ===== */
  useEffect(() => {
  const originalOverflow = document.body.style.overflowY;

  if (drawerOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = originalOverflow || "";
  }

  return () => {
    document.body.style.overflowY = originalOverflow || "";
  };
}, [drawerOpen]);

  return (
    <>
      {/* ===== Top Bar ===== */}
      <div className="Navbar-top-bar">
        <div className="Navbar-top-left">
          <span>
            <FaPhoneAlt /> 123 4561 5523
          </span>
          <span>
            <FaEnvelope /> info@IIInternship.co
          </span>
        </div>

        <div className="Navbar-top-right">
          <Link to="/Login" className="Navbar-login-btn">
            🔑 Login / Register
          </Link>

          <Link to="/Apply" className="Navbar-apply-btn">
            🚀 Apply Now
          </Link>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="Navbar-navbar">
        <div className="Navbar-logo">
          <img src={logo} alt="IIIT Logo" />
        </div>

        <ul className="Navbar-nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* ABOUT US */}
          <li
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            About Us <FaChevronDown />
            <div className={`Navbar-dropdown-menu ${aboutOpen ? "open" : ""}`}>
              <Link to="/OrganisationHistory" className="Navbar-dropdown-item">
                Organization History
              </Link>
              <Link to="/vision" className="Navbar-dropdown-item">
                Vision & Mission
              </Link>
              <Link to="/TeamMember" className="Navbar-dropdown-item">
                Team Members
              </Link>
              <Link to="/BecomeInstructor" className="Navbar-dropdown-item">
                Become A Instructor
              </Link>
              <Link to="/WhatIsImmersion" className="Navbar-dropdown-item">
                What is Immersion
              </Link>
              <Link to="/WhatIsInternship" className="Navbar-dropdown-item">
                What is Internship
              </Link>
            </div>
          </li>

          <li>
            <Link to="/Notice">Notice</Link>
          </li>

          {/* INTERNSHIP PROGRAM */}
          <li
            onMouseEnter={() => setInternshipOpen(true)}
            onMouseLeave={() => setInternshipOpen(false)}
          >
            Internships Program <FaChevronDown />
            <div
              className={`Navbar-dropdown-menu ${internshipOpen ? "open" : ""}`}
            >
              <Link to="/OnCampusInternship" className="Navbar-dropdown-item">
                On Campus Internships
              </Link>
              <Link to="/VirtualInternship" className="Navbar-dropdown-item">
                Virtual Internships
              </Link>
              <Link
                to="/RunningInternship"
                className="Navbar-dropdown-item"
              >
               Running Internships
              </Link>
              <Link
                to="/RunningDetails"
                className="Navbar-dropdown-item"
              >
                Running Details
               
              </Link>

            </div>
          </li>

          {/* OUR PARTNERS */}
          <li
            onMouseEnter={() => setPartnersOpen(true)}
            onMouseLeave={() => setPartnersOpen(false)}
          >
            Our Partners <FaChevronDown />
            <div
              className={`Navbar-dropdown-menu ${partnersOpen ? "open" : ""}`}
            >
              <Link to="/AllCourseCategories" className="Navbar-dropdown-item">
                Educational Institutes
              </Link>
              <Link to="/CourseDetails" className="Navbar-dropdown-item">
                Job Placement Companies
              </Link>
            </div>
          </li>

          {/* MEDIA */}
          <li
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}
          >
            Media <FaChevronDown />
            <div className={`Navbar-dropdown-menu ${mediaOpen ? "open" : ""}`}>
              <Link to="/VideoGalary" className="Navbar-dropdown-item">
                Video
              </Link>
              <Link to="/MediaPhotos" className="Navbar-dropdown-item">
                Photo
              </Link>
              <Link to="/OnlineMedia" className="Navbar-dropdown-item">
                Online Media
              </Link>
              <Link to="/NewsPaper" className="Navbar-dropdown-item">
                News Paper
              </Link>
            </div>
          </li>

          <li>
            <Link to="/SuccessStory">Success Story</Link>
          </li>

          <li>
            <Link to="/Recruitment">Recruitment</Link>
          </li>

          <li>
            <Link to="/FaQ">Faq</Link>
          </li>

          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="Navbar-nav-actions">
          <div className="Navbar-call-box"></div>

          <Link to="/Donatebox" className="Navbar-visit-btn">
            Donate
          </Link>

          <div className="Navbar-hamburger" onClick={() => setDrawerOpen(true)}>
            <FaBars />
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {drawerOpen && (
        <div className="Navbar-overlay" onClick={() => setDrawerOpen(false)} />
      )}
      {/* ===== Mobile Drawer ===== */}
      <div className={`Navbar-mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="Navbar-drawer-header">
          <img src={logo} alt="IIIT Logo" />
          <FaTimes onClick={() => setDrawerOpen(false)} />
        </div>

        <ul className="Navbar-drawer-menu">
          <li>
            <Link to="/" onClick={() => setDrawerOpen(false)}>
              Home
            </Link>
          </li>

          {/* ABOUT US */}
          <li
            className="Navbar-mobile-item"
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          >
            About Us{" "}
            <FaChevronDown className={mobileAboutOpen ? "rotate" : ""} />
          </li>

          {mobileAboutOpen && (
            <div className="navbar-mobile-submenu">
              <Link
                to="/OrganisationHistory"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Organization History
              </Link>
              <Link
                to="/vision"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Vision & Mission
              </Link>
              <Link
                to="/TeamMember"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Team Members
              </Link>
              <Link
                to="/BecomeInstructor"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Become A Instructor
              </Link>
              <Link
                to="/WhatIsImmersion"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                What is Immersion
              </Link>
              <Link
                to="/WhatIsInternship"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                What is Internship
              </Link>
            </div>
          )}

          <li>
            <Link to="/Notice" onClick={() => setDrawerOpen(false)}>
              Notice
            </Link>
          </li>

          {/* INTERNSHIP */}
          <li
            className="Navbar-mobile-item"
            onClick={() => setMobileInternshipOpen(!mobileInternshipOpen)}
          >
            Internships Program{" "}
            <FaChevronDown className={mobileInternshipOpen ? "rotate" : ""} />
          </li>

          {mobileInternshipOpen && (
            <div className="navbar-mobile-submenu">
              <Link
                to="/OnCampusInternship"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                On Campus Internships
              </Link>
              <Link
                to="/VirtualInternship"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Virtual Internships
              </Link>
            </div>
          )}

          {/* PARTNERS */}
          <li
            className="Navbar-mobile-item"
            onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
          >
            Our Partners{" "}
            <FaChevronDown className={mobilePartnersOpen ? "rotate" : ""} />
          </li>

          {mobilePartnersOpen && (
            <div className="navbar-mobile-submenu">
              <Link
                to="/AllCourseCategories"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Educational Institutes
              </Link>
              <Link
                to="/CourseDetails"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Job Placement Companies
              </Link>
            </div>
          )}

          {/* MEDIA */}
          <li
            className="Navbar-mobile-item"
            onClick={() => setMobileMediaOpen(!mobileMediaOpen)}
          >
            Media <FaChevronDown className={mobileMediaOpen ? "rotate" : ""} />
          </li>

          {mobileMediaOpen && (
            <div className="navbar-mobile-submenu">
              <Link
                to="/VideoGalary"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Video
              </Link>
              <Link
                to="/MediaPhotos"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Photo
              </Link>
              <Link
                to="/OnlineMedia"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                Online Media
              </Link>
              <Link
                to="/NewsPaper"
                className="navbar-mobile-submenu__item"
                onClick={() => setDrawerOpen(false)}
              >
                News Paper
              </Link>
            </div>
          )}

          <li>
            <Link to="/SuccessStory" onClick={() => setDrawerOpen(false)}>
              Success Story
            </Link>
          </li>

          <li>
            <Link to="/Recruitment" onClick={() => setDrawerOpen(false)}>
              Recruitment
            </Link>
          </li>

          <li>
            <Link to="/FaQ" onClick={() => setDrawerOpen(false)}>
              Faq
            </Link>
          </li>

          <li>
            <Link to="/ContactUs" onClick={() => setDrawerOpen(false)}>
              Contact Us
            </Link>
          </li>

          <li>
            <Link to="/Donatebox" onClick={() => setDrawerOpen(false)}>
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
