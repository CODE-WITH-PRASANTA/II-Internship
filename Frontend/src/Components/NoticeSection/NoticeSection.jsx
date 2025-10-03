import React, { useEffect, useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaRegFileAlt } from "react-icons/fa"; // Notice icon
import { MdOutlineAdminPanelSettings } from "react-icons/md"; // Admin icon
import "./NoticeSection.css";
import i1 from "../../assets/img-1.webp";
import i2 from "../../assets/img-2.webp";
import i3 from "../../assets/img-3.webp";

const NoticeSection = () => {
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
      desc: "The deadline for applying for scholarships has been extended to Oct 20, 2025. Students are encouraged to apply before the new deadline.",
      img: i3,
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
    }, 3500);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <section className="noticesection">
      <div className="noticesection-header">
        <h2>📢 Official Notice Board</h2>
        <p>Stay Updated with the Latest Announcements</p>
      </div>

      <div className="noticesection-slider" ref={sliderRef}>
        {notices.map((item) => (
          <div key={item.id} className="noticesection-card">
            <img src={item.img} alt={item.title} className="noticesection-img" />
            <div className="noticesection-overlay">
              <span className="noticesection-category">{item.category}</span>
              <div className="noticesection-meta">
                <span>🆔 {item.id}</span>
                <span>📅 {item.date}</span>
              </div>
              <h3 className="noticesection-title">{item.title}</h3>
              <p className="noticesection-desc">{item.desc}</p>
              <div className="noticesection-footer">
                <div className="noticesection-posted">
                  <MdOutlineAdminPanelSettings className="admin-icon" />
                  <span>{item.postedBy}</span>
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
