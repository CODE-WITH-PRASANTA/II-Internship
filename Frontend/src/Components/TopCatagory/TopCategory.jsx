import React from "react";
import "./TopCategory.css";
import {
  FaCode,
  FaBriefcase,
  FaChartLine,
  FaBullhorn,
  FaShoppingBag,
  FaCamera,
  FaPaintBrush,
  FaHeartbeat,
  FaMusic,
} from "react-icons/fa";

const categories = [
  {
    title: "Development",
    desc: "Take your journey with this course",
    icon: <FaCode />,
  },
  {
    title: "Business",
    desc: "Take your journey with this course",
    icon: <FaBriefcase />,
  },
  {
    title: "Data Science",
    desc: "Discover the data science",
    icon: <FaChartLine />,
  },
  {
    title: "Marketing",
    desc: "Take up your self in the next level",
    icon: <FaBullhorn />,
  },
  {
    title: "Life Styles",
    desc: "Improved your life style course",
    icon: <FaShoppingBag />,
  },
  {
    title: "Photography",
    desc: "Become the great photographer",
    icon: <FaCamera />,
  },
  {
    title: "Art and Design",
    desc: "Grow your design skills",
    icon: <FaPaintBrush />,
  },
  {
    title: "Health and Fitness",
    desc: "Enjoy the health life with fitness",
    icon: <FaHeartbeat />,
  },
  {
    title: "Music",
    desc: "Improve your self with music",
    icon: <FaMusic />,
  },
];

const TopCategory = () => {
  return (
    <section className="top-category">
      <div className="top-category-header">
        <h4>Explore</h4>
        <h2>
          Our Top <span>Categories</span>
        </h2>
      </div>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <div className="icon-wrap">{item.icon}</div>
            <div className="category-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopCategory;
