import React from "react";
import "./News.css";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const articles = [
  {
    category: "SCIENCE",
    title: "Crafting Effective Learning Guide Line",
    date: "15 Nov, 2023",
    comments: 0,
    image: "", // add image url
  },
  {
    category: "TECHNOLOGY",
    title: "Exploring Learning Landscapes in Academic",
    date: "14 Nov, 2023",
    comments: 3,
    image: "", // add image url
  },
  {
    category: "LEARNING",
    title: "Voices from the Learning Education Hub",
    date: "13 Nov, 2023",
    comments: 0,
    image: "", // add image url
  },
];

const News = () => {
  return (
    <section className="news">
      <div className="news-container">
        <p className="small-heading">LATEST ARTICLES</p>
        <h2 className="news-title">Get News with EduBlink</h2>
        <div className="underline"></div>

        <div className="news-grid">
          {articles.map((item, index) => (
            <div className="news-card" key={index}>
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="circle-btn">
                  <ArrowRight size={20} strokeWidth={2} />
                </div>
              </div>

              <div className="news-content">
                <p className="news-category">{item.category}</p>
                <h3 className="news-heading">{item.title}</h3>

                <div className="news-meta">
                  <span>
                    <Calendar size={16} strokeWidth={1.5} /> {item.date}
                  </span>
                  <span>
                    <MessageCircle size={16} strokeWidth={1.5} /> Com{" "}
                    {item.comments}
                  </span>
                </div>

                <p className="news-desc">
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
