import React from "react";
import { motion } from "framer-motion";
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
  ];

  return (
    <motion.div 
      className="notice-container"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Header with animation */}
      <motion.div 
        className="notice-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="notice-header-content">
          <motion.span 
            className="notice-icon"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            📢
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Previous 7 Days Important Notices
          </motion.h2>
          <motion.span 
            className="subtext"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            Quick updates on system changes, policies & upcoming events 🚀
          </motion.span>
        </div>

        <motion.button 
          className="view-all"
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 12px rgba(255,215,0,0.7)",
              "0 0 0px rgba(255,255,255,0)"
            ] 
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          ✨ View All
        </motion.button>
      </motion.div>
      
      {/* Notice Grid */}
      <motion.div 
        className="notice-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { 
            transition: { staggerChildren: 0.3 } 
          }
        }}
      >
        {notices.map((notice, index) => (
          <motion.div
            key={index}
            className="notice-card"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.07, rotateX: 6, rotateY: -4 }}
            animate={{ 
              y: [0, -6, 0], 
              transition: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: index * 0.6 } 
            }}
          >
            <motion.div 
              className="notice-category"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 0.5 }}
            >
              {notice.category}
            </motion.div>
            
            <h3>{notice.title}</h3>
            <p className="notice-desc">{notice.desc}</p>
            
            <div className="notice-meta">
              <span className="notice-date">📅 {notice.date}</span>
              <motion.span 
                className="arrow"
                animate={{ x: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StaffPicks;
