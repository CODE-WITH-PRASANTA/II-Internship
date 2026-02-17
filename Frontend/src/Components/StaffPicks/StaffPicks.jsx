import React from "react";
import "./StaffPicks.css";

const StaffPicks = () => {
  const notices = [
    {
      title: "⚡ Scheduled Maintenance on 5th October – Don’t Miss It!",
      date: "02 Oct 2025",
      category: "System Update",
      desc: "Important: Services may be unavailable between 2:00 AM – 4:00 AM IST. Save your work in advance."
    },
    {
      title: "🔒 New Data Privacy Policy – Must Read!",
      date: "25 Sep 2025",
      category: "Policy",
      desc: "Stay compliant with the latest regulations. Review the updated privacy policy today."
    },
    {
      title: "🎉 Diwali Holiday on 31st October – Plan Ahead",
      date: "20 Sep 2025",
      category: "Holiday",
      desc: "Celebrate with your loved ones. Offices will remain closed on 31st October."
    },
    {
      title: "✅ Server Upgrade Completed – Faster, Better, Stronger",
      date: "15 Sep 2025",
      category: "Update",
      desc: "All systems are optimized for speed and reliability. Experience smoother performance."
    },
    {
      title: "⚡ Scheduled Maintenance on 5th October – Don’t Miss It!",
      date: "02 Oct 2025",
      category: "System Update",
      desc: "Important: Services may be unavailable between 2:00 AM – 4:00 AM IST. Save your work in advance."
    },
    {
      title: "🔒 New Data Privacy Policy – Must Read!",
      date: "25 Sep 2025",
      category: "Policy",
      desc: "Stay compliant with the latest regulations. Review the updated privacy policy today."
    }
  ];

  return (
    <div className="notice-container">
      {/* HEADER */}
      <div className="notice-header">
        <div className="notice-header-content">
          <span className="notice-icon">📢</span>
          <h2>Previous 7 Days Important Notices</h2>
          <span className="subtext">
            Quick updates on system changes, policies & upcoming events 🚀
          </span>
        </div>

        <button className="view-all">✨ View All</button>
      </div>

      {/* NOTICE GRID */}
      <div className="notice-grid">
        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>
            <div className="notice-category">{notice.category}</div>

            <h3>{notice.title}</h3>
            <p className="notice-desc">{notice.desc}</p>

            <div className="notice-meta">
              <span className="notice-date">📅 {notice.date}</span>
              <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaffPicks;
