import React from "react";
import "./SubmitReview.css";

const SubmitReview = () => {
  return (
    <div className="submit-review-wrapper">
      <div className="submit-review-container">

        <h2 className="submit-review-title">Submit Reviews</h2>

        {/* NAME + EMAIL */}
        <div className="submit-review-row">
          <div className="submit-review-field">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="submit-review-field">
            <label>Email</label>
            <input type="email" placeholder="Your Email" />
          </div>
        </div>

        {/* REVIEW TEXTAREA */}
        <div className="submit-review-field full">
          <label>Review</label>
          <textarea rows="6" placeholder="Review"></textarea>
        </div>

        {/* BUTTON */}
        <button className="submit-review-btn">Submit Review</button>

      </div>
    </div>
  );
};

export default SubmitReview;
