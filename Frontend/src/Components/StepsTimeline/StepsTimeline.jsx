import React, { useEffect } from "react";
import "./StepsTimeline.css";
import { FaUserGraduate, FaCalendarAlt, FaLaptopCode, FaAward } from "react-icons/fa";

const StepsTimeline = () => {
  const steps = [
    {
      title: "Enroll & Begin Your Learning Journey",
      description:
        "Start by enrolling in our internship or coaching program designed to boost your skills and confidence. Get access to structured modules and mentor guidance.",
      icon: <FaUserGraduate />,
      label: "STEP 1 — ENROLLMENT",
      active: true,
    },
    {
      title: "Attend Training & Hands-on Sessions",
      description:
        "Join live mentor-led sessions, complete interactive tasks, and gain real-world project exposure through structured learning paths.",
      icon: <FaCalendarAlt />,
      label: "STEP 2 — TRAINING PHASE",
      active: false,
    },
    {
      title: "Work on Real Projects & Build Your Portfolio",
      description:
        "Apply your skills to actual client and in-house projects. Gain valuable experience and learn professional workflow management.",
      icon: <FaLaptopCode />,
      label: "STEP 3 — PRACTICAL EXPERIENCE",
      active: false,
    },
    {
      title: "Get Certified & Kickstart Your Career",
      description:
        "Complete your final evaluation and earn a recognized certificate. Get placement assistance and career guidance from our mentors.",
      icon: <FaAward />,
      label: "STEP 4 — SUCCESS & CERTIFICATION",
      active: false,
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">🚀 Your Path to Internship Success</h2>
      <p className="timeline-subtitle">
        From enrollment to certification — experience the professional growth you deserve.
      </p>

      <div className="timeline-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"} ${
              step.active ? "active" : ""
            }`}
          >
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            <div className="timeline-icon">{step.icon}</div>
            <span className="timeline-label">{step.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsTimeline;
