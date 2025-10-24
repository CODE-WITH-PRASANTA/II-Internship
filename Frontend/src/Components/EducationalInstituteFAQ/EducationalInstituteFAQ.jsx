import React, { useState } from "react";
import "./EducationalInstituteFAQ.css";

const faqs = [
  {
    question: "What is included in each plan?",
    answer:
      "Each plan includes full access to all course materials, downloadable resources, and progress tracking tools.",
  },
  {
    question: "Can I switch between plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan anytime directly from your account settings.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 7-day free trial with full access to all features. Cancel anytime before the trial ends.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, you’ll receive an industry-recognized certificate upon successful completion of any course.",
  },
  {
    question: "Is there a discount for yearly billing?",
    answer:
      "Yes! Subscribing annually gives you a 20% discount compared to monthly billing.",
  },
  {
    question: "Can I use one subscription for multiple users?",
    answer:
      "Each subscription is for individual use only. For team access, please explore our enterprise plans.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, PayPal, and international payment options.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we have a 7-day money-back guarantee. If you're not satisfied, you can request a full refund within the first week of your subscription.",
  },
];

const EducationalInstituteFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftFAQs = faqs.slice(0, 4);
  const rightFAQs = faqs.slice(4, 8);

  return (
    <section className="educationalinstitute-faq-container">
      <h2>FAQ's</h2>
      <p>Frequently Asked Questions</p>

      <div className="educationalinstitute-faq-grid">
        {/* Left Column */}
        <div className="educationalinstitute-faq-column">
          {leftFAQs.map((faq, index) => (
            <div
              key={index}
              className={`educationalinstitute-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="educationalinstitute-faq-question">
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              <div className="educationalinstitute-faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="educationalinstitute-faq-column">
          {rightFAQs.map((faq, index) => {
            const adjustedIndex = index + 4;
            return (
              <div
                key={adjustedIndex}
                className={`educationalinstitute-faq-item ${
                  activeIndex === adjustedIndex ? "active" : ""
                }`}
                onClick={() => toggleFAQ(adjustedIndex)}
              >
                <div className="educationalinstitute-faq-question">
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {activeIndex === adjustedIndex ? "−" : "+"}
                  </span>
                </div>
                <div className="educationalinstitute-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationalInstituteFAQ;
