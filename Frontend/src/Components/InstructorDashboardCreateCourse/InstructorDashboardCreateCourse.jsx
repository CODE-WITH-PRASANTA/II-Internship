import React, { useState } from "react";
import "./InstructorDashboardCreateCourse.css";

const InstructorDashboardCreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    level: "",
    tags: "",
    isFree: false,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Created:", formData);
    alert("✅ Course created successfully!");
    setFormData({
      title: "",
      description: "",
      price: "",
      category: "",
      level: "",
      tags: "",
      isFree: false,
      thumbnail: null,
    });
  };

  return (
    <div className="full-screen-form">
      <form onSubmit={handleSubmit} className="form-content">
        <h1>Create Your Course</h1>

        <div className="form-group">
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            placeholder="Enter course title"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            placeholder="Write a short course description..."
            rows="4"
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              placeholder={formData.isFree ? "Free" : "Enter course price"}
              onChange={handleChange}
              disabled={formData.isFree}
              required={!formData.isFree}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="business">Business</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              required
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="form-group">
            <label>Tags</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              placeholder="e.g. React, Node, UI/UX"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group checkbox-group">
          <input
            type="checkbox"
            name="isFree"
            checked={formData.isFree}
            onChange={handleChange}
            id="isFree"
          />
          <label htmlFor="isFree">Free Course</label>
        </div>

        <div className="form-group">
          <label>Thumbnail</label>
          <input type="file" name="thumbnail" onChange={handleChange} />
          {formData.thumbnail && (
            <img
              src={URL.createObjectURL(formData.thumbnail)}
              alt="Thumbnail Preview"
              className="thumbnail-preview"
            />
          )}
        </div>

        <button type="submit" className="submit-btn">
          Create Course
        </button>
      </form>
    </div>
  );
};

export default InstructorDashboardCreateCourse;
