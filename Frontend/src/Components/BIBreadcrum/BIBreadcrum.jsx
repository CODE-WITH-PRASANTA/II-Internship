import React from "react";
import "./BIBreadcrum.css";
//import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const BreadCrum = ({ title = "Become Instructor", path = "Home › Become Instructor" }) => {
  return (
    <div
      className="BI-Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="BI-Breadcrum-overlay"></div>

      <motion.div
        className="BI-Breadcrum-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="BI-Breadcrum-title">{title}</h1>
        <p className="BI-Breadcrum-path">{path}</p>
      </motion.div>
    </div>
  );
};

export default BreadCrum;
