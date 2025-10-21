import React from 'react';
import './TechSupportReasons.css';

import image1 from "../../assets/reason1.webp";

const TechSupportReasons = () => {
  const reasons = [
    { number: '01', title: '24/7 Availability', desc: 'Get help anytime, day or night.', img: image1 },
    { number: '02', title: 'Certified Experts', desc: 'Assistance from experienced certified technicians.', img: image1 },
    { number: '03', title: 'Fast Response Time', desc: 'We resolve your issues quickly and efficiently.', img: image1 },
    { number: '04', title: 'Remote Support Anywhere', desc: 'Support no matter where you are located.', img: image1 },
  ];

  return (
    <div className="techsupportreasons-container">
      <div className="techsupportreasons-info">
        <h1>Why Customers Trust Our Tech Support</h1>
        <p>We know you have options—but here's what makes us stand out from the rest.</p>
        <button className="techsupportreasons-start-btn">Start Your Support</button>
      </div>

      <div className="techsupportreasons-list">
        {reasons.map((item, idx) => (
          <div key={idx} className="techsupportreasons-item">
            <div className="techsupportreasons-item-text">
              <span className="techsupportreasons-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
            <div className="techsupportreasons-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSupportReasons;
