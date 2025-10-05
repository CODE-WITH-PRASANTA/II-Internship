import React from 'react'
import './TeamMember.css'
import InstructorsList from '../../Components/InstructorsList/InstructorsList'
import BecomeAnInstructor from '../../Components/BecomeAnInstructor/BecomeAnInstructor'

const TeamMember = () => {
  return (
    <div>
        <InstructorsList/>
        <BecomeAnInstructor/>
    </div>
  )
}

export default TeamMember