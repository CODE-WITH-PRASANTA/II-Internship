import React from 'react'
import './WhatIsInternship.css'
import StepsTimeline from '../../Components/StepsTimeline/StepsTimeline'
import HelpSection from '../../Components/HelpSection/HelpSection'
import ICan from '../../Components/ICan/ICan'
import CanNewsLetter from '../../Components/CanNewsLetter/CanNewsLetter'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'


const WhatIsInternship = () => {
  return (
    <div>
      <StepsTimeline/>
      <HelpSection/>
      <ICan/>
      <HowItWorks/>
      <CanNewsLetter/>

      
        
    </div>
  )
}

export default WhatIsInternship