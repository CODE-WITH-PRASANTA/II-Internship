import React from "react";
import "./ChooseLanguagesSection.css";

import flagFrench from "../../assets/flag1.webp";
import flagGerman from "../../assets/flag2.webp";
import flagSpanish from "../../assets/flag3.webp";
import flagEnglish from "../../assets/flag4.webp";
import flagHindi from "../../assets/flag5.webp";
import flagItalian from "../../assets/flag6.webp";
import flagArabic from "../../assets/flag7.webp";

// bottom illustration images
import certImg from "../../assets/category4.webp";
import bestRatedImg from "../../assets/category3.webp";

const languages = [
  { flag: flagFrench, name: "French" },
  { flag: flagGerman, name: "German" },
  { flag: flagSpanish, name: "Español" },
  { flag: flagEnglish, name: "English" },
  { flag: flagHindi, name: "Hindi" },
  { flag: flagItalian, name: "Italian" },
  { flag: flagArabic, name: "Arabic" },
  { flag: flagEnglish, name: "English" },
];

const ChooseLanguagesSection = () => {
  return (
    <section className="languages-section">
      <div className="languages-header">
        <h2>Choose Languages</h2>
      </div>

      {/* ===== Languages Grid ===== */}
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div key={index} className="language-card">
            <img src={lang.flag} alt={lang.name} />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>

      {/* ===== Bottom Info Cards ===== */}
      <div className="bottom-cards">
        <div className="bottom-card blue-card">
          <div className="card-img left-img">
            <img src={certImg} alt="Certificate" />
          </div>
          <div className="card-content">
            <h3>Earn a Certificate</h3>
            <p>Get the right professional certificate program for you.</p>
            <button className="btn-blue">View Programs</button>
          </div>
        </div>

        <div className="bottom-card yellow-card">
          <div className="card-img left-img">
            <img src={bestRatedImg} alt="Best Rated" />
          </div>
          <div className="card-content">
            <h3>Best Rated Courses</h3>
            <p>Enroll now in the most popular and best rated courses.</p>
            <button className="btn-yellow">View Courses</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseLanguagesSection;
