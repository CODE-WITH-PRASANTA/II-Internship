import React, { useState, useEffect } from "react";
import API from "../../api/api";
import "./PostRunningInternships.css";

const PostRunningInternships = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

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
    organizer: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const editInternship = (item) => {
    setForm({
      title: item.title || "",
      description: item.description || "",
      department: item.department || "",
      modules: item.modules || "",
      project: item.project || "",
      tools: item.tools || "",
      internshipType: item.internshipType || "",
      credits: item.credits || "",
      location: item.location || "",
      duration: item.duration || "",
      qualification: item.qualification || "",
      skills: item.skills || "",
      internshipCostType: item.internshipCostType || "",
      timePeriod: item.timePeriod || "",
      facilities: item.facilities || "",
      career: item.career || "",
      startDate: item.startDate || "",
      fee: item.fee || "",
      lastDate: item.lastDate || "",
      mentor: item.mentor || "",
      contact: item.contact || "",
      organizer: item.organizer || "",
    });

    setEditId(item._id);

    setStep(1);
  };

  /* ================= CREATE INTERNSHIP ================= */
  const submitData = async () => {
    try {
      if (editId) {
        const res = await API.put(`/internships/update/${editId}`, form);

        setData((prev) =>
          prev.map((item) => (item._id === editId ? res.data : item)),
        );

        setEditId(null);
      } else {
        const res = await API.post("/internships/create", form);

        setData((prev) => [...prev, res.data]);
      }

      setForm({
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
        organizer: "",
      });

      setEditId(null);
      setStep(1);
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= GET INTERNSHIPS ================= */
  const fetchInternships = async () => {
    try {
      const res = await API.get("/internships/all");

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= DELETE INTERNSHIP ================= */
  const deleteInternship = async (id) => {
    if (!window.confirm("Are you sure you want to delete this internship?"))
      return;

    try {
      await API.delete(`/internships/delete/${id}`);

      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  /* ================= LOAD DATA ================= */
  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <div className="RunningInternship-container">
      {/* LEFT FORM */}
      <div className="RunningInternship-formSection">
        <h2 className="RunningInternship-heading">Post Running Internship</h2>

        <div className="RunningInternship-steps">Step {step} / 5</div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="RunningInternship-form">
            <div className="RunningInternship-field">
              <label>Internship Title *</label>
              <input
                name="title"
                value={form.title}
                placeholder="Enter Internship Title"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Description *</label>
              <textarea
                name="description"
                value={form.description}
                placeholder="Write internship description"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Department</label>
              <input
                name="department"
                value={form.department}
                placeholder="Department name"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Modules</label>
              <input
                name="modules"
                value={form.modules}
                placeholder="Modules included"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Project</label>
              <input
                name="project"
                value={form.project}
                placeholder="Project details"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Tools</label>
              <input
                name="tools"
                value={form.tools}
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
              <select
                name="internshipType"
                value={form.internshipType}
                onChange={handleChange}
              >
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
                value={form.credits}
                placeholder="Number of credits"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Location *</label>
              <input
                name="location"
                value={form.location}
                placeholder="Internship location"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Duration *</label>
              <input
                name="duration"
                value={form.duration}
                placeholder="Internship duration"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Qualification Required *</label>
              <input
                name="qualification"
                value={form.qualification}
                placeholder="Required qualification"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Skills Required</label>
              <input
                name="skills"
                value={form.skills}
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
              <select
                name="internshipCostType"
                value={form.internshipCostType}
                onChange={handleChange}
              >
                <option>Select</option>
                <option>By Paying Fees</option>
                <option>Free of Cost</option>
                <option>Stipend</option>
              </select>
            </div>

            <div className="RunningInternship-field">
              <label>Time Period</label>
              <select
                name="timePeriod"
                value={form.timePeriod}
                onChange={handleChange}
              >
                <option>Select</option>
                <option>Residential</option>
                <option>Non-Residential</option>
              </select>
            </div>

            <div className="RunningInternship-field">
              <label>Facilities Provided</label>
              <textarea
                name="facilities"
                value={form.facilities}
                placeholder="Facilities during internship"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Career Opportunity</label>
              <textarea
                name="career"
                value={form.career}
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
                value={form.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Internship Fee *</label>
              <input
                name="fee"
                value={form.fee}
                placeholder="Internship fee"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Last Date To Apply *</label>
              <input
                type="date"
                name="lastDate"
                value={form.lastDate}
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
                value={form.mentor}
                placeholder="Mentor name"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Contact Person & Mobile</label>
              <input
                name="contact"
                value={form.contact}
                placeholder="Contact number"
                onChange={handleChange}
              />
            </div>

            <div className="RunningInternship-field">
              <label>Organizer *</label>
              <input
                name="organizer"
                value={form.organizer}
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
              {editId ? "Update Internship" : "Publish Internship"}{" "}
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
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.duration}</td>
                <td>{item.internshipType}</td>

                <td className="RunningInternship-actions">
                  <button className="edit" onClick={() => editInternship(item)}>
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => deleteInternship(item._id)}
                  >
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
