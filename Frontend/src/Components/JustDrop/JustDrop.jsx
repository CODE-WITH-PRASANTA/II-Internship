import React from "react";
import "./JustDrop.css";
import { FaArrowRight } from "react-icons/fa";

const JustDrop = () => {
  return (
    <section className="justdrop-section">
      {/* Floating Decor */}
      <div className="justdrop-decor justdrop-decor-left"></div>
      <div className="justdrop-decor justdrop-decor-right"></div>
      <div className="justdrop-wave"></div>

      <div className="justdrop-container">
        <h2 className="justdrop-title">Just Drop Me a Line</h2>

        <form className="justdrop-form">
          <div className="justdrop-row">
            <input type="text" placeholder="Your Name*" required />
            <input type="email" placeholder="Your Email*" required />
          </div>
          <input type="text" placeholder="Phone number" />
          <textarea placeholder="Type your message"></textarea>

          <button type="submit" className="justdrop-btn">
            Submit Now <FaArrowRight />
          </button>
        </form>
      </div>
    </section>
  );
};

export default JustDrop;
