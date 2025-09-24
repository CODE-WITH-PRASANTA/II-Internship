import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    id: 1,
    name: "Bob Limones",
    role: "Student",
    img: "https://via.placeholder.com/60", // replace with actual image
    rating: 5,
    review:
      "Lorem ipsum dolor amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
  {
    id: 2,
    name: "David Owens",
    role: "Designer",
    img: "https://via.placeholder.com/60", // replace with actual image
    rating: 5,
    review:
      "Lorem ipsum dolor amet consectetur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-left">
        <p className="sub-title">TESTIMONIALS</p>
        <h2 className="title">What Our Students Have To Say</h2>
        <div className="underline"></div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod
          tempor incididunt labore dolore magna aliqua enim minim ve.
        </p>
        <button className="view-btn">
          View All <span>→</span>
        </button>
      </div>

      <div className="testimonials-right">
        {testimonialsData.map((item) => (
          <div className="testimonial-card" key={item.id}>
            <div className="testimonial-header">
              <img src={item.img} alt={item.name} className="avatar" />
              <span className="badge">99</span>
            </div>
            <p className="review">{item.review}</p>
            <div className="stars">
              {"★".repeat(item.rating)}
            </div>
            <h3 className="name">{item.name}</h3>
            <p className="role">{item.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
