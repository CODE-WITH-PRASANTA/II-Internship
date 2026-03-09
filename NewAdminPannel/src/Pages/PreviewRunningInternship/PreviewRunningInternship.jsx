import React, { useState, useEffect } from "react";
import API from "../../api/api";
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
  const [internships, setInternships] = useState([]);

  /* ================= FETCH INTERNSHIPS ================= */

  const fetchInternships = async () => {
    try {

      const res = await API.get("/internships/all");

      setInternships(res.data);

    } catch (error) {
      console.log(error);
    }
  };


  /* ================= DELETE INTERNSHIP ================= */

  const deleteInternship = async (id) => {

    if(!window.confirm("Are you sure you want to delete this internship?")) return;

    try {

      await API.delete(`/internships/delete/${id}`);

      setInternships((prev)=>
        prev.filter((item)=>item._id !== id)
      );

    } catch (error) {
      console.log(error);
    }

  };


  /* ================= LOAD DATA ================= */

  useEffect(()=>{
    fetchInternships();
  },[]);


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
              key={item._id}
              className="PreviewRunningInternship-card"
            >

              {/* 3 DOT MENU */}

              <div className="PreviewRunningInternship-cardMenu">

                <button
                  onClick={()=>setMenuOpen(menuOpen === item._id ? null : item._id)}
                >
                  <FiMoreVertical/>
                </button>

                {menuOpen === item._id && (

                  <div className="PreviewRunningInternship-dropdown">

                    <button>
                      <FiEdit/> Edit
                    </button>

                    <button
                      className="delete"
                      onClick={()=>deleteInternship(item._id)}
                    >
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
                  <strong>Type:</strong> {item.internshipType}
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
                <tr key={item._id}>

                  <td>{item.title}</td>
                  <td>{item.department}</td>
                  <td>{item.duration}</td>
                  <td>{item.location}</td>
                  <td>{item.internshipType}</td>

                  <td className="PreviewRunningInternship-tableActions">

                    <button className="edit">
                      <FiEdit/>
                    </button>

                    <button
                      className="delete"
                      onClick={()=>deleteInternship(item._id)}
                    >
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