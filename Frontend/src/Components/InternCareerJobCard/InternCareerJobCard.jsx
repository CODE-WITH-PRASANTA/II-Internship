import React from "react";
import "./InternCareerJobCard.css";

function InternCareerJobCard() {
  return (
    <div className="interncareer-jobcard">
      {/* Header */}
      <div className="interncareer-jobcard-header">
        <h3 className="interncareer-jobcard-title">Frontend Developer –</h3>
        <p className="interncareer-jobcard-sub">
          (Experience Desired: <strong>0–1+ years</strong>)
        </p>
      </div>

      {/* Job details table */}
      <div className="interncareer-jobcard-table">
        <div className="interncareer-jobcard-row">
          <div className="interncareer-jobcard-cell label">Salary Range</div>
          <div className="interncareer-jobcard-cell value">
            ₹50,000 – ₹100,000/month <br />
            <span className="interncareer-jobcard-bonus">+ Bonuses</span>
          </div>
          <div className="interncareer-jobcard-cell label">Location</div>
          <div className="interncareer-jobcard-cell value">Bhubaneswar</div>
        </div>

        <div className="interncareer-jobcard-row">
          <div className="interncareer-jobcard-cell label">Job Type</div>
          <div className="interncareer-jobcard-cell value">Hybrid</div>
          <div className="interncareer-jobcard-cell label">Vacancy</div>
          <div className="interncareer-jobcard-cell value">2 No's</div>
        </div>

        <div className="interncareer-jobcard-row">
          <div className="interncareer-jobcard-cell label">Skills Required</div>
          <div className="interncareer-jobcard-cell value">
            Proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{" "}
            <b>React.js</b>, Responsive Design, and <b>Github</b>.
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="interncareer-jobcard-buttons">
        <button className="interncareer-jobcard-btn whatsapp">Whatsapp</button>
        <button className="interncareer-jobcard-btn apply">Apply Now</button>
      </div>
    </div>
  );
}

export default InternCareerJobCard;
