import React from "react";
import "./PopularCourses.css";
import { Clock, Users, BookOpen } from "lucide-react";

// Assets
import Course1 from "../../assets/course-01.webp";

const PopularCourses = () => {
  const courses = [
    {
      level: "Beginner",
      duration: "15 Weeks",
      title: "Starting SEO as your Home Based Business",
      rating: 5.0,
      ratingsCount: 3,
      price: "₹2,499",
      lessons: 11,
      students: 227,
      instructor: "Amit Sharma",
      category: "Digital Marketing",
      language: "Hindi / English",
      image: Course1,
    },
    {
      level: "Expert",
      duration: "12 Weeks",
      title: "Grow Personal Financial Security Thinking &...",
      rating: 5.0,
      ratingsCount: 2,
      price: "₹3,999",
      lessons: 8,
      students: 72,
      instructor: "Priya Desai",
      category: "Finance",
      language: "English",
      image: Course1,
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
      instructor: "Rahul Verma",
      category: "Web Development",
      language: "English / Hindi",
      image: Course1,
    },
    {
      level: "All Levels",
      duration: "25 Hours",
      title: "Competitive Strategy Law for Management...",
      rating: 3.0,
      ratingsCount: 2,
      price: "₹5,499",
      lessons: 7,
      students: 362,
      instructor: "Dr. Neha Kapoor",
      category: "Business Strategy",
      language: "English",
      image: Course1,
    },
  ];

  return (
    <section className="popularcourses-section">
      {/* Section Heading */}
      <div className="popularcourses-header">
        <p className="popularcourses-subtitle">POPULAR COURSES</p>
        <h2 className="popularcourses-title">Pick A Course To Get Started</h2>
        <p className="popularcourses-desc">
          Learn from top industry experts and enhance your skills with our curated online courses.
          Choose the right program for your career growth and start today!
        </p>
      </div>

      {/* Courses Grid */}
      <div className="popularcourses-grid">
        {courses.map((course, index) => (
          <div className="popularcourses-card" key={index}>
            {/* Course Image */}
            <div className="popularcourses-img-wrapper">
              <img
                src={course.image}
                alt={course.title}
                className="popularcourses-img"
              />
              <span className="popularcourses-duration">
                <Clock size={16} /> {course.duration}
              </span>
            </div>

            {/* Course Content */}
            <div className="popularcourses-content">
              <span className="popularcourses-level">{course.level}</span>
              <h3 className="popularcourses-course-title">{course.title}</h3>

              {/* Instructor & Category */}
              <p className="popularcourses-instructor">
                👨‍🏫 {course.instructor} | 📂 {course.category}
              </p>
              <p className="popularcourses-language">🌐 Language: {course.language}</p>

              {/* Rating */}
              <div className="popularcourses-rating">
                <span className="popularcourses-stars">
                  {"★".repeat(Math.floor(course.rating))}
                  {"☆".repeat(5 - Math.floor(course.rating))}
                </span>
                <span className="popularcourses-rating-text">
                  ({course.rating} / {course.ratingsCount} Ratings)
                </span>
              </div>

              {/* Price */}
              <p className="popularcourses-price">{course.price}</p>

              {/* Lessons & Students Info */}
              <div className="popularcourses-info">
                <span className="popularcourses-lessons">
                  <BookOpen size={16} /> {course.lessons} Lessons
                </span>
                <span className="popularcourses-students">
                  <Users size={16} /> {course.students} Students
                </span>
              </div>

              {/* Join Button */}
              <div className="popularcourses-join-wrapper">
                <button className="popularcourses-join-btn">Join Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Browse More Button */}
      <div className="popularcourses-btn-wrapper">
        <button className="popularcourses-btn">Browse More Courses</button>
      </div>
    </section>
  );
};

export default PopularCourses;
