import React, { useState } from "react";
import "./NotificationsTab.css";

interface Notification {
  id: number;
  title: string;
  description: string;
  enabled: boolean;
}

const generalNotificationsInitial: Notification[] = [
  { id: 1, title: "Student Questions", description: "Notify me when a student asks a question in the Q&A section", enabled: true },
  { id: 2, title: "Feedback Received", description: "Notify me when receive feedback from students", enabled: true },
  { id: 3, title: "Quiz/Exam Results Submission", description: "Notify me when quiz or exam results are submitted", enabled: false },
  { id: 4, title: "Forum Activity", description: "Notify me about new posts or replies in course discussion forums.", enabled: false },
];

const emailNotificationsInitial: Notification[] = [
  { id: 5, title: "Course Enrolment", description: "Send me emails when a new student enrolls the course", enabled: true },
  { id: 6, title: "Assignment Submission", description: "Send me email whenever an assignment is submitted by a student", enabled: true },
  { id: 7, title: "Course Comments", description: "Get notified about comments on your posts and replies to your comments.", enabled: false },
  { id: 8, title: "Course Reminders", description: "Receive booking assistance reminders to stay updated on your scheduled sessions.", enabled: false },
  { id: 9, title: "System Updates", description: "Send me emails about updates to the LMS platform", enabled: false },
];

const NotificationsTab: React.FC = () => {
  const [generalNotifications, setGeneralNotifications] = useState(generalNotificationsInitial);
  const [emailNotifications, setEmailNotifications] = useState(emailNotificationsInitial);

  const toggleNotification = (id: number, type: "general" | "email") => {
    if (type === "general") {
      setGeneralNotifications(prev =>
        prev.map(n => (n.id === id ? { ...n, enabled: !n.enabled } : n))
      );
    } else {
      setEmailNotifications(prev =>
        prev.map(n => (n.id === id ? { ...n, enabled: !n.enabled } : n))
      );
    }
  };

  const toggleAll = (type: "general" | "email") => {
    if (type === "general") {
      const allEnabled = generalNotifications.every(n => n.enabled);
      setGeneralNotifications(prev => prev.map(n => ({ ...n, enabled: !allEnabled })));
    } else {
      const allEnabled = emailNotifications.every(n => n.enabled);
      setEmailNotifications(prev => prev.map(n => ({ ...n, enabled: !allEnabled })));
    }
  };

  const renderNotifications = (notifications: Notification[], type: "general" | "email") => (
    notifications.map(n => (
      <div key={n.id} className={`notificationstab-item ${n.enabled ? "enabled" : ""}`}>
        <div className="notificationstab-text">
          <h4>{n.title}</h4>
          <p>{n.description}</p>
        </div>
        <label className="notificationstab-switch">
          <input type="checkbox" checked={n.enabled} onChange={() => toggleNotification(n.id, type)} />
          <span className="notificationstab-slider" />
        </label>
      </div>
    ))
  );

  return (
    <div className="notificationstab-container">
      <section className="notificationstab-section">
        <div className="notificationstab-header">
          <h3>General Notifications</h3>
          <button className="notificationstab-toggleall" onClick={() => toggleAll("general")}>Toggle all</button>
        </div>
        {renderNotifications(generalNotifications, "general")}
      </section>

      <section className="notificationstab-section">
        <div className="notificationstab-header">
          <h3>Email Notifications</h3>
          <button className="notificationstab-toggleall" onClick={() => toggleAll("email")}>Toggle all</button>
        </div>
        {renderNotifications(emailNotifications, "email")}
      </section>
    </div>
  );
};

export default NotificationsTab;
