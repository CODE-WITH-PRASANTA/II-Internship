import React from "react";
import "./JobPlacementCompaniesSection.css";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaFlagUsa,
  FaFlag,
  FaPaintBrush,
  FaCode,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";

import event1 from "../../assets/event-1.webp";
import event2 from "../../assets/event-2.webp";
import event3 from "../../assets/event-3.webp";
import event4 from "../../assets/event-4.webp";
import event5 from "../../assets/event-5.webp";
import event6 from "../../assets/event-6.webp";

const events = [
  {
    image: event1,
    date: "OCT 28, 2026",
    time: "08:00AM–10:00PM",
    title: "Global Education Fall Meeting for Everyone",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event2,
    date: "FEB 28, 2026",
    time: "09:00AM–11:00PM",
    title: "Our Excellence Partner France Pavilion",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event3,
    date: "FEB 15, 2026",
    time: "07:00AM–09:00PM",
    title: "Explorations of New Approaches Works",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event4,
    date: "JAN 18, 2026",
    time: "06:00AM–08:00PM",
    title: "Digital Arts & Reshaping the Future with AI",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event5,
    date: "DEC 18, 2026",
    time: "07:00AM–08:00PM",
    title: "Online Presentation on PowerPoint 2026",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event6,
    date: "DEC 20, 2026",
    time: "08:00AM–10:00PM",
    title: "London International Conference",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event1,
    date: "DEC 22, 2026",
    time: "08:00AM–10:00PM",
    title: "Digital Arts & Reshaping the Future with AI",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    image: event2,
    date: "DEC 24, 2026",
    time: "10:00AM–12:00PM",
    title: "End of Year Innovation Seminar",
    location: "New York City, USA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
];

const JobPlacementCompaniesSection = () => {
  return (
    <section className="jobplacementcompaniessection-wrapper">
      <div className="jobplacementcompaniessection-container">

        {/* LEFT - EVENTS */}
        <div className="jobplacementcompaniessection-left">
          {events.map((event, index) => (
            <div key={index} className="jobplacementcompaniessection-event-card">
              <img src={event.image} alt="event" className="jobplacementcompaniessection-image" />
              <div className="jobplacementcompaniessection-event-info">
                <p className="jobplacementcompaniessection-date"><FaCalendarAlt className="icon" /> {event.date}</p>
                <p className="jobplacementcompaniessection-time"><FaClock className="icon" /> {event.time}</p>
                <p className="jobplacementcompaniessection-location"><FaMapMarkerAlt className="icon" /> {event.location}</p>
                <h3 className="jobplacementcompaniessection-title">{event.title}</h3>
                <p className="jobplacementcompaniessection-description">{event.description}</p>
                <a href="#" className="jobplacementcompaniessection-learnmore">Learn More</a>
              </div>
            </div>
          ))}

          {/* Pagination (static) */}
          <div className="jobplacementcompaniessection-pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>

        {/* RIGHT - SIDEBAR */}
        <aside className="jobplacementcompaniessection-sidebar">
          <div className="jobplacementcompaniessection-sidebar-block">
            <h4 className="jobplacementcompaniessection-sidebar-heading">Categories</h4>
            <ul className="jobplacementcompaniessection-categories">
              <li><FaPaintBrush className="icon" /> Art & Design</li>
              <li><FaCode className="icon" /> Development</li>
              <li><FaChartLine className="icon" /> Business</li>
              <li><FaBullhorn className="icon" /> Marketing</li>
            </ul>
          </div>

          <div className="jobplacementcompaniessection-sidebar-block">
            <h4 className="jobplacementcompaniessection-sidebar-heading">Date</h4>
            <ul className="jobplacementcompaniessection-categories">
              <li><FaCalendarAlt className="icon" /> Any Day</li>
              <li><FaCalendarAlt className="icon" /> Today</li>
              <li><FaClock className="icon" /> Tomorrow</li>
              <li><FaCalendarAlt className="icon" /> This Week</li>
              <li><FaCalendarAlt className="icon" /> This Month</li>
            </ul>
          </div>

          <div className="jobplacementcompaniessection-sidebar-block">
            <h4 className="jobplacementcompaniessection-sidebar-heading">Cities</h4>
            <ul className="jobplacementcompaniessection-categories">
              <li><FaGlobeAmericas className="icon" /> All Cities</li>
              <li><FaFlag className="icon" /> Japan</li>
              <li><FaFlagUsa className="icon" /> New York</li>
              <li><FaFlag className="icon" /> England</li>
              <li><FaFlag className="icon" /> Moscow</li>
              <li><FaFlag className="icon" /> Paris</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default JobPlacementCompaniesSection;
