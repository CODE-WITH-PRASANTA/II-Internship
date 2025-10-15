import React, { useEffect, useRef } from "react";
import "./PhotographySection.css";
import pic1 from "../../assets/pic1.webp";
import pic2 from "../../assets/pic2.webp";
import pic3 from "../../assets/pic3.webp";
import pic4 from "../../assets/pic4.webp";
import pic5 from "../../assets/pic5.webp";
import pic6 from "../../assets/pic6.webp";
import pic7 from "../../assets/pic7.webp";
import pic8 from "../../assets/pic8.webp";


const PhotographySection = () => {
  const cardsRef = useRef([]);

  const couples = [
    { name: "Bella Blue", type: "People, Summer Days", img: pic1 },
    { name: "Nature", type: "White Buildings", img: pic2 },
    { name: "Nature", type: "Crazy Mood", img: pic3 },
    { name: "People", type: "Black & White", img: pic4 },
    { name: "People", type: "Portrait Session", img: pic5 },
    { name: "Ellen & James", type: "Weddings", img: pic6 },
    { name: "Carla & Mike", type: "Weddings", img: pic7},
    { name: "Sophia", type: "Portrait Mood", img: pic8 },
  ];

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="photography-section">
      <div className="photography-header">
        <h2>
          We're <span>Gleam</span> a small and enthusiastic<br />
          photography studio based in <span>New York</span>
        </h2>
        <p>
          We love photography and travel for meeting new beautiful people all
          over the world. Propriae voluptaria dissentias nam ei, posse diceret
          inciderint cum ut, gubergren sadipscing ei vim. Ancillae torquatos in
          nec.
        </p>
      </div>

      <div className="photography-masonry">
        {couples.map((item, index) => (
          <div
            className="photo-card modern-card fade-up"
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div
              className="photo-image"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="overlay">
                <span className="plus">+</span>
              </div>
            </div>
            <div className="photo-info">
              <h3>{item.name}</h3>
              <p className="photo-type">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotographySection;
