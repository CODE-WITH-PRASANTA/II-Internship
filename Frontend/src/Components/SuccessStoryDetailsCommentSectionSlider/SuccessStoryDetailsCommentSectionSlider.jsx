import React, { useEffect, useRef } from "react";
import "./SuccessStoryDetailsCommentSectionSlider.css";

import i1 from "../../assets/grid1.webp";
import i2 from "../../assets/grid2.webp";
import i3 from "../../assets/grid3.webp";
import i4 from "../../assets/grid4.webp";
import i5 from "../../assets/grid5.webp";
import i6 from "../../assets/grid6.webp";
import i7 from "../../assets/grid7.webp";
import i8 from "../../assets/grid8.webp";

const posts = [
  { id: 1, image: i1, title: "This is why this year will be the year of startups", date: "50min ago" },
  { id: 2, image: i2, title: "Covid-19 and the college experienced", date: "Aug 31, 2021" },
  { id: 3, image: i3, title: "This is why this year will be the year of startups", date: "50min ago" },
  { id: 4, image: i4, title: "Covid-19 and the college experienced", date: "Aug 31, 2021" },
  { id: 5, image: i5, title: "This is why this year will be the year of startups", date: "50min ago" },
  { id: 6, image: i6, title: "Covid-19 and the college experienced", date: "Aug 31, 2021" },
  { id: 7, image: i7, title: "This is why this year will be the year of startups", date: "50min ago" },
  { id: 8, image: i8, title: "Covid-19 and the college experienced", date: "Aug 31, 2021" },
];

export default function SuccessStoryDetailsCommentSectionSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const slideSpeed = 1; // pixels per frame
    let animationFrame;

    const slide = () => {
      if (slider) {
        scrollAmount += slideSpeed;
        if (scrollAmount >= slider.scrollWidth / 2) scrollAmount = 0;
        slider.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(slide);
    };

    animationFrame = requestAnimationFrame(slide);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const postsDuplicated = [...posts, ...posts];

  return (
    <div className="successstorydetailscommentsectionslider-container">
      <h2 className="successstorydetailscommentsectionslider-title">You may also like</h2>
      <div className="successstorydetailscommentsectionslider-wrapper" ref={sliderRef}>
        {postsDuplicated.map((post, index) => (
          <div key={index} className="successstorydetailscommentsectionslider-card">
            <div className="image-wrapper">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="successstorydetailscommentsectionslider-info">
              <h4>{post.title}</h4>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
