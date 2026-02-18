import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/IIIT LOGO (2).png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  /* ================= SCROLL HIDE NAVBAR ================= */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLOSE ON OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const toggleDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      sub: [
        { name: "Organization History", path: "/OrganisationHistory" },
        { name: "Vision & Mission", path: "/vision" },
        { name: "Team Members", path: "/TeamMember" },
        { name: "Become A Instructor", path: "/BecomeInstructor" },
        { name: "What is Immersion", path: "/WhatIsImmersion" },
        { name: "What is Internship", path: "/WhatIsInternship" },
      ],
    },
    { name: "Notice", path: "/Notice" },
    {
      name: "Internships Program",
      path: "/InternshipsProgram",
      sub: [
        { name: "On Campus Internships", path: "/OnCampusInternship" },
        { name: "Virtual Internships", path: "/VirtualInternship" },
      ],
    },
    {
      name: "Our Partners",
      sub: [
        { name: "Educational Institutes", path: "/ComingSoon" },
        { name: "Job Placement Companies", path: "/JobPlacementCompanies" },
        { name: "Training & Technical Support", path: "/TechnicalSupport" },
      ],
    },
    {
      name: "Media",
      sub: [
        { name: "Video", path: "/VideoGalary" },
        { name: "Photo", path: "/MediaPhotos" },
        { name: "Online Media", path: "/OnlineMedia" },
        { name: "News Paper", path: "/NewsPaper" },
      ],
    },
    { name: "Success Story", path: "/SuccessStory" },
    { name: "Recruitment", path: "/Recruitment" },
    { name: "Faq", path: "/FaQ" },
    { name: "Contact Us", path: "/ContactUs" },
    { name: "Donate", path: "/Donatebox" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-content">
            <div className="topbar-left">
              <a href="tel:12345615523" className="topbar-item">
                📞 <span>123 4561 5523</span>
              </a>
              <a href="mailto:info@IIInternship.co" className="topbar-item">
                ✉ <span>info@IIInternship.co</span>
              </a>
            </div>

            <div className="topbar-right">
              <Link to="/Login" className="topbar-login">
                🔑 Login / Register
              </Link>
              <Link to="/Apply" className="topbar-cta">
                🚀 Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header
        className={`Nav-navbar-wrapper ${showNavbar ? "show" : "hide"}`}
      >
        <nav className="Nav-navbar">
          <div className="Nav-navbar-inner">
            <div className="Nav-logo-wrapper">
              <Link to="/" className="Nav-logo">
                <img src={logo} alt="Logo" />
              </Link>
            </div>

            <button
              className="Nav-toggler"
              onClick={() => setMobileMenuOpen(true)}
            >
              ☰
            </button>

            {/* Desktop Menu */}
            <ul className="Nav-menu">
              {menuItems.map((item, i) => (
                <li className="Nav-item" key={i}>
                  {item.sub ? (
                    <>
                      <span className="Nav-link">{item.name}</span>
                      <ul className="Nav-dropdown">
                        {item.sub.map((sub, idx) => (
                          <li key={idx}>
                            <Link to={sub.path}>{sub.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.name === "Donate" ? (
                    <Link className="Nav-donate-btn" to={item.path}>
                      {item.name}
                    </Link>
                  ) : (
                    <Link className="Nav-link" to={item.path}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* ================= MOBILE OVERLAY ================= */}
        {mobileMenuOpen && (
          <div
            className="Nav-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`Nav-mobile-menu ${mobileMenuOpen ? "open" : ""}`}
          ref={menuRef}
        >
          <div className="Nav-mobile-wrapper">
            <div className="Nav-mobile-top">
              <div className="Nav-mobile-logo">
                <img src={logo} alt="Logo" />
              </div>
              <button
                className="Nav-close"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <ul className="Nav-mobile-list">
              {menuItems.map((item, i) => (
                <li key={i}>
                  {item.sub ? (
                    <>
                      <div
                        className="mobile-link"
                        onClick={() => toggleDropdown(i)}
                      >
                        {item.name}
                        <span>
                          {mobileDropdownOpen === i ? "▲" : "▼"}
                        </span>
                      </div>

                      <ul
                        className={`mobile-dropdown ${
                          mobileDropdownOpen === i ? "open" : ""
                        }`}
                      >
                        {item.sub.map((sub, idx) => (
                          <li key={idx}>
                            <Link
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.name === "Donate" ? (
                    <Link
                      to={item.path}
                      className="Nav-mobile-donate-btn"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.path}
                      className="mobile-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;