import React, { useEffect, useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaThumbsUp, FaUserTie } from "react-icons/fa";
import "./StatsSection.css";

const stats = [
  { id: 1, icon: <FaUserGraduate />, value: 29300, label: "Student Enrolled", colorClass: "teal" },
  { id: 2, icon: <FaChalkboardTeacher />, value: 32400, label: "Class Completed", colorClass: "coral" },
  { id: 3, icon: <FaThumbsUp />, value: 100, suffix: "%", label: "Satisfaction Rate", colorClass: "lime" },
  { id: 4, icon: <FaUserTie />, value: 354, suffix: "%", label: "Top Instructors", colorClass: "amber" },
];

const useCounter = (target, duration = 3000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.max(Math.floor(duration / target), 1);
    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start > target) start = target;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

const Particles = () => {
  const dots = Array.from({ length: 50 }, (_, i) => i);
  return (
    <div className="particles-container">
      {dots.map((dot) => (
        <div
          key={dot}
          className="particle"
          style={{
            left: `${Math.random() * window.innerWidth}px`,
            top: `${Math.random() * window.innerHeight}px`,
            animationDuration: `${30 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="stats-section">
      <Particles />
      <div className="stats-grid">
        {stats.map((item, index) => {
          const count = useCounter(item.value, 3000);
          return (
            <div key={item.id} className={`stats-card ${item.colorClass}`} style={{ animationDelay: `${index * 0.4}s` }}>
              <div className="stats-bg-glow"></div>
              <div className="stats-icon">{item.icon}</div>
              <h3 className="stats-number">
                {count.toLocaleString()}
                {item.suffix || ""}
                {(item.id === 1 || item.id === 2) && "K"}
              </h3>
              <p className="stats-label">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;