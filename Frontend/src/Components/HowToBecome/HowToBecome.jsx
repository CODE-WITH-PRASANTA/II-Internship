import React, { useState } from "react";
import "./HowToBecome.css";

const HowToBecome = () => {
  const [activeTab, setActiveTab] = useState("Become an Instructor");

  return (
    <section className="howtobecome-container">
      {/* FORM CONTAINER */}
      <div className="howtobecome-form-container">
        <h1>Please Fill This Form</h1>
        <form>
          <div className="howtobecome-form-fields">
            <div>
              <label>Name *</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <label>Phone Number *</label>
            <input type="text" placeholder="Enter your phone number" />
          </div>
          <div>
            <label>Add Summary *</label>
            <textarea rows={4} placeholder="Enter your summary"></textarea>
          </div>
          <button type="submit" className="howtobecome-submit-btn">
            Submit Form
          </button>
        </form>
      </div>

      {/* INFO CONTAINER */}
      <div className="howtobecome-info-container">
        <h1>How to Become an Instructor?</h1>

        {/* Tabs */}
        <div className="howtobecome-tabs">
          <button
            className={activeTab === "Become an Instructor" ? "active" : ""}
            onClick={() => setActiveTab("Become an Instructor")}
          >
            Become an Instructor
          </button>
          <button
            className={activeTab === "Instructor Role" ? "active" : ""}
            onClick={() => setActiveTab("Instructor Role")}
          >
            Instructor Role
          </button>
          <button
            className={activeTab === "Start with Course" ? "active" : ""}
            onClick={() => setActiveTab("Start with Course")}
          >
            Start with Course
          </button>
        </div>

        {/* Tab Content */}
        <div className="howtobecome-tab-content">
          {activeTab === "Become an Instructor" && (
            <div>
              <h2>Become an Instructor</h2>
              <p>
                As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably
                behavior may admit daughters offending her ask own.
              </p>
              <p>
                Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in. Merits ye if Mr narrow points.
              </p>
              <p>
                Melancholy particular Devonshire alteration it favorable appearance up. Are conduct viewing boy minutes warrant the expense?
              </p>
            </div>
          )}
          {activeTab === "Instructor Role" && (
            <div>
              <h2>Instructor Role</h2>
              <p>
                The instructor role is vital for knowledge sharing, mentoring, and guiding learners through their journey. It requires dedication,
                passion, and adaptability.
              </p>
            </div>
          )}
          {activeTab === "Start with Course" && (
            <div>
              <h2>Start with Course</h2>
              <p>
                To begin, design your course carefully, plan your modules, and create engaging content that delivers value to your students.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowToBecome;
