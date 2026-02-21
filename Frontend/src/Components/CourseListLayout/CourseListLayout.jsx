import React from "react";
import "./CourseListLayout.css";

const CourseListLayout = () => {
  return (
    <section className="courses-header">
      <div className="courses-header-container">
        <p className="breadcrumb">
          <span>Home</span>
          <span className="slash">/</span>
          <span>Course</span>
          <span className="slash">/</span>
          <span className="active">Courses List Layout</span>
        </p>

        <h1 className="title">Courses List Layout</h1>
      </div>
    </section>
  );
};

export default CourseListLayout;