import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: 1,
    title: "Make a decision",
    text: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad.",
  },
  {
    id: 2,
    title: "Schedule a meeting",
    text: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad.",
  },
  {
    id: 3,
    title: "Show Commitment",
    text: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad.",
  },
  {
    id: 4,
    title: "Transformation Completed",
    text: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad.",
  },
];

export default function HowItWorks() {
  return (
    <section className="hoeitworks">
      <div className="hoeitworks-left">
        <p className="hoeitworks-subtitle">— HOW IT WORKS?</p>
        <h2 className="hoeitworks-title">Simple Steps to Success</h2>
        <p className="hoeitworks-desc">It all starts with a single first step.</p>
        <p className="hoeitworks-text">
          Learn about how them you went down prying the wedding ring off his cold, dead finger.
          I don’t know what you did, Fry, but once again, you screwed up! Now all the planets are
          gonna start cracking wise about our mamas.
        </p>
        <div className="hoeitworks-readybox">
          <h3>Ready to start?</h3>
          <p>
            The plans you refer to <strong>will soon</strong> be back in our hands. 
            I’ve got to go home.
          </p>
          <button className="hoeitworks-button">LET’S TALK</button>
          <p className="hoeitworks-query">All queries are replied within 24hrs.</p>
        </div>
      </div>

      <div className="hoeitworks-right">
        <div className="hoeitworks-line"></div>
        {steps.map((step) => (
          <div className="hoeitworks-step" key={step.id}>
            <div className="hoeitworks-circle">{step.id}</div>
            <div className={`hoeitworks-card ${step.id <= 2 ? "active" : ""}`}>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
