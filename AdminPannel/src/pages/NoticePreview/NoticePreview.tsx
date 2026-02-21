import React, { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import "./NoticePreview.css";

export interface NoticePreviewType {
  id: string;
  noticeNumber: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
}

interface Props {
  notices?: NoticePreviewType[];
}

/* ===== dummy fallback ===== */
const dummy: NoticePreviewType[] = [
  {
    id: "1",
    noticeNumber: "N001",
    title: "Holiday Notice",
    description: "School will remain closed tomorrow.",
    date: "2026-02-10",
    category: "Holiday",
    image: "https://picsum.photos/400/300",
  },
  {
    id: "2",
    noticeNumber: "N002",
    title: "Exam Notice",
    description: "Mid term exam schedule published.",
    date: "2026-02-12",
    category: "Exam",
    image: "https://picsum.photos/401/300",
  },
  {
    id: "3",
    noticeNumber: "N003",
    title: "Event Notice",
    description: "Annual function next week.",
    date: "2026-02-15",
    category: "Event",
    image: "https://picsum.photos/402/300",
  },
  {
    id: "4",
    noticeNumber: "N004",
    title: "Urgent Notice",
    description: "Meeting tomorrow 10AM.",
    date: "2026-02-18",
    category: "Urgent",
    image: "https://picsum.photos/403/300",
  },
];

const NoticePreview: React.FC<Props> = ({ notices }) => {
  const [view, setView] = useState<"grid" | "list">("grid");

  const data = notices && notices.length ? notices : dummy;

  return (
    <div className="adminNoticePreview-root">

      {/* HEADER */}
      <div className="adminNoticePreview-header">
        <h2 className="adminNoticePreview-title">Notice Preview</h2>

        <div className="adminNoticePreview-viewToggle">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            <FiGrid />
          </button>

          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            <FiList />
          </button>
        </div>
      </div>

      {/* SCROLL AREA */}
      <div className="adminNoticePreview-scrollArea">

        {/* GRID VIEW */}
        {view === "grid" && (
          <div className="adminNoticePreview-grid">
            {data.map((n) => (
              <div key={n.id} className="adminNoticePreview-card">

                {n.image && (
                  <img src={n.image} className="adminNoticePreview-image" />
                )}

                <div className="adminNoticePreview-content">
                  <h3>{n.title}</h3>
                  <p className="adminNoticePreview-desc">{n.description}</p>

                  <div className="adminNoticePreview-meta">
                    <span>{n.date}</span>
                    <span>{n.category}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* LIST VIEW → TABLE */}
        {view === "list" && (
          <div className="adminNoticePreview-tableWrapper">
            <table className="adminNoticePreview-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Image</th>
                  <th>Number</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </thead>

              <tbody>
                {data.map((n, i) => (
                  <tr key={n.id}>
                    <td>{i + 1}</td>

                    <td>
                      {n.image && (
                        <img
                          src={n.image}
                          className="adminNoticePreview-tableImg"
                        />
                      )}
                    </td>

                    <td>{n.noticeNumber}</td>
                    <td>{n.title}</td>
                    <td className="adminNoticePreview-tableDesc">{n.description}</td>
                    <td>{n.date}</td>
                    <td>{n.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default NoticePreview;