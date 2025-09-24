import React, { useEffect, useState } from "react";
import "./Info.css";

const Info = () => {
  const [count, setCount] = useState({
    students: 0,
    classes: 0,
    instructors: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        students: prev.students < 45200 ? prev.students + 452 : 45200,
        classes: prev.classes < 32400 ? prev.classes + 324 : 32400,
        instructors: prev.instructors < 354 ? prev.instructors + 4 : 354,
        satisfaction:
          prev.satisfaction < 99.9
            ? +(prev.satisfaction + 1).toFixed(1)
            : 99.9,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="info">
      <div className="info-box">
        <div className="info-item">
          <h2 className="info-number green">
            {(count.students / 1000).toFixed(1)}K
          </h2>
          <p className="info-text">STUDENT ENROLLED</p>
        </div>
        <div className="info-item">
          <h2 className="info-number red">
            {(count.classes / 1000).toFixed(1)}K
          </h2>
          <p className="info-text">CLASS COMPLETED</p>
        </div>
        <div className="info-item">
          <h2 className="info-number orange">{count.instructors}+</h2>
          <p className="info-text">TOP INSTRUCTORS</p>
        </div>
        <div className="info-item">
          <h2 className="info-number purple">{count.satisfaction}%</h2>
          <p className="info-text">SATISFACTION RATE</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
