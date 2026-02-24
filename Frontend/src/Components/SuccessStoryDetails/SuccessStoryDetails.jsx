import React, { useEffect, useState } from "react";
import "./SuccessStoryDetails.css";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiArrowRight,
} from "react-icons/fi";
import { useParams } from "react-router-dom";
import API, { getImageUrl } from "../../api/api";

import authorImage from "../../assets/Author-1.webp";
import comment1 from "../../assets/Author-2.webp";
import comment2 from "../../assets/Author-3.webp";

const SuccessStoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [comments, setComments] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const [form, setForm] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
  });

  /* ================= FETCH STORY ================= */
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await API.get(`/success-stories/${id}`);
        setStory(res.data);
      } catch (err) {
        console.error("FETCH STORY ERROR:", err);
      }
    };

    if (id) fetchStory();
  }, [id]);

  /* ================= FETCH COMMENTS ================= */
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await API.get(`/comments/${id}`);
        setComments(res.data);
      } catch (err) {
        console.error("FETCH COMMENT ERROR:", err);
      }
    };

    if (id) fetchComments();
  }, [id]);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.comment || !form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    try {
      await API.post("/comments", {
        ...form,
        storyId: id,
      });

      setForm({
        comment: "",
        name: "",
        email: "",
        website: "",
      });

      // Refresh comments
      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error("POST COMMENT ERROR:", err);
    }
  };

  const handleReplySubmit = async (parentId) => {
    if (!replyText) return;

    try {
      await API.post("/comments", {
        storyId: id,
        parentId,
        comment: replyText,
        name: form.name || "Guest",
        email: form.email || "guest@mail.com",
      });

      setReplyText("");
      setReplyingTo(null);

      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error("REPLY ERROR:", err);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await API.delete(`/comments/${commentId}`);

      const res = await API.get(`/comments/${id}`);
      setComments(res.data);
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  if (!story) return <div>Loading...</div>;

  return (
    <div className="successstorydetails-main-wrapper">
      {/* FEATURE IMAGE */}
      <div className="successstorydetails-feature-image">
        <img
          src={story.image ? getImageUrl(story.image) : "/placeholder.png"}
          alt="Story"
        />
      </div>

      {/* META INFO */}
      <div className="successstorydetails-meta-info">
        <span>
          <FiCalendar />{" "}
          {story.publishDate
            ? new Date(story.publishDate).toLocaleDateString()
            : ""}
        </span>
        <span>
          <FiUser /> {story.author}
        </span>
        <span>
          <FiClock /> 5 Min Read
        </span>
        <span>
          <FiMessageCircle /> {comments.filter((c) => !c.parentId).length}{" "}
          Comments
        </span>
      </div>

      {/* TITLE */}
      <h1 className="successstorydetails-main-title">{story.title}</h1>

      {/* DESCRIPTION */}
      <div
        className="successstorydetails-paragraph"
        dangerouslySetInnerHTML={{ __html: story.description }}
      />

      {/* QUOTE BOX */}
      {story.quotes && (
        <div className="successstorydetails-quote-section">
          <p>{story.quotes}</p>
        </div>
      )}

      {/* SUB HEADING */}
      {story.features && story.features.length > 0 && (
        <>
          <h2 className="successstorydetails-sub-title">
            What Will I Learn From This Course?
          </h2>

          <ul className="successstorydetails-learning-list">
            {story.features.map((item, index) => (
              <li key={index}>
                <span className="successstorydetails-yellow-icon">
                  <FiArrowRight />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* TAGS & SHARE (UNCHANGED) */}
      <div className="successstorydetails-tag-share">
        <div className="successstorydetails-tags">
          <span>Bath Cleaning</span>
          <span>Cleaning</span>
        </div>

        <div className="successstorydetails-share-icons">
          <span>Share :</span>
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>

      {/* AUTHOR CARD */}
      <div className="successstorydetails-author-card">
        <img src={authorImage} alt="Author" />
        <div>
          <span className="successstorydetails-author-role">Author</span>
          <h3>{story.author}</h3>
          <p>Thank you for reading this inspiring success story.</p>
        </div>
      </div>

      {/* DYNAMIC COMMENTS (UI SAME) */}
      <h2 className="successstorydetails-comments-title">
        {comments.length} Comments
      </h2>

      {comments
        .filter((c) => !c.parentId)
        .map((item) => (
          <div key={item._id} className="successstorydetails-comment-box">
            <img src={authorImage} alt="User" />
            <div>
              <h4>{item.name}</h4>
              <span>{new Date(item.createdAt).toLocaleDateString()}</span>

              {item.isDeleted ? (
                <p style={{ fontStyle: "italic", color: "gray" }}>
                  This comment was deleted
                </p>
              ) : (
                <p>{item.comment}</p>
              )}

              {!item.isDeleted && (
                <>
                  <button onClick={() => setReplyingTo(item._id)}>REPLY</button>

                  <button
                    style={{ marginLeft: "10px", color: "red" }}
                    onClick={() => handleDelete(item._id)}
                  >
                    DELETE
                  </button>
                </>
              )}

              {/* REPLY BOX */}
              {replyingTo === item._id && (
                <div style={{ marginTop: "10px" }}>
                  <textarea
                    placeholder="Write reply..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                  <button onClick={() => handleReplySubmit(item._id)}>
                    Submit Reply
                  </button>
                </div>
              )}

              {/* SHOW REPLIES */}
              {comments
                .filter((reply) => reply.parentId === item._id)
                .map((reply) => (
                  <div
                    key={reply._id}
                    style={{ marginTop: "10px", marginLeft: "40px" }}
                  >
                    <h5>{reply.name}</h5>
                    <span>
                      {new Date(reply.createdAt).toLocaleDateString()}
                    </span>

                    {reply.isDeleted ? (
                      <p style={{ fontStyle: "italic", color: "gray" }}>
                        This comment was deleted
                      </p>
                    ) : (
                      <p>{reply.comment}</p>
                    )}

                    {!reply.isDeleted && (
                      <button
                        style={{ color: "red" }}
                        onClick={() => handleDelete(reply._id)}
                      >
                        DELETE
                      </button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}

      {/* COMMENT FORM */}
      <div className="successstorydetails-comment-form">
        <h2>Post A Comment</h2>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>

        <textarea
          name="comment"
          placeholder="Comment"
          value={form.comment}
          onChange={handleChange}
        />

        <div className="successstorydetails-form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="website"
            placeholder="Website"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div className="successstorydetails-checkbox">
          <input
            type="checkbox"
            id="saveinfo"
            className="successstorydetails-checkbox-input"
          />
          <label
            htmlFor="saveinfo"
            className="successstorydetails-checkbox-label"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button
          className="successstorydetails-submit-btn"
          onClick={handleSubmit}
        >
          Post Comment <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SuccessStoryDetails;
