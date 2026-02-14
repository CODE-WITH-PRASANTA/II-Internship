import React from 'react'
import VOMBreadcrum from '../../Components/VOMBreadcrum/VOMBreadcrum'
import VOMInspSection from '../../Components/VOMInspiration/VOMInspiration'
import VOMCourse from '../../Components/VOMCourse/VOMCourse'
import VOMService from '../../Components/VOMService/VOMService'
import VOMEnroll from '../../Components/VOMEnroll/VOMEnroll'
import VOMWhyChoose from '../../Components/VOMWhyChoose/VOMWhyChoose'
import VOMFaq from '../../Components/VOMWhyChoose/VOMFaq/VOMFaq'

const VissionAndMission = () => {
  return (
    <div>
      <VOMBreadcrum />
      <VOMInspSection />
      <VOMCourse/>
      <VOMService />
      <VOMEnroll />
      <VOMWhyChoose />
      <VOMFaq />
    </div>
  )
}

export default VissionAndMission
