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
      {/* Breadcrumb */}
      <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.2 }} className="breadcrumb">
        Home <span>›</span> Pages <span>›</span> About Us 03
      </motion.div>

      <div className="aboutus-container">
        {/* Left Content */}
        <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.3 }} className="aboutus-text">
          <motion.h5 variants={variants} transition={{ duration: 0.5, delay: 0.4 }} className="subtitle">
            ABOUT US
          </motion.h5>
          <motion.h2 variants={variants} transition={{ duration: 0.5, delay: 0.5 }} className="title">
            We Provide Best <span>Education</span> Services For You.
          </motion.h2>
          <motion.p variants={variants} transition={{ duration: 0.5, delay: 0.6 }} className="description">
            Magna aliqua enim ad minim veniam quis nostrud exercitation ullamco
            laboris Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eius tempor incididunt labore.
          </motion.p>

          <div className="aboutus-mission-vision">
            <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.7 }} className="box">
              <div className="icon">
                <FaGraduationCap size={36} color="#8a6dfd" />
              </div>
              <h4>Our Mission</h4>
              <p>
                Magna aliqua enim minim quis nostrud exercitation ullamco laboris
                Lorem ipsum.
              </p>
            </motion.div>
            <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.8 }} className="box">
              <div className="icon">
                <FaLightbulb size={36} color="#42a5f5" />
              </div>
              <h4>Our Vision</h4>
              <p>
                Magna aliqua enim minim quis nostrud exercitation ullamco laboris
                Lorem ipsum.
              </p>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="learn-more-btn"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Images */}
        <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.3 }} className="aboutus-images">
          <motion.div variants={variants} transition={{ duration: 0.5, delay: 0.4 }} className="big-img">
            <img src={a1} alt="Student Talking" />
          </motion.div>
          <div className="small-img-grid">
            <motion.img variants={variants} transition={{ duration: 0.5, delay: 0.5 }} src={a2} alt="Online Class" />
            <motion.img variants={variants} transition={{ duration: 0.5, delay: 0.6 }} src={a3} alt="Studying" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;