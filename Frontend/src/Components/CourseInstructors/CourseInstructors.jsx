import React from "react";
import "./CourseInstructors.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt } from "react-icons/fa";

const instructors = [
  {
    name: "Jane Seymour",
    role: "UI Designer",
    image: "https://via.placeholder.com/350x400?text=Jane+Seymour",
  },
  {
    name: "Edward Norton",
    role: "Web Developer",
    image: "https://via.placeholder.com/350x400?text=Edward+Norton",
  },
  {
    name: "Penelope Cruz",
    role: "Digital Marketer",
    image: "https://via.placeholder.com/350x400?text=Penelope+Cruz",
  },
  {
    name: "John Travolta",
    role: "WordPress Expert",
    image: "https://via.placeholder.com/350x400?text=John+Travolta",
  },
];

const CourseInstructors = () => {
  return (
    <section className="instructors-section">
      <p className="sub-title">INSTRUCTORS</p>
      <h2 className="main-title">Course Instructors</h2>
      <span className="title-underline"></span>

      <div className="instructors-grid">
        {instructors.map((inst, index) => (
          <div className="instructor-card" key={index}>
            <div className="instructor-img">
              <img src={inst.image} alt={inst.name} />
              <div className="overlay">
                <div className="social-icons">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="share-btn">
                <FaShareAlt />
              </div>
            </div>
            <h3>{inst.name}</h3>
            <p>{inst.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseInstructors;
