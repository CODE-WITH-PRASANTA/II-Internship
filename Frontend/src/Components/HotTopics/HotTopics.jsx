import React from "react";
import { motion } from "framer-motion";
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
  { name: "Crafts", posts: 125, img: ht5 },
  { name: "Travel", posts: 125, img: ht6 },
  { name: "Fashion", posts: 160, img: ht1 },
  { name: "Science", posts: 148, img: ht1 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 80 },
  }),
  hover: { scale: 1.07, boxShadow: "0 12px 25px rgba(0,0,0,0.3)" },
};

const HotTopics = () => {
  return (
    <div className="hot-topics-container">
      {/* HEADER */}
      <motion.div
        className="hot-topics-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h2>Hot Topics</h2>
          <p>Trending based on your interests</p>
        </div>
        <motion.button
          className="discover-more"
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ duration: 0.3 }}
        >
          &gt; Discover more
        </motion.button>
      </motion.div>

      {/* CAROUSEL */}
      <motion.div className="topics-carousel">
        <motion.div
          className="carousel-track"
          drag="x"
          dragConstraints={{ left: -1600, right: 0 }}
        >
          {topics.map((topic, index) => (
            <motion.div
              className="topic-card"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <img src={topic.img} alt={topic.name} />
              <div className="topic-info">
                <h3>{topic.name}</h3>
                <p>{topic.posts} posts</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HotTopics;
