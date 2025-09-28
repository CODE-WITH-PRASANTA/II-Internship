import React from "react";
import "./AboutCourseInstructors.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import t1 from "../../assets/team-01.webp";
import t2 from "../../assets/team-02.webp";
import t3 from "../../assets/team-03.webp";

const instructors = [
  {
    id: 1,
    name: "Jane Seymour",
    role: "UI Designer",
    img: t1,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Edward Norton",
    role: "Web Developer",
    img: t2,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Penelope Cruz",
    role: "Digital Marketer",
    img: t3,
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

const AboutCourseInstructors = () => {
  return (
    <section className="aboutcourseinstructors">
      <div className="container">
        <p className="section-subtitle">INSTRUCTORS</p>
        <h2 className="section-title">Course Instructors</h2>
        <span className="underline"></span>

        <div className="instructors-grid">
          {instructors.map((instructor) => (
            <div className="instructor-card" key={instructor.id}>
              <div className="image-wrapper">
                <img src={instructor.img} alt={instructor.name} />
                <div className="overlay">
                  <div className="social-icons">
                    <a href={instructor.socials.facebook}>
                      <FaFacebookF />
                    </a>
                    <a href={instructor.socials.twitter}>
                      <FaTwitter />
                    </a>
                    <a href={instructor.socials.linkedin}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="instructor-info">
                <h3>{instructor.name}</h3>
                <p>{instructor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCourseInstructors;
