import React, { useState } from "react";
import "./CourserTuetor.css";
import { Search, ChevronDown, Star } from "lucide-react";

const CourserTuetor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Web Designing");

  const categories = ["Web Designing", "Business", "Accounting", "Development", "Art & Culture"];

  return (
    <div className="filter-sidebar">

      {/* SEARCH */}
      <div className="filter-card search-card">
        <div className="search-input">
          <Search size={18} />
          <input type="text" placeholder="Search courses or tutor" />
        </div>

        <div className="dropdown">
          <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
            {selected}
            <ChevronDown className={isOpen ? "rotate" : ""} size={18} />
          </div>

          {isOpen && (
            <ul className="dropdown-menu">
              {categories.map(item => (
                <li key={item} onClick={() => {setSelected(item); setIsOpen(false);}}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* COURSES TOPIC */}
      <div className="filter-card">
        <h3>Courses Topic</h3>
        {["React","Java Script","Laravel","Angular","HTML5","CSS3"].map(i=>(
          <label className="check" key={i}>
            <input type="checkbox"/>
            <span></span>{i}
          </label>
        ))}
      </div>

      {/* INSTRUCTORS */}
      <div className="filter-card">
        <h3>Top Instructors</h3>
        {["Keny White","Hinata Hyuga","Mike hussy","Adam Riky","Daniel Duck"].map(i=>(
          <label className="check" key={i}>
            <input type="checkbox"/>
            <span></span>{i}
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div className="filter-card">
        <h3>Price</h3>
        {["All","Free","Premium"].map(i=>(
          <label className="check" key={i}>
            <input type="checkbox"/>
            <span></span>{i}
          </label>
        ))}
      </div>

      {/* RATING */}
      <div className="filter-card">
        <h3>Rating</h3>

        <label className="check">
          <input type="checkbox"/>
          <span></span>
          <div className="stars">
            {[...Array(5)].map((_,i)=><Star key={i} size={14} fill="#FFB800" color="#FFB800"/>)}
            5.0 (1,785)
          </div>
        </label>

        <label className="check">
          <input type="checkbox"/>
          <span></span>
          <div className="stars">
            {[...Array(4)].map((_,i)=><Star key={i} size={14} fill="#FFB800" color="#FFB800"/>)}
            4.0 & up (3,650)
          </div>
        </label>

      </div>

      {/* DURATION */}
      <div className="filter-card">
        <h3>Lecture Duration</h3>
        {["0 - 1 Hour (13)","1 - 2 Hour (26)","2 - 3 Hour (65)","3 - 4 Hour (35)","4 - 5 Hour (17)"].map(i=>(
          <label className="check" key={i}>
            <input type="checkbox"/>
            <span></span>{i}
          </label>
        ))}
      </div>

    </div>
  );
};

export default CourserTuetor;
