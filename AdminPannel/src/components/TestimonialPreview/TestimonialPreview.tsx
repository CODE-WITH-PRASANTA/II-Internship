import React, { useState } from "react";
import "./TestimonialPreview.css";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  message: string;
  imageUrl: string;
  published: boolean;
}

const TestimonialPreview: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      message:
        "Absolutely loved the service! The process was smooth and very professional. Highly recommended.",
      imageUrl:
        "https://randomuser.me/api/portraits/men/75.jpg",
      published: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 4,
      message:
        "Very satisfied with the customer support and overall experience. Will use again!",
      imageUrl:
        "https://randomuser.me/api/portraits/women/65.jpg",
      published: true,
    },
    {
      id: 3,
      name: "Rahul Verma",
      rating: 3,
      message:
        "Good experience but there’s still room for improvement in response time.",
      imageUrl:
        "https://randomuser.me/api/portraits/men/60.jpg",
      published: false,
    },
    {
      id: 4,
      name: "Neha Singh",
      rating: 5,
      message:
        "Fantastic experience! Everything went perfectly from start to finish.",
      imageUrl:
        "https://randomuser.me/api/portraits/women/48.jpg",
      published: true,
    },
  ]);

  return (
    <div className="testimonial-preview-container">
      <h2 className="testimonial-preview-title">🌟 Client Testimonials Preview</h2>

      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`testimonial-card ${
              t.published ? "published" : "draft"
            }`}
          >
            <div className="testimonial-top">
              <img src={t.imageUrl} alt={t.name} className="testimonial-avatar" />
              <div>
                <h3>{t.name}</h3>
                <div className="testimonial-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      color={star <= t.rating ? "#facc15" : "#cbd5e1"}
                      fill={star <= t.rating ? "#facc15" : "none"}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="testimonial-message">“{t.message}”</p>

            <div className="testimonial-footer">
              <span
                className={`testimonial-status ${
                  t.published ? "active" : "inactive"
                }`}
              >
                {t.published ? "Published" : "Draft"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPreview;
