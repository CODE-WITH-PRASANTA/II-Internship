import React from "react";
import "./Newsletter.css";
import nl1 from "../../assets/news1.webp";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-wrapper">
        {/* Left Section */}
        <div className="newsletter-left">
          <div className="newsletter-header">
            <span className="newsletter-icon">📧</span>
            <span className="newsletter-label">Newsletter</span>
          </div>

          <h2 className="newsletter-title">
            Subscribe to our newsletter <br /> and stay updated each week
          </h2>

          <p className="newsletter-description">
            You’ll only receive updates on new templates—no spam, just what you
            signed up for.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>

          <div className="newsletter-terms">
            <input type="checkbox" id="newsletter-terms" className="newsletter-checkbox" />
            <label htmlFor="newsletter-terms" className="newsletter-terms-label">
              By clicking the button, you agree to our{" "}
              <a href="#" className="newsletter-terms-link">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>

        {/* Right Section */}
        <div className="newsletter-right">
          {/* Brands */}
          <div className="newsletter-brands">
            <span className="newsletter-brand">kl</span>
            <span className="newsletter-brand newsletter-cube">🧊 CUBE</span>
            <span className="newsletter-brand newsletter-cube">🧊 CUBE</span>
            <span className="newsletter-brand">piab</span>
            <span className="newsletter-brand">🐵 Mailchimp</span>
            <span className="newsletter-brand">Re</span>
          </div>

          {/* Testimonial Image */}
          <div className="newsletter-testimonial">
            <img
              src={nl1}
              alt="Happy person"
              className="newsletter-testimonial-img"
            />
            <div className="newsletter-dots">
              <span className="newsletter-dot newsletter-dot-active"></span>
              <span className="newsletter-dot"></span>
            </div>
          </div>

          {/* Social Follow */}
          <div className="newsletter-social">
            <p className="newsletter-social-title">Follow us</p>
            <div className="newsletter-social-buttons">
              <button className="newsletter-social-btn">
                <span className="newsletter-social-icon">📘</span> Facebook{" "}
                <span className="newsletter-social-count">65k</span>
              </button>
              <button className="newsletter-social-btn">
                <span className="newsletter-social-icon">🐦</span> Twitter{" "}
                <span className="newsletter-social-count">87k</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
