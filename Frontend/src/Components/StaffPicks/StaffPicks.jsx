import React from 'react';
import './StaffPicks.css';
import sp1 from "../../assets/sp1.webp";
import sp2 from "../../assets/sp2.webp";
import sp3 from "../../assets/sp3.webp";
import sp4 from "../../assets/sp4.webp";
import sp5 from "../../assets/sp5.webp";


const StaffPicks = () => {
  const picks = [
    { 
      title: 'The Rise of Mindful Living in a Digital World', 
      category: 'Culture', 
      img: sp1 
    },
    { 
      title: '', 
      category: 'Lifestyle', 
      img: sp2
    },
    { 
      title: 'Minimalist Design: Finding Beauty in Simplicity', 
      category: 'Lifestyle', 
      img: sp3 
    },
    { 
      title: 'From Street to Runway: How Urban Fashion is Redefining Style', 
      category: 'Education', 
      img: sp4
    },
    { 
      title: '', 
      category: 'Technology', 
      img: sp5 
    },
  ];

  return (
    <div className="staff-picks-container">
      <div className="header">
        <div className="header-content">
          <span className="star-icon">✨</span>
          <h2>Staff Picks</h2>
          <span className="subtext">Handpicked by Our Editorial Team</span>
        </div>
        <button className="view-more">View More</button>
      </div>
      <div className="picks-grid">
        {picks.map((pick, index) => (
          <div key={index} className="pick-card">
            <img src={pick.img} alt={pick.title} />
            <div className="pick-category">{pick.category}</div>
            <h3>{pick.title}</h3>
            <div className="arrow-icon">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPicks;