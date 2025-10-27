import React, { useState } from "react";
import "./CreateNewCourse.css";

const CreateNewCourse = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    level: "",
    description: "",
    freeCourse: false,
    price: "",
    hasDiscount: false,
    discountPrice: "",
    expiry: "lifetime",
    days: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="createnewcourse">
      <div className="createnewcourse-header">
        <h1>Add New Course</h1>
        <p>Fill the form carefully and create your new course effortlessly.</p>
      </div>

      {step <= 4 && (
        <div className="createnewcourse-container">
          {/* Step progress indicator */}
          <div className="createnewcourse-steps">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`createnewcourse-step ${
                  step === num ? "active" : step > num ? "completed" : ""
                }`}
              >
                <div className="circle">{num}</div>
                <p>
                  {num === 1
                    ? "Info"
                    : num === 2
                    ? "Curriculum"
                    : num === 3
                    ? "Pricing"
                    : "SEO"}
                </p>
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 1 && (
            <div className="createnewcourse-stepcontent fade-in">
              <h3>Basic Information</h3>
              <p>Fill in the basic information for your course.</p>

              <label>Course Title</label>
              <input
                type="text"
                placeholder="Enter course title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <small>Write a 60 character course title.</small>

              <label>Courses Category</label>
              <input
                type="text"
                placeholder="Web Design"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />

              <label>Courses Level</label>
              <input
                type="text"
                placeholder="Beginners"
                name="level"
                value={formData.level}
                onChange={handleChange}
              />

              <label>Course Description</label>
              <textarea
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />

              <h4>Course Media</h4>
              <p>
                Upload a professional thumbnail, preview video, and additional
                resources.
              </p>

              <div className="createnewcourse-upload">
                <label>Course Thumbnail *</label>
                <input type="file" />
                <small>Recommended: 800x600px | JPG/PNG</small>
              </div>

              <div className="createnewcourse-upload">
                <label>Preview Video</label>
                <input type="file" />
                <small>Format: MP4/WebM | Max: 100MB</small>
              </div>

              <div className="createnewcourse-upload">
                <label>Course Resources</label>
                <input type="file" multiple />
                <small>Optional: PDF, ZIP, or DOCX | Max 5 files</small>
              </div>

              <div className="createnewcourse-buttons">
                <button disabled>Previous</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="createnewcourse-stepcontent fade-in">
              <h3>Course Curriculum</h3>
              <p>
                Add course sections and lessons below. You can add as many as
                needed.
              </p>

              <label>Lesson Title</label>
              <input type="text" placeholder="e.g., Getting Started" />

              <label>Lecture Title</label>
              <input type="text" placeholder="e.g., Introduction" />

              <label>Lecture Description</label>
              <textarea placeholder="Lecture description..." />

              <button className="add-lesson-btn">+ Add Lesson</button>

              <div className="createnewcourse-buttons">
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="createnewcourse-stepcontent fade-in">
              <h3>Pricing</h3>
              <div className="pricing-box">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="freeCourse"
                    checked={formData.freeCourse}
                    onChange={handleChange}
                  />
                  Is this a free course?
                </label>
                <small>Check if this is a free course.</small>
              </div>

              <div className="form-group">
                <label>Course Price ($)</label>
                <input
                  type="text"
                  placeholder="e.g., 99"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="pricing-box">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="hasDiscount"
                    checked={formData.hasDiscount}
                    onChange={handleChange}
                  />
                  This course has a discount
                </label>
                <small>Check if this course has discount.</small>
              </div>

              <div className="form-group">
                <label>Discount Price ($)</label>
                <input
                  type="text"
                  placeholder="e.g., 99"
                  name="discountPrice"
                  value={formData.discountPrice}
                  onChange={handleChange}
                />
                <p className="discount-text">This course has 10.5% discount.</p>
              </div>

              <div className="form-group">
                <label>Discount Expiry Period</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="expiry"
                      value="lifetime"
                      checked={formData.expiry === "lifetime"}
                      onChange={handleChange}
                    />
                    Lifetime
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="expiry"
                      value="limited"
                      checked={formData.expiry === "limited"}
                      onChange={handleChange}
                    />
                    Limited Period
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Number of Days</label>
                <input
                  type="text"
                  placeholder="e.g., 20"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                />
              </div>

              <div className="createnewcourse-buttons">
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="createnewcourse-stepcontent fade-in">
              <h3>SEO Settings</h3>

              <label>SEO Meta Title</label>
              <input type="text" placeholder="e.g., Advanced JavaScript" />
              <small>Use max 65 characters only.</small>

              <label>SEO Description</label>
              <textarea placeholder="e.g., Meta Description" />
              <small>Use max 150 characters only.</small>

              <label>Course Tags</label>
              <input type="text" placeholder="e.g., Design, Figma, Java" />
              <small>Use tags with commas.</small>

              <label>Visibility</label>
              <select>
                <option>Public</option>
                <option>Private</option>
              </select>

              <div className="createnewcourse-buttons">
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Submit</button>
              </div>
            </div>
          )}
        </div>
      )}

      {step === 5 && (
        <div className="createnewcourse-success fade-in">
          <h2>🎉 Course Added Successfully!</h2>
          <div className="createnewcourse-details">
            <p>
              <strong>Course Title:</strong> {formData.title || "N/A"}
            </p>
            <p>
              <strong>Category:</strong> {formData.category || "N/A"}
            </p>
            <p>
              <strong>Level:</strong> {formData.level || "N/A"}
            </p>
            <p>
              <strong>Price:</strong> {formData.price || "Free"}
            </p>
            <p>
              <strong>Discount:</strong>{" "}
              {formData.hasDiscount
                ? `${formData.discountPrice || "N/A"}`
                : "No Discount"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewCourse;
