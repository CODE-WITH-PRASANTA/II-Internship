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
];

const topicsBottom = [
  { name: "Art", posts: 65, img: ht5 },
  { name: "Crafts", posts: 125, img: ht5 },
  { name: "Travel", posts: 125, img: ht6 },
  { name: "Fashion", posts: 160, img: ht1 },
  { name: "Science", posts: 148, img: ht1 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const HotTopics = () => {
  return (
    <div className="hot-topics-container">
      {/* Header */}
      <motion.div
        className="hot-topics-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Hot Topics</h2>
          <p>Based on your interests</p>
        </motion.div>
        <motion.button
          className="discover-more"
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ duration: 0.3 }}
        >
          &gt; Discover more
        </motion.button>
      </motion.div>

      {/* Top Grid */}
      <motion.div
        className="topics-grid top-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {topics.map((topic, index) => (
          <motion.div
            className="topic-card"
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img
              src={topic.img}
              alt={topic.name}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="topic-info"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{topic.name}</h3>
              <p>{topic.posts} posts</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Grid */}
      <motion.div className="topics-grid bottom-grid">
        {topicsBottom.map((topic, index) => (
          <motion.div
            className="topic-card"
            key={index}
            custom={index}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img
              src={topic.img}
              alt={topic.name}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="topic-info"
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3>{topic.name}</h3>
              <p>{topic.posts} posts</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HotTopics;
