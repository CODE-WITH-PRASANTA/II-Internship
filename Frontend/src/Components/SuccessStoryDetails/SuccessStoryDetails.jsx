import React from "react";
import "./SuccessStoryDetails.css";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiArrowRight
} from "react-icons/fi";

import storyImage from "../../assets/Hero-1.webp";
import authorImage from "../../assets/Author-1.webp";
import comment1 from "../../assets/Author-2.webp";
import comment2 from "../../assets/Author-3.webp";

const SuccessStoryDetails = () => {
  return (
    <div className="successstorydetails-main-wrapper">

      {/* FEATURE IMAGE */}
      <div className="successstorydetails-feature-image">
        <img src={storyImage} alt="Story" />
      </div>

      {/* META INFO */}
      <div className="successstorydetails-meta-info">
        <span><FiCalendar /> 20 July, 2024</span>
        <span><FiUser /> by Admin</span>
        <span><FiClock /> 5 Min Read</span>
        <span><FiMessageCircle /> 05 Comments</span>
      </div>

      {/* TITLE */}
      <h1 className="successstorydetails-main-title">
        How To Become Ridiculously Self-Aware In 20 Minutes
      </h1>

      {/* PARAGRAPHS */}
      <p className="successstorydetails-paragraph">
        Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
        Ut ac nisi porta, malesuada risus nonra dolo areay Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae in tristique libero.
      </p>

      <p className="successstorydetails-paragraph">
        Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
        Ut ac nisi porta, malesuada risus nonra dolo areay Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
      </p>

      {/* QUOTE BOX */}
      <div className="successstorydetails-quote-section">
        <p>
          “ urabitur varius eros rutrum consequat Mauris areathe sollicitudin
          enim condimentum luctus enim justo non molestie nisl ”
        </p>
      </div>

      <p className="successstorydetails-paragraph">
        Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
      </p>

      {/* SUB HEADING */}
      <h2 className="successstorydetails-sub-title">
        What Will I Learn From This Course?
      </h2>

      <p className="successstorydetails-paragraph">
        Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
      </p>

      {/* LIST */}
      <ul className="successstorydetails-learning-list">
        <li><span className="successstorydetails-yellow-icon"><FiArrowRight /></span> Work with color & Gradients & Grids</li>
        <li><span className="successstorydetails-yellow-icon"><FiArrowRight /></span> All the useful shortcuts</li>
        <li><span className="successstorydetails-yellow-icon"><FiArrowRight /></span> Be able to create Flyers, Brochures, Advertisements</li>
        <li><span className="successstorydetails-yellow-icon"><FiArrowRight /></span> How to work with Images & Text</li>
      </ul>

      <p className="successstorydetails-paragraph">
        Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
      </p>

      {/* TAGS & SHARE */}
      <div className="successstorydetails-tag-share">
        <div className="successstorydetails-tags">
          <span>Bath Cleaning</span>
          <span>Cleaning</span>
        </div>

        <div className="successstorydetails-share-icons">
          <span>Share :</span>
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>

      {/* AUTHOR CARD */}
      <div className="successstorydetails-author-card">
        <img src={authorImage} alt="Author" />
        <div>
          <span className="successstorydetails-author-role">Author</span>
          <h3>Brooklyn Simmons</h3>
          <p>
            Finanappreciate your trust greatly Our clients choose dentace ducts a curae in tristique liberois ultrices diamraesent varius diam dui.
          </p>
        </div>
      </div>

      {/* COMMENTS */}
      <h2 className="successstorydetails-comments-title">02 Comments</h2>

      <div className="successstorydetails-comment-box">
        <img src={comment1} alt="User" />
        <div>
          <h4>Jessica Rose</h4>
          <span>20 July, 2024</span>
          <p>
            Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
          </p>
          <button>REPLY</button>
        </div>
      </div>

      <div className="successstorydetails-comment-box">
        <img src={comment2} alt="User" />
        <div>
          <h4>Parker Willy</h4>
          <span>20 July, 2024</span>
          <p>
            Maximus ligula eleifend id nisl quis interdum. Sed malesuada tortor non turpis semper bibendum.
          </p>
          <button>REPLY</button>
        </div>
      </div>

      {/* COMMENT FORM */}
      <div className="successstorydetails-comment-form">
        <h2>Post A Comment</h2>
        <p>Your email address will not be published. Required fields are marked *</p>

        <textarea placeholder="Comment"></textarea>

        <div className="successstorydetails-form-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Website" />
        </div>

       <div className="successstorydetails-checkbox">
  <input
    type="checkbox"
    id="saveinfo"
    className="successstorydetails-checkbox-input"
  />
  <label
    htmlFor="saveinfo"
    className="successstorydetails-checkbox-label"
  >
    Save my name, email, and website in this browser for the next time I comment.
  </label>
</div>


        <button className="successstorydetails-submit-btn">
          Post Comment <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default SuccessStoryDetails;
