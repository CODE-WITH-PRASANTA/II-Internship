import React from "react";
import "./ApplyInstructor.css";
import instructorImg from "../../assets/iiiii.webp"; 

const ApplyInstructor = () => {
  return (
    <section className="applyinstructor-container">
      <div className="applyinstructor-left">
        <h2>Apply as Instructor</h2>
        <p>
          Satisfied conveying a dependent contented he gentleman agreeable do be.
          Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.
        </p>
        <button>Start Teaching today</button>
      </div>

      <div className="applyinstructor-right">
        <div className="applyinstructor-image-container">
          <img src={instructorImg} alt="Apply as Instructor Illustration" />
        </div>
      </div>

      {/* SVG Wave Background */}
      <svg
        className="applyinstructor-wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#10b981"
          fillOpacity="0.3"
          d="M0,224L48,218.7C96,213,192,203,288,186.7C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default ApplyInstructor;
