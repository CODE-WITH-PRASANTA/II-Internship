import React from "react";
import { Star, Users, BarChart, Globe, CalendarDays } from "lucide-react";
import "./CourseDetailsSection.css";

const CourseDetailsSection = () => {
  return (
    <section className="coursedetailssection-container">
      <div className="coursedetailssection-badge">Digital Marketing</div>

      <h1 className="coursedetailssection-title">
        The Complete Digital Marketing Course - <br /> 12 Courses in 1
      </h1>

      <p className="coursedetailssection-description">
        Satisfied conveying a dependent contented he gentleman agreeable do be.
        Warrant private blushes removed an in equally totally if. Delivered
        dejection necessary objection do Mr prevailed. Mr feeling does chiefly
        cordial in do.
      </p>

      <div className="coursedetailssection-meta">
        <div className="coursedetailssection-meta-item">
          <Star size={18} color="#facc15" />
          <span>4.5/5.0</span>
        </div>
        <div className="coursedetailssection-meta-item">
          <Users size={18} color="#ef4444" />
          <span>12k Enrolled</span>
        </div>
        <div className="coursedetailssection-meta-item">
          <BarChart size={18} color="#22c55e" />
          <span>All levels</span>
        </div>
        <div className="coursedetailssection-meta-item">
          <CalendarDays size={18} color="#dc2626" />
          <span>Last updated 09/2021</span>
        </div>
        <div className="coursedetailssection-meta-item">
          <Globe size={18} color="#0ea5e9" />
          <span>English</span>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsSection;
