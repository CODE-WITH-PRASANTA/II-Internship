import React, { useState } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiDotsVertical,
} from "react-icons/hi";
import "./StoryPreeview.css";

/* ================= TYPES ================= */
interface Story {
  id: number;
  title: string;
  category: string;
  description: string;
  author: string;
  designation: string;
  quotes: string;
  tags: string;
  address: string;
  contact: string;
  image: string;
}

/* ================= DATA ================= */
const stories: Story[] = [
  {
    id: 1,
    title: "Inspiring Leadership Journey",
    category: "Motivation",
    description: "How a determined leader rose to success against all odds.",
    author: "Rohit Verma",
    designation: "Motivational Speaker",
    quotes: "Success begins at the end of comfort zones.",
    tags: "Leadership, Growth",
    address: "Delhi, India",
    contact: "+91 9876543210",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
  },
  {
    id: 2,
    title: "Art of Creative Thinking",
    category: "Creativity",
    description: "The power of creativity to transform ideas into reality.",
    author: "Anita Mehra",
    designation: "Creative Artist",
    quotes: "Creativity is intelligence having fun.",
    tags: "Art, Design",
    address: "Mumbai, India",
    contact: "+91 9988776655",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 3,
    title: "Tech Innovations 2025",
    category: "Technology",
    description: "Exploring breakthrough tech that will define the future.",
    author: "Vikram Kumar",
    designation: "Tech Analyst",
    quotes: "Innovation is the heartbeat of progress.",
    tags: "AI, Robotics",
    address: "Bangalore, India",
    contact: "+91 9123456780",
    image:
      "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800",
  },
  {
    id: 4,
    title: "Mindful Living Guide",
    category: "Wellness",
    description: "A journey to inner peace and happier life.",
    author: "Sanya Reddy",
    designation: "Wellness Coach",
    quotes: "Mindfulness turns moments into miracles.",
    tags: "Health, Wellness",
    address: "Chennai, India",
    contact: "+91 9087654321",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764b46?w=800",
  },
];

const StoryPreeview: React.FC = () => {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [openAction, setOpenAction] = useState<number | null>(null);

  const handleEdit = (story: Story): void => {
    alert(`Edit: ${story.title}`);
  };

  const handleDelete = (id: number): void => {
    alert(`Delete story ID: ${id}`);
  };

  return (
    <div className="story-preview-container">
      <h1 className="page-title">STORY PREVIEW</h1>

      {/* VIEW TOGGLE */}
      <div className="view-toggle">
        <HiOutlineViewGrid
          size={28}
          className={viewType === "grid" ? "active" : ""}
          onClick={() => setViewType("grid")}
        />
        <HiOutlineViewList
          size={28}
          className={viewType === "list" ? "active" : ""}
          onClick={() => setViewType("list")}
        />
      </div>

      {/* ================= GRID VIEW ================= */}
      {viewType === "grid" && (
        <div className="premium-grid">
          {stories.map((story) => (
            <div className="premium-card" key={story.id}>
              <div className="image-wrapper">
                <img src={story.image} alt={story.title} />

                {/* ✅ EXTRA IMAGE ONLY FOR MINDFUL LIVING GUIDE */}
                {story.title === "Mindful Living Guide" && (
                  <img
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300"
                    alt="Mindfulness"
                    className="overlay-image"
                  />
                )}
              </div>

              <div className="card-body">
                <h3>{story.title}</h3>
                <p className="category">{story.category}</p>
                <p className="description">{story.description}</p>

                <div className="author-block">
                  <span>{story.author}</span>
                  <small>{story.designation}</small>
                </div>

                <p className="tags">{story.tags}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ================= LIST VIEW ================= */}
      {viewType === "list" && (
        <div className="table-scroll-wrapper">
          <table className="premium-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Designation</th>
                <th>Tags</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {stories.map((story) => (
                <tr key={story.id}>
                  <td>
                    <img
                      src={story.image}
                      alt={story.title}
                      className="table-img"
                    />
                  </td>
                  <td>{story.title}</td>
                  <td>{story.category}</td>
                  <td>{story.author}</td>
                  <td>{story.designation}</td>
                  <td>{story.tags}</td>

                  <td className="action-td">
                    <HiDotsVertical
                      className="action-icon"
                      onClick={() =>
                        setOpenAction(
                          openAction === story.id ? null : story.id
                        )
                      }
                    />

                    {openAction === story.id && (
                      <div className="action-dropdown">
                        <button onClick={() => handleEdit(story)}>
                          Edit
                        </button>
                        <button
                          className="delete"
                          onClick={() => handleDelete(story.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
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

export default StoryPreeview;
