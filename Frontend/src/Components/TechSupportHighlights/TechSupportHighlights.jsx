// TechSupportHighlights.js
import React from 'react';
import './TechSupportHighlights.css';
import mobile from '../../assets/rectangle.webp';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const TechSupportHighlights = () => {
  return (
    <section className="techsupporthighlights-container">
      {/* Left Section */}
      <div className="techsupporthighlights-left">
        <span className="techsupporthighlights-tag">Tech Support Service</span>
        <h1 className="techsupporthighlights-heading">
          We’re Here to Help — <br /> Anytime, Anywhere
        </h1>
        <p className="techsupporthighlights-description">
          Need assistance right now? Our support team is available 24/7 through multiple channels.
          Choose the way that’s most convenient for you.
        </p>
        <div className="techsupporthighlights-buttons">
          <button className="techsupporthighlights-chat-btn">Chat Live</button>
          <button className="techsupporthighlights-call-btn">
            Call Now <span className="techsupporthighlights-arrow">↗</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="techsupporthighlights-right">
        <img
          src={mobile}
          alt="Mobile"
          className="techsupporthighlights-phone"
        />
        <div className="techsupporthighlights-app-buttons">
          <div className="techsupporthighlights-app-button">
            <FaApple size={28} />
            <div>
              <span className="techsupporthighlights-small-text">Download on the</span>
              <div className="techsupporthighlights-big-text">App Store</div>
            </div>
          </div>
          <div className="techsupporthighlights-app-button">
            <FaGooglePlay size={26} />
            <div>
              <span className="techsupporthighlights-small-text">GET IT ON</span>
              <div className="techsupporthighlights-big-text">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSupportHighlights;
