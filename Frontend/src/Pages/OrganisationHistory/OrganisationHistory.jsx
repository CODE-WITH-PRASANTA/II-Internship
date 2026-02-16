import React from 'react'
import './OrganisationHistory.css'
import AboutUs from '../../Components/AboutUs/AboutUs'
import StatsSection from '../../Components/StatsSection/StatsSection'
import BenefitsSection from '../../Components/BenefitsSection/BenefitsSection'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import CourseInstructors from '../../Components/CourseInstructors/CourseInstructors'
import Footer from '../../Components/Footer/Footer'
import AboutTestimonials from '../../Components/AboutTestimonials/AboutTestimonials'
import AboutTeam from '../../Components/AboutTeam/AboutTeam'
import BreadCrum from '../../Components/BreadCrum/BreadCrum'
import FounderVission from '../../Components/FoundersVission/FoundersVission'
import Inspiration from '../../Components/Inspiration/Inspiration'
import InstituteOfInternship from '../../Components/InstituteOfInternship/InstituteOfInternship'
import PurposeSection from '../../Components/PurposeSection/PurposeSection'

const OrganisationHistory = () => {
  return (
    <div>
      <BreadCrum />
      <AboutUs/>
      <StatsSection/>
      <FounderVission />
      <BenefitsSection/>
      <Inspiration />
      <InstituteOfInternship />
      <PurposeSection />
      <AboutTeam/>
      <ContactBanner/>
      <AboutTestimonials/>
    </div>
  )
}

export default OrganisationHistory