import React from "react";
import "./TopCategory.css";
import {
  FaLaptopCode, FaCertificate, FaBrain, FaPenNib, FaCode,
  FaPills, FaDatabase, FaBullhorn, FaHandshake, FaLaptop, FaImages
} from "react-icons/fa";
import { BsBookHalf, BsPeople } from "react-icons/bs";

const stats = [
  { icon: <FaLaptopCode />, number: "3020", text: "Online Courses", color: "#4facfe" },
  { icon: <BsBookHalf />, number: "150+", text: "Top Instructors", color: "#00f2fe" },
  { icon: <FaCertificate />, number: "800+", text: "Certifications", color: "#43e97b" },
  { icon: <BsPeople />, number: "6,000", text: "Membership", color: "#fa709a" },
];

const categories = [
  { icon: <FaBrain />, text: "Business Management", bg: "#e0f7f4" },
  { icon: <FaPenNib />, text: "Arts & Design", bg: "#ffe6ea" },
  { icon: <FaCode />, text: "Personal Development", bg: "#e6fff3" },
  { icon: <FaPills />, text: "Health & Fitness", bg: "#fff4d9" },
  { icon: <FaDatabase />, text: "Data Science", bg: "#f0e6ff" },
  { icon: <FaBullhorn />, text: "Marketing", bg: "#ffe6f0" },
  { icon: <FaHandshake />, text: "Business & Finance", bg: "#e6e6ff" },
  { icon: <FaLaptop />, text: "Computer Science", bg: "#fff4d9" },
  { icon: <FaImages />, text: "Video & Photography", bg: "#e6f7ff" },
];

const StatCard = ({ icon, number, text, color }) => (
  <div className="stat-card" style={{ borderColor: color }}>
    <div className="stat-icon" style={{ backgroundColor: color }}>{icon}</div>
    <div>
      <h2>{number}</h2>
      <p>{text}</p>
    </div>
  </div>
);

const CategoryCard = ({ icon, text, bg }) => (
  <div className="category-card" style={{ backgroundColor: bg }}>
    <span className="category-icon">{icon}</span>
    <p>{text}</p>
  </div>
);

const TopCategory = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-row">
          {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
        </div>
      </section>
      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Top Categories</h2>
        <p className="section-subtitle">Explore popular learning areas chosen by thousands of learners</p>
        <div className="categories-grid">
          {categories.map((cat, i) => <CategoryCard key={i} {...cat} />)}
        </div>
      </section>
    </>
  );
};

export default TopCategory;
