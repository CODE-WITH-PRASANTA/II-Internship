import React from 'react';
import './Articles.css';
import s1 from "../../assets/s1.webp";
import s2 from "../../assets/s2.webp";
import s3 from "../../assets/s3.webp";
import s4 from "../../assets/s4.webp";
import s5 from "../../assets/s5.webp";
import s6 from "../../assets/s6.webp";


const Articles = () => {
  const articles = [
    {
      title: "How to Build a Wardrobe That Reflects Your Identity",
      date: "Jun 13, 2025",
      readTime: "9 mins read",
      comments: 198,
      img: s1,
    },
    {
      title: "What Gen Alpha Is Teaching Us About Digital Culture",
      date: "Jun 12, 2025",
      readTime: "4 mins read",
      comments: 63,
      img: s2,
    },
    {
      title: "Plant-Based Living: Trends, Recipes, and Real Talk",
      date: "Jun 11, 2025",
      readTime: "8 mins read",
      comments: 25,
      img: s3,
    },
    {
      title: "Why Freelancers Are Changing the Future of Work",
      date: "Jun 9, 2025",
      readTime: "16 mins read",
      comments: 18,
      img: s4,
    },
    {
      title: "The Science of Happiness: What Actually Works",
      date: "Jun 6, 2025",
      readTime: "6 mins read",
      comments: 29,
      img: s5,
    },
  ];

  return (
    <div className="articles-section">
      <div className="articles-header">
        <h2><i className="fa fa-star"></i> Suggestions</h2>
        <p>Ideas and Picks to Explore</p>
        <button className="view-more">View More <i className="fa fa-arrow-right"></i></button>
      </div>

      <div className="articles-grid">
        <div className="featured-article">
          <div className="article-image">
            <img src={s1} alt="Featured" />
          </div>
          <div className="featured-content">
            <h2>Exploring Urban Farming in the Age of Climate Crisis</h2>
            <p>Once dismissed as counterculture, urban fashion has climbed its way from city sidewalks to the catwalks of major fashion capitals.</p>
            <div className="article-meta">
              <img src={s6} alt="Evara Rose" className="author-avatar" />
              <span className="author-name">Evara Rose</span>
              <span className="article-date">• Jun 13, 2025</span>
              <span className="article-comments">• 98 comments</span>
              <span className="article-views">• 162 views</span>
            </div>
          </div>
        </div>

        <div className="other-articles">
          {articles.map((article, index) => (
            <div className="article-card" key={index}>
              <img src={article.img} alt={article.title} />
              <div className="article-details">
                <h3>{article.title}</h3>
                <p>{article.date} • {article.readTime}</p>
                <p>{article.comments} comments</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
