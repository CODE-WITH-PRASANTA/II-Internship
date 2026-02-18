import React, { useState, useEffect } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineViewList,
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
  designation?: string;   // ✅ safe optional
  quotes?: string;
  blogTags?: string[];
  address?: string;
  contact?: string;
  image: string;
  publishStatus?: string;
}

const StoryPreeview: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");

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
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this story?")) return;

    try {
      await API.delete(`/success-stories/${id}`);
      setStories((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  /* ================= TOGGLE PUBLISH ================= */
  const handleTogglePublish = async (story: Story) => {
    try {
      const newStatus =
        story.publishStatus === "Published" ? "Draft" : "Published";

      await API.put(`/success-stories/${story._id}`, {
        publishStatus: newStatus,
      });

      // ✅ Optimistic update (designation + tags remain intact)
      setStories((prev) =>
        prev.map((item) =>
          item._id === story._id
            ? { ...item, publishStatus: newStatus }
            : item
        )
      );
    } catch (err) {
      console.error("TOGGLE PUBLISH ERROR:", err);
    }
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

                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: story.description }}
                />

                {/* ✅ Designation Safe Render */}
                <div className="author-block">
                  <span>{story.author}</span>
                  {story.designation && (
                    <small>{story.designation}</small>
                  )}
                </div>

                {/* ✅ Tags Safe Render */}
                <div className="tags">
                  {story.blogTags && story.blogTags.length > 0 ? (
                    story.blogTags.map((tag, index) => (
                      <span key={index} className="tag-chip">
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="tag-chip">No Tags</span>
                  )}
                </div>

                <button
                  className={`publish-toggle-btn ${
                    story.publishStatus === "Published"
                      ? "published"
                      : "draft"
                  }`}
                  onClick={() => handleTogglePublish(story)}
                >
                  {story.publishStatus === "Published"
                    ? "Unpublish"
                    : "Publish"}
                </button>
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
                <th>Status</th>
                <th>Delete</th>
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
                  <td>{story.designation || "-"}</td>

                  <td>
                    {story.blogTags && story.blogTags.length > 0 ? (
                      story.blogTags.map((tag, index) => (
                        <span key={index} className="tag-chip">
                          {tag}
                        </span>
                      ))
                    ) : (
                      "-"
                    )}
                  </td>

                  <td>
                    <button
                      className={`publish-toggle-btn ${
                        story.publishStatus === "Published"
                          ? "published"
                          : "draft"
                      }`}
                      onClick={() => handleTogglePublish(story)}
                    >
                      {story.publishStatus === "Published"
                        ? "Unpublish"
                        : "Publish"}
                    </button>
                  </td>

                  <td>
                    <button
                      className="delete"
                      onClick={() => handleDelete(story._id)}
                    >
                      Delete
                    </button>
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