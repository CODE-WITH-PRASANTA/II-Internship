import React from 'react';
import './EducationalInstituteNewsletter.css';

const EducationalInstituteNewsletter = () => {
  return (
    <div className="educationalinstitute-newsletter-container">
      <h2>Join Thousands Of Happy Students!</h2>
      <p>Subscribe to our newsletter & get the latest news and updates!</p>
      <div className="educationalinstitute-newsletter-form">
        <input type="email" placeholder="Your Email Address" />
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default EducationalInstituteNewsletter;
