import React from 'react'
import EducationalShowcase from '../../Components/EducationalShowcase/EducationalShowcase'
import EducationalAbout from '../../Components/EducationalAbout/EducationalAbout'
import EducationalBrandLogo from '../../Components/EducationalBrandLogo/EducationalBrandLogo'
import EducationalAward from '../../Components/EducationalAward/EducationalAward'
import EducationalKnowAbout from '../../Components/EducationalKnowAbout/EducationalKnowAbout'
import EducationalWork from '../../Components/EducationalWork/EducationalWork'

const AllCourseCategories = () => {
  return (
    <div>
      <EducationalShowcase />
      <EducationalAbout />
      <EducationalBrandLogo />
      <EducationalAward />
      <EducationalKnowAbout />
      <EducationalWork />
    
    </div>
  )
}

export default AllCourseCategories
