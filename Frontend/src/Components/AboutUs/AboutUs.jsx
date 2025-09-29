import React from "react";
import "./AboutUs.css";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import a1 from "../../assets/about1.webp";
import a2 from "../../assets/about2.webp";
import a3 from "../../assets/about3.webp";
import { motion } from "framer-motion";

const AboutUs = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
      className="aboutus-section"
    >
      <div className="aboutus-container">
        {/* Left Content */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="aboutus-content"
        >
          <motion.h5
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="aboutus-subtitle"
          >
            ABOUT US
          </motion.h5>
          <motion.h2
            variants={variants}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="aboutus-title"
          >
            We Provide Best <span>Education</span> Services For You.
          </motion.h2>
          <motion.p
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="aboutus-description"
          >
            Magna aliqua enim ad minim veniam quis nostrud exercitation ullamco
            laboris Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eius tempor incididunt labore.
          </motion.p>

          <div className="aboutus-cards">
            <motion.div
              variants={variants}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="aboutus-card"
            >
              <div className="aboutus-card-icon">
                <FaGraduationCap size={36} color="#8a6dfd" />
              </div>
              <h4 className="aboutus-card-title">Our Mission</h4>
              <p className="aboutus-card-text">
                Magna aliqua enim minim quis nostrud exercitation ullamco laboris
                Lorem ipsum.
              </p>
            </motion.div>

            <motion.div
              variants={variants}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="aboutus-card"
            >
              <div className="aboutus-card-icon">
                <FaLightbulb size={36} color="#42a5f5" />
              </div>
              <h4 className="aboutus-card-title">Our Vision</h4>
              <p className="aboutus-card-text">
                Magna aliqua enim minim quis nostrud exercitation ullamco laboris
                Lorem ipsum.
              </p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="aboutus-btn"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Images */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="aboutus-images"
        >
          <motion.div
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="aboutus-image-large"
          >
            <img src={a1} alt="Student Talking" />
          </motion.div>
          <div className="aboutus-image-grid">
            <motion.img
              variants={variants}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={a2}
              alt="Online Class"
            />
            <motion.img
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6 }}
              src={a3}
              alt="Studying"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
