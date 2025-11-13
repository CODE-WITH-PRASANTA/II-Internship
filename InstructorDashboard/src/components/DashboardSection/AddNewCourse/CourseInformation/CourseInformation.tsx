import React, { useState, useEffect } from "react";
import "./CourseInformation.css";

interface CourseInformationProps {
  onNext?: () => void; // optional
  data?: any;
  onChange?: (data: any) => void; // optional
}

const CourseInformation: React.FC<CourseInformationProps> = ({
  data = {},
  onChange,
}) => {
  const [featured, setFeatured] = useState<boolean>(data.featured ?? true);
  const [title, setTitle] = useState<string>(data.title ?? "");
  const [category, setCategory] = useState<string>(data.category ?? "");
  const [level, setLevel] = useState<string>(data.level ?? "");
  const [language, setLanguage] = useState<string>(data.language ?? "");
  const [maxStudents, setMaxStudents] = useState<string | number>(
    data.maxStudents ?? ""
  );
  const [publicPrivate, setPublicPrivate] = useState<string>(
    data.publicPrivate ?? ""
  );
  const [shortDesc, setShortDesc] = useState<string>(data.shortDesc ?? "");
  const [description, setDescription] = useState<string>(
    data.description ?? ""
  );
  const [learningItems, setLearningItems] = useState<string[]>(
    data.learningItems ?? [""]
  );
  const [requirements, setRequirements] = useState<string[]>(
    data.requirements ?? [""]
  );

  // Update parent whenever form data changes
  useEffect(() => {
    if (onChange) {
      onChange({
        featured,
        title,
        category,
        level,
        language,
        maxStudents,
        publicPrivate,
        shortDesc,
        description,
        learningItems,
        requirements,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    featured,
    title,
    category,
    level,
    language,
    maxStudents,
    publicPrivate,
    shortDesc,
    description,
    learningItems,
    requirements,
  ]);

  const addLearningItem = () => setLearningItems((s) => [...s, ""]);
  const addRequirement = () => setRequirements((s) => [...s, ""]);

  const handleLearningChange = (index: number, value: string) => {
    setLearningItems((items) => {
      const copy = [...items];
      copy[index] = value;
      return copy;
    });
  };

  const handleRequirementChange = (index: number, value: string) => {
    setRequirements((items) => {
      const copy = [...items];
      copy[index] = value;
      return copy;
    });
  };

  return (
    <div className="courseinformation-container">
      <h1 className="courseinformation-title">Basic Information</h1>

      <form
        className="courseinformation-form"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Row 1 */}
        <div className="courseinformation-row">
          <div className="courseinformation-field">
            <label>Course Title *</label>
            <input
              type="text"
              placeholder="Enter course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="courseinformation-row">
          <div className="courseinformation-field">
            <label>Course Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select</option>
            </select>
          </div>

          <div className="courseinformation-field">
            <label>Course Level *</label>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">Select</option>
            </select>
          </div>

          <div className="courseinformation-field">
            <label>Language *</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Select</option>
            </select>
          </div>
        </div>

        {/* Row 3 */}
        <div className="courseinformation-row">
          <div className="courseinformation-field">
            <label>Max Number of Students *</label>
            <input
              type="number"
              placeholder="e.g., 50"
              value={maxStudents}
              onChange={(e) => setMaxStudents(e.target.value)}
            />
          </div>

          <div className="courseinformation-field">
            <label>Public / Private Course *</label>
            <select
              value={publicPrivate}
              onChange={(e) => setPublicPrivate(e.target.value)}
            >
              <option value="">Select</option>
            </select>
          </div>
        </div>

        {/* Row 4 */}
        <div className="courseinformation-row">
          <div className="courseinformation-field full">
            <label>Short Description *</label>
            <input
              type="text"
              placeholder="Brief summary of your course"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="courseinformation-row">
          <div className="courseinformation-field full">
            <label>Course Description *</label>
            <textarea
              placeholder="Write a detailed course description here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* Learning & Requirements */}
        <div className="courseinformation-double">
          <div className="courseinformation-card">
            <h3>
              <i className="fas fa-graduation-cap" /> What will students learn in
              your course?
            </h3>
            {learningItems.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder="Become a UX designer"
                value={item}
                onChange={(e) => handleLearningChange(index, e.target.value)}
              />
            ))}
            <button
              type="button"
              className="courseinformation-additem"
              onClick={addLearningItem}
            >
              + Add New Item
            </button>
          </div>

          <div className="courseinformation-card">
            <h3>
              <i className="fas fa-clipboard-check" /> Requirements
            </h3>
            {requirements.map((req, index) => (
              <input
                key={index}
                type="text"
                placeholder="List any prerequisites"
                value={req}
                onChange={(e) => handleRequirementChange(index, e.target.value)}
              />
            ))}
            <button
              type="button"
              className="courseinformation-additem"
              onClick={addRequirement}
            >
              + Add New Item
            </button>
          </div>
        </div>

        {/* Featured Toggle */}
        <div className="courseinformation-featured">
          <label className="courseinformation-switch">
            <input
              type="checkbox"
              checked={featured}
              onChange={() => setFeatured((v) => !v)}
            />
            <span className="courseinformation-slider" />
          </label>
          <span>Check this for featured course</span>
        </div>
      </form>
    </div>
  );
};

export default CourseInformation;
