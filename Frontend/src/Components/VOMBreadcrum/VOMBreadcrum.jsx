import React from "react";
import "./VOMBreadcrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const VOMBreadcrum= ({ title = "About Us", path = "Home › Vision & Mission " }) => {
  return (
    <div
      className="Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="vomBreadcrumoverlay"></div>

      <motion.div
        className="vomBreadcrumcontent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="vomBreadcrumtitle">{title}</h1>
        <p className="vomBreadcrumpath">{path}</p>
      </motion.div>
    </div>
  );
};

export default VOMBreadcrum;
