import React, { useState } from "react";
import y1 from "../../assets/you1.webp"; // Left icon
import y2 from "../../assets/you2.webp"; // Right icon
import y3 from "../../assets/you3.webp"; // Bottom center icon
import "./ICan.css";

const faqItems = [
  {
    title: "1:1 Coaching",
    content:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
  },
  {
    title: "Personal Development",
    content:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
  },
  {
    title: "Self Oriented Life Programs",
    content:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
  },
  {
    title: "Marriage Consulting",
    content:
      "I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.",
  },
];

const ICan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="ican-section">
        <h2 className="ican-title">I can help you with</h2>
        <p className="ican-subtitle">Most frequent questions and answers</p>

        <div className="ican-grid-container">
          {/* Left box with image */}
          <div className="ican-box ican-box-left">
            <img src={y1} alt="Rocket icon" className="ican-image" />
          </div>

          {/* Center top text box */}
          <div className="ican-box ican-box-center-top">
            <h3>1:1 Coaching</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>

          {/* Right box with image */}
          <div className="ican-box ican-box-right">
            <img src={y2} alt="Medal icon" className="ican-image" />
          </div>

          {/* Bottom left text box */}
          <div className="ican-box ican-box-bottom-left">
            <h3>Self Development</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>

          {/* Bottom center with image */}
          <div className="ican-box ican-box-bottom-center">
            <img src={y3} alt="Heart icon" className="ican-image" />
          </div>

          {/* Bottom right text box */}
          <div className="ican-box ican-box-bottom-right">
            <h3>Life Programs</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>
        </div>
      </section>

      {/* New FAQ Accordion Section */}
      <section className="faq-section">
        <h2 className="faq-title">I can help you with</h2>
        <p className="faq-subtitle">Most frequent questions and answers</p>

        <div className="faq-container">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
                id={`faq-question-${index}`}
              >
                <strong>{item.title}</strong>
                <span className="arrow">
                  {openIndex === index ? (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  ) : (
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="faq-answer"
                  id={`faq-content-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                >
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


            {/* Clean Text-Based Section After FAQ */}
      <section className="clean-help-section">
        <h2 className="clean-help-title">I can help you with</h2>
        <p className="clean-help-subtitle">Most frequent questions and answers</p>

        <div className="clean-help-grid">
          <div className="clean-help-box">
            <h3>1:1 COACHING</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
          <div className="clean-help-box">
            <h3>PERSONAL DEVELOPMENT</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
          <div className="clean-help-box">
            <h3>LIFE PROGRAMS</h3>
            <p>
              Magnetized strongly enough pre vending domain overeus all initial
              results to estimate the in the big bang contradicted.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
        </div>
      </section>

    </>
  );
};

export default ICan;
