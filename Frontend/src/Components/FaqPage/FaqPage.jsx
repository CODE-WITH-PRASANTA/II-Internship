import React from "react";
import "./FaqPage.css";

const FaqPage = () => {
  return (
    <section className="faqname-banner">
      <div className="faqname-bgshape faqname-shape-left"></div>
      <div className="faqname-bgshape faqname-shape-right"></div>
      <div className="faqname-dots"></div>
      <div className="faqname-waveicon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="faqname-content">
        <h1>Frequently Asked Questions</h1>
        <p className="faqname-breadcrumb">
          Home <span>›</span> Pages <span>›</span> Frequently Asked Questions

        </p>
      </div>
    </section>
  );
};

export default FaqPage;
