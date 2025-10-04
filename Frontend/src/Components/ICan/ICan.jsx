import React, { useState } from "react";
import y1 from "../../assets/you1.webp"; // Left icon
import y2 from "../../assets/you2.webp"; // Right icon
import y3 from "../../assets/you3.webp"; // Bottom center icon
import "./ICan.css";

const faqItems = [
  {
    title: "Technical Skill Training",
    content:
      "Our internship programs focus on hands-on training in modern technologies like React.js, Node.js, and MongoDB. Students gain real-world experience by working on live projects and industry-level assignments.",
  },
  {
    title: "Soft Skills & Career Guidance",
    content:
      "We provide personalized mentorship, resume building, interview preparation, and communication skill training to help students confidently face campus interviews and job placements.",
  },
  {
    title: "Project-Based Learning",
    content:
      "Students work on live projects, simulating real-world scenarios, enhancing problem-solving skills, teamwork, and project management experience to become job-ready.",
  },
  {
    title: "Campus Placement Assistance",
    content:
      "We collaborate with top companies to provide placement opportunities for our interns. Students get guidance, mock interviews, and placement support to kickstart their careers.",
  },
];

const ICan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Main Section */}
      <section className="ican-section">
        <h2 className="ican-title">I can help you with</h2>
        <p className="ican-subtitle">
          Explore our training, internship programs, and campus placement support
        </p>

        <div className="ican-grid-container">
          {/* Left box with image */}
          <div className="ican-box ican-box-left">
            <img src={y1} alt="Training icon" className="ican-image" />
          </div>

          {/* Center top text box */}
          <div className="ican-box ican-box-center-top">
            <h3>Technical Skill Training</h3>
            <p>
              Gain hands-on experience with industry-relevant technologies
              through structured internship programs designed to make you job-ready.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>

          {/* Right box with image */}
          <div className="ican-box ican-box-right">
            <img src={y2} alt="Mentorship icon" className="ican-image" />
          </div>

          {/* Bottom left text box */}
          <div className="ican-box ican-box-bottom-left">
            <h3>Soft Skills & Career Guidance</h3>
            <p>
              Get personalized mentorship, resume building, interview preparation,
              and soft skill training to excel in campus interviews.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>

          {/* Bottom center with image */}
          <div className="ican-box ican-box-bottom-center">
            <img src={y3} alt="Project icon" className="ican-image" />
          </div>

          {/* Bottom right text box */}
          <div className="ican-box ican-box-bottom-right">
            <h3>Project-Based Learning & Placement Support</h3>
            <p>
              Work on live projects, gain practical experience, and get
              placement assistance with our campus partner companies.
            </p>
            <button className="ican-read-more">READ MORE</button>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Everything you need to know about our internships and training programs
        </p>

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

              <div
                className={`faq-answer-wrapper ${
                  openIndex === index ? "open" : ""
                }`}
                id={`faq-content-${index}`}
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="faq-answer">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Help Section */}
      <section className="clean-help-section">
        <h2 className="clean-help-title">Our Internship Programs</h2>
        <p className="clean-help-subtitle">
          Practical learning, skill enhancement, and career support
        </p>

        <div className="clean-help-grid">
          <div className="clean-help-box">
            <h3>Technical Training</h3>
            <p>
              Learn full-stack development, backend systems, and modern technologies
              with hands-on guidance from experts.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
          <div className="clean-help-box">
            <h3>Soft Skills & Guidance</h3>
            <p>
              Enhance communication, resume building, and interview skills for
              campus and corporate opportunities.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
          <div className="clean-help-box">
            <h3>Project & Placement Support</h3>
            <p>
              Work on live projects, gain practical experience, and get placement
              assistance with partner companies.
            </p>
            <button className="clean-read-more">READ MORE</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ICan;
