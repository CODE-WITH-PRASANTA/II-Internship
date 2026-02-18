import React from 'react'
import IMMBreadcrum from '../../Components/IMMBreadcrum/IMMBreadcrum'
import EduHeroSection from '../../Components/IMMHero/IMMHero'
import IMMcourse from '../../Components/IMMcourse/IMMcourse'
import IMMcatagory from '../../Components/IMMcatagory/IMMcatagory'
import IMMsection from '../../Components/IMMsection/IMMsection'
import IMMcreative from '../../Components/IMMcreative/IMMcreative'

const Immersion = () => {
  return (
    <div>
      <IMMBreadcrum />
      <EduHeroSection />
      <IMMcourse />
      <IMMcatagory />
      <IMMsection />
      <IMMcreative />
    </div>
  )
}

export default Immersion
