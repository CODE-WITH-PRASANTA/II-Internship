import React, { useState, ChangeEvent, FormEvent } from "react";
import "./CareerManagement.css";
import { Pencil, Trash2 } from "lucide-react";

/* ================= TYPES ================= */
interface Career {
  designation: string;
  salary: string;
  experience: string;
  location: string;
  jobType: string;
  vacancy: string;
  skills: string;
}

const CareerManagement: React.FC = () => {
  const [formData, setFormData] = useState<Career>({
    designation: "",
    salary: "",
    experience: "",
    location: "",
    jobType: "",
    vacancy: "",
    skills: "",
  });

  const [list, setList] = useState<Career[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  /* ================= INPUT ================= */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex] = formData;
      setList(updated);
      setEditIndex(null);
    } else {
      setList([...list, formData]);
    }

    setFormData({
      designation: "",
      salary: "",
      experience: "",
      location: "",
      jobType: "",
      vacancy: "",
      skills: "",
    });
  };

  /* ================= EDIT ================= */
  const handleEdit = (index: number) => {
    setFormData(list[index]);
    setEditIndex(index);
  };

  /* ================= DELETE ================= */
  const handleDelete = (index: number) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="careerMng-wrapper">
      {/* ================= FORM ================= */}
      <div className="careerMng-formSection">
        <h2 className="careerMng-title">Career Management</h2>

        <form className="careerMng-form" onSubmit={handleSubmit}>
          <div className="careerMng-field">
            <label>Designation (Job Description)</label>
            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
            />
          </div>

          <div className="careerMng-row">
            <div className="careerMng-field">
              <label>Salary Range</label>
              <input name="salary" value={formData.salary} onChange={handleChange}/>
            </div>

            <div className="careerMng-field">
              <label>Experience</label>
              <input name="experience" value={formData.experience} onChange={handleChange}/>
            </div>
          </div>

          <div className="careerMng-row">
            <div className="careerMng-field">
              <label>Location</label>
              <input name="location" value={formData.location} onChange={handleChange}/>
            </div>

            <div className="careerMng-field">
              <label>Type of Job</label>
              <select name="jobType" value={formData.jobType} onChange={handleChange}>
                <option value="">Select</option>
                <option>Hybrid</option>
                <option>Remote</option>
              </select>
            </div>
          </div>

          <div className="careerMng-row">
            <div className="careerMng-field">
              <label>Vacancy</label>
              <select name="vacancy" value={formData.vacancy} onChange={handleChange}>
                <option value="">Select</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </div>

            <div className="careerMng-field">
              <label>Skills Required</label>
              <input name="skills" value={formData.skills} onChange={handleChange}/>
            </div>
          </div>

          <button className="careerMng-submitBtn">
            {editIndex !== null ? "Update Career" : "Add Career"}
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      <div className="careerMng-tableSection">
        <h2 className="careerMng-title">Career List</h2>

        <div className="careerMng-tableWrapper">
          <table className="careerMng-table">
            <thead>
              <tr>
                <th>Designation</th>
                <th>Salary</th>
                <th>Experience</th>
                <th>Location</th>
                <th>Job Type</th>
                <th>Vacancy</th>
                <th>Skills</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{item.designation}</td>
                  <td>{item.salary}</td>
                  <td>{item.experience}</td>
                  <td>{item.location}</td>
                  <td>{item.jobType}</td>
                  <td>{item.vacancy}</td>
                  <td>{item.skills}</td>

                  <td className="careerMng-actionCell">
                    <button
                      className="careerMng-editBtn"
                      onClick={() => handleEdit(index)}
                    >
                      <Pencil size={16}/>
                    </button>

                    <button
                      className="careerMng-deleteBtn"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 size={16}/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default CareerManagement;