import React, { useState } from "react";
import "./StoryPost.css";

interface FormDataType {
  title: string;
  description: string;
  image: File | null;
  category: string;
  author: string;
  designation: string;
  quotes: string;
  tags: string;
  address: string;
  contact: string;
}

interface RecordType extends FormDataType {
  id: number;
}

export default function StoryPost() {
  const [form, setForm] = useState<FormDataType>({
    title: "",
    description: "",
    image: null,
    category: "",
    author: "",
    designation: "",
    quotes: "",
    tags: "",
    address: "",
    contact: "",
  });

  const [records, setRecords] = useState<RecordType[]>([]);

  const categories = [
    "Technology",
    "Business",
    "Education",
    "Health",
    "Lifestyle",
    "Finance",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if ((e.target as HTMLInputElement).files) {
      setForm({ ...form, image: (e.target as HTMLInputElement).files![0] });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRecord: RecordType = { ...form, id: records.length + 1 };
    setRecords([...records, newRecord]);

    setForm({
      title: "",
      description: "",
      image: null,
      category: "",
      author: "",
      designation: "",
      quotes: "",
      tags: "",
      address: "",
      contact: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((rec) => rec.id !== id));
  };

  return (
    <div className="premium-wrapper">

      {/* ⭐ MAIN HEADING */}
      <h1 className="main-title">Post Success Story</h1>

      <div className="premium-container">
        {/* LEFT FORM SECTION */}
        <div className="form-section">
          <div className="form-scroll">
            <form onSubmit={handleSubmit} className="premium-form">
              
              <div className="grid-two">
                <div>
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Category</label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat, i) => (
                      <option key={i} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />

              <label>Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />

              <div className="grid-two">
                <div>
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    value={form.author}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Author Designation</label>
                  <input
                    type="text"
                    name="designation"
                    value={form.designation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <label>Quotes</label>
              <textarea
                name="quotes"
                value={form.quotes}
                onChange={handleChange}
              />

              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={form.tags}
                onChange={handleChange}
              />

              <label>Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
              />

              <label>Contact Details</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
              />

              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="table-section">
          <h2 className="table-header">Records</h2>

          <div className="table-scroll">
            <table className="premium-table">
              <thead>
                <tr>
                  <th>Sl. No</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Address</th>
                  <th>Contact</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {records.map((rec) => (
                  <tr key={rec.id}>
                    <td>{rec.id}</td>
                    <td>{rec.title}</td>
                    <td>{rec.image ? rec.image.name : "-"}</td>
                    <td>{rec.category}</td>
                    <td>{rec.address}</td>
                    <td>{rec.contact}</td>
                    <td>
                      <button className="edit-btn">Edit</button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(rec.id)}
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
    </div>
  );
}
