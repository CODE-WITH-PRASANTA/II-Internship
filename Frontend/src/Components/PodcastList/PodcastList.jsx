import React, { useEffect, useRef, useState } from "react";
import "./PodcastList.css";
import pl1 from "../../assets/pl1.webp";
import pl2 from "../../assets/pl2.webp";
import pl3 from "../../assets/pl3.webp";
import pl4 from "../../assets/pl4.webp";

const PodcastList = () => {
  const podcasts = [
    { title: "The Insight Hour", date: "Jun 13, 2025", image: pl1 },
    { title: "Beyond the Noise", date: "Jun 06, 2025", image: pl2 },
    { title: "Mindful Daily Talk", date: "Jun 05, 2025", image: pl3 },
    { title: "Voices and Vision", date: "Jun 01, 2025", image: pl4 },
  ];

  const podcastRefs = useRef([]);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            if (!visibleIndexes.includes(index)) {
              setVisibleIndexes((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    podcastRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      podcastRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [visibleIndexes]);

  return (
    <div className="podcast-list fadeIn">
      <div className="header">
        <h2>
          <span className="star">★</span> Podcast List
        </h2>
        <p>Explore Thought-Provoking Episodes</p>
        <button className="view-more">View More</button>
      </div>

      <div className="content">
        <div className="left-section">
          <div className="build-wealth">
            <p>Build your wealth through knowledge.</p>
            <div className="platforms">
              <span>Apple Podcast</span>
              <span>Spotify</span>
              <span>SoundCloud</span>
            </div>
          </div>

          <div className="inspire-card">
            <img src="https://picsum.photos/400/200" alt="Inspire" />
            <div className="inspire-text">
              <h3>Listen, Learn, and be Inspired</h3>
              <button>Discover More</button>
            </div>
          </div>
        </div>

        <div className="podcasts">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className={`podcast card-animation ${
                visibleIndexes.includes(index) ? "visible stagger" : ""
              }`}
              data-index={index}
              ref={(el) => (podcastRefs.current[index] = el)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={podcast.image} alt={podcast.title} />
              <div className="podcast-info">
                <h4>{podcast.title}</h4>
                <p>{podcast.date}</p>
              </div>
              <div className="controls">
                <button className="play-button">▶</button>
                <div className="progress-bar"></div>
                <span>00:00</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
