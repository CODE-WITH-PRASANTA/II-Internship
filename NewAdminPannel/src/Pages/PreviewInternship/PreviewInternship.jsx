import React, { useState, useEffect } from "react";
import "./PreviewInternship.css";
import { FiGrid, FiList, FiMapPin, FiCalendar } from "react-icons/fi";
import API from "../../api/api";   // axios instance

const PreviewInternship = () => {
  const [view, setView] = useState("grid");
  const [dummyData, setDummyData] = useState([]);

  /* ================= FETCH INTERNSHIPS ================= */

  const fetchInternships = async () => {
    try {

      const res = await API.get("/interns/all");

      setDummyData(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <div className="ip-container">

      {/* Header */}
      <div className="ip-header">
        <h2>Internship Listings</h2>

        <div className="ip-view-toggle">
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


      {/* Cards */}
      <div className={view === "grid" ? "ip-grid" : "ip-list"}>

        {dummyData.map((item) => (
          <div key={item._id} className="ip-card">

            <div className="ip-card-header">
              <h3>{item.title}</h3>
              <span className="ip-badge">{item.type}</span>
            </div>

            <p className="ip-description">
              {item.description}
            </p>

            <div className="ip-meta">
              <span>
                <FiMapPin /> {item.location || "Location"}
              </span>

              <span>
                <FiCalendar /> {item.startDate || "Start Date"}
              </span>
            </div>

            <div className="ip-footer">
              <span>{item.department}</span>
              <span>{item.duration}</span>
            </div>

            <button className="ip-apply-btn">
              Apply Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default PreviewInternship;