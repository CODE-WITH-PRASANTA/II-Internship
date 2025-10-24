import React from 'react'
import "./EducationalInstitute.css";
import EducationalInstituteBanner from '../../Components/EducationalInstituteBanner/EducationalInstituteBanner';
import EducationalInstituteWorkProcess from '../../Components/EducationalInstituteWorkProcess/EducationalInstituteWorkProcess';
import EducationalInstituteCourses from '../../Components/EducationalInstituteCourses/EducationalInstituteCourses';
import EducationalInstituteDiscoverCategories from '../../Components/EducationalInstituteDiscoverCategories/EducationalInstituteDiscoverCategories';
import EducationalInstituteLearnUp from '../../Components/EducationalInstituteLearnUp/EducationalInstituteLearnUp';
import EducationalInstituteExploreHistory from '../../Components/EducationalInstituteExploreHistory/EducationalInstituteExploreHistory';
import EducationalInstituteTestimonials from '../../Components/EducationalInstituteTestimonials/EducationalInstituteTestimonials';
import EducationalInstituteFAQ from '../../Components/EducationalInstituteFAQ/EducationalInstituteFAQ';
import EducationalInstituteNewsletter from '../../Components/EducationalInstituteNewsletter/EducationalInstituteNewsletter';

const EducationalInstitute = () => {
  return (
    <div>
        <EducationalInstituteBanner/>
        <EducationalInstituteWorkProcess/>
        <EducationalInstituteCourses/>
        <EducationalInstituteDiscoverCategories/>
        <EducationalInstituteLearnUp/>
        <EducationalInstituteExploreHistory/>
        <EducationalInstituteTestimonials/>
        <EducationalInstituteFAQ/>
        <EducationalInstituteNewsletter/>
    </div>
  )
}

export default EducationalInstitute