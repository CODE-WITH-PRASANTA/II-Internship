import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import "./Navbar.css";
import logo from "../../assets/IIIT LOGO (2).png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuRef = useRef();
  const lastScrollY = useRef(0);

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

  const toggleDropdown = (index) => {
    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
  };

  // Define menu items with route paths
 const menuItems = [
  { name: "Home", path: "/" }, // real
  { name: "About Us", sub: [
      { name: "Organization History", path: "/OrganisationHistory" }, // real
      { name: "Vision & Mission", path: "/vision" },
      { name: "Team Members", path: "/TeamMember" },
      { name: "Become A Instructor", path: "/BecomeInstructor" },
      { name: "What is Immersion" , path:"/WhatIsImmersion"},
      { name: "What is Internship", path: "/WhatIsInternship" },
    ] 
  },
  { name: "Notice", path: "/Notice" }, // real
{
  name: "Internships Program",
  path: "/InternshipsProgram", // ✅ Added main route
  sub: [
    { name: "On Campus Internships", path: "/OnCampusInternship" },
    { name: "Virtual Internships", path: "/VirtualInternship" },
  ],
},

  { name: "Our Partners", sub: [
      { name: "Educational Institutes", path: "/ComingSoon" },
      { name: "Job Placement Companies", path: "/JobPlacementCompanies" },
      { name: "Training & Technical Support", path: "/TechnicalSupport" },
    ] 
  },
  { name: "Media", sub: [
      { name: "Video", path: "/VideoGalary" },
      { name: "Photo", path: "/MediaPhotos" },
      { name: "Online Media", path: "/OnlineMedia" },
      { name: "News Paper", path: "/NewsPaper" },
    ] 
  },
  { name: "Success Story", path: "/SuccessStory" },
  { name: "Recruitment", path: "/Recruitment" },
  { name: "Faq", path: "/FaQ" },
  { name: "Contact Us", path: "/ContactUs" },
  { name: "Donate", path: "/Donatebox" },
];


  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-content">
            <div className="topbar-left">
              <a href="tel:12345615523" className="topbar-item">📞 <span>123 4561 5523</span></a>
              <a href="mailto:info@IIInternship.co" className="topbar-item">✉ <span>info@IIInternship.co</span></a>
            </div>
            <div className="topbar-right">
              <Link to="/Login" className="topbar-login">🔑 Login / Register</Link>
              <Link to="/Apply" className="topbar-cta">🚀 Apply Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className={`Nav-navbar-wrapper ${showNavbar ? "show" : "hide"}`}>
        <nav className="Nav-navbar">
          <div className="Nav-container Nav-navbar-inner">
            <div className="Nav-logo-wrapper">
              <Link to="/" className="Nav-logo"><img src={logo} alt="EduBlink" /></Link>
            </div>
            <button className="Nav-toggler" onClick={() => setMobileMenuOpen(true)}>☰</button>

            {/* Desktop Menu */}
            <ul className="Nav-menu">
              {menuItems.map((item, i) => (
                <li className="Nav-item dropdown" key={i}>
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
                    <Link className="Nav-donate-btn" to={item.path}>{item.name}</Link>
                  ) : (
                    <Link className="Nav-link" to={item.path}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`Nav-mobile-menu ${mobileMenuOpen ? "open" : ""}`} ref={menuRef}>
          <div className="Nav-mobile-wrapper">
            <div className="Nav-mobile-top">
              <div className="Nav-mobile-logo"><img src={logo} alt="EduBlink" /></div>
              <button className="Nav-close" onClick={() => setMobileMenuOpen(false)}>✕</button>
            </div>
            <ul className="Nav-mobile-list">
              {menuItems.map((item, i) => (
                <li key={i}>
                  {item.sub ? (
                    <>
                      <div className="mobile-link" onClick={() => toggleDropdown(i)}>
                        {item.name} <span className="arrow">{mobileDropdownOpen === i ? "▲" : "▼"}</span>
                      </div>
                      <ul className={`mobile-dropdown ${mobileDropdownOpen === i ? "open" : ""}`}>
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
