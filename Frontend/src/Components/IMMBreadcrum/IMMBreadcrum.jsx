import React from "react";
import "./IMMBreadcrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const IMMBreadcrum= ({ title = "About Us", path = "Home › What is Immersion " }) => {
  return (
    <div
      className="Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="imm-Breadcrumoverlay"></div>

      <motion.div
        className="imm-Breadcrumcontent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="imm-Breadcrumtitle">{title}</h1>
        <p className="imm-Breadcrumpath">{path}</p>
      </motion.div>
    </div>
  );
};

export default IMMBreadcrum;
