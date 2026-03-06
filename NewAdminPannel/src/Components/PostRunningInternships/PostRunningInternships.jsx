import React, { useState } from "react";
import "./PostRunningInternships.css";

const PostRunningInternships = () => {

  const [step, setStep] = useState(1);

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    title: "",
    quote: "",
    category: "",
    rating: "",
    timing: "",
    lecture: "",
    level: "",
    author: "",
    designation: "",
    experience: "",
    lifetimeLecture: "",
    about: "",
    overview: "",
    price: "",
    discount: "",
    timeline: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitData = () => {
    setData([...data, form]);
    setForm({});
    setStep(1);
  };

  return (
    <div className="RunningInternship-container">

      {/* LEFT SIDE FORM */}
      <div className="RunningInternship-formSection">

        <h2 className="RunningInternship-heading">
          Post Running Internship
        </h2>

        {/* STEP INDICATOR */}
        <div className="RunningInternship-steps">
          Step {step} / 5
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="RunningInternship-form">

            <input
              type="text"
              name="title"
              placeholder="Internship Title"
              onChange={handleChange}
            />

            <input
              type="text"
              name="quote"
              placeholder="Short Quote"
              onChange={handleChange}
            />

            <select name="category" onChange={handleChange}>
              <option>Select Category</option>
              <option>Web Development</option>
              <option>AI / ML</option>
              <option>UI UX</option>
            </select>

            <input
              type="number"
              name="rating"
              placeholder="Rating (1.0 - 5.0)"
              step="0.1"
              onChange={handleChange}
            />

            <input
              type="text"
              name="timing"
              placeholder="Hour Timing"
              onChange={handleChange}
            />

            <input
              type="number"
              name="lecture"
              placeholder="Lectures (1-100)"
              onChange={handleChange}
            />

            <select name="level" onChange={handleChange}>
              <option>Skill Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Pro</option>
            </select>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="RunningInternship-form">

            <input
              name="author"
              placeholder="Author Name"
              onChange={handleChange}
            />

            <input
              name="designation"
              placeholder="Author Designation"
              onChange={handleChange}
            />

            <input
              name="experience"
              placeholder="Experience"
              onChange={handleChange}
            />

            <input
              name="lifetimeLecture"
              placeholder="Total Lifetime Lectures"
              onChange={handleChange}
            />

            <textarea
              name="about"
              placeholder="About Author"
              onChange={handleChange}
            />

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="RunningInternship-form">

            <textarea
              name="overview"
              placeholder="Course Overview"
              onChange={handleChange}
            />

            <input
              name="price"
              placeholder="Course Price"
              onChange={handleChange}
            />

            <input
              name="discount"
              placeholder="Discount %"
              onChange={handleChange}
            />

            <input
              name="timeline"
              placeholder="Course Timeline"
              onChange={handleChange}
            />

          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="RunningInternship-form">

            <input
              placeholder="Phase Title"
            />

            <input
              placeholder="Lecture URL"
            />

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="RunningInternship-form">

            <input placeholder="Students Enrolled" />
            <input placeholder="Lectures" />
            <input placeholder="Quizzes" />
            <input placeholder="Duration" />
            <input placeholder="Skill Level" />
            <input placeholder="Language" />

            <select>
              <option>Certification</option>
              <option>Yes</option>
              <option>No</option>
            </select>

          </div>
        )}

        {/* BUTTONS */}
        <div className="RunningInternship-buttons">

          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="RunningInternship-btn"
            >
              Previous
            </button>
          )}

          {step < 5 && (
            <button
              onClick={() => setStep(step + 1)}
              className="RunningInternship-btn primary"
            >
              Next
            </button>
          )}

          {step === 5 && (
            <button
              onClick={submitData}
              className="RunningInternship-btn submit"
            >
              Publish Internship
            </button>
          )}

        </div>

      </div>

      {/* RIGHT SIDE TABLE */}
      <div className="RunningInternship-tableSection">

        <h2>Running Internships</h2>

        <table className="RunningInternship-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Level</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.rating}</td>
                <td>{item.level}</td>

                <td className="RunningInternship-actions">

                  <button className="edit">
                    Edit
                  </button>

                  <button className="delete">
                    Delete
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PostRunningInternships;