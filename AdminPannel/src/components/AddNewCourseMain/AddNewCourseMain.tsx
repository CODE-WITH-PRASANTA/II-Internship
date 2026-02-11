import React, { useState, useEffect } from "react";
import "./AddNewCourseMain.css";

/* =============================
   COURSE TYPE DEFINITION
============================= */
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

  /* =============================
     CLEANUP IMAGE URL
  ============================= */
  useEffect(() => {
    return () => {
      if (formData.image) {
        URL.revokeObjectURL(formData.image);
      }
    };
  }, [formData.image]);

  /* =============================
     HANDLE INPUT CHANGE
  ============================= */
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

  /* =============================
     HANDLE IMAGE UPLOAD
  ============================= */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData(prev => ({ ...prev, image: url }));
    }
  };

  /* =============================
     HANDLE SUBMIT
  ============================= */
  const handleSubmit = () => {
    if (!formData.title || !formData.level) {
      alert("Please fill required fields");
      return;
    }

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

    // Reset form
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

  /* =============================
     EDIT
  ============================= */
  const handleEdit = (course: Course) => {
    const { id, ...rest } = course;
    setEditId(id);
    setFormData(rest);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* =============================
     DELETE
  ============================= */
  const handleDelete = (id: number) => {
    setCourses(prev => prev.filter(course => course.id !== id));
  };

 return (
  <div className="coursePage">
    {/* ================= LEFT FORM CARD ================= */}
    <div className="courseFormCard">
      <div className="cardHeader">
        <h2>{editId ? "Update Course" : "Create New Course"}</h2>
        <p>Fill the course details below</p>
      </div>

      <div className="formGrid">

        {/* IMAGE */}
        <div className="formField fullWidth">
          <label>Course Thumbnail</label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>

        {/* TITLE */}
        <div className="formField">
          <label>Course Title</label>
          <input name="title" value={formData.title} onChange={handleChange} />
        </div>

        {/* LEVEL */}
        <div className="formField">
          <label>Course Level</label>
          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Expert">Expert</option>
            <option value="All Level">All Level</option>
          </select>
        </div>

        {/* INSTRUCTOR */}
        <div className="formField">
          <label>Instructor Name</label>
          <input name="teacher" value={formData.teacher} onChange={handleChange} />
        </div>

        {/* DESIGNATION */}
        <div className="formField">
          <label>Instructor Designation</label>
          <input name="designation" value={formData.designation} onChange={handleChange} />
        </div>

        {/* LANGUAGE */}
        <div className="formField">
          <label>Language</label>
          <select name="language" value={formData.language} onChange={handleChange}>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>

        {/* RATING */}
        <div className="formField">
          <label>Course Rating</label>
          <div className="ratingStars">
            {[1, 2, 3, 4, 5].map(star => (
              <span
                key={star}
                className={star <= formData.rating ? "starFilled" : "starEmpty"}
                onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="formField">
          <label>Price (₹)</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} />
        </div>

        {/* DURATION */}
        <div className="formField">
          <label>Duration</label>
          <input name="timeline" value={formData.timeline} onChange={handleChange} />
        </div>

        {/* STUDENTS */}
        <div className="formField">
          <label>Total Students</label>
          <input type="number" name="students" value={formData.students} onChange={handleChange} />
        </div>

        {/* LESSONS */}
        <div className="formField">
          <label>Total Lessons</label>
          <input type="number" name="lessons" value={formData.lessons} onChange={handleChange} />
        </div>

      </div>

      <button className="primaryBtn" onClick={handleSubmit}>
        {editId ? "Update Course" : "Publish Course"}
      </button>
    </div>

   {/* ================= RIGHT SECTION ================= */}
<div className="coursePreviewCard">

  {/* ===== CARD PREVIEW ===== */}
  <div className="cardHeader">
    <h2>Course Preview</h2>
    <p>Live preview of created courses</p>
  </div>

  <div className="previewContainer">
    {courses.length === 0 ? (
      <div className="emptyState">No courses added yet</div>
    ) : (
      courses.map(course => (
        <div key={course.id} className="courseCard">
          {course.image && (
            <img src={course.image} alt="course" />
          )}

          <div className="courseCardBody">
            <h3>{course.title}</h3>
            <span className="badge">{course.level}</span>

            <p className="instructorName">{course.teacher}</p>
            <p className="designationText">{course.designation}</p>

            <div className="ratingText">
              {"★".repeat(course.rating)}
            </div>

            <div className="courseMeta">
              <span>₹{course.price}</span>
              <span>{course.students} Students</span>
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="cardActions">
              <button className="editBtn" onClick={() => handleEdit(course)}>Edit</button>
              <button className="deleteBtn" onClick={() => handleDelete(course.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  {/* ===== TABLE SECTION BELOW ===== */}
  <div className="tableSection">
    <h3 className="tableTitle">All Courses Data</h3>

    <div className="tableWrapper">
      <table className="courseTable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Level</th>
            <th>Instructor</th>
            <th>Price</th>
            <th>Students</th>
            <th>Lessons</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <tr>
              <td colSpan={7} className="tableEmpty">
                No Data Available
              </td>
            </tr>
          ) : (
            courses.map(course => (
              <tr key={course.id}>
                <td>{course.title}</td>
                <td>{course.level}</td>
                <td>{course.teacher}</td>
                <td>₹{course.price}</td>
                <td>{course.students}</td>
                <td>{course.lessons}</td>
                <td>{"★".repeat(course.rating)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </div>

</div>

  </div>
);

};

export default AddNewCourseMain;
