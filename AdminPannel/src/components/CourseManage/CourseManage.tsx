import React, { useState } from "react";
import { Search, ChevronDown, Edit3, Trash2, Globe, EyeOff, X, } from "lucide-react";
import "./CourseManage.css";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  enrolled: number;
  img: string;
  avatar: string;
  published: boolean;
}

const CourseManage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortKey, setSortKey] = useState<keyof Course>("title");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [courses, setCourses] = useState<Course[]>([
    { id: 1, title: "Building Scalable APIs with GraphQL", instructor: "Lori Stevens", rating: 4, enrolled: 15567, img: "https://picsum.photos/60?random=1", avatar: "https://i.pravatar.cc/40?img=1", published: true },
    { id: 2, title: "Bootstrap 5 From Scratch", instructor: "Billy Vasquez", rating: 4, enrolled: 16584, img: "https://picsum.photos/60?random=2", avatar: "https://i.pravatar.cc/40?img=2", published: false },
    { id: 3, title: "Graphic Design Masterclass", instructor: "Carolyn Ortiz", rating: 3, enrolled: 6458, img: "https://picsum.photos/60?random=3", avatar: "https://i.pravatar.cc/40?img=3", published: true },
    { id: 4, title: "Learn Invision", instructor: "Frances Guerrero", rating: 5, enrolled: 20158, img: "https://picsum.photos/60?random=4", avatar: "https://i.pravatar.cc/40?img=4", published: false },
    { id: 5, title: "JavaScript: Full Understanding", instructor: "Samuel Bishop", rating: 5, enrolled: 5325, img: "https://picsum.photos/60?random=5", avatar: "https://i.pravatar.cc/40?img=5", published: true },
    { id: 6, title: "Build Responsive Websites with HTML", instructor: "Dennis Barrett", rating: 4, enrolled: 8258, img: "https://picsum.photos/60?random=6", avatar: "https://i.pravatar.cc/40?img=6", published: true },
  ]);

  const sortCourses = (key: keyof Course) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...courses].sort((a, b) => {
      if (typeof a[key] === "number" && typeof b[key] === "number") {
        return order === "asc" ? (a[key] as number) - (b[key] as number) : (b[key] as number) - (a[key] as number);
      }
      return order === "asc"
        ? String(a[key]).localeCompare(String(b[key]))
        : String(b[key]).localeCompare(String(a[key]));
    });
    setCourses(sorted);
    setSortKey(key);
    setSortOrder(order);
  };

  return (
    <div className="coursemanage-wrapper">
      {/* Header */}
      <div className="coursemanage-flex-header">
        <h1 className="coursemanage-header-title">
          Web design <span className="coursemanage-badge">{courses.length}</span>
        </h1>
        <button className="coursemanage-create-btn" onClick={openModal}>
          Create a Course
        </button>
      </div>

      {/* Search & Sort */}
      <div className="coursemanage-search-sort">
        <div className="coursemanage-search-box">
          <Search className="coursemanage-icon" />
          <input type="text" placeholder="Search" onChange={(e) => {
            const query = e.target.value.toLowerCase();
            setCourses(prev => prev.filter(c => c.title.toLowerCase().includes(query) || c.instructor.toLowerCase().includes(query)));
          }} />
        </div>
        <div className="coursemanage-sort-box" onClick={() => sortCourses("title")}>
  <div className="coursemanage-sort-box">
  <span className="sort-label">Sort by</span>
  <select
    className="coursemanage-icon"
    value={sortKey}
    onChange={(e) => sortCourses(e.target.value as keyof Course)}
    style={{
      border: "none",
      background: "transparent",
      padding: "0",
      fontSize: "15px",
      cursor: "pointer",
      color: "#6b7280",
      marginLeft: "6px",
    }}
  >
    <option value="title">Course Name</option>
    <option value="instructor">Instructor</option>
    <option value="rating">Rating</option>
    <option value="enrolled">Enrolled</option>
  </select>
  <ChevronDown className="coursemanage-icon" size={16} />
</div>



        </div>
      </div>

      {/* Table */}
      <div className="coursemanage-table-container">
        <table className="coursemanage-table">
          <thead className="coursemanage-table-header">
            <tr>
              <th onClick={() => sortCourses("title")}>Course Name</th>
              <th onClick={() => sortCourses("instructor")}>Instructor</th>
              <th onClick={() => sortCourses("rating")}>Rating</th>
              <th onClick={() => sortCourses("enrolled")}>Enrolled</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="coursemanage-table-row">
                <td className="coursemanage-table-data">
                  <div className="flex items-center gap-3">
                    <img src={course.img} alt={course.title} className="coursemanage-course-img" />
                    {course.title}
                  </div>
                </td>
                <td className="coursemanage-table-data">
                  <div className="flex items-center gap-3">
                    <img src={course.avatar} alt={course.instructor} className="coursemanage-avatar" />
                    {course.instructor}
                  </div>
                </td>
                <td className="coursemanage-table-data">
                  <div className="coursemanage-rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < course.rating ? "filled" : "empty"}>★</span>
                    ))}
                  </div>
                </td>
                <td className="coursemanage-table-data">{course.enrolled.toLocaleString()}</td>
                <td className="coursemanage-table-data">
                  <div className="flex gap-2">
                    <button className="coursemanage-icon-btn edit"><Edit3 size={18} /></button>
                    <button className="coursemanage-icon-btn delete"><Trash2 size={18} /></button>
                    {course.published ? (
                      <button className="coursemanage-icon-btn unpublish"><EyeOff size={18} /></button>
                    ) : (
                      <button className="coursemanage-icon-btn publish"><Globe size={18} /></button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="coursemanage-footer">
        <span>Showing 1 to {courses.length} of {courses.length} entries</span>
        <div className="coursemanage-pagination">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>Next</button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="coursemanage-modal-overlay">
          <div className="coursemanage-modal" style={{ cursor: "move" }}>
            <div className="coursemanage-modal-header">
              <h2>Create a New Course</h2>
              <button className="coursemanage-modal-close" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            <form className="coursemanage-modal-body">
              <label>
                Course Title
                <input type="text" placeholder="Enter course title" />
              </label>
              <label>
                Instructor
                <input type="text" placeholder="Enter instructor name" />
              </label>
              <label>
                Rating
                <select>
                  <option>1 Star</option>
                  <option>2 Stars</option>
                  <option>3 Stars</option>
                  <option>4 Stars</option>
                  <option>5 Stars</option>
                </select>
              </label>
              <label>
                Enrolled Students
                <input type="number" placeholder="e.g., 15,000" />
              </label>
              <button type="submit" className="coursemanage-submit-btn">
                Save Course
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseManage;
