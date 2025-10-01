import React from "react";
import "./BlogSection.css";
import { FaRegComment, FaArrowRight } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import i1 from "../../assets/img-2.webp";
import ln1 from "../../assets/ln1.webp";
import ln2 from "../../assets/ln2.webp";
import ln3 from "../../assets/ln3.webp";
import ln4 from "../../assets/ln4.webp";


const rightCards = [
  {
    id: 1,
    tag: "Art",
    tagClass: "art",
    readTime: "6 mins read",
    title: "Palette & Pattern: Art’s Role in Fashion",
    comments: 98,
    views: 162,
  },
  {
    id: 2,
    tag: "Sports",
    tagClass: "sports",
    readTime: "6 mins read",
    title: "Urban Renaissance: Streetwear as Art",
    comments: 98,
    views: 162,
  },
];

export default function BlogSection() {
  return (
    <section className="magazine-wrap" aria-labelledby="magazine-title">
      <div className="magazine-inner">
        {/* LEFT HERO */}
        <article className="hero">
          <img className="hero-img" src={ln1} alt="Canvas & Couture" />
          <div className="hero-glass">
            <span className="pill">Fashion</span>

            <h2 className="hero-heading">
              Canvas & Couture:
              <br />
              <span>Art-Inspired Runways 2025</span>
            </h2>

            <div className="hero-meta">
              <img src={ln2} alt="Evara Rose" className="avatar" />
              <div className="meta">
                <div className="meta-name">Evara Rose</div>
                <div className="meta-sub">Jun 13, 2025 • 6 mins read</div>
              </div>
            </div>
          </div>

          <button className="hero-cta" aria-label="Open article">
            <span className="hero-cta-inner">
              <FaArrowRight />
            </span>
          </button>
        </article>

        {/* MIDDLE STACK */}
        <div className="mid-stack">
          <div className="mid-img-wrap top">
            <img src={ln3} alt="visual 1" />
          </div>
          <div className="mid-img-wrap bottom">
            <img src={ln4} alt="visual 2" />
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="right-stack">
          {rightCards.map((card) => (
            <div key={card.id} className="right-row">
              <div className="card-image">
                <img src={i1} alt={card.title} />
              </div>

              <div className="card-text">
                <div className="card-head">
                  <span className={`pill ${card.tagClass}`}>{card.tag}</span>
                  <span className="dot" />
                  <span className="read">{card.readTime}</span>
                </div>

                <h3 className="card-title">{card.title}</h3>

                <div className="card-bottom">
                  <div className="counts">
                    <FaRegComment />
                    <span>{card.comments}</span>
                    <FiEye />
                    <span>{card.views}</span>
                  </div>
                </div>

                <button className="card-cta" aria-label={`Open ${card.title}`}>
                  <span className="cta-black">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
