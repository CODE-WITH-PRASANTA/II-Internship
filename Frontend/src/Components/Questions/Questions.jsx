import React, { useState } from "react";
import "./Questions.css";

const faqData = {
  "General Questions": [
    "How can I contact a school directly?",
    "How do I find a school where I want to study?",
    "Where should I study abroad?",
    "What documents are required for admission?",
    "How do I track my application status?",
    "How long does the admission process take?"
  ],
  "Regular Questions": [
    "What are the regular admission procedures?",
    "How long does it take to get admission?",
    "How to apply for scholarships?",
    "What is the eligibility criteria for regular courses?",
    "Are there any deadlines I should know?",
    "How can I change my application details?"
  ],
  "Advanced Questions": [
    "What are the advanced research opportunities?",
    "How to collaborate with universities abroad?",
    "What is the process for advanced course credits?",
    "How to apply for advanced courses?",
    "Are there additional fees for advanced programs?",
    "What skills are needed for advanced studies?"
  ],
  "Company Policies": [
    "What is EduBlink's privacy policy?",
    "How does EduBlink handle user data?",
    "What is the refund policy?",
    "How does EduBlink handle complaints?",
    "Are there any terms for data sharing?",
    "How to contact EduBlink support?"
  ],
  "Payment Options": [
    "What payment methods are available?",
    "Can I pay in installments?",
    "Is there a late payment fee?",
    "Can I change my payment method?",
    "Is there a payment confirmation email?",
    "How do I get a receipt for my payment?"
  ],
  "Terms & Conditions": [
    "Where can I read the terms and conditions?",
    "Can I cancel my application?",
    "What are the eligibility criteria?",
    "What is the dispute resolution process?",
    "Are there any penalties for late submissions?",
    "How do I accept the terms and conditions?"
  ]
};

const Questions = () => {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="questions-section">
      <div className="questions-container">
        {/* Sidebar */}
        <aside className="questions-sidebar">
          <h2>Questions By This Category</h2>
          <p>
            Select a category to view related questions. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
          <ul className="questions-menu">
            {categories.map((category, index) => (
              <li
                key={index}
                className={activeCategory === category ? "active" : ""}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveIndex(null); // Close accordions when category changes
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className="questions-content">
          {faqData[activeCategory].map((question, index) => (
            <div
              key={index}
              className={`questions-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="questions-question">
                {question}
                <span className="questions-arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="questions-answer">
                  <p>
                    This is the answer to: "{question}". Replace this with
                    actual FAQ content.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
