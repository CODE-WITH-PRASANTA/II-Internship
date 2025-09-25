import React, { useEffect, useState, useRef } from "react";
import "./Info.css";

const Info = () => {
  const [count, setCount] = useState({
    students: 0,
    classes: 0,
    instructors: 0,
    satisfaction: 0,
  });
  const [start, setStart] = useState(false); // control counting
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true); // start counting when visible
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // 30% visible triggers it
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!start) return;

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
  }, [start]);

  return (
    <section className="info" ref={sectionRef}>
      <div className="info-box">
        <div className="info-item">
          <h2 className="info-number gradient-green">
            {(count.students / 1000).toFixed(1)}K
          </h2>
          <p className="info-text">STUDENTS ENROLLED</p>
        </div>
        <div className="info-item">
          <h2 className="info-number gradient-red">
            {(count.classes / 1000).toFixed(1)}K
          </h2>
          <p className="info-text">CLASSES COMPLETED</p>
        </div>
        <div className="info-item">
          <h2 className="info-number gradient-orange">
            {count.instructors}+
          </h2>
          <p className="info-text">TOP INSTRUCTORS</p>
        </div>
        <div className="info-item">
          <h2 className="info-number gradient-purple">
            {count.satisfaction}%
          </h2>
          <p className="info-text">SATISFACTION RATE</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
