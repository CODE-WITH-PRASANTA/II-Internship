import React from 'react'
import './Notice.css'
import NoticeSection from '../../Components/NoticeSection/NoticeSection'
import CategorySlider from '../../Components/CategorySlider/CategorySlider'
import BlogSection from '../../Components/BlogSection/BlogSection'
import ServiceBlogs from '../../Components/ServiceBlogs/ServiceBlogs'
import Newsletter from '../../Components/Newsletter/Newsletter'
import TopAuthors from '../../Components/TopAuthors/TopAuthors'
import HotTopics from '../../Components/HotTopics/HotTopics'
import StaffPicks from '../../Components/StaffPicks/StaffPicks'
import PodcastList from '../../Components/PodcastList/PodcastList'
import Article from '../../Components/Article/Article'
import Articles from '../../Components/Articles/Articles'
import ImageGrid from '../../Components/ImageGrid/ImageGrid'

const Notice = () => {
  return (
    <div>
      <NoticeSection/>
      <CategorySlider/>
      <BlogSection/>
      <ServiceBlogs/>
      <Newsletter/>
      <TopAuthors/>
      <HotTopics/>
      <StaffPicks/>
      <PodcastList/>
      <Article/>
      <Articles/>
      <ImageGrid/>
      
    
    </div>
  )
}

export default Notice