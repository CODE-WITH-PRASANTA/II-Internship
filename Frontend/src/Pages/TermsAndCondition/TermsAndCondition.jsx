import React from 'react'
import "./TermsAndCondition.css"
import TermsAndConditionBanner from '../../Components/TermsAndConditionBanner/TermsAndConditionBanner'
import TermsAndConditionSection from '../../Components/TermsAndConditionSection/TermsAndConditionSection'

const TermsAndCondition = () => {
  return (
    <div>
        <TermsAndConditionBanner/>
        <TermsAndConditionSection/>
    </div>
  )
}

export default TermsAndCondition