import React, { useState, useEffect } from "react";
import "./AddNewCourseMain.css";

const AddNewCourseMain = () => {
  return (
    <div>
    </div>
  )
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

  useEffect(() => {
    return () => {
      if (formData.image) URL.revokeObjectURL(formData.image);
    };
  }, [formData.image]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
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
      setFormData(prev => ({ ...prev, image: url }));
    }
  };

  const handleSubmit = () => {
    if (editId !== null) {
      setCourses(prev =>
        prev.map(course =>
          course.id === editId ? { ...formData, id: editId } : course
        )
      );
      setEditId(null);
    } else {
      setCourses(prev => [...prev, { ...formData, id: Date.now() }]);
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
    setCourses(prev => prev.filter(course => course.id !== id));
  };

  return (
    <div className="course-wrapper">
      {/* ===== FORM (60%) ===== */}
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

        <div className="AddNewCourseForm-row">
          <div className="AddNewCourseForm-group">
            <label>Teacher Name</label>
            <input name="teacher" value={formData.teacher} onChange={handleChange} />
          </div>

          <div className="AddNewCourseForm-group">
            <label>Designation</label>
            <input name="designation" value={formData.designation} onChange={handleChange} />
          </div>
        </div>

        <div className="AddNewCourseForm-row">
          <div className="AddNewCourseForm-group">
            <label>Language</label>
            <select name="language" value={formData.language} onChange={handleChange}>
              <option value="">Select Language</option>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="AddNewCourseForm-group">
            <label>Rating</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={star <= formData.rating ? "star active" : "star"}
                  onClick={() =>
                    setFormData(prev => ({ ...prev, rating: star }))
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="AddNewCourseForm-row">
          <div className="AddNewCourseForm-group">
            <label>Price (₹)</label>
            <input name="price" value={formData.price} onChange={handleChange} />
          </div>

          <div className="AddNewCourseForm-group">
            <label>Timeline</label>
            <input name="timeline" value={formData.timeline} onChange={handleChange} />
          </div>
        </div>

        <div className="AddNewCourseForm-row">
          <div className="AddNewCourseForm-group">
            <label>Students</label>
            <input type="number" name="students" value={formData.students} onChange={handleChange} />
          </div>

          <div className="AddNewCourseForm-group">
            <label>Lessons</label>
            <input type="number" name="lessons" value={formData.lessons} onChange={handleChange} />
          </div>
        </div>

        <button type="button" onClick={handleSubmit}>
          {editId ? "Update Course" : "Add Course"}
        </button>
      </div>

      {/* ===== TABLE (40%) ===== */}
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
                courses.map(course => (
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
                      <button className="edit" onClick={() => handleEdit(course)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(course.id)}>Delete</button>
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
