import React, { useState, useEffect } from "react";
import API, { getImageUrl } from "../../api/api";

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

interface RecordType {
  _id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  author: string;
  contact: string;
}

export default function AddSuccessStory() {
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
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const categories = [
    "Technology",
    "Business",
    "Education",
    "Health",
    "Lifestyle",
    "Finance",
  ];

  /* ================= FETCH STORIES ================= */
  const fetchStories = async () => {
    try {
      setLoading(true);
      const res = await API.get("/success-stories");

      const stories = Array.isArray(res.data)
        ? res.data
        : res.data.data || [];

      setRecords(stories);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if ((e.target as HTMLInputElement).files) {
      const file = (e.target as HTMLInputElement).files![0];
      setForm({ ...form, image: file });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  /* ================= SUBMIT (ADD OR UPDATE) ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value !== null && value !== "") {
          formData.append(key, value as any);
        }
      });

      if (editingId) {
        await API.put(`/success-stories/${editingId}`, formData);
      } else {
        await API.post("/success-stories", formData);
      }

      fetchStories();
      resetForm();

    } catch (err) {
      console.error("SUBMIT ERROR:", err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (rec: RecordType) => {
    setForm({
      title: rec.title,
      description: rec.description,
      image: null,
      category: rec.category,
      author: rec.author,
      designation: "",
      quotes: "",
      tags: "",
      address: "",
      contact: rec.contact,
    });

    setEditingId(rec._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this story?")) return;

    try {
      await API.delete(`/success-stories/${id}`);
      fetchStories();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  const resetForm = () => {
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
    setEditingId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-5 text-white">
        <h1 className="text-xl md:text-2xl font-semibold">
          {editingId ? "Edit Success Story" : "Add Success Story"}
        </h1>
      </div>

      {/* MAIN */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">

        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border flex flex-col">
          <div className="border-b px-6 py-4 font-semibold text-lg">
            {editingId ? "Update Story" : "New Success Story"}
          </div>

          <div className="p-6 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="label">Story Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <div>
                <label className="label">Story Category</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="input"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Upload Image</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="input"
                />
              </div>

              <div>
                <label className="label">Story Content</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={6}
                  className="input"
                  required
                />
              </div>

              <div className="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  {editingId ? "Update Story" : "Publish Success Story"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-2 bg-gray-400 text-white rounded"
                  >
                    Cancel
                  </button>
                )}
              </div>

            </form>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-lg shadow-sm border flex flex-col">
          <div className="border-b px-6 py-4 font-semibold text-lg">
            Recent Success Stories
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">

            {loading && (
              <p className="text-sm text-gray-400">Loading...</p>
            )}

            {!loading && records.length === 0 && (
              <p className="text-gray-500 text-sm">
                No recent success stories
              </p>
            )}

            {records.map((rec) => (
              <div key={rec._id} className="flex gap-3 border-b pb-3">

                {rec.image ? (
                  <img
                    src={getImageUrl(rec.image)}
                    alt={rec.title}
                    className="w-16 h-16 object-cover rounded-md shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gray-200 rounded-md shrink-0" />
                )}

                <div className="flex-1">
                  <h3 className="font-semibold text-sm">{rec.title}</h3>
                  <p className="text-xs text-gray-500">{rec.category}</p>

                  <div className="flex gap-4 mt-1 text-xs">
                    <button
                      onClick={() => handleEdit(rec)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(rec._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

      <style>{`
        .label {
          display:block;
          font-size:14px;
          font-weight:500;
          margin-bottom:6px;
          color:#374151;
        }

        .input {
          width:100%;
          padding:8px 12px;
          border-radius:6px;
          border:1px solid #d1d5db;
          background:#f9fafb;
        }

        .input:focus {
          outline:none;
          border-color:#6366f1;
          background:white;
          box-shadow:0 0 0 2px rgba(99,102,241,0.2);
        }
      `}</style>
    </div>
  );
}