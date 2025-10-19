import React, { useState } from "react";
import "./SuccessStoryGrid.css";

import grid1 from "../../assets/grid1.webp";
import grid2 from "../../assets/grid2.webp";
import grid3 from "../../assets/grid3.webp";
import grid4 from "../../assets/grid4.webp";
import grid5 from "../../assets/grid5.webp";
import grid6 from "../../assets/grid6.webp";
import grid7 from "../../assets/grid7.webp";
import grid8 from "../../assets/grid8.webp";

const allStories = [
  { id: 1, tag: "Student life", color: "#e63946", img: grid1, title: "Student Loan Survey: Many Owe $50K-plus", desc: "Affronting imprudence do he everything...", author: "Frances Guerrero", time: "30M Ago" },
  { id: 2, tag: "Student life", color: "#2a9d8f", img: grid2, title: "How to make a college list", desc: "Prospective students should start broadly...", author: "Lois Crawford", time: "12H Ago" },
  { id: 3, tag: "Travel", color: "#6d4aff", img: grid3, title: "Never underestimate the influence of Eduport", desc: "Prospective students should start broadly...", author: "Joan Wallace", time: "5D Ago" },
  { id: 4, tag: "Research", color: "#e63946", img: grid4, title: "Covid-19 and the college experienced", desc: "Rooms oh fully taken by worse do...", author: "Amanda Reed", time: "July 21, 2021" },
  { id: 5, tag: "Research", color: "#2a9d8f", img: grid5, title: "Best Pinterest Boards for learning about business", desc: "Fully taken by worse do...", author: "Samuel Bishop", time: "40D Ago" },
  { id: 6, tag: "Sports", color: "#2196f3", img: grid6, title: "The Olympics are over, now what?", desc: "Rooms oh fully taken by worse do...", author: "Carolyn Ortiz", time: "Aug 31, 2021" },
  { id: 7, tag: "Student story", color: "#8b5cf6", img: grid7, title: "Campus Support for First-Year Students", desc: "Prospective students should start broadly...", author: "Lori Stevens", time: "3M Ago" },
  { id: 8, tag: "Marketing", color: "#f59e0b", img: grid8, title: "Bad habits that people in the industry need to quit", desc: "Prospective students should start broadly...", author: "Louis Crawford", time: "10D Ago" },
    { id: 1, tag: "Student life", color: "#e63946", img: grid1, title: "Student Loan Survey: Many Owe $50K-plus", desc: "Affronting imprudence do he everything...", author: "Frances Guerrero", time: "30M Ago" },
  { id: 2, tag: "Student life", color: "#2a9d8f", img: grid2, title: "How to make a college list", desc: "Prospective students should start broadly...", author: "Lois Crawford", time: "12H Ago" },
  { id: 3, tag: "Travel", color: "#6d4aff", img: grid3, title: "Never underestimate the influence of Eduport", desc: "Prospective students should start broadly...", author: "Joan Wallace", time: "5D Ago" },
  { id: 4, tag: "Research", color: "#e63946", img: grid4, title: "Covid-19 and the college experienced", desc: "Rooms oh fully taken by worse do...", author: "Amanda Reed", time: "July 21, 2021" },
  { id: 5, tag: "Research", color: "#2a9d8f", img: grid5, title: "Best Pinterest Boards for learning about business", desc: "Fully taken by worse do...", author: "Samuel Bishop", time: "40D Ago" },
  { id: 6, tag: "Sports", color: "#2196f3", img: grid6, title: "The Olympics are over, now what?", desc: "Rooms oh fully taken by worse do...", author: "Carolyn Ortiz", time: "Aug 31, 2021" },
  { id: 7, tag: "Student story", color: "#8b5cf6", img: grid7, title: "Campus Support for First-Year Students", desc: "Prospective students should start broadly...", author: "Lori Stevens", time: "3M Ago" },
  { id: 8, tag: "Marketing", color: "#f59e0b", img: grid8, title: "Bad habits that people in the industry need to quit", desc: "Prospective students should start broadly...", author: "Louis Crawford", time: "10D Ago" },
];

const STORIES_PER_PAGE = 8;

function SuccessStoryGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allStories.length / STORIES_PER_PAGE);
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
  const currentStories = allStories.slice(startIndex, startIndex + STORIES_PER_PAGE);

  return (
    <section className="successstorygrid-container">
      {/* HEADER */}
      <div className="successstorygrid-header">
        <h2 className="successstorygrid-heading">Success Stories</h2>
        <div className="header-patterns">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* GRID */}
      <div className="successstorygrid-wrapper">
        {currentStories.map((story, index) => (
          <div className="successstorygrid-card" key={story.id} style={{ "--delay": index * 0.1 + "s" }}>
            <div className="successstorygrid-image">
              <img src={story.img} alt={story.title} />
              <span className="successstorygrid-tag" style={{ backgroundColor: story.color }}>{story.tag}</span>
            </div>
            <div className="successstorygrid-content">
              <h3 className="successstorygrid-title">{story.title}</h3>
              <p className="successstorygrid-desc">{story.desc}</p>
              <div className="successstorygrid-footer">
                <span className="successstorygrid-author">{story.author}</span>
                <span className="successstorygrid-time">{story.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="successstorygrid-pagination">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? "active" : ""}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default SuccessStoryGrid;
