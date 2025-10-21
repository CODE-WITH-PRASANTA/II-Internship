import React from "react";
import "./TermsAndConditionSection.css";

const TermsAndConditionSection = () => {
  return (
    <section className="termsandconditionsection-wrapper">
      <div className="termsandconditionsection-container">

        {/* Left Content */}
        <div className="termsandconditionsection-left">
          <h2 className="termsandconditionsection-heading">Definitions of Basic Terms, Rights and Restriction</h2>
          <p className="termsandconditionsection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.
          </p>
          <p className="termsandconditionsection-paragraph">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat.
          </p>

          <h3 className="termsandconditionsection-subheading">Basic Terms</h3>
          <p className="termsandconditionsection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis aliquip commodo consequat aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
          </p>

          <h3 className="termsandconditionsection-subheading">Rights & Restrictions</h3>
          <p className="termsandconditionsection-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul className="termsandconditionsection-list">
            <li>Members must be at least 18 years of age.</li>
            <li>Members are granted a time-limited, non-exclusive, revocable, nontransferable, and non-sublicenseable right to access that portion of the online course corresponding to the purchase.</li>
            <li>The portion of the online course corresponding to the purchase will be available to the Member as long as the course is maintained by the Company, which will be a minimum of one year after Member’s purchase.</li>
            <li>The videos in the course are provided as a video stream and are not downloadable.</li>
            <li>By agreeing to grant such access, the Company does not obligate itself to maintain the course, or to maintain it in its present form.</li>
          </ul>
        </div>

        {/* Right Sidebar */}
        <aside className="termsandconditionsection-sidebar">

          {/* Search */}
          <div className="termsandconditionsection-sidebar-block">
            <h4 className="termsandconditionsection-sidebar-heading">Search</h4>
            <input
              type="text"
              className="termsandconditionsection-search-input"
              placeholder="🔍 Search"
            />
          </div>

          {/* Tags */}
          <div className="termsandconditionsection-sidebar-block">
            <h4 className="termsandconditionsection-sidebar-heading">Tags</h4>
            <div className="termsandconditionsection-tags">
              {["Language", "eLearn", "Tips", "Course", "Motivation"].map((tag, idx) => (
                <span key={idx} className="termsandconditionsection-tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="termsandconditionsection-sidebar-block">
            <h4 className="termsandconditionsection-sidebar-heading">Categories</h4>
            <ul className="termsandconditionsection-categories">
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

export default TermsAndConditionSection;
