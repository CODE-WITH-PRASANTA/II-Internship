import React from 'react'
import './SuccessStoryDetails.css'
import SuccessStoryDetailsSection from '../../Components/SuccessStoryDetailsSection/SuccessStoryDetailsSection'
import SuccessStoryVideoSection from '../../Components/SuccessStoryVideoSection/SuccessStoryVideoSection'
import SuccessStoryBusinessSection from '../../Components/SuccessStoryBusinessSection/SuccessStoryBusinessSection'
import SuccessStoryDetailsCommentSection from '../../Components/SuccessStoryDetailsCommentSection/SuccessStoryDetailsCommentSection'
import SuccessStoryDetailsCommentSectionSlider from '../../Components/SuccessStoryDetailsCommentSectionSlider/SuccessStoryDetailsCommentSectionSlider'

const SuccessStoryDetails = () => {
  return (
    <div>

      <SuccessStoryDetailsSection/>
      <SuccessStoryVideoSection/>
      <SuccessStoryBusinessSection/>
      <SuccessStoryDetailsCommentSection/>
      <SuccessStoryDetailsCommentSectionSlider/>
        
    </div>
  )
}

export default SuccessStoryDetails