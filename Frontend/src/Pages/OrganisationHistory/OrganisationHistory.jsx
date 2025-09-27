import React from 'react'
import './OrganisationHistory.css'
import AboutUs from '../../Components/AboutUs/AboutUs'
import StatsSection from '../../Components/StatsSection/StatsSection'
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import CourseInstructors from '../../Components/CourseInstructors/CourseInstructors'
import Footer from '../../Components/Footer/Footer'
import Testimonials from '../../Components/Testimonials/Testimonials'

const OrganisationHistory = () => {
  return (
    <div>
      <AboutUs/>
      <StatsSection/>
      <BenefitsSection/>
      <ContactBanner/>
      <CourseInstructors/>
      <Testimonials/>
      <Footer/>
        
    </div>
  )
}

export default OrganisationHistory