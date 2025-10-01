import React from "react";
import "./CategorySlider.css";

const CategorySlider = () => {
  const categories = [
    { name: "Innovation", count: 63 },
    { name: "Lifestyle", count: 89 },
    { name: "Politics", count: 52 },
    { name: "Blockchain", count: 115 },
    { name: "Culture", count: 27 },
    { name: "Fashion", count: 68 },
    { name: "Artificial Intelligence", count: 116 },
    { name: "Food and Drink", count: 78 },
    { name: "Business", count: 26 },
  ];

  // duplicate for infinite effect
  const track = categories.concat(categories);

  return (
    <div className="category-slider">
      <div className="category-track">
        {track.map((item, i) => (
          <div key={i} className="category-pill">
            <span>{item.name}</span>
            <span className="count">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
