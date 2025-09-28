import React from 'react'
import './OrganisationHistory.css'
import AboutUs from '../../Components/AboutUs/AboutUs'
import StatsSection from '../../Components/StatsSection/StatsSection'
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import CourseInstructors from '../../Components/CourseInstructors/CourseInstructors'
import Footer from '../../Components/Footer/Footer'
import AboutTestimonials from '../../Components/AboutTestimonials/AboutTestimonials'
import AboutCourseInstructors from '../../Components/AboutCourseInstructors/AboutCourseInstructors'

const OrganisationHistory = () => {
  return (
    <div>
      <AboutUs/>
      <StatsSection/>
      <BenefitsSection/>
      <ContactBanner/>
      <AboutCourseInstructors/>
      <AboutTestimonials/>
      
      <Footer/>
        
    </div>
  )
}

export default OrganisationHistory