import React, { useState } from "react";
import "./PostRunningInternships.css";

const PostRunningInternships = () => {

  const [step, setStep] = useState(1);

  const [data, setData] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    department: "",
    modules: "",
    project: "",
    tools: "",
    internshipType: "",
    credits: "",
    location: "",
    duration: "",
    qualification: "",
    skills: "",
    internshipCostType: "",
    timePeriod: "",
    facilities: "",
    career: "",
    startDate: "",
    fee: "",
    lastDate: "",
    mentor: "",
    contact: "",
    organizer: ""
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

      {/* LEFT FORM */}
      <div className="RunningInternship-formSection">

        <h2 className="RunningInternship-heading">
          Post Running Internship
        </h2>

        <div className="RunningInternship-steps">
          Step {step} / 5
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="RunningInternship-form">

            <div className="RunningInternship-field">
              <label>Internship Title *</label>
              <input
                name="title"
                placeholder="Enter Internship Title"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Description *</label>
              <textarea
                name="description"
                placeholder="Write internship description"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Department</label>
              <input
                name="department"
                placeholder="Department name"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Modules</label>
              <input
                name="modules"
                placeholder="Modules included"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Project</label>
              <input
                name="project"
                placeholder="Project details"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Tools</label>
              <input
                name="tools"
                placeholder="Tools used"
                onChange={handleChange}
              />
            </div>

          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="RunningInternship-form">

            <div className="RunningInternship-field">
              <label>Internship Type *</label>
              <select name="internshipType" onChange={handleChange}>
                <option>Select Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Virtual</option>
              </select>
            </div>

            <div className="RunningInternship-field">
              <label>No. of Credits</label>
              <input
                name="credits"
                placeholder="Number of credits"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Location *</label>
              <input
                name="location"
                placeholder="Internship location"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Duration *</label>
              <input
                name="duration"
                placeholder="Internship duration"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Qualification Required *</label>
              <input
                name="qualification"
                placeholder="Required qualification"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Skills Required</label>
              <input
                name="skills"
                placeholder="Skills required"
                onChange={handleChange}
              />
            </div>

          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="RunningInternship-form">

            <div className="RunningInternship-field">
              <label>Internship Cost Type *</label>
              <select name="internshipCostType" onChange={handleChange}>
                <option>Select</option>
                <option>By Paying Fees</option>
                <option>Free of Cost</option>
                <option>Stipend</option>
              </select>
            </div>

            <div className="RunningInternship-field">
              <label>Time Period</label>
              <select name="timePeriod" onChange={handleChange}>
                <option>Select</option>
                <option>Residential</option>
                <option>Non-Residential</option>
              </select>
            </div>

            <div className="RunningInternship-field">
              <label>Facilities Provided</label>
              <textarea
                name="facilities"
                placeholder="Facilities during internship"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Career Opportunity</label>
              <textarea
                name="career"
                placeholder="Career opportunity"
                onChange={handleChange}
              />
            </div>

          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="RunningInternship-form">

            <div className="RunningInternship-field">
              <label>Internship Start Date *</label>
              <input
                type="date"
                name="startDate"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Fee *</label>
              <input
                name="fee"
                placeholder="Internship fee"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Last Date To Apply *</label>
              <input
                type="date"
                name="lastDate"
                onChange={handleChange}
              />
            </div>

          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="RunningInternship-form">

            <div className="RunningInternship-field">
              <label>Mentor / Instructor Name</label>
              <input
                name="mentor"
                placeholder="Mentor name"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Contact Person & Mobile</label>
              <input
                name="contact"
                placeholder="Contact number"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Organizer *</label>
              <input
                name="organizer"
                placeholder="Organizer name"
                onChange={handleChange}
              />
            </div>

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


      {/* RIGHT TABLE */}
      <div className="RunningInternship-tableSection">

        <h2>Running Internships</h2>

        <table className="RunningInternship-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Duration</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.duration}</td>
                <td>{item.internshipType}</td>

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