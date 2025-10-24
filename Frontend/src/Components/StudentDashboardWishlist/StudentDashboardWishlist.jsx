import React from "react";
import {
  FaClock,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";
import "./StudentDashboardWishlist.css";

import card1 from "../../assets/courses-1.webp";
import card2 from "../../assets/courses-2.webp";
import card3 from "../../assets/courses-3.webp";
import card4 from "../../assets/courses-4.webp";
import avatar1 from "../../assets/course-avatar-1.webp";
import avatar2 from "../../assets/course-avatar-2.webp";
import avatar3 from "../../assets/course-avatar-3.webp";
import avatar4 from "../../assets/course-avatar-4.webp";

const StudentDashboardWishlist = () => {
  const courses = [
    {
      id: 1,
      title: "Backend Development With Node.Js: Building Scalable Web Apps",
      level1: "Beginner",
      level2: "Pro",
      rating: 4.9,
      reviews: "1.57k",
      duration: "17h 30m",
      price: "$155",
      enrolled: true,
      image: card1,
      instructor: "Agnil Marcho",
      avatar: avatar1,
    },
    {
      id: 2,
      title: "HTML Mastery: Complete Guide To HTML From Basics To Advanced",
      level1: "Beginner",
      level2: "Pro",
      rating: 4.9,
      reviews: "2.22k",
      duration: "15h 50m",
      price: "$149",
      enrolled: true,
      image: card2,
      instructor: "Cody L.",
      avatar: avatar2,
    },
    {
      id: 3,
      title: "Python Unleashed: Mastering JavaScript For Web Development",
      level1: "Beginner",
      level2: "Pro",
      rating: 4.9,
      reviews: "1.34k",
      duration: "10h 50m",
      price: "$179",
      enrolled: true,
      image: card3,
      instructor: "Adam Lobby",
      avatar: avatar3,
    },
    {
      id: 4,
      title: "WooCommerce Mastery: Build E-commerce Sites with Ease",
      level1: "Beginner",
      level2: "Pro",
      rating: 4.8,
      reviews: "1.21k",
      duration: "20h 10m",
      price: "$199",
      enrolled: true,
      image: card4,
      instructor: "Elina R.",
      avatar: avatar4,
    },
  ];

  return (
    <div className="studentdashboard-wishlist">
      <h2 className="wishlist-title">Wishlist Courses</h2>
      <div className="wishlist-grid">
        {courses.map((course) => (
          <div key={course.id} className="wishlist-card">
            <div className="wishlist-card-image">
              <img src={course.image} alt={course.title} />
              <div className="wishlist-duration">
                <FaClock /> {course.duration}
              </div>
            </div>

            <div className="wishlist-card-content">
              <div className="course-tags">
                <span className="tag beginner">{course.level1}</span>
                <span className="tag pro">{course.level2}</span>
              </div>

              <h3 className="course-title">{course.title}</h3>

              <div className="course-rating">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <span className="rating-text">
                  {course.rating} <span>({course.reviews})</span>
                </span>
              </div>

              <div className="instructor-info">
                <img src={course.avatar} alt={course.instructor} />
                <p>
                  Lectures By: <span>{course.instructor}</span>
                </p>
              </div>

  <div className="course-footer-new">
  <button className="enroll-btn-new">
    Enrolled Now <FaArrowRight />
  </button>
  <h4 className="course-price-new">{course.price}</h4>
</div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboardWishlist;
