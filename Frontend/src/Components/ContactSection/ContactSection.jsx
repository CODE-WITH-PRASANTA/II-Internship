// ContactSection.js
import React from "react";
import "./ContactSection.css";
import insta1 from "../../assets/insta-1.webp";
import insta2 from "../../assets/insta-2.webp";
import insta3 from "../../assets/insta-3.webp";
import insta4 from "../../assets/insta-4.webp";
import insta5 from "../../assets/insta-5.webp";
import insta6 from "../../assets/insta-6.webp";
import insta7 from "../../assets/insta-7.webp";
import insta8 from "../../assets/insta-8.webp";

const images = [
  insta1, insta2, insta3, insta4,
  insta5, insta6, insta7, insta8
];

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Contact Info */}
      <div className="contact-info">
        <p>
          We love meeting new people. If you want to work with us, send a message.
        </p>
        <button className="contact-btn">Contact Us</button>
        <div className="follow-us">
          <p>Follow Us!</p>
        </div>
      </div>

      {/* Horizontal Image Row */}
      <div className="image-row">
        {images.map((img, index) => (
          <div
            key={index}
            className="image-card"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
