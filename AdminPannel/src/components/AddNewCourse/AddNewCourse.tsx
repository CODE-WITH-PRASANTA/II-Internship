import React, { useState, ChangeEvent, FormEvent } from "react";
import "./AddNewCourse.css";
import {
  BookOpen,
  Image,
  ListChecks,
  Info,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import i1 from "../../Asserts/gallery.webp";

const AddNewCourse: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    category: "",
    level: "",
    language: "",
    featured: false,
    time: "",
    lectures: "",
    price: "",
    discount: "",
    discountEnabled: false,
    description: "",
  });

  const steps = [
    { id: 1, label: "Course Details", icon: <BookOpen size={20} /> },
    { id: 2, label: "Course Media", icon: <Image size={20} /> },
    { id: 3, label: "Curriculum", icon: <ListChecks size={20} /> },
    { id: 4, label: "Additional Info", icon: <Info size={20} /> },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? (target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const nextStep = () => step < 4 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Course Submitted ✅", formData);
    setStep(5); // Go to success page
  };

  return (
    <div className="addCourse-container">
      {/* ==== HEADER ==== */}
      <div className="addCourse-header">
        <h1>Submit a New Course</h1>
        <p>
          Read our <a href="#">“Before you create a course”</a> guide before
          submitting.
        </p>
      </div>

      {/* ==== STEPPER ==== */}
      {step < 5 && (
        <div className="addCourse-steps">
          {steps.map((s) => (
            <div
              key={s.id}
              className={`step ${step === s.id ? "active" : ""}`}
              onClick={() => setStep(s.id)}
            >
              <div className="step-circle">{s.id}</div>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* ==== SUCCESS PAGE ==== */}
      {step === 5 ? (
        <div className="success-page">
          <CheckCircle className="success-icon" size={70} color="#28a745" />
          <h2>Course Submitted Successfully!</h2>
          <p>
            Your course has been uploaded and is now pending review. We’ll
            notify you once it’s approved and live on the platform.
          </p>
          <button className="back-btn" onClick={() => setStep(1)}>
            Add Another Course
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* ==== STEP 1 ==== */}
{step === 1 && (
  <div className="addCourse-form modern-form">
    <h2 className="form-heading">Course Details</h2>

    {/* ===== Basic Info ===== */}
    <div className="form-section">
      <div className="form-group">
        <label>Course Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter course title"
        />
      </div>

      <div className="form-group">
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
    <div className="form-section two-column">
      <div className="form-group">
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

      <div className="form-group">
        <label>Course Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          <option value="">Select course level</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>
    </div>

    <div className="form-section two-column">
      <div className="form-group">
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

      <div className="form-toggle">
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

    {/* ===== Course Stats ===== */}
    <div className="form-section two-column">
      <div className="form-group">
        <label>Course Time (hrs)</label>
        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="e.g. 12 hours"
        />
      </div>

      <div className="form-group">
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
    <div className="form-section two-column">
      <div className="form-group">
        <label>Course Price</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter course price"
        />
      </div>

      <div className="form-group">
        <label>Discount Price</label>
        <input
          type="text"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="Enter discount price"
        />
        <div className="discount-toggle">
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

    {/* ===== Additional Info ===== */}
    <div className="form-section description-block">
      <h3>Course Description</h3>
      <ReactQuill
        theme="snow"
        value={formData.description}
        onChange={(value) =>
          setFormData({ ...formData, description: value })
        }
        placeholder="Write your course description here..."
      />
    </div>
  </div>
)}


          {/* ==== STEP 2 ==== */}
          {step === 2 && (
            <div className="addCourse-form course-media-section">
              <h2 className="section-title">Course Media</h2>
              <hr className="section-divider" />

              <div className="course-image-upload">
                <div className="upload-area">
                  <img src={i1} alt="upload icon" className="upload-icon" />
                  <p className="upload-text">
                    <strong>Upload course image here, or </strong>
                    <a href="#" className="browse-link">
                      Browse
                    </a>
                  </p>

                  <div className="file-input-container">
                    <label htmlFor="courseImage" className="file-btn">
                      Choose File
                    </label>
                    <span className="file-name">No file chosen</span>
                    <input
                      type="file"
                      id="courseImage"
                      accept=".jpg,.jpeg,.png"
                      hidden
                    />
                  </div>

                  <p className="note">
                    <strong>Note:</strong> Only JPG, JPEG and PNG. Suggested
                    600x450px.
                  </p>
                </div>
                <button type="button" className="remove-btn">
                  Remove image
                </button>
              </div>

              <div className="upload-video-section">
                <h3>Upload video</h3>
                <div className="form-group">
                  <label>Video URL</label>
                  <input
                    type="text"
                    placeholder="Enter video URL"
                    className="video-url-input"
                  />
                </div>

                <div className="divider">
                  <span>Or</span>
                </div>

                <div className="video-upload-options">
                  <div className="form-group video-row">
                    <label className="file-label">
                      <input type="file" accept=".mp4" /> Choose File
                    </label>
                    <span className="file-name">.mp4</span>
                  </div>
                  <div className="form-group video-row">
                    <label className="file-label">
                      <input type="file" accept=".webm" /> Choose File
                    </label>
                    <span className="file-name">.WebM</span>
                  </div>
                  <div className="form-group video-row">
                    <label className="file-label">
                      <input type="file" accept=".ogg" /> Choose File
                    </label>
                    <span className="file-name">.OGG</span>
                  </div>
                </div>

                <div className="video-preview">
                  <h3>Video preview</h3>
                  <div className="preview-box">
                    <img
                      src="https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg"
                      alt="Video preview"
                      className="preview-image"
                    />
                    <button className="play-button">
                      <span className="play-icon">▶</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ==== STEP 3 ==== */}
          {step === 3 && (
            <div className="addCourse-form curriculum-step">
              <h2 className="section-title">Curriculum</h2>
              <div className="curriculum-upload">
                <h3>Upload Lecture</h3>
                <div className="lecture-section">
                  <div className="lecture-header">
                    <strong>Introduction of Digital Marketing</strong>
                    <button className="add-lecture-btn">
                      <i className="fa fa-plus-circle"></i> Add Lecture
                    </button>
                  </div>

                  <div className="lecture-topics">
                    <div className="topic-item">
                      <span className="play-icon">
                        <i className="fa fa-play-circle"></i>
                      </span>
                      <span className="topic-title">Introduction</span>
                      <div className="topic-actions">
                        <button className="edit-btn">
                          <i className="fa fa-edit"></i>
                        </button>
                        <button className="delete-btn">
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div className="topic-item">
                      <span className="play-icon">
                        <i className="fa fa-play-circle"></i>
                      </span>
                      <span className="topic-title">
                        What is Digital Marketing
                      </span>
                      <div className="topic-actions">
                        <button className="edit-btn">
                          <i className="fa fa-edit"></i>
                        </button>
                        <button className="delete-btn">
                          <i className="fa fa-times"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="add-topic-btn">
                    <i className="fa fa-plus"></i> Add Topic
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ==== STEP 4 ==== */}
          {step === 4 && (
            <div className="addCourse-form additional-info-step">
              <h2 className="section-title">Additional information</h2>

              <div className="info-section">
                <div className="info-header">
                  <h3>Upload FAQs</h3>
                  <button className="add-btn">
                    <i className="fa fa-plus-circle"></i> Add Question
                  </button>
                </div>

                <div className="faq-card">
                  <div className="faq-header">
                    <strong>How Digital Marketing Work?</strong>
                    <div className="faq-actions">
                      <button className="edit-btn">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <p className="faq-body">
                    Comfort reached gay perhaps chamber his six detract besides
                    add. Moonlight newspaper up its enjoyment agreeable
                    depending.
                  </p>
                </div>

                <div className="faq-card">
                  <div className="faq-header">
                    <strong>What is SEO?</strong>
                    <div className="faq-actions">
                      <button className="edit-btn">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button className="delete-btn">
                        <i className="fa fa-times"></i>
                      </button>
                    </div>
                  </div>
                  <p className="faq-body">
                    SEO stands for Search Engine Optimization — helps websites
                    rank better in search results.
                  </p>
                </div>
              </div>

              <div className="info-section">
                <h3>Tags</h3>
                <input
                  type="text"
                  className="tag-input"
                  placeholder="Enter tags"
                />
                <p className="tag-hint">
                  Maximum of 14 keywords. Use lowercase, e.g. javascript, react.
                </p>
              </div>

              <div className="info-section">
                <h3>Message to reviewer</h3>
                <textarea
                  className="message-box"
                  placeholder="Write a message"
                  rows={5}
                ></textarea>

                <label className="checkbox-line">
                  <input type="checkbox" /> Any assets not my own are licensed
                  and I have rights to sell.
                </label>
              </div>

              <p className="submit-note">
                Once you click "Submit a Course", your course will be uploaded
                and marked as pending for review.
              </p>
            </div>
          )}

          {/* ==== STEP NAVIGATION ==== */}
          <div className="step-nav">
            {step > 1 && (
              <button type="button" className="prev-btn" onClick={prevStep}>
                <ArrowLeft size={18} /> Previous
              </button>
            )}
            {step < 4 && (
              <button type="button" className="next-btn" onClick={nextStep}>
                Next <ArrowRight size={18} />
              </button>
            )}
            {step === 4 && (
              <button type="submit" className="submit-btn">
                Submit Course
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewCourse;
