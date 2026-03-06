import React, { useState } from "react";
import "./PreviewRunningInternship.css";
import {
  FiGrid,
  FiList,
  FiMoreVertical,
  FiEdit,
  FiTrash2
} from "react-icons/fi";

const PreviewRunningInternship = () => {

  const [view, setView] = useState("grid");
  const [menuOpen, setMenuOpen] = useState(null);

  const internships = [
    {
      id:1,
      title:"Web Development Internship",
      department:"Computer Science",
      duration:"3 Months",
      location:"Remote",
      type:"Virtual"
    },
    {
      id:2,
      title:"AI & Machine Learning Internship",
      department:"Artificial Intelligence",
      duration:"6 Months",
      location:"Bangalore",
      type:"Full Time"
    },
    {
      id:3,
      title:"UI UX Design Internship",
      department:"Design",
      duration:"4 Months",
      location:"Remote",
      type:"Part Time"
    },
    {
      id:4,
      title:"Data Science Internship",
      department:"Data Analytics",
      duration:"5 Months",
      location:"Delhi",
      type:"Full Time"
    }
  ];

  return (

    <div className="PreviewRunningInternship-container">

      {/* HEADER */}

      <div className="PreviewRunningInternship-header">

        <h2 className="PreviewRunningInternship-title">
          Running Internships Preview
        </h2>

        <div className="PreviewRunningInternship-viewToggle">

          <button
            className={view === "grid" ? "active" : ""}
            onClick={()=>setView("grid")}
          >
            <FiGrid/>
          </button>

          <button
            className={view === "list" ? "active" : ""}
            onClick={()=>setView("list")}
          >
            <FiList/>
          </button>

        </div>

      </div>


      {/* GRID VIEW */}

      {view === "grid" && (

        <div className="PreviewRunningInternship-grid">

          {internships.map((item)=>(
            <div
              key={item.id}
              className="PreviewRunningInternship-card"
            >

              {/* 3 DOT MENU */}

              <div className="PreviewRunningInternship-cardMenu">

                <button
                  onClick={()=>setMenuOpen(menuOpen === item.id ? null : item.id)}
                >
                  <FiMoreVertical/>
                </button>

                {menuOpen === item.id && (

                  <div className="PreviewRunningInternship-dropdown">

                    <button>
                      <FiEdit/> Edit
                    </button>

                    <button className="delete">
                      <FiTrash2/> Delete
                    </button>

                  </div>

                )}

              </div>

              <div className="PreviewRunningInternship-cardBody">

                <h3>{item.title}</h3>

                <p>
                  <strong>Department:</strong> {item.department}
                </p>

                <p>
                  <strong>Duration:</strong> {item.duration}
                </p>

                <p>
                  <strong>Location:</strong> {item.location}
                </p>

                <p>
                  <strong>Type:</strong> {item.type}
                </p>

              </div>

            </div>
          ))}

        </div>

      )}


      {/* LIST VIEW */}

      {view === "list" && (

        <div className="PreviewRunningInternship-list">

          <table className="PreviewRunningInternship-table">

            <thead>
              <tr>
                <th>Title</th>
                <th>Department</th>
                <th>Duration</th>
                <th>Location</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {internships.map((item)=>(
                <tr key={item.id}>

                  <td>{item.title}</td>
                  <td>{item.department}</td>
                  <td>{item.duration}</td>
                  <td>{item.location}</td>
                  <td>{item.type}</td>

                  <td className="PreviewRunningInternship-tableActions">

                    <button className="edit">
                      <FiEdit/>
                    </button>

                    <button className="delete">
                      <FiTrash2/>
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );
};

export default PreviewRunningInternship;