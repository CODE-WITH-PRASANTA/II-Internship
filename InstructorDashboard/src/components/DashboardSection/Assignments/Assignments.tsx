import React, { useState } from "react";
import "./Assignments.css";
import { BookOpen, Edit3, Trash2, X } from "lucide-react";

const assignments = [
  {
    name: "Building Your First Landing Page",
    course: "Sketch from A to Z (2024): Become an app designer",
    totalMark: 80,
    totalSubmit: 2,
    status: "Published",
  },
  {
    name: "Building a Basic Angular Application",
    course: "Learn Angular Fundamentals Beginners Guide",
    totalMark: 60,
    totalSubmit: 4,
    status: "Draft",
  },
  {
    name: "Basic Arithmetic Operations",
    course: "Learn JavaScript and Express to become an Expert",
    totalMark: 30,
    totalSubmit: 3,
    status: "Published",
  },
  {
    name: "Basic Calculations",
    course: "Learn JavaScript and Express to become an Expert",
    totalMark: 50,
    totalSubmit: 5,
    status: "Published",
  },
];

const Assignments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="assignments-container">
      {/* ===== HEADER ===== */}
      <div className="assignments-header">
        <div className="assignments-title-wrapper">
          <BookOpen className="assignments-title-icon large" />
          <h2 className="assignments-title">Assignments</h2>
        </div>
        <button
          className="assignments-add-btn"
          onClick={() => setShowModal(true)}
        >
          <span className="assignments-add-icon">＋</span> Add Assignment
        </button>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="assignments-filter">
        <select className="assignments-status-filter">
          <option>Status</option>
        </select>
        <input
          type="text"
          className="assignments-search"
          placeholder="Search Assignment..."
        />
      </div>

      {/* ===== TABLE ===== */}
      <div className="assignments-table-wrapper">
        <table className="assignments-table">
          <thead>
            <tr>
              <th>Assignment Name</th>
              <th>Total Marks</th>
              <th>Submissions</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, i) => (
              <tr key={i}>
                <td>
                  <div className="assignments-name">
                    <strong>{a.name}</strong>
                    <div className="assignments-course">Course: {a.course}</div>
                  </div>
                </td>
                <td>{a.totalMark}</td>
                <td>{a.totalSubmit}</td>
                <td>
                  <span
                    className={`assignments-status ${
                      a.status === "Published"
                        ? "assignments-status-published"
                        : "assignments-status-draft"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td>
                  <div className="assignments-actions">
                    <Edit3 className="assignments-icon edit" />
                    <Trash2 className="assignments-icon delete" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== PAGINATION ===== */}
      <div className="assignments-pagination">
        <span>Page 1 of 4</span>
        <div className="assignments-pagination-buttons">
          <button className="assignments-page-btn">‹</button>
          <span className="assignments-page-number active">1</span>
          <button className="assignments-page-btn">›</button>
        </div>
      </div>

      {/* ===== MODAL POPUP ===== */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add New Assignment</h3>
              <X className="modal-close" onClick={() => setShowModal(false)} />
            </div>

            <form className="modal-form">
              <label>
                Course <span>*</span>
              </label>
              <select>
                <option>Select</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Data Science</option>
              </select>

              <label>
                Assignment Title <span>*</span>
              </label>
              <input type="text" placeholder="Enter Assignment Title" />

              <label>Description</label>
              <textarea placeholder="Enter Description"></textarea>

              <label>
                Instructions <span>*</span>
              </label>
              <textarea placeholder="Enter Instructions"></textarea>

              <label>
                Last Date <span>*</span>
              </label>
              <input type="date" />

              <label>
                Status <span>*</span>
              </label>
              <select>
                <option>Published</option>
                <option>Draft</option>
              </select>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
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

export default Assignments;
