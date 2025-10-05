import React from 'react'
import './ContactUs.css'
import ContactUsPage from '../../Components/ContactUsPage/ContactUsPage'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import JustDrop from '../../Components/JustDrop/JustDrop'

const ContactUs = () => {
  return (
    <div>
      <ContactUsPage/> 
      <ContactInfo/>
      <JustDrop/>  
    </div>
  )
}

export default ContactUs