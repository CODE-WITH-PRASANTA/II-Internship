import React from 'react'
import './BecomeInstructor.css';
import ApplyInstructor from '../../Components/ApplyInstructor/ApplyInstructor';
import YouCanBe from '../../Components/YouCanBe/YouCanBe';
import HowToBecome from '../../Components/HowToBecome/HowToBecome';
import BIBreadcrum from '../../Components/BIBreadcrum/BIBreadcrum';

const BecomeInstructor = () => {
  return (
    <div>
      <BIBreadcrum/>
      <ApplyInstructor/>
      <YouCanBe/>
      <HowToBecome/>
      
        
    </div>
  )
}

export default BecomeInstructor