import React from 'react'
import "./TechnicalSupport.css"
import TechnicalSupportBanner from '../../Components/TechnicalSupportBanner/TechnicalSupportBanner'
import TechSupportServices from '../../Components/TechSupportServices/TechSupportServices'
import TechSupportProcess from '../../Components/TechSupportProcess/TechSupportProcess'
import TechSupportTestimonialSlider from '../../Components/TechSupportTestimonialSlider/TechSupportTestimonialSlider'
import TechSupportFAQSection from '../../Components/TechSupportFAQSection/TechSupportFAQSection'
import PricingPlans from '../../Components/PricingPlans/PricingPlans'
import TechviaComponent from '../../Components/TechviaComponent/TechviaComponent'
import TechSupportReasons from '../../Components/TechSupportReasons/TechSupportReasons'
import TechSupportHighlights from '../../Components/TechSupportHighlights/TechSupportHighlights'

const TechnicalSupport = () => {
  return (
    <div>
        <TechnicalSupportBanner/>
        <TechviaComponent/>
        <TechSupportServices/>
        <TechSupportReasons/>
        <TechSupportProcess/>
        <TechSupportTestimonialSlider/>
        <PricingPlans/>
        <TechSupportFAQSection/>
        <TechSupportHighlights/>

        
    </div>
  )
}

export default TechnicalSupport