import React from "react";
import { FaGraduationCap, FaKey, FaChalkboardTeacher } from "react-icons/fa";
import "./BenefitsSection.css";

const benefits = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "High Quality Courses",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "green",
  },
  {
    id: 2,
    icon: <FaKey />,
    title: "Life Time Access",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "pink",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "blue",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <p className="subtitle">WHY CHOOSE EDUBLINK</p>
        <h2 className="title">
          The Best <span>Beneficial</span> Side of EduBlink
        </h2>
        <div className="underline"></div>
      </div>
      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div key={item.id} className="benefit-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className={`benefit-icon ${item.colorClass}`}>{item.icon}</div>
            <h3 className="benefit-title">{item.title}</h3>
            <p className="benefit-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;