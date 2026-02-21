import React, { useState, useEffect } from "react";
import "./EducationalAward.css";
import { FaStar } from "react-icons/fa";

import team1 from "../../assets/in1.webp";
import team2 from "../../assets/in2.webp";
import team3 from "../../assets/in3.webp";
import team4 from "../../assets/in4.webp";

const EducationalAward = () => {

  const teamMembers = [
    { image: team1, name: "Frances Guerrero", role: "Developer" },
    { image: team2, name: "Larry Lawson", role: "Designer" },
    { image: team3, name: "Louis Crawford", role: "Medical Professor" },
    { image: team4, name: "Carolyn Ortiz", role: "Designer" },

    { image: team1, name: "Dennis Barrett", role: "IT Professor" },
    { image: team2, name: "Kristin Watson", role: "Project Manager" },
    { image: team3, name: "Cody Fisher", role: "Backend Developer" },
    { image: team4, name: "Savannah Nguyen", role: "HR Manager" },
  ];

  /* ===== responsive visible cards ===== */
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth <= 560) return 1;
    if (window.innerWidth <= 1024) return 2;
    if (window.innerWidth <= 1200) return 3;
    return 4;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());
  const [index, setIndex] = useState(0);

  /* ===== resize listener ===== */
  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== slider math ===== */
  const maxIndex = Math.max(teamMembers.length - visibleCards, 0);
  const totalDots = maxIndex + 1;

  /* prevent index overflow when resizing */
  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [visibleCards, maxIndex, index]);

  return (
    <section className="eduportawardsteam-section">
      <div className="eduportawardsteam-container">

        {/* LEFT — Awards */}
        <div className="eduportawardsteam-left">
          <h2>Awards'N Stuff</h2>

          <ul className="eduportawardsteam-award-list">
            <li><strong>2015</strong><span>Heroes for Children award</span></li>
            <li><strong>2016</strong><span>Education Agency of the Year</span></li>
            <li><strong>2017</strong><span>National Teacher of the Year</span></li>
            <li><strong>2018</strong><span>Best education agency 2018</span></li>
            <li><strong>2019</strong><span>Teacher of the nation (2nd place)</span></li>
            <li><strong>2020</strong><span>Best Independent Education Agency</span></li>
          </ul>
        </div>

        {/* RIGHT — Team */}
        <div className="eduportawardsteam-right">

          <div className="eduportawardsteam-header">
            <h2>Meet Our Team</h2>
            <button className="eduportawardsteam-join-btn">Join Team</button>
          </div>

          <div className="eduportawardsteam-slider-wrapper">

            {/* SLIDER */}
            <div className="eduportawardsteam-slider">
              <div
                className="eduportawardsteam-track"
                style={{
                  transform: `translateX(-${index * (100 / visibleCards)}%)`
                }}
              >
                {teamMembers.map((m, i) => (
                  <div
                    key={i}
                    className="eduportawardsteam-card"
                    style={{ width: `${100 / visibleCards}%` }}
                  >
                    <img src={m.image} alt={m.name} />
                    <h4>{m.name}</h4>
                    <p>{m.role}</p>

                    <div className="eduportawardsteam-stars">
                      {[...Array(5)].map((_, j) => (
                        <FaStar key={j} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOT PAGINATION */}
            <div className="eduportawardsteam-dots">
              {Array.from({ length: totalDots }).map((_, i) => (
                <button
                  key={i}
                  className={`eduportawardsteam-dot ${index === i ? "active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationalAward;
