import React, { useState } from "react";
import "./QuizResults.css";
import { FiClock } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { PiEqualsBold } from "react-icons/pi";

interface QuizResult {
  name: string;
  img: string;
  score: number;
  attempts: number;
  finish: string;
}

const results: QuizResult[] = [
  { name: "Thompson Hicks", img: "https://randomuser.me/api/portraits/men/32.jpg", score: 75, attempts: 4, finish: "22 Aug 2025, 09:00 AM" },
  { name: "Jennifer Tovar", img: "https://randomuser.me/api/portraits/women/44.jpg", score: 50, attempts: 3, finish: "10 Aug 2025, 09:15 AM" },
  { name: "James Schulte", img: "https://randomuser.me/api/portraits/men/12.jpg", score: 60, attempts: 2, finish: "26 Jul 2025, 02:20 PM" },
  { name: "Kristy Cardona", img: "https://randomuser.me/api/portraits/women/55.jpg", score: 55, attempts: 2, finish: "12 Jul 2025, 11:40 AM" },
];

const QuizResults: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(results.length / itemsPerPage);

  const paginateResults = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return results.slice(start, end);
  };

  return (
    <div className="quizresults-container">
      <h2 className="quizresults-title">Quiz Results</h2>

      {/* Header Card */}
      <div className="quizresults-header-card">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-ui-ux-background_23-2149154606.jpg"
          alt="UI/UX"
          className="quizresults-banner-img"
        />
        <div className="quizresults-header-info">
          <h3 className="quizresults-header-title">
            Information About UI/UX Design Degree
          </h3>
          <div className="quizresults-header-meta">
            <span>25 Questions</span>
            <span>•</span>
            <span>30 Minutes</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="quizresults-stat-grid">
        <div className="quizresults-stat-card pink">
          <div className="quizresults-stat-label">Total Participants</div>
          <div className="quizresults-stat-value">30</div>
          <FaRegUser className="quizresults-stat-icon" />
        </div>

        <div className="quizresults-stat-card purple">
          <div className="quizresults-stat-label">Scores</div>
          <div className="quizresults-stat-value">03</div>
          <PiEqualsBold className="quizresults-stat-icon" />
        </div>

        <div className="quizresults-stat-card lilac">
          <div className="quizresults-stat-label">Average Time</div>
          <div className="quizresults-stat-value">00:00:55</div>
          <FiClock className="quizresults-stat-icon" />
        </div>
      </div>

      {/* Results Table */}
      <div className="quizresults-table-wrapper">
        <table className="quizresults-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Score</th>
              <th>Attempts</th>
              <th>Finish Time</th>
            </tr>
          </thead>
          <tbody>
            {paginateResults().map((r, i) => (
              <tr key={i}>
                <td>
                  <div className="quizresults-student">
                    <img src={r.img} alt={r.name} />
                    <span>{r.name}</span>
                  </div>
                </td>
                <td>{r.score}</td>
                <td>{String(r.attempts).padStart(2, "0")}</td>
                <td>{r.finish}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{/* Footer / Pagination */}
<div className="quizresults-footer">
  <span>
    Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
    {Math.min(currentPage * itemsPerPage, results.length)} of {results.length} entries
  </span>
  <div className="quizresults-pagination">
    <button
      onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
      disabled={currentPage === 1}
      className="arrow-btn"
    >
      &#8592; {/* Left arrow */}
    </button>

    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={currentPage === i + 1 ? "active" : ""}
      >
        {i + 1}
      </button>
    ))}

    <button
      onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="arrow-btn"
    >
      &#8594; {/* Right arrow */}
    </button>
  </div>
</div>

    </div>
  );
};

export default QuizResults;
