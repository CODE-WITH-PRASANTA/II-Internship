import React, { useRef, useEffect, useState } from "react";
import "./TechSupportProcess.css";

const TechSupportProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Mobile & Tablet Support",
      desc: "Reach out via live chat, phone, or email—our team is available 24/7.",
    },
    {
      id: "02",
      title: "Diagnose the Issue",
      desc: "Our certified experts quickly identify the root cause of your tech problem.",
    },
    {
      id: "03",
      title: "Fix & Resolve",
      desc: "Our certified experts resolve the problem efficiently and effectively.",
    },
    {
      id: "04",
      title: "Ongoing Support",
      desc: "We provide continuous support to ensure your tech works smoothly.",
    },
  ];

  const cardRefs = useRef([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updatePositions = () => {
      const newPositions = cardRefs.current.map((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          const parentRect = card.parentNode.getBoundingClientRect();
          return {
            x: rect.left + rect.width / 2 - parentRect.left,
            y: rect.top + rect.height / 2 - parentRect.top,
          };
        }
        return { x: 0, y: 0 };
      });
      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section className="techsupportprocess-section">
      <div className="techsupportprocess-header">
        <div className="techsupportprocess-left">
          <h2>Simple, Fast, and Hassle-Free Tech Support</h2>
        </div>
        <div className="techsupportprocess-right">
          <p>
            Getting expert help has never been easier. Here’s how our process
            keeps your technology running smoothly:
          </p>
        </div>
      </div>

      <div className="techsupportprocess-grid">
        {steps.map((step, index) => (
          <div
            key={step.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className={`techsupportprocess-card ${
              index % 2 === 0 ? "left-card" : "right-card"
            }`}
          >
            <div className="techsupportprocess-card-inner">
              <span className="techsupportprocess-number">{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </div>
        ))}

        {/* SVG Zig-Zag Line */}
        {positions.length > 1 && (
          <svg className="techsupportprocess-lines">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6c63ff" />
                <stop offset="100%" stopColor="#4c6ef5" />
              </linearGradient>
            </defs>
            {positions.map((pos, i) => {
              if (i === positions.length - 1) return null;
              const next = positions[i + 1];
              const midX = (pos.x + next.x) / 2;
              return (
                <g key={i}>
                  <path
                    d={`M${pos.x},${pos.y} C${midX},${pos.y} ${midX},${next.y} ${next.x},${next.y}`}
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx={pos.x} cy={pos.y} r="6" fill="#4c6ef5" />
                  <circle cx={next.x} cy={next.y} r="6" fill="#4c6ef5" />
                </g>
              );
            })}
          </svg>
        )}
      </div>
    </section>



  );
};

export default TechSupportProcess;
