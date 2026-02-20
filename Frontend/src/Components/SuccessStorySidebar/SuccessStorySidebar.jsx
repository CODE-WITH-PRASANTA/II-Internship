import React from "react";
import "./SuccessStorySidebar.css";
import { FiSearch, FiChevronRight, FiCalendar } from "react-icons/fi";

import latest1 from "../../assets/Post-1.webp";
import latest2 from "../../assets/Post-2.webp";
import latest3 from "../../assets/Post-3.webp";
import latest4 from "../../assets/Post-1.webp";

const SuccessStorySidebar = () => {
  const latestPosts = [
    {
      id: 1,
      image: latest1,
      date: "April 13, 2024",
      title: "The Right Learning Path For You",
    },
    {
      id: 2,
      image: latest2,
      date: "April 13, 2024",
      title: "The Growing Need Management",
    },
    {
      id: 3,
      image: latest3,
      date: "April 13, 2024",
      title: "The Right Learning Path For You",
    },
    {
      id: 4,
      image: latest4,
      date: "April 13, 2024",
      title: "The Growing Need Management",
    },
  ];

  const categories = [
    "Art & Design",
    "Business",
    "Data Science",
    "Development",
    "Finance",
    "Health & Fitness",
    "Lifestyle",
  ];

  const tags = ["Education", "Training", "Online", "Learn", "Course", "LMS"];

  return (
    <div className="successstory-sidebar-wrapper">

      {/* SEARCH BOX */}
      <div className="successstory-sidebar-searchbox">
        <input type="text" placeholder="Search here" />
        <FiSearch className="successstory-sidebar-search-icon" />
      </div>

      {/* CATEGORIES CARD */}
      <div className="successstory-sidebar-card">
        <h3 className="successstory-sidebar-title">Categories</h3>

        <ul className="successstory-sidebar-category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <FiChevronRight />
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* LATEST POSTS CARD */}
      <div className="successstory-sidebar-card">
        <h3 className="successstory-sidebar-title">Latest Post</h3>

        {latestPosts.map((post) => (
          <div key={post.id} className="successstory-sidebar-post-item">
            
            <div className="successstory-sidebar-post-image">
              <img src={post.image} alt={post.title} />
            </div>

            <div className="successstory-sidebar-post-content">
              <div className="successstory-sidebar-post-date">
                <FiCalendar />
                <span>{post.date}</span>
              </div>
              <h4>{post.title}</h4>
            </div>

          </div>
        ))}
      </div>

      {/* TAGS CARD */}
      <div className="successstory-sidebar-card">
        <h3 className="successstory-sidebar-title">Tags</h3>

        <div className="successstory-sidebar-tags">
          {tags.map((tag, index) => (
            <span key={index} className="successstory-sidebar-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SuccessStorySidebar;
