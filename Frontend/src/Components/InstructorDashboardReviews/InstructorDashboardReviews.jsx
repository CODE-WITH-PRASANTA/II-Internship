import React from "react";
import "./InstructorDashboardReviews.css";
import avatar1 from "../../assets/course-avatar-1.webp";
import avatar2 from "../../assets/course-avatar-2.webp";
import avatar3 from "../../assets/course-avatar-3.webp";
import avatar4 from "../../assets/course-avatar-4.webp";
import avatar5 from "../../assets/course-avatar-5.webp";
import avatar6 from "../../assets/course-avatar-1.webp";

const InstructorDashboardReviews = () => {
  const reviews = [
    {
      student: "Emma Watson",
      course: "React for Beginners",
      rating: 5,
      comment: "Excellent course, very clear explanations!",
      date: "Oct 20, 2025",
      avatar: avatar1,
    },
    {
      student: "John Doe",
      course: "GraphQL API Design",
      rating: 4,
      comment: "Very informative but could use more examples.",
      date: "Oct 18, 2025",
      avatar: avatar2,
    },
    {
      student: "Sophia Lee",
      course: "Advanced JavaScript",
      rating: 5,
      comment: "Loved it! Learned a lot in a short time.",
      date: "Oct 15, 2025",
      avatar: avatar3,
    },
    {
      student: "Michael Smith",
      course: "CSS Flex & Grid",
      rating: 4,
      comment: "Good course, practical exercises were helpful.",
      date: "Oct 12, 2025",
      avatar: avatar4,
    },
    {
      student: "Olivia Brown",
      course: "Node.js Essentials",
      rating: 5,
      comment: "Fantastic explanations and clear examples.",
      date: "Oct 10, 2025",
      avatar: avatar5,
    },
    {
      student: "Liam Johnson",
      course: "UI/UX Design Basics",
      rating: 4,
      comment: "Very useful course for beginners.",
      date: "Oct 8, 2025",
      avatar: avatar6,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="instructordashboardreviews-wrapper">
      <h2 className="instructordashboardreviews-title">Student Reviews</h2>

      <div className="instructordashboardreviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="instructordashboardreview-card">
            <div className="review-avatar">
              <img src={review.avatar} alt={review.student} />
            </div>
            <div className="review-content">
              <div className="review-header">
                <strong>{review.student}</strong> on <em>{review.course}</em>
              </div>
              <div className="review-rating">{renderStars(review.rating)}</div>
              <p className="review-comment">{review.comment}</p>
              <div className="review-footer">
                <span className="review-date">{review.date}</span>
                <button className="review-reply-btn">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer: Showing entries + Pagination */}
      <div className="instructordashboardreviews-footer">
        <p className="reviews-showing">Showing 1 to 8 of 20 entries</p>
        <div className="reviews-pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardReviews;
