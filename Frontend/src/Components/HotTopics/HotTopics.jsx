import React from "react";
import "./HotTopics.css";

import ht1 from "../../assets/ht1.webp";
import ht2 from "../../assets/ht2.webp";
import ht3 from "../../assets/ht3.webp";
import ht4 from "../../assets/ht4.webp";
import ht5 from "../../assets/ht5.webp";
import ht6 from "../../assets/ht6.webp";

const topics = [
  { name: "Travel", posts: 368, img: ht1 },
  { name: "Fashion", posts: 170, img: ht2 },
  { name: "Science", posts: 53, img: ht3 },
  { name: "Lifestyle", posts: 58, img: ht4 },
  { name: "Art", posts: 65, img: ht5 },
  { name: "Crafts", posts: 125, img: ht6 },
];

const HotTopics = () => {
  return (
    <section className="hot-topics-container">
      {/* HEADER */}
      <div className="hot-topics-header">
        <div>
          <h2>Hot Topics</h2>
          <p>Trending based on your interests</p>
        </div>

        <button className="discover-more">
          Discover more →
        </button>
      </div>

      {/* TOPICS */}
      <div className="topics-scroll">
        {topics.map((topic, index) => (
          <div className="topic-card" key={index}>
            <img src={topic.img} alt={topic.name} />
            <div className="topic-info">
              <h3>{topic.name}</h3>
              <p>{topic.posts} posts</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotTopics;
