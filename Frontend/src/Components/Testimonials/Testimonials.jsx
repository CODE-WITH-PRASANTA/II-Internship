import React, { useState, useEffect } from "react";
import "./Testimonials.css";

import DotShape from "../../assets/shape-2.png";
import API from "../../api/api";
import { getImageUrl } from "../../api/api";

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(2);

  /* ================= FETCH FROM BACKEND ================= */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API.get("/testimonials");

        const allTestimonials = res.data.data || [];

        // Show only published testimonials
        const published = allTestimonials.filter(
          (t) => t.published === true
        );

        setTestimonialsData(published);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      }
    };

    fetchTestimonials();
  }, []);

  /* ================= RESPONSIVE CARDS ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / cardsPerPage);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const visibleCards = testimonialsData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <section className="testimonial-section">
      <div className="testimonial-left">
        <p className="testimonial-subtitle">TESTIMONIALS</p>
        <h2 className="testimonial-title">What Our Students Say</h2>
        <div className="testimonial-underline"></div>
        <p className="testimonial-description">
          Hear from our students who have transformed their skills and careers
          through our courses.
        </p>
        <button className="testimonial-btn">
          View All <span>→</span>
        </button>
      </div>

      <div className="testimonial-right">
        <div className="testimonial-slider">
          {visibleCards.map((item) => (
            <div className="testimonial-card" key={item._id}>
              <img src={DotShape} alt="dots" className="testimonial-dot" />
              <div className="testimonial-header">
                <img
                  src={
                    item.image
                      ? getImageUrl(item.image)
                      : ""
                  }
                  alt={item.name}
                  className="testimonial-avatar"
                />
                <span className="testimonial-quote">"</span>
              </div>
              <p className="testimonial-review">{item.message}</p>
              <div className="testimonial-stars">
                {"★".repeat(item.rating)}
              </div>
              <h3 className="testimonial-name">{item.name}</h3>
              <p className="testimonial-role">
                {item.designation}
              </p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="testimonial-pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}

        {testimonialsData.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No testimonials available.
          </p>
        )}
      </div>
    </section>
  );
};

export default Testimonials;