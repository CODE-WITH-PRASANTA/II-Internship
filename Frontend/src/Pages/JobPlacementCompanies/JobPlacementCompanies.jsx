import React from 'react'
import "./JobPlacementCompanies.css"
import JobPlacementCompaniesBanner from '../../Components/JobPlacementCompaniesBanner/JobPlacementCompaniesBanner'
import JobPlacementCompaniesSection from '../../Components/JobPlacementCompaniesSection/JobPlacementCompaniesSection'

const JobPlacementCompanies = () => {
  return (
    <div> 
      <JobPlacementCompaniesBanner/>
      <JobPlacementCompaniesSection/>
    </div>
  )
}

export default JobPlacementCompanies