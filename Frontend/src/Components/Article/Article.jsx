import React from 'react';
import './Article.css';
import a1 from "../../assets/a1.webp";
import a2 from "../../assets/a2.webp";
import a3 from "../../assets/a3.webp";


const Article = () => {
  return (
    <div className="article-wrapper fade-in">
      <div className="main-article">
        <div className="article-header">
          <h1 className="article-title">Mastering the Art of Productive Mornings</h1>
          <p className="article-subtitle">
            Once dismissed as counterculture, urban fashion has climbed its way from city sidewalks to the catwalks of major fashion capitals.
          </p>
        </div>

        <div className="article-meta">
          <img src={a1} alt="Author" className="author-avatar" />
          <span className="author-name">John Doe</span>
          <span className="article-date">• 25th July 2025</span>
          <span className="comments">🗣️ 25</span>
          <span className="views">👁️ 162</span>
        </div>

        <div className="article-content">
          <p>
            Mornings set the tone for the entire day. A productive morning routine can transform your life by boosting energy, focus, and creativity.  
            Learn to master your mornings with simple habits and mindfulness techniques that stick.
          </p>
          <p>
            From organizing your tasks to incorporating exercise and meditation, productivity starts with intentionality. Make your mornings work for you.
          </p>
        </div>
      </div>

      <div className="related-sidebar">
        <h2>Related Articles</h2>
        <div className="related-article">
          <img src={a1} alt="Related" />
          <h3>The Future of Work: Remote, AI-Driven, and Flexible</h3>
        </div>
        <div className="related-article">
          <img src={a2} alt="Related" />
          <h3>Style That Speaks: Minimalist Fashion for Maximum Impact</h3>
        </div>
        <div className="related-article active">
          <img src={a3} alt="Related" />
          <h3>Mastering the Art of Productive Mornings</h3>
        </div>
      </div>
    </div>
  );
};

export default Article;
