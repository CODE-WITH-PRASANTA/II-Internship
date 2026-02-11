import React from "react";
import "./CourseManage.css";

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

const courses: Course[] = [
  {
    id: 1,
    image: "https://picsum.photos/100?1",
    title: "Web Design Fundamentals",
    level: "Beginner",
    teacher: "Lori Stevens",
    designation: "UI/UX Designer",
    language: "English",
    rating: 5,
    price: "4,999",
    timeline: "6 Weeks",
    students: 15567,
    lessons: 32,
  },
  {
    id: 2,
    image: "https://picsum.photos/100?2",
    title: "Bootstrap 5 From Scratch",
    level: "Intermediate",
    teacher: "Billy Vasquez",
    designation: "Frontend Engineer",
    language: "English",
    rating: 4,
    price: "3,999",
    timeline: "4 Weeks",
    students: 16584,
    lessons: 24,
  },
  {
    id: 3,
    image: "https://picsum.photos/100?3",
    title: "Graphic Design Masterclass",
    level: "All Level",
    teacher: "Carolyn Ortiz",
    designation: "Graphic Designer",
    language: "Hindi",
    rating: 3,
    price: "5,499",
    timeline: "8 Weeks",
    students: 6458,
    lessons: 40,
  },
];

const ManageCourses: React.FC = () => {
  return (
    <div className="manage-course-wrapper">
      <div className="manage-course-header">
        <h2>Manage Courses</h2>
        <button className="add-course-btn">Create Course</button>
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
            {courses.map(course => (
              <tr key={course.id}>
                <td className="course-info">
                  <img src={course.image} alt={course.title} />
                  <span>{course.title}</span>
                </td>

                <td>{course.level}</td>

                <td className="teacher-info">
                  <strong>{course.teacher}</strong>
                  <small>{course.designation}</small>
                </td>

                <td>{course.language}</td>

                <td className="rating">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                </td>

                <td>₹{course.price}</td>
                <td>{course.timeline}</td>
                <td>{course.students.toLocaleString()}</td>
                <td>{course.lessons}</td>

                <td className="actions">
                  <button className="edit">✏️</button>
                  <button className="delete">🗑️</button>
                  <button className="view">👁️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
