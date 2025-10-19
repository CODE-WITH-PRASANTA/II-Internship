import React from "react";
import "./SuccessStoryDetailsCommentSection.css";
import i1 from "../../assets/in1.webp";
import i2 from "../../assets/in2.webp";
import i3 from "../../assets/in3.webp";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function SuccessStoryDetailsCommentSection() {
  return (
    <div className="successstorydetailscommentsection-container">

      {/* Top Share + Tags */}
      <div className="successstorydetailscommentsection-top">
        <div className="successstorydetailscommentsection-share">
          <span>Share on:</span>
          <div className="successstorydetailscommentsection-icons">
            <FaFacebookF className="icon-facebook" />
            <FaInstagram className="icon-instagram" />
            <FaTwitter className="icon-twitter" />
            <FaLinkedinIn className="icon-linkedin" />
          </div>
        </div>

        <div className="successstorydetailscommentsection-tags">
          <strong>Popular Tags:</strong>
          <div className="successstorydetailscommentsection-taglist">
            <span className="tag">blog</span>
            <span className="tag">business</span>
            <span className="tag">bootstrap</span>
            <span className="tag">data science</span>
            <span className="tag">deep learning</span>
          </div>
        </div>
      </div>

      {/* Left - Comments */}
      <div className="successstorydetailscommentsection-comments">
        <h2>3 comments</h2>

        {/* Comment 1 */}
        <div className="successstorydetailscommentsection-comment">
          <img src={i1} alt="Frances Guerrero" />
          <div className="successstorydetailscommentsection-details">
            <h4>Frances Guerrero</h4>
            <span className="time">June 11, 2021 at 6:01 am</span>
            <p>
              Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
            </p>
            <button className="reply-btn">Reply</button>
          </div>
        </div>

        {/* Comment 2 */}
        <div className="successstorydetailscommentsection-comment">
          <img src={i2} alt="Louis Ferguson" />
          <div className="successstorydetailscommentsection-details">
            <h4>Louis Ferguson</h4>
            <span className="time">June 11, 2021 at 6:55 am</span>
            <p>
              Water timed folly right aware if oh truth. Impudence attachment him for sympathize. Large above be to means. Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected admiration everything.
            </p>
            <button className="reply-btn">Reply</button>

            {/* Nested Reply */}
            <div className="successstorydetailscommentsection-comment reply">
              <img src={i3} alt="Frances Guerrero" />
              <div className="successstorydetailscommentsection-details">
                <h4>Frances Guerrero</h4>
                <span className="time">June 12, 2021 at 7:30 am</span>
                <p>Water timed folly right aware if oh truth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comment 3 */}
        <div className="successstorydetailscommentsection-comment">
          <img src={i3} alt="Another User" />
          <div className="successstorydetailscommentsection-details">
            <h4>John Doe</h4>
            <span className="time">June 12, 2021 at 8:45 am</span>
            <p>
              Great insights! Really helped me understand the topic better. Appreciate the detailed explanation.
            </p>
            <button className="reply-btn">Reply</button>
          </div>
        </div>
      </div>

      {/* Right - Comment Form */}
      <div className="successstorydetailscommentsection-form">
        <h2>Your Views Please!</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
          </div>
          <textarea rows="5" placeholder="Your Comment *" required></textarea>
          <button type="submit" className="submit-btn">Post comment</button>
        </form>
      </div>

    </div>
  );
}
