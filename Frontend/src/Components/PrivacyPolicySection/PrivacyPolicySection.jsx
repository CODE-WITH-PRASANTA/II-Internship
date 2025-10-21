import React from "react";
import "./PrivacyPolicySection.css";

const PrivacyPolicySection = () => {
  return (
    <section className="privacypolicysection-wrapper">
      <div className="privacypolicysection-container">

        {/* Left Content */}
        <div className="privacypolicysection-left">
          <h2 className="privacypolicysection-heading">Definitions of Privacy Policy</h2>
          <p className="privacypolicysection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="privacypolicysection-subheading">General Information</h3>
          <p className="privacypolicysection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="privacypolicysection-subheading">Availability of Website</h3>
          <p className="privacypolicysection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <h3 className="privacypolicysection-subheading">IP Addresses</h3>
          <ul className="privacypolicysection-list">
            <li>Browser type, Internet Service Provider (ISP)</li>
            <li>Date and time stamp, referring/exit pages</li>
            <li>Possibly the number of clicks</li>
          </ul>

          <h3 className="privacypolicysection-subheading">Privacy Policies</h3>
          <p className="privacypolicysection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h3 className="privacypolicysection-subheading">Third Party Policies</h3>
          <ul className="privacypolicysection-list">
            <li>The Company name, logo, product and service names, designs.</li>
            <li>No rights transferred to members except as granted.</li>
            <li>Protected by international copyright & intellectual property laws.</li>
          </ul>

          <h3 className="privacypolicysection-subheading">Online Privacy</h3>
          <p className="privacypolicysection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </p>
        </div>

        {/* Right Sidebar */}
        <aside className="privacypolicysection-sidebar">

          {/* Search */}
          <div className="privacypolicysection-sidebar-block">
            <h4 className="privacypolicysection-sidebar-heading">Search</h4>
            <input
              type="text"
              className="privacypolicysection-search-input"
              placeholder="🔍 Search"
            />
          </div>

          {/* Tags */}
          <div className="privacypolicysection-sidebar-block">
            <h4 className="privacypolicysection-sidebar-heading">Tags</h4>
            <div className="privacypolicysection-tags">
              {["Language", "eLearn", "Tips", "Course", "Motivation"].map((tag, idx) => (
                <span key={idx} className="privacypolicysection-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="privacypolicysection-sidebar-block">
            <h4 className="privacypolicysection-sidebar-heading">Categories</h4>
            <ul className="privacypolicysection-categories">
              <li>Medical & Health (2)</li>
              <li>Software (1)</li>
              <li>Web Development (3)</li>
              <li>Uncategorized (9)</li>
            </ul>
          </div>

          {/* Promo Card */}
          <div className="sidebar-promo">
            <div className="sidebar-promo-pattern"></div>

            <h4 className="sidebar-promo-title">
              Get Online <br />
              Courses From <br />
              <span>EduBlink</span>
            </h4>

            <div className="sidebar-promo-line"></div>

            <p className="sidebar-promo-text">
              Nostrud exer ciation laboris aliqup
            </p>

            <button className="sidebar-promo-btn">
              Start Now <span className="sidebar-promo-arrow">→</span>
            </button>
          </div>

        </aside>
      </div>
    </section>
  );
};

export default PrivacyPolicySection;
