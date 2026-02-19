import React, { useState, useRef, useEffect } from "react";
import "./CourseInstructors.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

// Assets
import ProfileImg from "../../assets/team-04.webp";
import ProfileImg1 from "../../assets/Profile 0001.webp";

const instructors = [
  {
    name: "Jane Seymour",
    role: "UI Designer",
    image: ProfileImg,
    bio: "Specialist in creating user-friendly interfaces with 6+ years of design experience.",
    rating: 5,
  },
  {
    name: "Edward Norton",
    role: "Web Developer",
    image: ProfileImg1,
    bio: "Full-stack developer with expertise in MERN stack and modern web technologies.",
    rating: 4,
  },
  {
    name: "Penelope Cruz",
    role: "Digital Marketer",
    image: ProfileImg,
    bio: "Expert in SEO, PPC campaigns, and social media growth strategies.",
    rating: 4,
  },
  {
    name: "John Travolta",
    role: "WordPress Expert",
    image: ProfileImg1,
    bio: "Professional in building optimized WordPress sites and eCommerce solutions.",
    rating: 5,
  },
];

const CourseInstructors = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const wrapperRef = useRef(null);

  const toggleShare = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="courseinstructor-section" ref={wrapperRef}>
      {/* Header */}
      <p className="courseinstructor-subtitle">INSTRUCTORS</p>
      <h2 className="courseinstructor-title">Course Instructors</h2>
      <span className="courseinstructor-underline"></span>

      {/* Grid */}
      <div className="courseinstructor-grid">
        {instructors.map((inst, index) => (
          <div className="courseinstructor-card" key={index}>
            {/* Image Section */}
            <div className="courseinstructor-image-wrapper">
              <img
                src={inst.image}
                alt={inst.name}
                className="courseinstructor-image"
              />

              {/* Social Icons (Click to Show) */}
              <div
                className={`courseinstructor-overlay ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                <div className="courseinstructor-social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>

              {/* Share Button */}
              <div
                className="courseinstructor-share-btn"
                onClick={() => toggleShare(index)}
              >
                <FaShareAlt />
              </div>
            </div>

            {/* Content */}
            <h3 className="courseinstructor-name">{inst.name}</h3>
            <p className="courseinstructor-role">{inst.role}</p>
            <p className="courseinstructor-bio">{inst.bio}</p>

            {/* Rating */}
            <div className="courseinstructor-rating">
              {[...Array(inst.rating)].map((_, i) => (
                <FaStar key={i} className="courseinstructor-star" />
              ))}
            </div>

            {/* Button */}
            <button className="courseinstructor-btn">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseInstructors;
