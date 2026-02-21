import React, { useEffect, useState } from "react";
import "./SuccessStorySidebar.css";
import { FiSearch, FiChevronRight, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import API, { getImageUrl } from "../../api/api";

const SuccessStorySidebar = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  /* ================= FETCH SIDEBAR DATA ================= */
  useEffect(() => {
    fetchCategories();
    fetchLatestPosts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");
      const published = res.data.filter((cat) => cat.published);
      setCategories(published);
    } catch (err) {
      console.error("CATEGORY FETCH ERROR:", err);
    }
  };

  const fetchLatestPosts = async () => {
    try {
      const res = await API.get("/success-stories");

      const publishedStories = res.data
        .filter((story) => story.publishStatus === "Published")
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
        .slice(0, 4); // latest 4

      setLatestPosts(publishedStories);

      // Extract unique tags
      const allTags = [];
      publishedStories.forEach((story) => {
        if (story.blogTags && story.blogTags.length > 0) {
          allTags.push(...story.blogTags);
        }
      });

      const uniqueTags = [...new Set(allTags)];
      setTags(uniqueTags.slice(0, 8));
    } catch (err) {
      console.error("LATEST POSTS FETCH ERROR:", err);
    }
  };

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
          {categories.map((category) => (
            <li key={category._id}>
              <FiChevronRight />
              <span>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* LATEST POSTS CARD */}
      <div className="successstory-sidebar-card">
        <h3 className="successstory-sidebar-title">Latest Post</h3>

        {latestPosts.map((post) => (
          <div
            key={post._id}
            className="successstory-sidebar-post-item"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/SuccessStory/details/${post._id}`)
            }
          >
            <div className="successstory-sidebar-post-image">
              <img
                src={
                  post.image
                    ? getImageUrl(post.image)
                    : "/placeholder.png"
                }
                alt={post.title}
              />
            </div>

            <div className="successstory-sidebar-post-content">
              <div className="successstory-sidebar-post-date">
                <FiCalendar />
                <span>
                  {post.publishDate
                    ? new Date(post.publishDate).toLocaleDateString()
                    : ""}
                </span>
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
            <span
              key={index}
              className="successstory-sidebar-tag"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SuccessStorySidebar;