import React from 'react'
import './AllCourseCategories.css'
import AllCourseCategoriesSection from '../../Components/AllCourseCategoriesSection/AllCourseCategoriesSection'
import AllCourseCategoriesList from '../../Components/AllCourseCategoriesList/AllCourseCategoriesList'
import ChooseLanguagesSection from '../../Components/ChooseLanguagesSection/ChooseLanguagesSection'

const AllCourseCategories = () => {
  return (
    <div>
        <AllCourseCategoriesSection/>
        <AllCourseCategoriesList/>
        <ChooseLanguagesSection/>



    </div>
  )
}

export default AllCourseCategories