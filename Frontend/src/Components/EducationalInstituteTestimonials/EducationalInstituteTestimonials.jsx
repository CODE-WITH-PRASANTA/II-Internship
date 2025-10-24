import React, { useState, useEffect } from 'react';
import './EducationalInstituteTestimonials.css';

// Import avatars
import avatar1 from "../../assets/course-avatar-1.webp";
import avatar2 from "../../assets/course-avatar-2.webp";
import avatar3 from "../../assets/course-avatar-3.webp";
import avatar4 from "../../assets/course-avatar-4.webp";   
import avatar5 from "../../assets/course-avatar-5.webp";
import avatar6 from "../../assets/course-avatar-6.webp";

const testimonials = [
  {
    id: 1,
    name: "Taylor Morgan",
    date: "10 Jul 2025",
    rating: 5,
    text: "Awesome service and courses.",
    context: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual.",
    avatar: avatar1
  },
  {
    id: 2,
    name: "Cameron Lee",
    date: "10 Jul 2025",
    rating: 5,
    text: "Great learning experience overall.",
    context: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual.",
    avatar: avatar2
  },
  {
    id: 3,
    name: "Jamie Brooks",
    date: "10 Jul 2025",
    rating: 5,
    text: "Fantastic platform with quality courses.",
    context: "In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual.",
    avatar: avatar3
  },
  {
    id: 4,
    name: "Morgan Lee",
    date: "12 Jul 2025",
    rating: 5,
    text: "The platform is easy to use and intuitive.",
    context: "Everything is well structured and content is easy to follow.",
    avatar: avatar4
  },
  {
    id: 5,
    name: "Taylor Smith",
    date: "15 Jul 2025",
    rating: 5,
    text: "Learned a lot from practical exercises.",
    context: "Hands-on experience helped me understand concepts better.",
    avatar: avatar5
  },
  {
    id: 6,
    name: "Jordan White",
    date: "18 Jul 2025",
    rating: 5,
    text: "Amazing support from instructors!",
    context: "Quick responses and helpful guidance throughout the course.",
    avatar: avatar6
  },
];

const EducationalInstituteTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setCardsToShow(1);
      else if (window.innerWidth < 768) setCardsToShow(2);
      else setCardsToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleTestimonials.push(testimonials[(currentIndex + i) % testimonials.length]);
  }

  return (
    <div className="educationalinstitute-testimonials-container">
      <h2>Hear From Our Students</h2>
      <p>Discover What Learners Around the World Are Saying About Our Courses</p>

      <div className="educationalinstitute-slider-wrapper">
        <div className="educationalinstitute-slider">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="educationalinstitute-testimonial-card">
              <div className="educationalinstitute-rating">
                {Array(testimonial.rating).fill('⭐').join('')}
              </div>
              <p className="educationalinstitute-text">{testimonial.text}</p>
              <p className="educationalinstitute-context">{testimonial.context}</p>
<div className="educationalinstitute-student-info">
  <img src={testimonial.avatar} alt={testimonial.name} />
  <div className="educationalinstitute-student-details">
    <span className="educationalinstitute-name">{testimonial.name}</span>
    <span className="educationalinstitute-date">{testimonial.date}</span>
  </div>
  <span className="educationalinstitute-tag">Student</span>
</div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationalInstituteTestimonials;
