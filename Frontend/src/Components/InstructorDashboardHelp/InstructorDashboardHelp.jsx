import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./InstructorDashboardHelp.css";

const InstructorDashboardHelp = () => {
  const faqs = [
    {
      question: "How do I create a new course?",
      answer: "Go to 'Create Course' in the dashboard and fill out the course form.",
    },
    {
      question: "How can I request a payout?",
      answer: "Navigate to 'Payout' section and click 'Request Payout'.",
    },
    {
      question: "How can I view student reviews?",
      answer: "Check the 'Reviews' section to see all student feedback.",
    },
    {
      question: "How do I manage my course content?",
      answer: "Go to 'My Courses' and select the course to edit or update content.",
    },
    {
      question: "How do I communicate with students?",
      answer: "Use the 'Students' section to chat or send messages to enrolled learners.",
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to 'Profile Settings' to update your personal and payment details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="instructordashboardhelp-wrapper">
      <h2 className="instructordashboardhelp-title">Help & Support</h2>

      <div className="instructordashboardhelp-faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`instructordashboardhelp-faq-item ${
              openIndex === index ? "open" : ""
            }`}
          >
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">
                {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? "500px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="instructordashboardhelp-contact">
        <h3>Contact Support</h3>
        <p>
          If you need further assistance, email us at{" "}
          <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default InstructorDashboardHelp;
