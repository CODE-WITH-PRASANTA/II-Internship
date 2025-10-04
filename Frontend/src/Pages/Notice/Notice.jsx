import React from 'react'
import './Notice.css'
import NoticeSection from '../../Components/NoticeSection/NoticeSection'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import ServiceBlogs from '../../Components/ServiceBlogs/ServiceBlogs'
import Newsletter from '../../Components/Newsletter/Newsletter'
import TopAuthors from '../../Components/TopAuthors/TopAuthors'
import HotTopics from '../../Components/HotTopics/HotTopics'
import StaffPicks from '../../Components/StaffPicks/StaffPicks'
import ImageGrid from '../../Components/ImageGrid/ImageGrid'

const Notice = () => {
  return (
    <div>
      <NoticeSection/>
      <CategorySlider/>
      <ServiceBlogs/>
      <Newsletter/>
      <TopAuthors/>
      <HotTopics/>
      <StaffPicks/>
      <ImageGrid/>
    </div>
  )
}

export default Notice