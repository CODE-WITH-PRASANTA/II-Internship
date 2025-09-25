import React from "react";
import "./Testimonials.css";

import Profilepic from "../../assets/Profile 0001.webp";
import DotShape from "../../assets/shape-2.png";

const testimonialsData = [
  {
    id: 1,
    name: "Thomas Lopez",
    role: "Designer",
    img: Profilepic,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
  {
    id: 2,
    name: "Amber Page",
    role: "Developer",
    img: Profilepic,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Designer",
    img: Profilepic,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "Developer",
    img: Profilepic,
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
];

const Testimonials = () => {
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
    {testimonialsData.map((item) => (
      <div className="testimonial-card" key={item.id}>
        <img src={DotShape} alt="dots" className="testimonial-dot" />
        <div className="testimonial-header">
          <img src={item.img} alt={item.name} className="testimonial-avatar" />
          <span className="testimonial-quote">"</span>
        </div>
        <p className="testimonial-review">{item.review}</p>
        <div className="testimonial-stars">{"★".repeat(item.rating)}</div>
        <h3 className="testimonial-name">{item.name}</h3>
        <p className="testimonial-role">{item.role}</p>
      </div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Testimonials;
