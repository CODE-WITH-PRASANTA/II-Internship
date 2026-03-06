import React from 'react'
import './TeamMember.css'
import InstructorsList from '../../Components/InstructorsList/InstructorsList';
import BecomeAnInstructor from '../../Components/BecomeAnInstructor/BecomeAnInstructor';
import TMBreadcrum from '../../Components/TMBreadcrum/TMBreadcrum';

const TeamMember = () => {
  return (
    <div>
        <TMBreadcrum/>
        <InstructorsList/>
        <BecomeAnInstructor/>
    </div>
  )
}

export default TeamMember