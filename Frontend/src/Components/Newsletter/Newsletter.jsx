import React from "react";
import "./Newsletter.css";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import nl1 from "../../assets/news1.webp";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-wrapper">
        {/* LEFT */}
        <div className="newsletter-left">
          <span className="newsletter-tag">Newsletter</span>

          <h2 className="newsletter-title">
            Subscribe to our newsletter
            <br />
            and stay updated each week
          </h2>

          <p className="newsletter-description">
            Get weekly updates about new templates, product launches, and useful
            resources — no spam.
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
            <input type="checkbox" id="terms" className="newsletter-checkbox" />

            <label htmlFor="terms" className="newsletter-terms-label">
              I agree to the{" "}
              <a href="#" className="newsletter-terms-link">
                Terms & Conditions
              </a>
            </label>
          </div>
        </div>

        {/* RIGHT */}
        <div className="newsletter-right">
          <div className="newsletter-image-wrap">
            <img src={nl1} alt="Newsletter" className="newsletter-image" />
          </div>

          <div className="newsletter-social">
  <h4>Follow us</h4>

  <button className="social-btn">
    <span className="social-left">
      <FaFacebookF className="social-icon facebook" />
      Facebook
    </span>
  </button>

  <button className="social-btn">
    <span className="social-left">
      <FaTwitter className="social-icon twitter" />
      Twitter
    </span>
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
