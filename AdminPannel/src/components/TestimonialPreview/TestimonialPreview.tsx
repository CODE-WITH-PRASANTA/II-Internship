import React, { useEffect, useState } from "react";
import "./TestimonialPreview.css";
import { Star } from "lucide-react";
import API from "../../api/api";
import { getImageUrl } from "../../api/api";

interface Testimonial {
  _id: string;
  name: string;
  rating: number;
  message: string;
  image?: string;
  published: boolean;
}

const TestimonialPreview: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API.get("/testimonials");
console.log(res.data.data);
        const allTestimonials: Testimonial[] = res.data.data || [];

        // Only show published
        const published = allTestimonials.filter(
          (t) => t.published === true
        );

        setTestimonials(published);
      } catch (error) {
        console.error("FETCH ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonial-preview-container">
      <h2 className="testimonial-preview-title">
        🌟 Client Testimonials Preview
      </h2>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading testimonials...</p>
      ) : (
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div
              key={t._id}
              className={`testimonial-card ${
                t.published ? "published" : "draft"
              }`}
            >
              <div className="testimonial-top">
                <img
                  src={t.image ? getImageUrl(t.image) : ""}
                  alt={t.name}
                  className="testimonial-avatar"
                />
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

              <p className="testimonial-message">
                “{t.message}”
              </p>

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

          {testimonials.length === 0 && (
            <p style={{ textAlign: "center" }}>
              No published testimonials yet.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default TestimonialPreview;