import React, { useState } from "react";
import "./AddNewCourseMain.css";

const AddNewCourseMain: React.FC = () => {
  const [phase, setPhase] = useState<number>(1);

  const nextPhase = () => setPhase((prev) => prev + 1);
  const prevPhase = () => setPhase((prev) => prev - 1);

  const handleSave = () => {
    alert("Data Saved Successfully ✅");
  };

  const handleSubmit = () => {
    alert("Course Submitted Successfully 🚀");
  };

  const [chapters, setChapters] = useState([
    { title: "", videos: [""] },
  ]);

  const addChapter = () => {
    setChapters([...chapters, { title: "", videos: [""] }]);
  };

  const addVideo = (index: number) => {
    const updated = [...chapters];
    updated[index].videos.push("");
    setChapters(updated);
  };

  return (
    <div className="coursepost-container">
      <div className="coursepost-card">
        <h2 className="coursepost-title">Course Posting Panel</h2>

        {/* Progress Indicator */}
        <div className="coursepost-progress">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`coursepost-step ${
                phase >= step ? "active" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        {/* ---------------- PHASES ---------------- */}

        {phase === 1 && (
          <div className="coursepost-section">
            <h3>Basic Information</h3>

            <div className="coursepost-grid-2">
              <input type="file" />
              <input placeholder="Course Title" />
            </div>

            <textarea placeholder="Course Short Quote" />

            <div className="coursepost-grid-2">
              <input placeholder="Author Name" />
              <input placeholder="Author Designation" />
            </div>

            <div className="coursepost-grid-2">
              <input placeholder="Pricing" />
              <input placeholder="Timeline" />
            </div>

            <div className="coursepost-grid-2">
              <select>
                <option>Rating</option>
                <option>4.1</option>
                <option>4.2</option>
                <option>4.3</option>
                <option>4.4</option>
              </select>

              <select>
                <option>Category</option>
                <option>Development</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>

            <input placeholder="Tags (3 tags separated by comma)" />

            <div className="coursepost-btns">
              <button onClick={handleSave} className="coursepost-save">
                Save
              </button>
              <button onClick={nextPhase} className="coursepost-next">
                Next →
              </button>
            </div>
          </div>
        )}

        {phase === 2 && (
          <div className="coursepost-section">
            <h3>Main Information</h3>

            <textarea placeholder="Course Description" />
            <textarea placeholder="What You'll Learn (One per line)" />
            <textarea placeholder="Other Course Information" />

            <div className="coursepost-btns">
              <button onClick={handleSave} className="coursepost-save">
                Save
              </button>
              <button onClick={nextPhase} className="coursepost-next">
                Next →
              </button>
            </div>
          </div>
        )}

        {phase === 3 && (
          <div className="coursepost-section">
            <h3>Curriculum</h3>

            {chapters.map((chapter, index) => (
              <div key={index} className="coursepost-chapter">
                <input placeholder="Chapter Title" />
                <button
                  type="button"
                  className="coursepost-add"
                  onClick={addChapter}
                >
                  + Chapter
                </button>

                {chapter.videos.map((video, vIndex) => (
                  <div key={vIndex} className="coursepost-video">
                    <input placeholder="Video URL" />
                    <button
                      type="button"
                      className="coursepost-add"
                      onClick={() => addVideo(index)}
                    >
                      + Video
                    </button>
                  </div>
                ))}
              </div>
            ))}

            <div className="coursepost-btns">
              <button onClick={handleSave} className="coursepost-save">
                Save
              </button>
              <button onClick={nextPhase} className="coursepost-next">
                Next →
              </button>
            </div>
          </div>
        )}

        {phase === 4 && (
          <div className="coursepost-section">
            <h3>Course Settings</h3>

            <div className="coursepost-grid-2">
              <input placeholder="Discount %" />
              <input placeholder="Timeline to Increase Price" />
            </div>

            <div className="coursepost-grid-2">
              <select>
                <option>Certificate</option>
                <option>Yes</option>
                <option>No</option>
              </select>
              <input type="date" />
            </div>

            <div className="coursepost-grid-2">
              <input placeholder="Language" />
              <select>
                <option>Skill Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advance</option>
              </select>
            </div>

            <div className="coursepost-grid-2">
              <input placeholder="Duration" />
              <input type="number" placeholder="Total Lectures (1-50)" />
            </div>

            <input placeholder="Demo Video URL" />

            <div className="coursepost-btns">
              <button onClick={handleSave} className="coursepost-save">
                Save
              </button>
              <button onClick={nextPhase} className="coursepost-next">
                Next →
              </button>
            </div>
          </div>
        )}

        {phase === 5 && (
          <div className="coursepost-section">
            <h3>Instructor Information</h3>

            <select>
              <option>Select Teacher</option>
              <option>John Doe</option>
              <option>Jane Smith</option>
            </select>

            <input placeholder="Designation" />

            <div className="coursepost-grid-3">
              <input placeholder="Instagram URL" />
              <input placeholder="LinkedIn URL" />
              <input placeholder="Twitter URL" />
            </div>

            <textarea placeholder="About Instructor for this Course" />

            <div className="coursepost-grid-2">
              <input placeholder="Mail ID" />
              <input placeholder="Website" />
            </div>

            <div className="coursepost-btns">
              <button onClick={handleSave} className="coursepost-save">
                Save
              </button>
              <button onClick={handleSubmit} className="coursepost-submit">
                Submit
              </button>
            </div>
          </div>
        )}

        {phase > 1 && (
          <button className="coursepost-back" onClick={prevPhase}>
            ← Back
          </button>
        )}
      </div>
    </div>
  );
};

export default AddNewCourseMain;