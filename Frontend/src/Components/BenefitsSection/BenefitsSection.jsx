import React from "react";
import { FaGraduationCap, FaKey, FaChalkboardTeacher } from "react-icons/fa";
import "./BenefitsSection.css";

const benefits = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    title: "High Quality Courses",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "BenefitSec-green",
  },
  {
    id: 2,
    icon: <FaKey />,
    title: "Life Time Access",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "BenefitSec-pink",
  },
  {
    id: 3,
    icon: <FaChalkboardTeacher />,
    title: "Expert Instructors",
    description: "Lorem ipsum dolor sit amet conset ur elit sed eiusmod ex tempor inc labore",
    colorClass: "BenefitSec-blue",
  },
];

const BenefitsSection = () => {
  return (
    <section className="BenefitSec-container">
      <div className="BenefitSec-header">
        <p className="BenefitSec-subtitle">WHY CHOOSE IIInternship</p>
        <h2 className="BenefitSec-title">
          The Best <span>Beneficial</span> Side of IIInternship
        </h2>
        <div className="BenefitSec-underline"></div>
      </div>

      <div className="BenefitSec-grid">
        {benefits.map((item, index) => (
          <div
            key={item.id}
            className={`BenefitSec-card ${item.colorClass}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div className={`BenefitSec-icon ${item.colorClass}`}>{item.icon}</div>
            <h3 className="BenefitSec-cardTitle">{item.title}</h3>
            <p className="BenefitSec-cardDesc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
