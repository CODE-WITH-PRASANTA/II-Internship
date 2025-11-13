import React, { useState } from "react";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import "./Announcements.css";

interface Announcement {
  date: string;
  title: string;
  course: string;
  status: "Published" | "Draft";
}

const announcementsData: Announcement[] = [
  {
    date: "22 Aug 2025, 05:40 PM",
    title: "Welcome to Introduction to Programming",
    course: "Introduction to Programming - Python & Java",
    status: "Published",
  },
  {
    date: "10 Aug 2025, 10:15 AM",
    title: "Essay Assignment Due Date Approaching",
    course: "Sketch from A to Z (2024): Become an app designer",
    status: "Draft",
  },
  {
    date: "26 Jul 2025, 01:30 PM",
    title: "Final Exam Schedule and Preparation Tips",
    course: "Learn Angular Fundamentals Beginners Guide",
    status: "Published",
  },
  {
    date: "15 May 2025, 04:00 PM",
    title: "New Video Lectures Added",
    course: "Learn JavaScript and Express to become an Expert",
    status: "Published",
  },
];

const Announcements: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="announcements-container">
      {/* ===== HEADER ===== */}
      <div className="announcements-header">
        <h2>📢 Announcements</h2>
        <button
          className="announcements-add-btn"
          onClick={() => setShowModal(true)}
        >
          <FaPlus /> Add Announcement
        </button>
      </div>

      {/* ===== FILTERS ===== */}
      <div className="announcements-filters">
        <select className="announcements-status-filter">
          <option>Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
        <input
          type="text"
          className="announcements-search"
          placeholder="🔍 Search..."
        />
      </div>

      {/* ===== TABLE ===== */}
      <div className="announcements-table-wrapper">
        <table className="announcements-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Announcement</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {announcementsData.map((item, index) => (
              <tr key={index}>
                <td className="announcement-date">{item.date}</td>
                <td>
                  <div className="announcement-title">{item.title}</div>
                  <div className="announcement-course">{item.course}</div>
                </td>
                <td>
                  {item.status === "Published" ? (
                    <span className="status-published">Published</span>
                  ) : (
                    <span className="status-draft">Draft</span>
                  )}
                </td>
                <td className="actions-cell">
                  <button className="icon-btn edit-btn" title="Edit">
                    <FaPen />
                  </button>
                  <button className="icon-btn delete-btn" title="Delete">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== PAGINATION ===== */}
      <div className="announcements-pagination">
        <p>Page 1 of 4</p>
        <div className="pagination-controls">
          <button className="pagination-btn">‹</button>
          <button className="pagination-active">1</button>
          <button className="pagination-btn">›</button>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {showModal && (
        <div className="announcement-modal-overlay">
          <div className="announcement-modal">
            <h3>Add New Announcement</h3>
            <form className="announcement-form">
              <label>
                Course <span>*</span>
              </label>
              <select>
                <option>Select</option>
                <option>Introduction to Programming</option>
                <option>Sketch from A to Z</option>
                <option>Angular Fundamentals</option>
              </select>

              <label>
                Announcement Title <span>*</span>
              </label>
              <input type="text" placeholder="Enter title" />

              <label>
                Description <span>*</span>
              </label>
              <textarea placeholder="Enter description"></textarea>

              <label>
                Status <span>*</span>
              </label>
              <select>
                <option>Select Status</option>
                <option>Published</option>
                <option>Draft</option>
              </select>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="modal-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Announcements;
