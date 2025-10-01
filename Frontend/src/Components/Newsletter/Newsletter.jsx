import React from "react";
import "./Newsletter.css";
import nl1 from "../../assets/news1.webp"

const Newsletter = () => {
  return (
    <div className="Newsletter">
      <div className="newsletter-container">
        {/* Left Side */}
        <div className="newsletter-left">
          <div className="newsletter-header">
            <span className="icon">📧</span>
            <span className="label">Newsletter</span>
          </div>

          <h2 className="title">
            Subscribe to our newsletter <br /> and Stay updated each week
          </h2>

          <p className="description">
            You’ll only receive updates on new templates—no spam, just what you
            signed up for.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-btn">Subscribe</button>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              By clicking the button, you are agreeing with our{" "}
              <a href="#">Term & Conditions</a>
            </label>
          </div>
        </div>

        {/* Right Side */}
        <div className="newsletter-right">
          <div className="brands">
            <span>kl</span>
            <span className="cube">🧊 CUBE</span>
            <span className="cube">🧊 CUBE</span>
            <span>piab</span>
            <span>🐵 Mailchimp</span>
            <span>Re</span>
          </div>

          <div className="testimonial">
            <img
              src={nl1}
              alt="Happy person"
            />
            <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>

          <div className="social-follow">
            <p>Follow us</p>
            <div className="social-btn">
              <button>
                <span className="icon">📘</span> Facebook{" "}
                <span className="count">65k</span>
              </button>
              <button>
                <span className="icon">🐦</span> Twitter{" "}
                <span className="count">87k</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
