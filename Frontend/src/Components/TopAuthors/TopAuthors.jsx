import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareAlt,
} from "react-icons/fa";
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
    sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section className="top-authors">
      {/* HEADER */}
      <div className="top-authors__header">
        <div className="top-authors__header-left">
          <span className="top-authors__icon">✦</span>
          <div>
            <h3 className="top-authors__title">Top Authors</h3>
            <p className="top-authors__subtitle">Writers You’ll Want to Follow</p>
          </div>
        </div>

        <button className="top-authors__view-more">
          View More →
        </button>
      </div>

      {/* HEADING */}
      <h2 className="top-authors__main-heading">
        Leading experts in the fields <br />
        provide you with in-depth knowledge
      </h2>

      {/* SLIDER */}
      <div className="top-authors__slider-wrapper">
        <button className="top-authors__slider-btn left" onClick={scrollLeft}>
          ←
        </button>

        <div className="top-authors__slider" ref={sliderRef}>
          {authors.map((author, index) => (
            <motion.div
              key={index}
              className="top-authors__card"
              whileHover={{ y: -8 }}
            >
              <div className="top-authors__image-wrap">
                <img
                  src={author.image}
                  alt={author.name}
                  className="top-authors__card-img"
                />

                {/* HOVER OVERLAY */}
                <div className="top-authors__overlay">
                  <button className="share-btn">
                    <FaShareAlt />
                  </button>

                  <div className="social-icons">
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                  </div>
                </div>
              </div>

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
    </section>
  );
};

export default TopAuthors;
