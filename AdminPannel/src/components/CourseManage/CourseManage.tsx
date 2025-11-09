import React from "react";
import {
  Search,
  ChevronDown,
  Edit3,
  Trash2,
  Globe,
  EyeOff,
} from "lucide-react";
import "./CourseManage.css";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  enrolled: string;
  img: string;
  avatar: string;
  published: boolean;
}

const CourseManage: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Building Scalable APIs with GraphQL",
      instructor: "Lori Stevens",
      rating: 4,
      enrolled: "15,567",
      img: "https://picsum.photos/60?random=1",
      avatar: "https://i.pravatar.cc/40?img=1",
      published: true,
    },
    {
      id: 2,
      title: "Bootstrap 5 From Scratch",
      instructor: "Billy Vasquez",
      rating: 4,
      enrolled: "16,584",
      img: "https://picsum.photos/60?random=2",
      avatar: "https://i.pravatar.cc/40?img=2",
      published: false,
    },
    {
      id: 3,
      title: "Graphic Design Masterclass",
      instructor: "Carolyn Ortiz",
      rating: 3,
      enrolled: "6,458",
      img: "https://picsum.photos/60?random=3",
      avatar: "https://i.pravatar.cc/40?img=3",
      published: true,
    },
    {
      id: 4,
      title: "Learn Invision",
      instructor: "Frances Guerrero",
      rating: 5,
      enrolled: "20,158",
      img: "https://picsum.photos/60?random=4",
      avatar: "https://i.pravatar.cc/40?img=4",
      published: false,
    },
    {
      id: 5,
      title: "JavaScript: Full Understanding",
      instructor: "Samuel Bishop",
      rating: 5,
      enrolled: "5,325",
      img: "https://picsum.photos/60?random=5",
      avatar: "https://i.pravatar.cc/40?img=5",
      published: true,
    },
    {
      id: 6,
      title: "Build Responsive Websites with HTML",
      instructor: "Dennis Barrett",
      rating: 4,
      enrolled: "8,258",
      img: "https://picsum.photos/60?random=6",
      avatar: "https://i.pravatar.cc/40?img=6",
      published: true,
    },
  ];

  return (
    <div className="wrapper">
      {/* Header */}
      <div className="flex-header">
        <h1 className="header-title">
          Web design <span className="badge">245</span>
        </h1>
        <button className="create-btn">Create a Course</button>
      </div>

      {/* Search & Sort */}
      <div className="search-sort">
        <div className="search-box">
          <Search className="icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
        </div>
        <div className="sort-box">
          <span>Sort by</span>
          <ChevronDown className="icon" />
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="w-full text-left">
          <thead className="table-header">
            <tr>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Rating</th>
              <th>Enrolled</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course.id} className="table-row">
                <td className="table-data">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="course-img"
                    />
                    {course.title}
                  </div>
                </td>

                <td className="table-data">
                  <div className="flex items-center gap-3">
                    <img
                      src={course.avatar}
                      alt={course.instructor}
                      className="avatar"
                    />
                    {course.instructor}
                  </div>
                </td>

                <td className="table-data">
                  <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < course.rating ? "filled" : "empty"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </td>

                <td className="table-data">{course.enrolled}</td>

                <td className="table-data">
                  <div className="flex gap-2">
                    <button className="icon-btn edit" title="Edit">
                      <Edit3 size={18} />
                    </button>
                    <button className="icon-btn delete" title="Delete">
                      <Trash2 size={18} />
                    </button>
                    {course.published ? (
                      <button
                        className="icon-btn unpublish"
                        title="Unpublish"
                      >
                        <EyeOff size={18} />
                      </button>
                    ) : (
                      <button
                        className="icon-btn publish"
                        title="Publish"
                      >
                        <Globe size={18} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="footer">
        <span>Showing 1 to 8 of 20 entries</span>
        <div className="pagination">
          <button>Prev</button>
          <button className="active">1</button>
          <button>2</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default CourseManage;
