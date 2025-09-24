import React from "react";
import "./PopularCourses.css";
import { Clock, Users, BookOpen } from "lucide-react";

const PopularCourses = () => {
  const courses = [
    {
      level: "Beginner",
      duration: "15 Weeks",
      title: "Starting SEO as your Home Based Business",
      rating: 5.0,
      ratingsCount: 3,
      price: "$30",
      lessons: 11,
      students: 227,
      image: "",
    },
    {
      level: "Expert",
      duration: "12 Weeks",
      title: "Grow Personal Financial Security Thinking &...",
      rating: 5.0,
      ratingsCount: 2,
      price: "$49",
      lessons: 8,
      students: 72,
      image: "",
    },
    {
      level: "All Levels",
      duration: "20 Hours",
      title: "The Complete Guide to Build RESTful API...",
      rating: 4.0,
      ratingsCount: 2,
      price: "Free",
      lessons: 9,
      students: 42,
      image: "",
    },
    {
      level: "All Levels",
      duration: "25 Hours",
      title: "Competitive Strategy Law for Management...",
      rating: 3.0,
      ratingsCount: 2,
      price: "$75",
      lessons: 7,
      students: 362,
      image: "",
    },
  ];

  return (
    <section className="popularcourses">
      <p className="popularcourses-subtitle">POPULAR COURSES</p>
      <h2 className="popularcourses-title">Pick A Course To Get Started</h2>

      <div className="popularcourses-grid">
        {courses.map((course, index) => (
          <div className="popularcourses-card" key={index}>
            <div className="popularcourses-img">
              <img src={course.image} alt={course.title} />
              <span className="popularcourses-duration">
                <Clock size={16} /> {course.duration}
              </span>
            </div>
            <div className="popularcourses-content">
              <span className="popularcourses-level">{course.level}</span>
              <h3 className="popularcourses-course-title">{course.title}</h3>
              <div className="popularcourses-rating">
                {"★".repeat(Math.floor(course.rating))}
                {"☆".repeat(5 - Math.floor(course.rating))}
                <span>({course.rating}/ {course.ratingsCount} Ratings)</span>
              </div>
              <p className="popularcourses-price">{course.price}</p>
              <div className="popularcourses-info">
                <span>
                  <BookOpen size={16} /> {course.lessons} Lessons
                </span>
                <span>
                  <Users size={16} /> {course.students} Students
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

            {/* Browse More Button */}
      <div className="popularcourses-btn-wrapper">
        <button className="popularcourses-btn">Browse more courses</button>
      </div>
    </section>
  );
};

export default PopularCourses;
