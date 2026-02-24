import React from 'react'
import CourseWefound from '../../Components/CourseWefound/CourseWefound'
import CourseListLayout from '../../Components/CourseListLayout/CourseListLayout'
import CourserTuetor from '../../Components/CourserTuetor/CourserTuetor'
import './RunningInternship.css'
import StudentDetails from '../../Components/StudentDetails/StudentDetails'



export const RunningInternship = () => {
  return (
    <div className="running-internship-container">
      {/* 1. Header or Hero section (Optional) */}
      
      <CourseListLayout/>

      <div className="main-layout-body">
        {/* 2. Left Side: Sidebar with Search and Filters */}
        <div className="sidebar-column">
          <CourserTuetor/>
        </div>

        {/* 3. Right Side: The Course Results */}
        <div className="content-column">
          <CourseWefound />
          
        </div>
        
      </div>
      <StudentDetails/>
    </div>
  )
}
export default RunningInternship;