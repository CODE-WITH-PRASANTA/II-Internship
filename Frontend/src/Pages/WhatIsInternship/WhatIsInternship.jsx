import React from 'react'
import './WhatIsInternship.css'
import StepsTimeline from '../../Components/StepsTimeline/StepsTimeline'
import HelpSection from '../../Components/HelpSection/HelpSection'
import ICan from '../../Components/ICan/ICan'
import CanNewsLetter from '../../Components/CanNewsLetter/CanNewsLetter'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'

import { motion } from "framer-motion";
import BreadcrumBg from "../../assets/mini-header.webp";

const WhatIsInternship = () => {
  // Define breadcrumb title and path
  const breadcrumData = {
    title: "What Is Internship?",
    path: "Home › About Us › What Is Internship?"
  };

  return (
    <div>

      {/* BreadCrum Section */}
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
          <h1 className="Breadcrum-title">{breadcrumData.title}</h1>
          <p className="Breadcrum-path">{breadcrumData.path}</p>
        </motion.div>
      </div>

      {/* Page Sections */}
      <StepsTimeline/>
      <HelpSection/>
      <ICan/>
      <HowItWorks/>
      <CanNewsLetter/> 
    </div>
  )
}

export default WhatIsInternship;
