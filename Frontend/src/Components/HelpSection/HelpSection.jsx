import React from "react";
import { motion } from "framer-motion";
import "./HelpSection.css";
import help from "../../assets/help.webp";

const HelpSection = () => {
  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section className="help-section">
      <motion.h1
        className="help-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        I can help you with
      </motion.h1>

      <motion.p
        className="help-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Most frequent questions and answers
      </motion.p>

      <div className="help-grid-container">
        {/* Left Side Boxes */}
        {[
          {
            icon: "👨‍🏫",
            title: "1:1 Coaching",
            desc: "Personalized mentorship sessions focused on your real growth journey.",
          },
          {
            icon: "🏆",
            title: "Life Programs",
            desc: "Transformative programs built to enhance productivity and mindset.",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            className={`help-box ${i === 0 ? "help-box-top-left" : "help-box-bottom-left"}`}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <span className="icon">{box.icon}</span>
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
          </motion.div>
        ))}

        {/* Center Image */}
        <motion.div
          className="help-center-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={help} alt="Coach" />
        </motion.div>

        {/* Right Side Boxes */}
        {[
          {
            icon: "🌸",
            title: "Self Development",
            desc: "Unlock your best potential with powerful self-growth frameworks.",
          },
          {
            icon: "🌿",
            title: "Support",
            desc: "Get 24/7 guidance to stay consistent and motivated on your path.",
          },
        ].map((box, i) => (
          <motion.div
            key={i}
            className={`help-box ${i === 0 ? "help-box-top-right" : "help-box-bottom-right"}`}
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 2}
            whileHover={{ scale: 1.05, y: -8 }}
          >
            <span className="icon">{box.icon}</span>
            <h3>{box.title}</h3>
            <p>{box.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HelpSection;
