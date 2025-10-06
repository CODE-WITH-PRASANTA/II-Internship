import React from "react";
import "./BreadCrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const BreadCrum = ({ title = "About Us", path = "Home › Organization History" }) => {
  return (
    <div
      className="Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="Breadcrum-overlay"></div>

      <motion.div
        className="Breadcrum-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="Breadcrum-title">{title}</h1>
        <p className="Breadcrum-path">{path}</p>
      </motion.div>
    </div>
  );
};

export default BreadCrum;
