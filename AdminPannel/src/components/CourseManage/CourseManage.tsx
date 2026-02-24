import React, { useEffect, useState } from "react";
import "./CourseManage.css";
import API from "../../api/api";
import { Link } from "react-router";

interface Course {
  _id: string;
  thumbnail?: string;
  title: string;
  skillLevel: string;
  instructor?: {
    name?: string;
    designation?: string;
  };
  language: string;
  rating: number;
  pricing: number;
  timeline: string;
  totalLectures: number;
}

const ManageCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
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
  const handleDelete = async (id: string) => {
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
    <div className="manage-course-wrapper">
      <div className="manage-course-header">
        <h2>Manage Courses</h2>
        <Link to="/course/post" className="add-course-btn">Create Course</Link>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
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
                  <td className="course-info">
                    <img
                      src={
                        course.thumbnail
                          ? `http://localhost:5000/${course.thumbnail}`
                          : "https://via.placeholder.com/100"
                      }
                      alt={course.title}
                    />
                    <span>{course.title}</span>
                  </td>

                  <td>{course.skillLevel || "N/A"}</td>

                  <td className="teacher-info">
                    <strong>
                      {course.instructor?.name || "N/A"}
                    </strong>
                    <small>
                      {course.instructor?.designation || ""}
                    </small>
                  </td>

                  <td>{course.language || "N/A"}</td>

                  <td className="rating">
                    {"★".repeat(Math.round(course.rating || 0))}
                    {"☆".repeat(5 - Math.round(course.rating || 0))}
                  </td>

                  <td>₹{course.pricing || 0}</td>

                  <td>{course.timeline || "N/A"}</td>

                  <td>0</td>

                  <td>{course.totalLectures || 0}</td>

                  <td className="actions">
                    <button className="edit">✏️</button>
                    <button
                      className="delete"
                      onClick={() => handleDelete(course._id)}
                    >
                      🗑️
                    </button>
                    <button className="view">👁️</button>
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