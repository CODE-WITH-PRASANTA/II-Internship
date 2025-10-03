import React, { useEffect } from "react";
import "./StepsTimeline.css";
import { FaCheck, FaCalendarAlt, FaHandsHelping, FaStar } from "react-icons/fa";

const StepsTimeline = () => {
  const steps = [
    {
      title: "You Really Decide to Improve Yourself",
      description:
        "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad. Eos erant indoctum an.",
      icon: <FaCheck />,
      label: "AWAKENING",
      active: true,
    },
    {
      title: "Book an Appointment",
      description:
        "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur, sonet vocibus lobortis has ad.",
      icon: <FaCalendarAlt />,
      label: "SCHEDULE A MEETING",
      active: false,
    },
    {
      title: "Follow My Instructions",
      description:
        "Nostro aperiam petentium eu nam, mel debet urbanitas ad, idque complectitur eu quo. An sea autem dolore dolores.",
      icon: <FaHandsHelping />,
      label: "SHOW COMMITMENT",
      active: false,
    },
    {
      title: "Voilà! Meet with new you!",
      description:
        "Voilà! Meet with your new self. Dictas invidunt est ex, et sea consulatu torquatos.",
      icon: <FaStar />,
      label: "TRANSFORMATION COMPLETED",
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
      <h2 className="timeline-title">Simple Steps to Success</h2>
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
