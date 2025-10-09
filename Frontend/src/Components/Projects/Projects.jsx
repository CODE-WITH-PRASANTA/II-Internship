// Projects.js
import React from "react";
import "./Projects.css";
import { FaCamera, FaHeart, FaGlobe, FaStar, FaGift, FaImages } from "react-icons/fa";
import om1 from "../../assets/om1.webp";
import om2 from "../../assets/om2.webp";
import om3 from "../../assets/om3.webp";
import om4 from "../../assets/om4.webp";
import om5 from "../../assets/om5.webp";
import om6 from "../../assets/om6.webp";

const projectData = [
  { id: 1, title: "Wedding Shoots", img: om1, icon: <FaCamera /> },
  { id: 2, title: "Portrait Photography", img: om2, icon: <FaHeart /> },
  { id: 3, title: "Travel Photography", img: om3, icon: <FaGlobe /> },
  { id: 4, title: "Creative Projects", img: om4, icon: <FaStar /> },
  { id: 5, title: "Event Photography", img: om5, icon: <FaGift /> },
  { id: 6, title: "Gallery Highlights", img: om6, icon: <FaImages /> },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="card-back">
                <span className="project-icon">{project.icon}</span>
                <span className="project-title">{project.title}</span>
                <p className="project-desc">High-quality professional work with a creative touch.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
