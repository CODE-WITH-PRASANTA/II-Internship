import React, { useState } from "react";
import "./ProjectsSection.css";
import { ArrowUpRight } from "lucide-react";

import img1 from "../../assets/project-1.webp";
import img2 from "../../assets/project-2.webp";
import img3 from "../../assets/project-3.webp";
import img4 from "../../assets/project-4.webp";
import img5 from "../../assets/project-5.webp";
import img6 from "../../assets/project-6.webp";

const allProjects = [
  {
    id: 1,
    title: "Software Development",
    category: "Marketing, Software",
    img: img1,
  },
  {
    id: 2,
    title: "Health App Development",
    category: "Business",
    img: img2,
  },
  {
    id: 3,
    title: "Marketing Agency Website",
    category: "Security",
    img: img3,
  },
  {
    id: 4,
    title: "Financial Dashboard",
    category: "Finance, Analytics",
    img: img4,
  },
  {
    id: 5,
    title: "Corporate Management Tool",
    category: "Business",
    img: img5,
  },
  {
    id: 6,
    title: "Data Analytics Platform",
    category: "Technology",
    img: img6,
  },
  {
    id: 7,
    title: "E-Commerce Platform",
    category: "Retail",
    img: img3,
  },
  {
    id: 8,
    title: "Education LMS Website",
    category: "Education",
    img: img4,
  },
  {
    id: 9,
    title: "Startup Landing Page",
    category: "Marketing",
    img: img5,
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {currentProjects.map((item) => (
          <div key={item.id} className="project-card">
            <img src={item.img} alt={item.title} className="project-image" />
            <div className="project-overlay">
              <div className="project-content">
                <h3 className="project-title">{item.title}</h3>
                <p className="project-category">{item.category}</p>
              </div>
              <div className="project-icon">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
