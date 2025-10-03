import React from "react";
import newsletterImage from "../../assets/newsletter.webp";
import "./CanNewsLetter.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function CanNewsLetter() {
  return (
    <section className="cannewsletter-section">
      <div className="cannewsletter-container">
        <div className="cannewsletter-left">
          <div className="cannewsletter-circle-wrap">
            <svg
              className="cannewsletter-circle-svg"
              viewBox="0 0 300 150"
              width="300"
              height="150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M20,130 A130,130 0 0,1 280,130"
                />
              </defs>
              <text
                className="cannewsletter-circle-text"
                fontSize="12"
                letterSpacing="1.5"
                fill="#111"
                fontWeight="400"
              >
                <textPath
                  xlinkHref="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  SUBSCRIBE TO THE WEEKLY NEWSLETTER
                </textPath>
              </text>
            </svg>
            <button className="cannewsletter-badge">Weekly Newsletter</button>
          </div>

          <h1 className="cannewsletter-title">
            Get my tips directly into your inbox every Monday morning.
          </h1>
          <p className="cannewsletter-subtitle">Yes, I hate spam too!</p>

          <form
            className="cannewsletter-form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              className="cannewsletter-input"
              placeholder="Enter your e-mail"
              required
              aria-label="Email address"
            />
            <button type="submit" className="cannewsletter-submit-button">
              SUBSCRIBE!
            </button>
          </form>

          <div className="cannewsletter-socials" role="list">
            <a
              href="#"
              aria-label="Facebook"
              className="social-icon facebook"
              role="listitem"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="social-icon twitter"
              role="listitem"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="#"
              aria-label="Google Plus"
              className="social-icon googleplus"
              role="listitem"
            >
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="social-icon instagram"
              role="listitem"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="cannewsletter-right">
          <img
            src={newsletterImage}
            alt="Newsletter Illustration"
            className="cannewsletter-image"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
