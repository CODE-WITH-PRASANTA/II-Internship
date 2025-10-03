import React from "react";
import "./ServiceBlogs.css";
import { FaRegComment } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import ln4 from "../../assets/ln4.webp";
import ln5 from "../../assets/ln5.webp";

const blogs = [
  {
    id: 1,
    title: "Gallery to Garment: Art Meets Design",
    image: ln4,
    description:
      "When brushstrokes inspire hemlines and canvases shape silhouettes, the result is a striking fusion of visual art and fashion design.",
    author: "Eleanor Pena",
    date: "Jun 13, 2025",
    comments: 98,
    views: 162,
    video: true,
  },
  {
    id: 2,
    title: "Sustainable Eating in a Climate-Conscious World",
    image: ln5,
    description:
      "As climate concerns grow, our plates are becoming powerful tools for change. Sustainable eating—centered on plant-based choices, local sourcing, and reducing food waste.",
    author: "Bessie Cooper",
    date: "Jun 13, 2025",
    comments: 98,
    views: 162,
    video: false,
  },
  {
    id: 3,
    title: "Tech for Tomorrow: AI in Daily Life",
    image: ln4,
    description:
      "Artificial Intelligence is shaping our routines—from smart homes to predictive healthcare—transforming how we live and work.",
    author: "John Carter",
    date: "Jul 05, 2025",
    comments: 124,
    views: 230,
    video: true,
  },
];

export default function ServiceBlogs() {
  return (
    <section className="serviceblogs">
      <h2 className="section-heading">Latest Insights & Stories</h2>
      <div className="serviceblogs-slider">
        {blogs.map((blog) => (
          <div className="serviceblogs-card" key={blog.id}>
            <div className="serviceblogs-img-wrap">
              <img src={blog.image} alt={blog.title} className="serviceblogs-img" />
              {blog.video && (
                <div className="play-overlay">
                  <FaPlay />
                </div>
              )}
              <div className="overlay-gradient"></div>
              <h3 className="card-overlay-title">{blog.title}</h3>
            </div>

            <div className="card-content">
              <p className="serviceblogs-desc">{blog.description}</p>

              <div className="serviceblogs-footer">
                <div className="author">
                  <span className="author-name">{blog.author}</span>
                  <span className="dot"></span>
                  <span className="date">{blog.date}</span>
                </div>

                <div className="stats">
                  <FaRegComment />
                  <span>{blog.comments}</span>
                  <FiEye />
                  <span>{blog.views}</span>
                </div>
              </div>

              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
