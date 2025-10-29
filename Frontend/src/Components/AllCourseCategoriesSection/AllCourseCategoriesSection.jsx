import React from "react";
import "./AllCourseCategoriesSection.css";
import category1 from "../../assets/category-1.webp";
import category2 from "../../assets/category-2.webp";

const AllCourseCategoriesSection = () => {
  return (
    <section className="AllCourseCategories-section">
      <div className="AllCourseCategories-container">
        {/* Left Image */}
        <div className="AllCourseCategories-left">
          <img src={category1} alt="Learning Person" />
        </div>

        {/* Center Content */}
        <div className="AllCourseCategories-center">
          <h1>
            What do you want to <span>learn?</span>
          </h1>
          <p>
            Grow your skill with the most reliable online courses and
            certifications
          </p>
          <div className="AllCourseCategories-searchBox">
            <input type="text" placeholder="Search course" />
            <button>Search</button>
          </div>
        </div>

        {/* Right Image */}
        <div className="AllCourseCategories-right">
          <img src={category2} alt="Online Learner" />
        </div>
      </div>
    </section>
  );
};

export default AllCourseCategoriesSection;
