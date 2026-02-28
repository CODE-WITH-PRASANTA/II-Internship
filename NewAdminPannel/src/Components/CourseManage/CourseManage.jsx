import React, { useEffect, useState } from "react";
import "./CourseManage.css";
import API, { getImageUrl } from "../../api/api";
import { Link } from "react-router-dom";

const ManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH COURSES ================= */
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await API.get("/courses");
      setCourses(res.data || []);
    } catch (error) {
      console.error("FETCH COURSES ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  /* ================= DELETE COURSE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?"))
      return;

    try {
      await API.delete(`/courses/${id}`);
      fetchCourses();
    } catch (error) {
      console.error("DELETE COURSE ERROR:", error);
    }
  };

  return (
    <div className="mc-wrapper">
      <div className="mc-header">
        <h2 className="mc-title">Manage Courses</h2>

        <div className="mc-header-right">
          <Link to="/course/post" className="mc-add-btn">
            Create Course
          </Link>
        </div>
      </div>

      <div className="mc-table-wrapper">
        <table className="mc-table">
          <thead className="mc-thead">
            <tr>
              <th>Course</th>
              <th>Level</th>
              <th>Teacher</th>
              <th>Language</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Timeline</th>
              <th>Students</th>
              <th>Lessons</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>
                  Loading...
                </td>
              </tr>
            ) : courses.length === 0 ? (
              <tr>
                <td colSpan={10} style={{ textAlign: "center" }}>
                  No courses found
                </td>
              </tr>
            ) : (
              courses.map((course) => (
                <tr key={course._id}>
                  
                  {/* COURSE INFO */}
                  <td>
                    <div className="mc-course-info">
                      <img
                        className="mc-course-img"
                        src={
                          course.thumbnail
                            ? getImageUrl(course.thumbnail)
                            : "https://via.placeholder.com/100"
                        }
                        alt={course.title}
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/100";
                        }}
                      />
                      <span>{course.title}</span>
                    </div>
                  </td>

                  {/* LEVEL */}
                  <td>{course.skillLevel || "N/A"}</td>

                  {/* TEACHER */}
                  <td>
                    <div className="mc-teacher-info">
                      <strong>{course.instructor?.name || "N/A"}</strong>
                      <small>
                        {course.instructor?.designation || ""}
                      </small>
                    </div>
                  </td>

                  {/* LANGUAGE */}
                  <td>{course.language || "N/A"}</td>

                  {/* RATING */}
                  <td className="mc-rating">
                    {"★".repeat(Math.round(course.rating || 0))}
                    {"☆".repeat(5 - Math.round(course.rating || 0))}
                  </td>

                  {/* PRICE */}
                  <td>₹{course.pricing || 0}</td>

                  {/* TIMELINE */}
                  <td>{course.timeline || "N/A"}</td>

                  {/* STUDENTS (Static for now) */}
                  <td>0</td>

                  {/* LESSONS */}
                  <td>{course.totalLectures || 0}</td>

                  {/* ACTIONS */}
                  <td>
                    <div className="mc-actions">
                      <button className="mc-edit">✏️</button>
                      <button
                        className="mc-delete"
                        onClick={() => handleDelete(course._id)}
                      >
                        🗑️
                      </button>
                      <button className="mc-view">👁️</button>
                    </div>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;