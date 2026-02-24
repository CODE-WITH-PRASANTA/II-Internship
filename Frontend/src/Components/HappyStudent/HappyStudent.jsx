import React from "react";
import "./HappyStudent.css";

const HappyStudent = () => {
  return (
    <div className="happy-student-wrapper">

      <h2 className="happy-student-title">Join Thousand Of Happy Students!</h2>
      <p className="happy-student-subtitle">
        Subscribe our newsletter & get latest news and updation!
      </p>

      <div className="happy-student-form">
        <input
          type="email"
          placeholder="Your Email Address"
          className="happy-student-input"
        />
        <button className="happy-student-btn">Get Started</button>
      </div>

    </div>
  );
};

export default HappyStudent;
