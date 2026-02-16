import React, { useState, useEffect } from "react";
import "./AddNewCourseMain.css";

/* ===== TYPE ===== */
interface Course {
  id: number;
  image: string;
  title: string;
  level: string;
  teacher: string;
  designation: string;
  language: string;
  rating: number;
  price: string;
  timeline: string;
  students: number;
  lessons: number;
}

const AddNewCourseMain: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const [formData, setFormData] = useState<Omit<Course, "id">>({
    image: "",
    title: "",
    level: "",
    teacher: "",
    designation: "",
    language: "",
    rating: 0,
    price: "",
    timeline: "",
    students: 0,
    lessons: 0,
  });

  /* ===== CLEAN IMAGE URL ===== */
  useEffect(() => {
    return () => {
      if (formData.image?.startsWith("blob:")) {
        URL.revokeObjectURL(formData.image);
      }
    };
  }, [formData.image]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "students" || name === "lessons"
          ? Number(value)
          : value,
    }));
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData((prev) => ({ ...prev, image: url }));
    }
  };

  const handleSubmit = () => {
    if (editId !== null) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editId ? { ...formData, id: editId } : course
        )
      );
      setEditId(null);
    } else {
      setCourses((prev) => [...prev, { ...formData, id: Date.now() }]);
    }

    setFormData({
      image: "",
      title: "",
      level: "",
      teacher: "",
      designation: "",
      language: "",
      rating: 0,
      price: "",
      timeline: "",
      students: 0,
      lessons: 0,
    });
  };

  const handleEdit = (course: Course) => {
    const { id, ...rest } = course;
    setEditId(id);
    setFormData(rest);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id: number) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  return (
    <div className="course-wrapper">
      {/* ===== FORM ===== */}
      <div className="course-form">
        <h2>Add New Course</h2>

        <div className="AddNewCourseForm-group">
          <label>Upload image of course</label>
          <input type="file" onChange={handleImage} />
        </div>

        <div className="AddNewCourseForm-row">
          <div className="AddNewCourseForm-group">
            <label>Course Title</label>
            <input name="title" value={formData.title} onChange={handleChange} />
          </div>

          <div className="AddNewCourseForm-group">
            <label>Course Level</label>
            <select name="level" value={formData.level} onChange={handleChange}>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Expert">Expert</option>
              <option value="All Level">All Level</option>
            </select>
          </div>
        </div>

        {/* other fields remain same */}

        <button type="button" onClick={handleSubmit}>
          {editId ? "Update Course" : "Add Course"}
        </button>
      </div>

      {/* ===== TABLE ===== */}
      <div className="course-table">
        <h2>Live Course Preview</h2>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Level</th>
                <th>Teacher</th>
                <th>Designation</th>
                <th>Language</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Students</th>
                <th>Lessons</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td colSpan={11} className="empty">No courses added</td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.image && <img src={course.image} alt="" />}</td>
                    <td>{course.title}</td>
                    <td>{course.level}</td>
                    <td>{course.teacher}</td>
                    <td>{course.designation}</td>
                    <td>{course.language}</td>
                    <td>{"★".repeat(course.rating)}</td>
                    <td>₹{course.price}</td>
                    <td>{course.students}</td>
                    <td>{course.lessons}</td>
                    <td className="actions">
                      <button className="edit" onClick={() => handleEdit(course)}>
                        Edit
                      </button>
                      <button className="delete" onClick={() => handleDelete(course.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourseMain;
