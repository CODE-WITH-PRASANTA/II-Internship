import React, { useState } from 'react';
import './TechSupportFAQSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import mobileImg from "../../assets/phone1.webp"; 
import user1 from "../../assets/banner2.webp";
import user2 from "../../assets/banner4.webp";
import user3 from "../../assets/banner5.webp";

// Testimonials
const testimonials = [
  { name: 'Sarah M.', title: 'Small Business Owner', image: user1, quote: 'I had a major laptop issue before an important meeting. Their team fixed it remotely in less than 20 minutes. Absolute lifesavers!' },
  { name: 'John D.', title: 'Freelancer', image: user2, quote: 'Fast, reliable, and professional. They solved my tech problem without me leaving home!' },
  { name: 'Emily R.', title: 'Entrepreneur', image: user3, quote: 'Amazing service! I could not ask for better support.' },
  { name: 'Michael B.', title: 'Startup Founder', image: user3, quote: 'Quick and efficient. Saved me a lot of time and stress.' },
];

// FAQs
const faqs = [
  {
    question: 'How fast is your response time?',
    answer: 'We respond to all inquiries within minutes. Most issues are addressed immediately through our live chat or remote support system.',
  },
  {
    question: 'Is remote support secure?',
    answer: 'Yes. All remote sessions are fully encrypted, and we never access your files without permission. Your privacy and security come first.',
  },
  {
    question: 'Can you fix my issue without visiting my location?',
    answer: 'Absolutely! Our experts can diagnose and solve most problems remotely without the need for an on-site visit.',
  },
  {
    question: 'What if my issue can’t be solved remotely?',
    answer: 'If an issue requires physical intervention, we will guide you on the next steps, including scheduling an on-site visit if necessary.',
  },
];


const TechSupportFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="techsupportfaqsection-section">
      <div className="techsupportfaqsection-left">
        <img src={mobileImg} alt="Mobile Phone" className="techsupportfaqsection-phone-image" />
        <div className="techsupportfaqsection-testimonial-slider">
          <Swiper modules={[Autoplay]} autoplay={{ delay: 3500 }} loop slidesPerView={1}>
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="techsupportfaqsection-testimonial-card">
                  <div className="techsupportfaqsection-quote-icon">❝</div>
                  <p className="techsupportfaqsection-testimonial-text">{item.quote}</p>
                  <div className="techsupportfaqsection-testimonial-user">
                    <img src={item.image} alt={item.name} className="techsupportfaqsection-user-avatar" />
                    <div className="techsupportfaqsection-user-info">
                      <p className="techsupportfaqsection-user-name">— {item.name}</p>
                      <p className="techsupportfaqsection-user-title">{item.title}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="techsupportfaqsection-right">
        <h2 className="techsupportfaqsection-title">Frequently Asked Questions</h2>
        <p className="techsupportfaqsection-subtitle">
          Getting expert help has never been easier. Here’s how our process keeps your technology running smoothly:
        </p>
        <div className="techsupportfaqsection-accordion">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`techsupportfaqsection-accordion-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <div className="techsupportfaqsection-accordion-question">
                {item.question} <span className="techsupportfaqsection-arrow">{openIndex === idx ? '▴' : '▾'}</span>
              </div>
              {openIndex === idx && item.answer && (
                <div className="techsupportfaqsection-accordion-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSupportFAQSection;
