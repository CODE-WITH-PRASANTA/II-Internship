import React, { useEffect, useState } from "react";
import "./PostNotice.css";

const itemsPerPage = 5;

const PostNotice = () => {
  const [form, setForm] = useState({
    noticeNumber: "",
    title: "",
    description: "",
    date: "",
    category: "",
    image: null,
  });

  const [list, setList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCategories(["General", "Exam", "Holiday", "Urgent", "Event"]);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files && files[0] ? files[0] : null;
      setForm((p) => ({ ...p, image: file }));
      return;
    }

    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now().toString(),
      noticeNumber: form.noticeNumber,
      title: form.title,
      description: form.description,
      date: form.date,
      category: form.category,
      image: form.image ? URL.createObjectURL(form.image) : "",
    };

    setList((p) => [newItem, ...p]);

    setForm({
      noticeNumber: "",
      title: "",
      description: "",
      date: "",
      category: "",
      image: null,
    });
  };

  /* delete */
  const handleDelete = (id) => {
    setList((p) => p.filter((i) => i.id !== id));
  };

  /* edit */
  const handleEdit = (item) => {
    setForm({
      noticeNumber: item.noticeNumber,
      title: item.title,
      description: item.description,
      date: item.date,
      category: item.category,
      image: null,
    });

    setList((p) => p.filter((i) => i.id !== item.id));
  };

  /* pagination */
  const start = (page - 1) * itemsPerPage;
  const currentData = list.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(list.length / itemsPerPage);

  return (
    <div className="noticepage-wrapper">

      {/* FORM */}
      <div className="noticepage-formPanel">
        <div className="noticepage-formHeader">Notice Post Form</div>

        <form className="noticepage-formBody" onSubmit={handleSubmit}>

          <div className="noticepage-field">
            <label>Notice Number</label>
            <input
              name="noticeNumber"
              placeholder="Enter notice number"
              value={form.noticeNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div className="noticepage-row-2">
            <div className="noticepage-field">
              <label>Notice Title</label>
              <input
                name="title"
                placeholder="Enter title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="noticepage-field">
              <label>Description</label>
              <input
                name="description"
                placeholder="Enter description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="noticepage-row-2">
            <div className="noticepage-field">
              <label>Notice Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="noticepage-field">
              <label>Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                {categories.map((c, i) => (
                  <option key={i}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="noticepage-field">
            <label>Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button className="noticepage-submitBtn">
            Submit Notice
          </button>
        </form>
      </div>

      {/* TABLE */}
      <div className="noticepage-tablePanel">
        <div className="noticepage-tableHeader">Notice List</div>

        <div className="noticepage-tableWrapper">
          <table className="noticepage-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Number</th>
                <th>Title</th>
                <th>Description</th>
                <th>Date</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((n, i) => (
                <tr key={n.id}>
                  <td>{start + i + 1}</td>
                  <td>{n.noticeNumber}</td>
                  <td>{n.title}</td>
                  <td className="noticepage-descCell">{n.description}</td>
                  <td>{n.date}</td>
                  <td>{n.category}</td>

                  <td>
                    {n.image && (
                      <img
                        src={n.image}
                        className="noticepage-thumb"
                        alt=""
                      />
                    )}
                  </td>

                  <td>
                    <button
                      className="editBtn"
                      onClick={() => handleEdit(n)}
                    >
                      Edit
                    </button>
                    <button
                      className="deleteBtn"
                      onClick={() => handleDelete(n.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="noticepage-pagination">

          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>

        </div>

      </div>
    </div>
  );
};

export default PostNotice;