import React from "react";
import "./CancellationBreadcrum.css";
import { motion } from "framer-motion";

// Assets
import BreadcrumBg from "../../assets/mini-header.webp";

const CancellationBreadcrum= ({ title = "Cancellation and Refund Policy", path = "Home › Cancellation and Refund Policy " }) => {
  return (
    <div
      className="Breadcrum"
      style={{ backgroundImage: `url(${BreadcrumBg})` }}
    >
      <div className="CancellationBreadcrumoverlay"></div>

      <motion.div
        className="CancellationBreadcrumcontent"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="CancellationBreadcrumtitle">{title}</h1>
        <p className="CancellationBreadcrumpath">{path}</p>
      </motion.div>
    </div>
  );
};

export default CancellationBreadcrum;
