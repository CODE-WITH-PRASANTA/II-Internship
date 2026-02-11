import React, { useState } from "react";
import "./LatestNews.css";
import { FaCalendarAlt, FaUserAlt, FaCommentDots } from "react-icons/fa";

import Lnews1 from "../../assets/Lnews.webp";
import Lnews2 from "../../assets/Lnews2.webp";
import Lnews3 from "../../assets/Lnews3.webp";
import Lnews4 from "../../assets/Lnews4.webp";
import Lnews5 from "../../assets/Lnews5.webp";
import Lnews6 from "../../assets/Lnews6.webp";
import Lnews7 from "../../assets/LNews7.webp";
import Lnews8 from "../../assets/Lnews8.webp";
import Lnews9 from "../../assets/Lnews9.webp";

const images = [
  {
    id: 1,
    src: Lnews1,
    alt: "Capturing Timeless Wedding Moments",
    category: "Wedding",
    date: "Dec 28, 2025",
    author: "John Carter",
    comments: 12,
    desc: "A journey through love and light—our latest wedding story filled with emotion and beauty.",
  },
  {
    id: 2,
    src: Lnews2,
    alt: "Golden Hour Pre-Wedding Magic",
    category: "Engagement",
    date: "Dec 26, 2025",
    author: "Emily Watson",
    comments: 8,
    desc: "Pre-wedding shoots shine brightest during golden hours—discover the magic behind it.",
  },
  {
    id: 3,
    src: Lnews3,
    alt: "Family Portrait That Speaks Emotions",
    category: "Family",
    date: "Dec 24, 2025",
    author: "Sophia Lee",
    comments: 5,
    desc: "Every smile tells a story. Here's how we captured warmth, joy, and togetherness.",
  },
  {
    id: 4,
    src: Lnews4,
    alt: "Travel Vibes Through the Lens",
    category: "Travel",
    date: "Dec 22, 2025",
    author: "Daniel Kim",
    comments: 9,
    desc: "Exploring the world through our camera lens – a colorful story of adventures and discoveries.",
  },
  {
    id: 5,
    src: Lnews5,
    alt: "Fashion in Focus: Urban Glam",
    category: "Fashion",
    date: "Dec 20, 2025",
    author: "Sarah Jones",
    comments: 14,
    desc: "Where creativity meets elegance—explore the essence of modern fashion through our lens.",
  },
  {
    id: 6,
    src: Lnews6,
    alt: "Behind the Scenes of a Styled Shoot",
    category: "Studio",
    date: "Dec 18, 2025",
    author: "Liam White",
    comments: 4,
    desc: "Ever wondered what happens behind the perfect frame? Here’s a peek into the process.",
  },
  {
    id: 7,
    src: Lnews7,
    alt: "Creative Storytelling with Light",
    category: "Art",
    date: "Dec 16, 2025",
    author: "Anna Smith",
    comments: 10,
    desc: "Using light and shadow to tell stories that inspire and move hearts.",
  },
  {
    id: 8,
    src: Lnews8,
    alt: "The Beauty of Minimalist Photography",
    category: "Lifestyle",
    date: "Dec 14, 2025",
    author: "Olivia Brown",
    comments: 7,
    desc: "Less is more—discover how simplicity transforms every photograph into a timeless piece.",
  },
  {
    id: 9,
    src: Lnews9,
    alt: "A Dreamy Evening in Venice",
    category: "Travel",
    date: "Dec 12, 2025",
    author: "Ethan Green",
    comments: 11,
    desc: "Romance, canals, and art—the perfect trio that defines our latest destination shoot.",
  },
];

const LatestNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="latest-news">
      <h2>Latest News & Stories</h2>

      <div className="image-grid">
        {currentImages.map((item) => (
          <div className="news-card" key={item.id}>
            <div className="news-img">
              <img src={item.src} alt={item.alt} />
              <span className="tag">{item.category}</span>
            </div>

            <div className="news-info">
              <h3>{item.alt}</h3>
              <p>{item.desc}</p>
              <div className="news-meta">
                <span><FaCalendarAlt /> {item.date}</span>
                <span><FaUserAlt /> {item.author}</span>
                <span><FaCommentDots /> {item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
