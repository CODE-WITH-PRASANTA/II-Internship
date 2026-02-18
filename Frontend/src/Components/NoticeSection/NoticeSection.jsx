import React, { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsGrid3X3GapFill, BsListUl } from "react-icons/bs";

import "./NoticeSection.css";

import i1 from "../../assets/img-1.webp";
import i2 from "../../assets/img-2.webp";
import i3 from "../../assets/img-3.webp";

const NoticeSection = () => {
  const [view, setView] = useState("grid");

  const notices = [
    {
      id: "NTC-101",
      category: "General Notice",
      date: "Oct 02, 2025",
      postedBy: "Admin Office",
      title: "Semester Examination Schedule Released",
      desc: "The final semester examination timetable has been released. Students are advised to check the exam portal for subject-wise dates.",
      img: i1,
    },
    {
      id: "NTC-102",
      category: "Holiday",
      date: "Oct 05, 2025",
      postedBy: "Principal",
      title: "University Closed for Festival",
      desc: "The institution will remain closed on account of the upcoming festival. Regular classes will resume from Oct 07, 2025.",
      img: i2,
    },
    {
      id: "NTC-103",
      category: "Important Update",
      date: "Oct 10, 2025",
      postedBy: "Admin Office",
      title: "Scholarship Application Deadline Extended",
      desc: "The deadline for applying for scholarships has been extended to Oct 20, 2025.",
      img: i3,
    },
  ];

  return (
    <section className="notice-section">
      {/* Header */}
      <div className="notice-header">
        <div>
          <h2>📢 Official Notice Board</h2>
          <p>Stay Updated with the Latest Announcements</p>
        </div>

        {/* View Toggle */}
        <div className="view-toggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <BsGrid3X3GapFill />
          </button>

          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            <BsListUl />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className={`notice-wrapper ${view}`}>
        {notices.map((item) => (
          <div key={item.id} className={`notice-card ${view}`}>
            <img src={item.img} alt={item.title} className="notice-img" />

            <div className="notice-content">
              <span className="notice-category">{item.category}</span>

              <div className="notice-meta">
                <span>🆔 {item.id}</span>
                <span>📅 {item.date}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <div className="notice-footer">
                <div className="posted">
                  <MdOutlineAdminPanelSettings />
                  <span>{item.postedBy}</span>
                </div>

                <div className="arrow">
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
