import React from "react";
import "./SuccessStoryVideoSection.css";
import success2 from "../../assets/mini-header.webp";
import { FaCheckCircle } from "react-icons/fa";
import in1 from "../../assets/in1.webp"

const SuccessStoryVideoSection = () => {
  return (
    <div className="successstoryvideosection">
      <div className="successstoryvideosection__video">
        <img src={success2} alt="Video thumbnail" />
        <span className="successstoryvideosection__playbutton">&#9658;</span>
      </div>

      <div className="successstoryvideosection__textblock">
        <p className="successstoryvideosection__dropcap">
          <span className="dropcap">S</span>atisfied conveying a dependent contented he gentleman
          agreeable do be. Water timed folly right aware if oh truth. Imprudence attachment him for
          sympathize. Large above be to means. Dashwood does provide stronger is.{" "}
          <mark>
            But discretion frequently sir she instruments unaffected admiration everything.
          </mark>{" "}
          Meant balls it if up doubt small purse. Required his you put the outlived answered
          position.
        </p>

        <ul className="successstoryvideosection__checklist">
          <li>
            <FaCheckCircle /> The copy warned the Little blind text
          </li>
          <li>
            <FaCheckCircle /> ThaT where it came from it would have been rewritten a thousand times
          </li>
          <li>
            <FaCheckCircle /> Return to its own, safe country
          </li>
        </ul>

        <p className="successstoryvideosection__closing">
          Warrant private blushes removed an in equally totally if. Delivered dejection necessary
          objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right
          aware if oh truth. Imprudence attachment him for sympathize.
        </p>
      </div>

<div className="tweet-wrapper">
  <div className="tweet-container">
    <p className="tweet-text">
      "Farther-related bed and passage comfort civilly. Fulfilled direction use continual set him propriety continued. Concluded boy perpetual old supposing. Dashwoods see frankness objection abilities."
    </p>
    <div className="tweet-info">
      <img
        src={in1}
        alt="Profile"
        className="profile-pic"
      />
      <div className="tweet-meta">
        <span className="name">Louis Crawford</span>
        <span className="via">Via Twitter</span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default SuccessStoryVideoSection;
