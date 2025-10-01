import React from "react";
import { motion } from "framer-motion";
import "./TopAuthors.css";

import ta1 from "../../assets/ta.webp";
import ta2 from "../../assets/ta2.webp";
import ta3 from "../../assets/ta3.webp";
import ta4 from "../../assets/ta4.webp";

const authors = [
  { name: "Emma Richardson", title: "Travel Editor", image: ta1 },
  { name: "Liam Carter", title: "Tech Blogger", image: ta2 },
  { name: "Noah Martinez", title: "Lifestyle & Wellness", image: ta3 },
  { name: "Maya Patel", title: "Nutrition Blogger", image: ta4 },
];

const TopAuthors = () => {
  return (
    <div className="TopAuthors">
      {/* Header Section */}
      <div className="top-authors-header">
        <div className="header-left">
          <motion.span
            className="icon"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            ✦
          </motion.span>
          <div>
            <motion.div
              className="title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Top Authors
            </motion.div>
            <motion.div
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Writers You’ll Want to Follow
            </motion.div>
          </div>
        </div>

        <motion.button
          className="view-more"
          whileHover={{ scale: 1.08, boxShadow: "0 0 18px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          View More <span className="arrow">→</span>
        </motion.button>
      </div>

      {/* Main Heading */}
      <motion.h2
        className="main-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Leading experts in the fields <br />
        provide you with in-depth knowledge
      </motion.h2>

      {/* Author Cards */}
      <div className="authors-wrapper">
        <div className="arrow-buttons">
          <button className="arrow-btn">←</button>
          <button className="arrow-btn">→</button>
        </div>
        <div className="author-cards">
          {authors.map((author, index) => (
            <motion.div
              className="author-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={author.image} alt={author.name} />
              <div className="author-details">
                <div className="author-name">{author.name}</div>
                <div className="author-title">{author.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <hr className="cta-divider" />
        <motion.div
          className="cta-gradient"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Become an author
          </motion.button>
          <p className="cta-text">
            Join the content creation community and earn income
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TopAuthors;
