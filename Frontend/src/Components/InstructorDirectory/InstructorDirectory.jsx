import React from "react";
import "./InstructorDirectory.css";
import { Search, Star } from "lucide-react";
import Instructor1 from "../../assets/instructor2.webp";
import Instructor2 from "../../assets/instructor3.webp";
import Instructor3 from "../../assets/instructor4.webp";
import Instructor4 from "../../assets/instructor5.webp";

const instructors = [
  {
    name: "Akshay Dhinwal",
    title: "Software Engineer",
    username: "@Shreethemes",
    rating: "4.8",
    reviews: "546",
    image: Instructor1,
    skills: ["Frontend", "Devops", "UI/UX designer", "Full Stack", "3 More.."],
  },
  {
    name: "Ryan Mitchell",
    title: "Business Finance",
    username: "@Bliq Quard",
    rating: "4.9",
    reviews: "456",
    image: Instructor2,
    skills: ["Frontend", "Devops", "UI/UX designer", "Full Stack", "3 More.."],
  },
  {
    name: "Cameron Lee",
    title: "Blogging Expert",
    username: "@GridLayers",
    rating: "4.9",
    reviews: "234",
    image: Instructor3,
    skills: ["Frontend", "Devops", "UI/UX designer", "Full Stack", "3 More.."],
  },
  {
    name: "Lauren Hayes",
    title: "UI/UX Graphic Designer",
    username: "@BootstrapWire",
    rating: "4.8",
    reviews: "389",
    image: Instructor4,
    skills: ["Frontend", "Devops", "UI/UX designer", "Full Stack", "3 More.."],
  },
];

const InstructorDirectory = () => {
  return (
    <>
      {/* ===== Header Section ===== */}
      <section className="instructor-header">
        <div className="header-content">
          <p className="breadcrumb">
            Home <span>/</span> Instructors
          </p>
          <h1 className="header-title">Find Instructors</h1>
        </div>
      </section>

      {/* ===== Main Directory ===== */}
      <div className="instructordirectory">
        {/* Sidebar */}
        <aside className="instructordirectory-sidebar">
          <div className="sidebar-section search-box">
            <div className="search-input">
              <Search size={18} color="#6b7280" />
              <input type="text" placeholder="Search courses or tutor" />
            </div>
          </div>

          <div className="sidebar-section">
            <label className="section-title">Courses Topic</label>
            {["React", "Java Script", "Laravel", "Angular", "HTML5", "CSS3"].map(
              (topic) => (
                <label key={topic} className="checkbox-item">
                  <input type="checkbox" />
                  <span className="checkbox-label-text">{topic}</span>
                </label>
              )
            )}
          </div>

          <div className="sidebar-section">
            <label className="section-title">Price</label>
            {["All", "Free", "Premium"].map((price) => (
              <label key={price} className="checkbox-item">
                <input type="checkbox" />
                <span className="checkbox-label-text">{price}</span>
              </label>
            ))}
          </div>

          <div className="sidebar-section">
            <label className="section-title">Lecture Duration</label>
            {[
              "0 - 1 Hour (13)",
              "1 - 2 Hour (26)",
              "2 - 3 Hour (65)",
              "3 - 4 Hour (35)",
              "4 - 5 Hour (17)",
            ].map((duration) => (
              <label key={duration} className="checkbox-item">
                <input type="checkbox" />
                <span className="checkbox-label-text">{duration}</span>
              </label>
            ))}
          </div>

          <div className="sidebar-section">
            <label className="section-title">Rating</label>
            {[
              { stars: 5.0, reviews: "1,785" },
              { stars: 4.0, reviews: "3,650" },
              { stars: 3.0, reviews: "2,784" },
              { stars: 2.5, reviews: "875" },
            ].map((r) => (
              <label key={r.stars} className="checkbox-item rating-item">
                <input type="checkbox" />
                <span className="stars-wrapper" aria-hidden>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i + 1 <= Math.round(r.stars) ? "#facc15" : "none"}
                        stroke="#facc15"
                      />
                    ))}
                </span>
                <span className="checkbox-label-text">
                  {r.stars} & up <span className="reviews">({r.reviews})</span>
                </span>
              </label>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="instructordirectory-main">
          <h2 className="result-heading">
            We found <strong>142</strong> courses for you
          </h2>

          <div className="instructor-list">
            {instructors.map((inst) => (
              <div key={inst.name} className="instructor-card">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="instructor-img"
                />
                <div className="instructor-info">
                  <h3>
                    {inst.name} <span className="verified">✔</span>
                  </h3>
                  <p className="role">
                    {inst.title} <span className="handle">{inst.username}</span>
                  </p>
                  <p className="bio">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    ligula magna, gravida id suscipit vitae, condimentum ac
                    mauris.
                  </p>
                  <div className="skills">
                    {inst.skills.map((s, i) => (
                      <span key={i} className="skill-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="rating-section">
                    <Star size={16} fill="#facc15" stroke="#facc15" />
                    <span className="rating">{inst.rating}</span>
                    <span className="reviews">({inst.reviews} Reviews)</span>
                  </div>
                </div>
                <button className="view-profile">View Profile</button>
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="pagination">
            <button className="page-btn prev">← Previous</button>
            <div className="page-numbers">
              <button className="page-number active">1</button>
              <button className="page-number">2</button>
              <button className="page-number">3</button>
              <span className="dots">...</span>
              <button className="page-number">12</button>
            </div>
            <button className="page-btn next">Next →</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default InstructorDirectory;
