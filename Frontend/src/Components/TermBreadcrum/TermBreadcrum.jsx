import React from "react";
import "./TermBreadcrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const TermBreadcrum= ({ title = "Terms & Conditions", path = "Home › Terms & Conditions " }) => {
  return (
    <div
      className="Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="TeamBreadcrumoverlay"></div>

      <motion.div
        className="TeamBreadcrumcontent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="TeamBreadcrumtitle">{title}</h1>
        <p className="TeamBreadcrumpath">{path}</p>
      </motion.div>
    </div>
  );
};

export default TermBreadcrum;
