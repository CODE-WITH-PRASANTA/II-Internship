import React, { useState, useRef, useEffect } from "react";
import "./PostTestimonial.css";
import API, { getImageUrl } from "../../api/api";

const PostTestimonial = () => {
  const fileInputRef = useRef(null);

  const [editingId, setEditingId] = useState(null);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    designation: "",
    rating: 0,
    message: "",
    image: null,
  });

  /* ================= FETCH ================= */
  const fetchTestimonials = async () => {
    try {
      const res = await API.get("/testimonials");
      setTestimonials(res.data.data || []);
    } catch (error) {
      console.error("FETCH ERROR:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    const target = e.target;

    if (target.type === "file" && target.files) {
      setNewTestimonial({ ...newTestimonial, image: target.files[0] });
    } else {
      setNewTestimonial({
        ...newTestimonial,
        [target.name]: target.value,
      });
    }
  };

  /* ================= HANDLE EDIT ================= */
  const handleEdit = (testimonial) => {
    setEditingId(testimonial._id);

    setNewTestimonial({
      name: testimonial.name,
      designation: testimonial.designation,
      rating: testimonial.rating,
      message: testimonial.message,
      image: null,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= RATING ================= */
  const handleRating = (rating) => {
    setNewTestimonial({ ...newTestimonial, rating });
  };

  /* ================= CREATE / UPDATE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !newTestimonial.name ||
      !newTestimonial.designation ||
      !newTestimonial.message ||
      newTestimonial.rating === 0
    ) {
      alert("Please complete all fields !");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", newTestimonial.name);
      formData.append("designation", newTestimonial.designation);
      formData.append("rating", String(newTestimonial.rating));
      formData.append("message", newTestimonial.message);

      if (newTestimonial.image) {
        formData.append("image", newTestimonial.image);
      }

      if (editingId) {
        await API.put(`/testimonials/${editingId}`, formData);
        setEditingId(null);
      } else {
        await API.post("/testimonials", formData);
      }

      // Reset form
      setNewTestimonial({
        name: "",
        designation: "",
        rating: 0,
        message: "",
        image: null,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      fetchTestimonials();
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ================= TOGGLE PUBLISH ================= */
  const togglePublish = async (id) => {
    try {
      await API.put(`/testimonials/toggle/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error("TOGGLE ERROR:", error);
    }
  };

  /* ================= DELETE ================= */
  const deleteTestimonial = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;

    try {
      await API.delete(`/testimonials/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error("DELETE ERROR:", error);
    }
  };

  /* ================= CANCEL EDIT ================= */
  const cancelEdit = () => {
    setEditingId(null);
    setNewTestimonial({
      name: "",
      designation: "",
      rating: 0,
      message: "",
      image: null,
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="postTestimonial-container">
      {/* Left Panel */}
      <div className="postTestimonial-left">
        <h2 className="postTestimonial-title">💬 Post a New Testimonial</h2>

        <form className="postTestimonial-form" onSubmit={handleSubmit}>
          <div className="postTestimonial-formGroup">
            <label className="postTestimonial-label">Name *</label>
            <input
              type="text"
              name="name"
              className="postTestimonial-input"
              value={newTestimonial.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="postTestimonial-formGroup">
            <label className="postTestimonial-label">Designation *</label>
            <input
              type="text"
              name="designation"
              className="postTestimonial-input"
              value={newTestimonial.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="postTestimonial-formGroup">
            <label className="postTestimonial-label">Upload Photo</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="postTestimonial-fileInput"
              onChange={handleChange}
              ref={fileInputRef}
            />
          </div>

          <div className="postTestimonial-formGroup">
            <label className="postTestimonial-label">Rating</label>
            <div className="postTestimonial-starRating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`postTestimonial-star ${
                    star <= newTestimonial.rating ? "active" : ""
                  }`}
                  onClick={() => handleRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div className="postTestimonial-formGroup">
            <label className="postTestimonial-label">Your Message *</label>
            <textarea
              name="message"
              className="postTestimonial-textarea"
              value={newTestimonial.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          <button type="submit" className="postTestimonial-submitBtn">
            {editingId ? "✏ Update Testimonial" : "🚀 Post Testimonial"}
          </button>

          {editingId && (
            <button
              type="button"
              className="postTestimonial-btn delete"
              onClick={cancelEdit}
              style={{ marginTop: "10px", width: "100%" }}
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* Right Panel */}
      <div className="postTestimonial-right">
        <h2 className="postTestimonial-title">📋 Manage Testimonials</h2>

        <div className="postTestimonial-tableWrapper">
          {testimonials.length === 0 ? (
            <p className="postTestimonial-noData">
              No testimonials yet 💬
            </p>
          ) : (
            <table className="postTestimonial-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((t, index) => (
                  <tr key={t._id}>
                    <td>{index + 1}</td>
                    <td>
                      {t.image ? (
                        <img
                          src={getImageUrl(t.image)}
                          alt={t.name}
                          className="postTestimonial-photo"
                        />
                      ) : (
                        "—"
                      )}
                    </td>
                    <td>{t.name}</td>
                    <td>{t.designation}</td>
                    <td>
                      {"★".repeat(t.rating)}
                      {"☆".repeat(5 - t.rating)}
                    </td>
                    <td>
                      <span
                        className={`postTestimonial-status ${
                          t.published ? "active" : "inactive"
                        }`}
                      >
                        {t.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="postTestimonial-actions">
                      <button
                        className="postTestimonial-btn edit"
                        onClick={() => handleEdit(t)}
                      >
                        ✏ Edit
                      </button>

                      <button
                        className={`postTestimonial-btn ${
                          t.published ? "unpublish" : "publish"
                        }`}
                        onClick={() => togglePublish(t._id)}
                      >
                        {t.published ? "Unpublish" : "Publish"}
                      </button>

                      <button
                        className="postTestimonial-btn delete"
                        onClick={() => deleteTestimonial(t._id)}
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostTestimonial;