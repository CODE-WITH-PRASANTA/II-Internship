import React, { useRef } from "react";
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
  { name: "Olivia Brown", title: "Fashion Blogger", image: ta1 },
  { name: "Ethan Wilson", title: "Food Blogger", image: ta2 },
];

const TopAuthors = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="top-authors">
      {/* HEADER */}
      <div className="top-authors__header">
        <div className="top-authors__header-left">
          <motion.span
            className="top-authors__icon"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            ✦
          </motion.span>
          <div>
            <motion.h3
              className="top-authors__title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Top Authors
            </motion.h3>
            <motion.p
              className="top-authors__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Writers You’ll Want to Follow
            </motion.p>
          </div>
        </div>
        <motion.button
          className="top-authors__view-more"
          whileHover={{ scale: 1.08, boxShadow: "0 0 18px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          View More <span className="top-authors__arrow">→</span>
        </motion.button>
      </div>

      {/* MAIN HEADING */}
      <motion.h2
        className="top-authors__main-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Leading experts in the fields <br />
        provide you with in-depth knowledge
      </motion.h2>

      {/* AUTHOR CARDS SLIDER */}
      <div className="top-authors__slider-wrapper">
        <button className="top-authors__slider-btn left" onClick={scrollLeft}>
          ←
        </button>
        <div className="top-authors__slider" ref={sliderRef}>
          {authors.map((author, index) => (
            <motion.div
              className="top-authors__card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={author.image}
                alt={author.name}
                className="top-authors__card-img"
              />
              <div className="top-authors__card-details">
                <div className="top-authors__card-name">{author.name}</div>
                <div className="top-authors__card-title">{author.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="top-authors__slider-btn right" onClick={scrollRight}>
          →
        </button>
      </div>

      {/* CTA SECTION */}
      <div className="top-authors__cta">
        <hr className="top-authors__divider" />
        <motion.div
          className="top-authors__cta-gradient"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="top-authors__cta-button"
            whileHover={{ scale: 1.05, backgroundColor: "#333" }}
            whileTap={{ scale: 0.95 }}
          >
            Become an Author
          </motion.button>
          <p className="top-authors__cta-text">
            Join the content creation community and earn income
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TopAuthors;
