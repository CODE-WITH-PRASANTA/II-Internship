import React from "react";
import "./TopListedCourses.css";
import { Users, Star, ShoppingCart } from "lucide-react";

import course1 from "../../assets/list-course-1.webp";
import course2 from "../../assets/list-course-2.webp";
import course3 from "../../assets/list-course-3.webp";

import avt1 from "../../assets/sub-avt-1.webp";
import avt2 from "../../assets/sub-avt-2.webp";
import avt3 from "../../assets/sub-avt-3.webp";

const courses = [
  {
    id: 1,
    image: course1,
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    students: "9.1k",
    rating: "4.5",
    price: "$140",
    category: "Personal Development",
    categoryColor: "#06b6d4",
    avatar: avt1,
  },
  {
    id: 2,
    image: course2,
    title: "Fundamentals of Business Analysis",
    students: "2.5k",
    rating: "3.6",
    price: "$160",
    category: "Business Development",
    categoryColor: "#06b6d4",
    avatar: avt2,
  },
  {
    id: 3,
    image: course3,
    title: "Google Ads Training: Become a PPC Expert",
    students: "6k",
    rating: "3.8",
    price: "$226",
    category: "SEO",
    categoryColor: "#06b6d4",
    avatar: avt3,
  },
];

const TopListedCourses = () => {
  return (
    <section className="top-listed-section">
      <h2 className="top-listed-title">Top Listed Courses</h2>

      <div className="top-listed-grid">
        {courses.map((course) => (
          <div className="top-listed-card" key={course.id}>
            <div className="top-listed-image">
              <img src={course.image} alt={course.title} />
              <button className="top-listed-buy-btn">
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>

            <div className="top-listed-details">
              <div className="top-listed-meta">
                <div className="top-listed-meta-left">
                  <div className="top-listed-meta-item top-listed-orange">
                    <Users size={16} />
                    <span>{course.students}</span>
                  </div>
                  <div className="top-listed-meta-item top-listed-yellow">
                    <Star size={16} />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <img
                  src={course.avatar}
                  alt="avatar"
                  className="top-listed-avatar"
                />
              </div>

              <h3 className="top-listed-course-title">{course.title}</h3>

              <div className="top-listed-bottom">
                <div className="top-listed-category">
                  <span
                    className="top-listed-category-dot"
                    style={{ backgroundColor: course.categoryColor }}
                  ></span>
                  {course.category}
                </div>
                <div className="top-listed-price">{course.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopListedCourses;
