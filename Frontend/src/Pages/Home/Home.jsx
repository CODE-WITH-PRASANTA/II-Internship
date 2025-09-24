import React from 'react'
import './Home.css'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TopCatagory from '../../Components/TopCatagory/TopCategory'
import AboutSection from '../../Components/AboutSection/AboutSection'
import PopularCourses from '../../Components/PopularCourses/PopularCourses'
import Info from '../../Components/Info/Info'
import Testimonials from '../../Components/Testimonials/Testimonials'
import ContactBanner from '../../Components/ContactBanner/ContactBanner'
import CourseInstructors from '../../Components/CourseInstructors/CourseInstructors'
import CertificateSection from '../../Components/CertificateSection/CertificateSection'
import Partners from '../../Components/Partners/Partners'
import News from '../../Components/News/News'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <TopCatagory/>
        <AboutSection/>
        <PopularCourses/>
        <Info/>
        <Testimonials/>
        <ContactBanner/>
        <CourseInstructors/>
        <CertificateSection/>
        <Partners/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Home