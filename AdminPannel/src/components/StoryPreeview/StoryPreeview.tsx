import React, { useState, useEffect } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineViewList,
  HiDotsVertical,
} from "react-icons/hi";
import API, { getImageUrl } from "../../api/api";
import "./StoryPreeview.css";

/* ================= TYPES ================= */
interface Story {
  _id: string;
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

const StoryPreeview: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [openAction, setOpenAction] = useState<string | null>(null);

  /* ================= FETCH STORIES ================= */
  const fetchStories = async () => {
    try {
      const res = await API.get("/success-stories");
      setStories(res.data || []);
    } catch (err) {
      console.error("FETCH STORY ERROR:", err);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  /* ================= DELETE ================= */
  const handleDelete = async (id: string): Promise<void> => {
    if (!window.confirm("Delete this story?")) return;

    try {
      await API.delete(`/success-stories/${id}`);
      fetchStories(); // refresh after delete
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (story: Story): void => {
    alert(`Edit: ${story.title}`);
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
            <div className="premium-card" key={story._id}>
              <div className="image-wrapper">
                <img
                  src={getImageUrl(story.image)}
                  alt={story.title}
                />
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
                <tr key={story._id}>
                  <td>
                    <img
                      src={getImageUrl(story.image)}
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
                          openAction === story._id ? null : story._id
                        )
                      }
                    />

                    {openAction === story._id && (
                      <div className="action-dropdown">
                        <button onClick={() => handleEdit(story)}>
                          Edit
                        </button>
                        <button
                          className="delete"
                          onClick={() => handleDelete(story._id)}
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