import React from 'react'
import './CourseDetails.css';
import CourseDetailsSection from '../../Components/CourseDetailsSection/CourseDetailsSection';
import CourseDetailsOverview from '../../Components/CourseDetailsOverview/CourseDetailsOverview';
import TopListedCourses from '../../Components/TopListedCourses/TopListedCourses';

const CourseDetails = () => {
  return (
    <div>
        <CourseDetailsSection/>
        <CourseDetailsOverview/>
        <TopListedCourses/>



    </div>
  )
}

export default CourseDetails