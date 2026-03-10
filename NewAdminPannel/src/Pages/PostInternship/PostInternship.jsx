import React, { useState, useEffect } from "react";
import API, { getImageUrl } from "../../api/api";
import "./PostInternship.css";
import { Editor } from "@tinymce/tinymce-react";

const PostInternship = () => {
  const [step, setStep] = useState(1);

  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    duration: "",
    department: "",
    modules: "",
    project: "",
    tools: "",
    type: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setForm((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    }
  };


  const editInternship = (item) => {
  setForm({
    title: item.title || "",
    description: item.description || "",
    duration: item.duration || "",
    department: item.department || "",
    modules: item.modules || "",
    project: item.project || "",
    tools: item.tools || "",
    type: item.type || "",
    image: null,
    imagePreview: item.image ? getImageUrl(item.image) : ""
  });

  setEditId(item._id);
};

  const nextStep = async () => {
    if (step === 5) {
      await submitData();
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  /* CREATE INTERNSHIP */

 const submitData = async () => {
  try {

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (form[key] !== null) {
        formData.append(key, form[key]);
      }
    });

    if (editId) {

      await API.put(`/interns/update/${editId}`, formData);

    } else {

      await API.post("/interns/create", formData);

    }

    fetchInternships();
    setEditId(null);

  } catch (error) {
    console.log(error);
  }
};


  /* GET INTERNSHIPS */

  const fetchInternships = async () => {
    try {
      const res = await API.get("/interns/all");

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  /* DELETE */

  const deleteInternship = async (id) => {
    try {
      await API.delete(`/interns/delete/${id}`);

      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  return (
    <div className="internship-wrapper">
      <div className="internship-form">
        <h2 className="form-title">Post Internship</h2>

        <div className="form-scroll">
          {step === 1 && (
            <div className="form-step">
              <label>Internship Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter Internship Title"
              />

              <label>Internship Description *</label>
              <Editor
                apiKey="jeq7g2k84sqpi9364o8x9ptqf09aoesaq8jxmp49dl4sh57z"
                value={form.description}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image media | code",
                }}
                onEditorChange={(content) =>
                  setForm((prev) => ({ ...prev, description: content }))
                }
              />
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <label>Time Duration *</label>
              <input
                name="duration"
                value={form.duration}
                onChange={handleChange}
                placeholder="Example : 3 Months"
              />

              <label>Department</label>
              <input
                name="department"
                value={form.department}
                onChange={handleChange}
                placeholder="Enter Department"
              />

              {/* IMAGE FIELD */}
              <label>Internship Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />

              {/* IMAGE PREVIEW */}
              {form.imagePreview && (
                <img
                  src={form.imagePreview}
                  alt="Preview"
                  className="form-image-preview"
                />
              )}
            </div>
          )}

          {step === 3 && (
            <div className="form-step">
              <label>Modules</label>
              <textarea
                name="modules"
                value={form.modules}
                onChange={handleChange}
                placeholder="Enter Modules"
              />

              <label>Project</label>
              <textarea
                name="project"
                value={form.project}
                onChange={handleChange}
                placeholder="Enter Project Details"
              />
            </div>
          )}

          {step === 4 && (
            <div className="form-step">
              <label>Tools</label>
              <input
                name="tools"
                value={form.tools}
                onChange={handleChange}
                placeholder="Example : React, Python"
              />
            </div>
          )}

          {step === 5 && (
            <div className="form-step">
              <label>Internship Type *</label>

              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="On Campus"
                    onChange={handleChange}
                  />
                  On Campus Internship
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Virtual"
                    onChange={handleChange}
                  />
                  Virtual Internship
                </label>

                <label>
                  <input
                    type="radio"
                    name="type"
                    value="Both"
                    onChange={handleChange}
                  />
                  Both
                </label>
              </div>
            </div>
          )}
        </div>

        <div className="step-buttons">
          <button className="prev-btn" onClick={prevStep} disabled={step === 1}>
            Previous
          </button>

          <button className="next-btn" onClick={nextStep}>
            {step === 5 ? "Submit" : "Next"}
          </button>
        </div>
      </div>

      <div className="internship-table">
        <h2 className="table-title">Posted Internships</h2>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Department</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  {/* IMAGE */}
                  <td>
                    {item.image && (
                      <img
                        src={getImageUrl(item.image)}
                        alt={item.title}
                        className="table-img"
                      />
                    )}
                  </td>

                  <td>{item.title}</td>
                  <td>{item.duration}</td>
                  <td>{item.department}</td>
                  <td>{item.type}</td>

                  <td className="table-actions">
                    <button
                      className="edit-btn"
                      onClick={() => editInternship(item)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
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
    </div>
  );
};

export default PostInternship;
