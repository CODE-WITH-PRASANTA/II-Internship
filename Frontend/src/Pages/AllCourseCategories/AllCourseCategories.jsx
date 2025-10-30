import React from 'react'
import './AllCourseCategories.css'
import AllCourseCategoriesSection from '../../Components/AllCourseCategoriesSection/AllCourseCategoriesSection'
import AllCourseCategoriesList from '../../Components/AllCourseCategoriesList/AllCourseCategoriesList'
import ChooseLanguagesSection from '../../Components/ChooseLanguagesSection/ChooseLanguagesSection'
import FeaturesHeader from '../../Components/FeaturesHeader/FeaturesHeader'
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection'

const AllCourseCategories = () => {
  return (
    <div>
        <AllCourseCategoriesSection/>
        <AllCourseCategoriesList/>
        <ChooseLanguagesSection/>

        <FeaturesHeader/>
        <ProjectsSection/>



    </div>
  )
}

export default AllCourseCategories