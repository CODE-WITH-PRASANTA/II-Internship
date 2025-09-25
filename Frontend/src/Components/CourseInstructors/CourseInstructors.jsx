import React from "react";
import "./CourseInstructors.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt, FaStar } from "react-icons/fa";

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
  return (
    <section className="courseinstructor-section">
      {/* Section Header */}
      <p className="courseinstructor-subtitle">INSTRUCTORS</p>
      <h2 className="courseinstructor-title">Course Instructors</h2>
      <span className="courseinstructor-underline"></span>

      {/* Instructors Grid */}
      <div className="courseinstructor-grid">
        {instructors.map((inst, index) => (
          <div className="courseinstructor-card" key={index}>
            <div className="courseinstructor-image-wrapper">
              <img
                src={inst.image}
                alt={inst.name}
                className="courseinstructor-image"
              />
              <div className="courseinstructor-overlay">
                <div className="courseinstructor-social-icons">
                  <FaFacebookF className="courseinstructor-icon" />
                  <FaTwitter className="courseinstructor-icon" />
                  <FaLinkedinIn className="courseinstructor-icon" />
                </div>
              </div>
              <div className="courseinstructor-share-btn">
                <FaShareAlt className="courseinstructor-icon" />
              </div>
            </div>

            {/* Instructor Info */}
            <h3 className="courseinstructor-name">{inst.name}</h3>
            <p className="courseinstructor-role">{inst.role}</p>

            {/* Bio */}
            <p className="courseinstructor-bio">{inst.bio}</p>

            {/* Rating */}
            <div className="courseinstructor-rating">
              {Array(inst.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="courseinstructor-star" />
                ))}
            </div>

            {/* Profile Button */}
            <button className="courseinstructor-btn">View Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseInstructors;
