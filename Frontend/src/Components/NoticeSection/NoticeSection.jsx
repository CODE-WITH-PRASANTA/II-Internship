import React, { useEffect, useRef } from "react";
import { FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import "./NoticeSection.css";
import i1 from "../../assets/img-1.webp"
import i2 from "../../assets/img-2.webp";
import i3 from "../../assets/img-3.webp"

const NoticeSection = () => {
  const slides = [
    {
      id: 1,
      category: "Lifestyle",
      date: "Jun 13, 2025",
      read: "6 mins read",
      title: "Textile Storytelling in Modern Fashion",
      desc: "In today’s fashion landscape, textiles are more than just fabric — they’re...",
      img: i1,
      comments: 98,
      views: 162,
    },
    {
      id: 2,
      category: "Culture",
      date: "Jun 13, 2025",
      read: "6 mins read",
      title: "Museums x Couture: A New Collaboration",
      desc: "Where history meets high fashion, a new wave of collaboration is...",
      img: i2,
      comments: 98,
      views: 162,
    },
    {
      id: 3,
      category: "Tech",
      date: "Jun 13, 2025",
      read: "7 mins read",
      title: "Futuristic Streetwear & Tech Fashion",
      desc: "Streetwear meets technology, shaping the next-gen fashion scene…",
      img: i3,
      comments: 102,
      views: 210,
    },
    {
      id: 4,
      category: "AI",
      date: "Jun 13, 2025",
      read: "5 mins read",
      title: "AI & Fashion: The Creative Future",
      desc: "Artificial intelligence is changing the way fashion is designed and consumed…",
      img: i1,
      comments: 120,
      views: 350,
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideWidth = slider.firstChild.offsetWidth + 25;

    const autoSlide = setInterval(() => {
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      } else {
        scrollAmount += slideWidth;
      }
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="noticesection">
      <div className="noticesection-header">
        <h2>Your Gateway to Global News</h2>
        <p>Breaking Stories from Every Corner of the Globe</p>
      </div>

      <div className="noticesection-slider" ref={sliderRef}>
        {slides.map((item) => (
          <div key={item.id} className="noticesection-card">
            <img src={item.img} alt={item.title} className="noticesection-img" />
            <div className="noticesection-overlay">
              <span className="noticesection-category">{item.category}</span>
              <div className="noticesection-meta">
                <span>• {item.date}</span>
                <span>• {item.read}</span>
              </div>
              <h3 className="noticesection-title">{item.title}</h3>
              <p className="noticesection-desc">{item.desc}</p>
              <div className="noticesection-footer">
                <FaRegBookmark className="icon bookmark" />
                <div className="noticesection-stats">
                  <span><FaRegComment /> {item.comments}</span>
                  <span><FiEye /> {item.views}</span>
                </div>
                <div className="noticesection-arrow">
                  <HiArrowUpRight />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NoticeSection;
