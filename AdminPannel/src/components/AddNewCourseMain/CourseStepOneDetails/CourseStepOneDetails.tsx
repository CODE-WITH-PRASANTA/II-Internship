import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./CourseStepOneDetails.css";

interface CourseStepOneDetailsProps {
  data?: any;
  onChange?: (data: any) => void;
}

const CourseStepOneDetails: React.FC<CourseStepOneDetailsProps> = ({
  data = {},
  onChange,
}) => {
  const [formData, setFormData] = useState({
    title: data?.title || "",
    shortDesc: data?.shortDesc || "",
    category: data?.category || "",
    level: data?.level || "",
    language: data?.language || "",
    featured: data?.featured || false,
    time: data?.time || "",
    lectures: data?.lectures || "",
    price: data?.price || "",
    discount: data?.discount || "",
    discountEnabled: data?.discountEnabled || false,
    description: data?.description || "",
  });

  // call parent's onChange whenever formData changes
  useEffect(() => {
    onChange?.(formData);
  }, [formData, onChange]);

  // animate sections on mount (safe typing)
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".coursesteponedetails-section"
    );
    sections.forEach((sec, i) => {
      // cast to HTMLElement before using .style
      if (sec instanceof HTMLElement) {
        sec.classList.add("fade-in");
        sec.style.animationDelay = `${i * 0.15}s`;
      }
    });

    // cleanup: remove class (not strictly necessary, but tidy)
    return () => {
      sections.forEach((sec) => {
        if (sec instanceof HTMLElement) {
          sec.classList.remove("fade-in");
          sec.style.animationDelay = "";
        }
      });
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => {
      const updated = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
      // call onChange with the latest updated object
      onChange?.(updated);
      return updated;
    });
  };

  return (
    <div className="coursesteponedetails-form">
      <h2 className="coursesteponedetails-heading">Course Details</h2>

      {/* ===== Basic Info ===== */}
      <div className="coursesteponedetails-section">
        <div className="coursesteponedetails-group">
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter course title"
          />
        </div>

        <div className="coursesteponedetails-group">
          <label>Short Description</label>
          <input
            type="text"
            name="shortDesc"
            value={formData.shortDesc}
            onChange={handleChange}
            placeholder="Enter short description or keywords"
          />
        </div>
      </div>

      {/* ===== Select Inputs ===== */}
      <div className="coursesteponedetails-section two-column">
        <div className="coursesteponedetails-group">
          <label>Course Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>UI/UX Design</option>
          </select>
        </div>

        <div className="coursesteponedetails-group">
          <label>Course Level</label>
          <select name="level" value={formData.level} onChange={handleChange}>
            <option value="">Select course level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>

      {/* ===== Language & Featured ===== */}
      <div className="coursesteponedetails-section two-column">
        <div className="coursesteponedetails-group">
          <label>Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="">Select language</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Odia</option>
          </select>
        </div>

        <div className="coursesteponedetails-toggle">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
          />
          <label htmlFor="featured">Mark as Featured Course</label>
        </div>
      </div>

      {/* ===== Time & Lectures ===== */}
      <div className="coursesteponedetails-section two-column">
        <div className="coursesteponedetails-group">
          <label>Course Time (hrs)</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="e.g. 12 hours"
          />
        </div>

        <div className="coursesteponedetails-group">
          <label>Total Lectures</label>
          <input
            type="text"
            name="lectures"
            value={formData.lectures}
            onChange={handleChange}
            placeholder="Enter total lectures"
          />
        </div>
      </div>

      {/* ===== Pricing ===== */}
      <div className="coursesteponedetails-section two-column">
        <div className="coursesteponedetails-group">
          <label>Course Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter course price"
          />
        </div>

        <div className="coursesteponedetails-group">
          <label>Discount Price</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            placeholder="Enter discount price"
          />
          <div className="coursesteponedetails-discount">
            <input
              type="checkbox"
              id="discountEnabled"
              name="discountEnabled"
              checked={formData.discountEnabled}
              onChange={handleChange}
            />
            <label htmlFor="discountEnabled">Enable Discount</label>
          </div>
        </div>
      </div>

      {/* ===== Description ===== */}
      <div className="coursesteponedetails-description">
        <h3>Course Description</h3>
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={(value) =>
            setFormData((prev) => {
              const updated = { ...prev, description: value };
              onChange?.(updated);
              return updated;
            })
          }
          placeholder="Write your course description here..."
        />
      </div>
    </div>
  );
};

export default CourseStepOneDetails;
