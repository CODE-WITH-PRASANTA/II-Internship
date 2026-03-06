import React from "react";
import "./TMBreadcrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const TMBreadcrum = ({ title = "Team Member", path = "Home › Team Member" }) => {
  return (
    <div
      className="TM-Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="TM-Breadcrum-overlay"></div>

      <motion.div
        className="TM-Breadcrum-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="TM-Breadcrum-title">{title}</h1>
        <p className="TM-Breadcrum-path">{path}</p>
      </motion.div>
    </div>
  );
};

export default TMBreadcrum;
