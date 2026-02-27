import React, { useState } from "react";
import "./AddNewCourseMain.css";
import API from "../../api/api";

const initialForm = {
  title: "",
  shortQuote: "",
  author: "",
  authorDesignation: "",
  pricing: "",
  timeline: "",
  rating: "",
  category: "",
  tags: "",
  description: "",
  whatYouLearn: "",
  otherInfo: "",
  discount: "",
  priceIncreaseDate: "",
  priceIncreaseTimeline: "",
  certificate: "",
  language: "",
  skillLevel: "",
  duration: "",
  totalLectures: "",
  demoVideoUrl: "",
  teacher: "",
  designation: "",
  instagram: "",
  linkedin: "",
  twitter: "",
  aboutInstructor: "",
  email: "",
  website: "",
};

const AddNewCourseMain: React.FC = () => {
  const [phase, setPhase] = useState<number>(1);
  const [form, setForm] = useState<any>(initialForm);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [chapters, setChapters] = useState([{ title: "", videos: [""] }]);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: string, value: any) => {
    setForm((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextPhase = () => setPhase((prev) => prev + 1);
  const prevPhase = () => setPhase((prev) => prev - 1);

  const handleSave = () => {
    alert("Data Saved Successfully ✅");
  };

  const handleSubmit = async () => {
    try {
      if (!form.title.trim() || !form.pricing || !form.category) {
        alert("Please fill required fields");
        return;
      }
      const formData = new FormData();

      // Append all normal fields
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
      });

      // Append chapters array
      formData.append("chapters", JSON.stringify(chapters));

      // Append thumbnail
      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }
      setLoading(true);
      await API.post("/courses", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setForm(initialForm);
      setChapters([{ title: "", videos: [""] }]);
      setThumbnail(null);
      setPhase(1);
      setLoading(false);
      alert("Course Submitted Successfully 🚀");
    } catch (error) {
      console.error("COURSE SUBMIT ERROR:", error);
      alert("Something went wrong ❌");
      setLoading(false); // 🔥 ADD THIS
    }
  };

  const addChapter = () => {
    setChapters([...chapters, { title: "", videos: [""] }]);
  };

  const addVideo = (index: number) => {
    const updated = [...chapters];
    updated[index].videos.push("");
    setChapters(updated);
  };

  // Safe thumbnail preview
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  React.useEffect(() => {
    if (!thumbnail) {
      setPreviewImage(null);
      return;
    }

    const objectUrl = URL.createObjectURL(thumbnail);
    setPreviewImage(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [thumbnail]);

  // Safe number conversion
  const numericPrice = isNaN(Number(form.pricing)) ? 0 : Number(form.pricing);

  const numericDiscount = isNaN(Number(form.discount))
    ? 0
    : Number(form.discount);

  // Discount calculation
  const safeDiscount = Math.min(numericDiscount, 100);

  const finalPrice =
    safeDiscount > 0
      ? numericPrice - (numericPrice * safeDiscount) / 100
      : numericPrice;

  return (
    <div className="flex w-full min-h-screen">
      {/* LEFT SIDE (70%) */}
      <div className="w-full lg:w-[70%] flex justify-center">
        <div className="coursepost-card w-full">
          <h2 className="coursepost-title">Course Posting Panel</h2>

          {/* Progress Indicator */}
          <div className="coursepost-progress">
            {[1, 2, 3, 4, 5].map((step) => (
              <div
                key={step}
                className={`coursepost-step ${phase >= step ? "active" : ""}`}
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
                <input
                  key={thumbnail ? "with-file" : "no-file"}
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                />
                <input
                  required
                  placeholder="Course Title"
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>

              <textarea
                placeholder="Course Short Quote"
                onChange={(e) => handleChange("shortQuote", e.target.value)}
              />

              <div className="coursepost-grid-2">
                <input
                  placeholder="Author Name"
                  onChange={(e) => handleChange("author", e.target.value)}
                />
                <input
                  placeholder="Author Designation"
                  onChange={(e) =>
                    handleChange("authorDesignation", e.target.value)
                  }
                />
              </div>

              <div className="coursepost-grid-2">
                <input
                  placeholder="Pricing"
                  onChange={(e) => handleChange("pricing", e.target.value)}
                />
                <input
                  placeholder="Timeline"
                  onChange={(e) => handleChange("timeline", e.target.value)}
                />
              </div>

              <div className="coursepost-grid-2">
                <select
                  onChange={(e) => handleChange("rating", e.target.value)}
                >
                  <option value="">Rating</option>
                  <option>4.1</option>
                  <option>4.2</option>
                  <option>4.3</option>
                  <option>4.4</option>
                </select>

                <select
                  onChange={(e) => handleChange("category", e.target.value)}
                >
                  <option value="">Category</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>

              <input
                placeholder="Tags (3 tags separated by comma)"
                onChange={(e) => handleChange("tags", e.target.value)}
              />

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

              <textarea
                placeholder="Course Description"
                onChange={(e) => handleChange("description", e.target.value)}
              />
              <textarea
                placeholder="What You'll Learn (One per line)"
                onChange={(e) => handleChange("whatYouLearn", e.target.value)}
              />
              <textarea
                placeholder="Other Course Information"
                onChange={(e) => handleChange("otherInfo", e.target.value)}
              />
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
                  <input
                    placeholder="Chapter Title"
                    onChange={(e) => {
                      const updated = [...chapters];
                      updated[index].title = e.target.value;
                      setChapters(updated);
                    }}
                  />
                  <button
                    type="button"
                    className="coursepost-add"
                    onClick={addChapter}
                  >
                    + Chapter
                  </button>

                  {chapter.videos.map((video, vIndex) => (
                    <div key={vIndex} className="coursepost-video">
                      <input
                        placeholder="Video URL"
                        onChange={(e) => {
                          const updated = [...chapters];
                          updated[index].videos[vIndex] = e.target.value;
                          setChapters(updated);
                        }}
                      />
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
                <input
                  placeholder="Discount %"
                  onChange={(e) => {
                    const value = Math.min(
                      100,
                      Math.max(0, Number(e.target.value)),
                    );
                    handleChange("discount", value);
                  }}
                />
                <input
                  placeholder="Timeline to Increase Price"
                  onChange={(e) =>
                    handleChange("priceIncreaseTimeline", e.target.value)
                  }
                />
              </div>

              <div className="coursepost-grid-2">
                <select
                  onChange={(e) => handleChange("certificate", e.target.value)}
                >
                  <option>Certificate</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <input
                  type="date"
                  onChange={(e) =>
                    handleChange("priceIncreaseDate", e.target.value)
                  }
                />
              </div>

              <div className="coursepost-grid-2">
                <input
                  placeholder="Language"
                  onChange={(e) => handleChange("language", e.target.value)}
                />
                <select
                  onChange={(e) => handleChange("skillLevel", e.target.value)}
                >
                  <option>Skill Level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advance</option>
                </select>
              </div>

              <div className="coursepost-grid-2">
                <input
                  placeholder="Duration"
                  onChange={(e) => handleChange("duration", e.target.value)}
                />
                <input
                  type="number"
                  min="0"
                  placeholder="Pricing"
                  onChange={(e) => handleChange("pricing", e.target.value)}
                />
              </div>

              <input
                placeholder="Demo Video URL"
                onChange={(e) => handleChange("demoVideoUrl", e.target.value)}
              />

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

              <select onChange={(e) => handleChange("teacher", e.target.value)}>
                <option value="">Select Teacher</option>
                <option>John Doe</option>
                <option>Jane Smith</option>
              </select>

              <input
                placeholder="Designation"
                onChange={(e) => handleChange("designation", e.target.value)}
              />
              <div className="coursepost-grid-3">
                <input
                  placeholder="Instagram URL"
                  onChange={(e) => handleChange("instagram", e.target.value)}
                />

                <input
                  placeholder="LinkedIn URL"
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                />

                <input
                  placeholder="Twitter URL"
                  onChange={(e) => handleChange("twitter", e.target.value)}
                />
              </div>

              <textarea
                placeholder="About Instructor for this Course"
                onChange={(e) =>
                  handleChange("aboutInstructor", e.target.value)
                }
              />

              <div className="coursepost-grid-2">
                <input
                  placeholder="Mail ID"
                  onChange={(e) => handleChange("email", e.target.value)}
                />

                <input
                  placeholder="Website"
                  onChange={(e) => handleChange("website", e.target.value)}
                />
              </div>

              <div className="coursepost-btns">
                <button onClick={handleSave} className="coursepost-save">
                  Save
                </button>
                <button
                  onClick={handleSubmit}
                  className={`coursepost-submit ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
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

      {/* RIGHT SIDE (30%) */}
      <div className="hidden lg:flex lg:w-[30%] bg-gray-50 border-l border-gray-200 p-6 flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-4">Live Preview</h3>

          <div className="bg-white shadow-md rounded-lg p-4 space-y-4">
            {/* Thumbnail */}
            <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
              {previewImage ? (
                <img
                  src={previewImage}
                  alt="Course Thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-gray-400 text-sm">Course Thumbnail</span>
              )}
            </div>

            {/* Title + Quote */}
            <div>
              <h4 className="font-bold text-lg">
                {form.title || "Course Title"}
              </h4>
              <p className="text-sm text-gray-500">
                {form.shortQuote || "Short quote will appear here"}
              </p>
            </div>

            {/* Pricing + Rating */}
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                ₹ {numericPrice ? finalPrice : "Pricing"}
                {numericDiscount > 0 && (
                  <span className="line-through ml-2 text-gray-400">
                    ₹ {numericPrice}
                  </span>
                )}
              </span>
              <span>⭐ {form.rating || "Rating"}</span>
            </div>

            {/* Category + Timeline */}
            <div className="text-sm text-gray-600">
              {form.category || "Category"} • {form.timeline || "Timeline"}
            </div>

            {/* Discount Badge */}
            {numericDiscount > 0 && (
              <div className="text-sm text-green-600 font-medium">
                {numericDiscount}% Discount Applied
              </div>
            )}

            {/* Language + Skill */}
            <div className="text-sm text-gray-600">
              {form.language || "Language"} • {form.skillLevel || "Skill Level"}
            </div>

            {/* Duration + Lectures */}
            <div className="text-sm text-gray-600">
              {form.duration || "Duration"} • {form.totalLectures || "0"}{" "}
              Lectures
            </div>

            {/* Certificate */}
            {form.certificate && (
              <div className="text-sm text-gray-600">
                Certificate: {form.certificate}
              </div>
            )}

            {/* Instructor */}
            {form.teacher && (
              <div className="text-sm text-gray-600">
                Instructor: {form.teacher}
              </div>
            )}

            {/* Instructor Social */}
            {(form.instagram || form.linkedin || form.twitter) && (
              <div className="text-sm text-gray-600">
                Social:
                {form.instagram && " Instagram"}
                {form.linkedin && " LinkedIn"}
                {form.twitter && " Twitter"}
              </div>
            )}

            {/* Chapters Count */}
            {chapters.length > 0 && (
              <div className="text-sm text-gray-600">
                Chapters: {chapters.length}
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-sm text-gray-400">Phase: {phase} / 5</div>
      </div>
    </div>
  );
};

export default AddNewCourseMain;
