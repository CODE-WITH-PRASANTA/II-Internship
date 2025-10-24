import React, { useState } from "react";
import {
  FaPlay,
  FaRedo,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaVideo,
  FaFileAlt,
} from "react-icons/fa";
import "./StudentDashboardCourseResume.css";

const StudentDashboardCourseResume = () => {
  const [openTopic, setOpenTopic] = useState(0);

  const topics = [
    {
      title: "Blade Templates",
      lessons: [
        { name: "Intro to Blade", time: "10:20", status: "completed" },
        { name: "Create layout file", time: "05:10", status: "completed" },
        { name: "Add header and footer", time: "08:20", status: "completed" },
        { name: "Use @section and @yield", time: "05:35", status: "in-progress" },
      ],
    },
    {
      title: "Design with Bootstrap",
      lessons: [
        { name: "Bootstrap Grid System", time: "12:00", status: "completed" },
        { name: "Forms and Buttons", time: "07:25", status: "completed" },
        { name: "Cards & Utilities", time: "06:50", status: "in-progress" },
      ],
    },
    {
      title: "JSP Page Design",
      lessons: [
        { name: "Intro to JSP", time: "08:40", status: "completed" },
        { name: "JSP Directives", time: "09:15", status: "in-progress" },
      ],
    },
    {
      title: "Styling with Bootstrap",
      lessons: [
        { name: "Custom Themes", time: "07:30", status: "completed" },
        { name: "Colors & Typography", time: "05:20", status: "completed" },
        { name: "Responsive Design", time: "08:50", status: "in-progress" },
      ],
    },
  ];

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  return (
    <div className="studentdashboard-courseresume">
      <h2 className="course-title">Laravel Lessons (Web Design Focus)</h2>

      {topics.map((topic, index) => (
        <div className="lesson-section" key={topic.title}>
          <div
            className={`lesson-header ${openTopic === index ? "active" : ""}`}
            onClick={() => toggleTopic(index)}
          >
            <div className="lesson-header-left">
              <FaCheckCircle
                className={`topic-icon ${
                  topic.lessons.every(l => l.status === "completed")
                    ? "completed"
                    : "in-progress"
                }`}
              />
              <h3>{topic.title}</h3>
            </div>
            {openTopic === index ? (
              <FaChevronUp className="chevron-icon" />
            ) : (
              <FaChevronDown className="chevron-icon" />
            )}
          </div>

          {openTopic === index && (
            <ul className="lesson-list">
              {topic.lessons.length > 0 ? (
                topic.lessons.map((lesson) => (
                  <li key={lesson.name} className="lesson-item">
                    <div className="lesson-left">
                      {lesson.status === "completed" ? (
                        <FaVideo className="lesson-icon completed" />
                      ) : (
                        <FaPlay className="lesson-icon in-progress" />
                      )}
                      <span className="lesson-name">{lesson.name}</span>
                    </div>
                    <span className="lesson-time">{lesson.time}</span>
                  </li>
                ))
              ) : (
                <p className="no-lessons">No lessons yet</p>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentDashboardCourseResume;
