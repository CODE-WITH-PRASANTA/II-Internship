import React, { useState, useEffect } from "react";
import API, { getImageUrl } from "../../api/api";

interface NoticeFormType {
  title: string;
  description: string;
  category: string;
  postedBy: string;
  date: string;
  image: File | null;
}

interface NoticeRecordType {
  _id: string;
  title: string;
  description: string;
  category: string;
  postedBy: string;
  date: string;
  image?: string;
}

export default function AdminNoticeManager() {
  const [form, setForm] = useState<NoticeFormType>({
    title: "",
    description: "",
    category: "",
    postedBy: "",
    date: new Date().toISOString().slice(0, 10),
    image: null,
  });

  const [records, setRecords] = useState<NoticeRecordType[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = [
    "General Notice",
    "Holiday",
    "Important Update",
    "Exam",
    "Scholarship",
  ];

  /* ================= FETCH ================= */
  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await API.get("/notices");

      // ✅ FIXED: backend returns { success, data }
      setRecords(res.data.data || []);

    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setForm((prev) => ({ ...prev, image: file }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (value !== null) {
          formData.append(key, value as any);
        }
      });

      if (editingId) {
        await API.put(`/notices/${editingId}`, formData);
      } else {
        await API.post("/notices", formData);
      }

      fetchNotices();
      resetForm();
    } catch (err) {
      console.error("SUBMIT ERROR:", err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (rec: NoticeRecordType) => {
    setForm({
      title: rec.title,
      description: rec.description,
      category: rec.category,
      postedBy: rec.postedBy,
      date: rec.date.slice(0, 10),
      image: null,
    });

    setEditingId(rec._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this notice?")) return;

    try {
      await API.delete(`/notices/${id}`);
      fetchNotices();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      category: "",
      postedBy: "",
      date: new Date().toISOString().slice(0, 10),
      image: null,
    });
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* ================= LEFT FORM ================= */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Update Notice" : "Post New Notice"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Notice Title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />

            <textarea
              name="description"
              placeholder="Notice Description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={4}
              required
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="postedBy"
              placeholder="Posted By"
              value={form.postedBy}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
            />

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded"
              >
                {editingId ? "Update" : "Post"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-400 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* ================= RIGHT LIST ================= */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">All Notices</h2>

          {loading && <p>Loading...</p>}

          {!loading && records.length === 0 && (
            <p className="text-gray-500">No notices available</p>
          )}

          <div className="space-y-4">
            {records.map((rec) => (
              <div
                key={rec._id}
                className="flex gap-4 border-b pb-4 items-start"
              >
                {rec.image && (
                  <img
                    src={getImageUrl(rec.image)}
                    alt={rec.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}

                <div className="flex-1">
                  <h4 className="font-semibold">{rec.title}</h4>
                  <p className="text-sm text-gray-500">
                    {rec.category} • {rec.date}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {rec.description}
                  </p>

                  <div className="flex gap-4 mt-2 text-sm">
                    <button
                      onClick={() => handleEdit(rec)}
                      className="text-blue-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(rec._id)}
                      className="text-red-600"
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
    </div>
  );
}