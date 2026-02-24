import React from "react";
import "./StudentDetails.css";

const StudentDetails = () => {
  return (
    <section className="newsletter-section">

      {/* Decorative shapes */}
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>

      <div className="newsletter-container">
        <h2>Join Thousand Of Happy Students!</h2>
        <p>Subscribe our newsletter & get latest news and updation!</p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Your Email Address"
            required
          />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </section>
  );
};

export default StudentDetails;
