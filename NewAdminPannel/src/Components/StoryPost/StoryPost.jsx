import React, { useState, useEffect } from "react";
import API, { getImageUrl } from "../../api/api";
import { Editor } from "@tinymce/tinymce-react";

export default function AddSuccessStory() {
  const [categories, setCategories] = useState([]);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    title: "",
    description: "",
    image: null,
    category: "",
    author: "",
    authorEmail: "",
    designation: "",
    quotes: "",
    tags: "",
    blogTags: [],
    features: [],
    address: "",
    publishDate: new Date().toISOString().slice(0, 16),
    publishStatus: "Draft",
  });

  const [tagInput, setTagInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  /* ================= FETCH CATEGORIES ================= */
  const fetchCategories = async () => {
    try {
      const res = await API.get("/categories");
      const publishedCategories = res.data.filter(
        (cat) => cat.published === true
      );
      setCategories(publishedCategories);
    } catch (err) {
      console.error("CATEGORY FETCH ERROR:", err);
    }
  };

  /* ================= FETCH STORIES ================= */
  const fetchStories = async () => {
    try {
      setLoading(true);
      const res = await API.get("/success-stories");
      setRecords(res.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
    fetchCategories();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files?.[0] || null;
      setForm((prev) => ({ ...prev, image: file }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* ================= FEATURES ================= */
  const addFeature = (e) => {
    if (e.key === "Enter" && featureInput.trim()) {
      e.preventDefault();
      if (!form.features.includes(featureInput.trim())) {
        setForm((prev) => ({
          ...prev,
          features: [...prev.features, featureInput.trim()],
        }));
      }
      setFeatureInput("");
    }
  };

  const removeFeature = (index) => {
    setForm((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  /* ================= TAGS ================= */
  const addTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!form.blogTags.includes(tagInput.trim())) {
        setForm((prev) => ({
          ...prev,
          blogTags: [...prev.blogTags, tagInput.trim()],
        }));
      }
      setTagInput("");
    }
  };

  const removeTag = (index) => {
    setForm((prev) => ({
      ...prev,
      blogTags: prev.blogTags.filter((_, i) => i !== index),
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", form.title.trim());

      if (!form.description || form.description === "<p><br></p>") {
        alert("Story content is required");
        return;
      }

      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("author", form.author.trim());
      formData.append("authorEmail", form.authorEmail.trim());
      formData.append("publishStatus", form.publishStatus);

      if (form.publishDate) {
        formData.append("publishDate", form.publishDate);
      }

      if (form.designation) formData.append("designation", form.designation);
      if (form.quotes) formData.append("quotes", form.quotes);
      if (form.tags) formData.append("tags", form.tags);
      if (form.address) formData.append("address", form.address);

      if (form.blogTags.length > 0) {
        formData.append("blogTags", JSON.stringify(form.blogTags));
      }

      if (form.features.length > 0) {
        formData.append("features", JSON.stringify(form.features));
      }

      if (form.image) {
        formData.append("image", form.image);
      }

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
  const handleEdit = (rec) => {
    setForm({
      title: rec.title,
      description: rec.description,
      image: null,
      category:
        typeof rec.category === "object" ? rec.category._id : rec.category,
      author: rec.author,
      authorEmail: rec.authorEmail || "",
      designation: rec.designation || "",
      quotes: "",
      tags: "",
      blogTags:
        typeof rec.blogTags === "string"
          ? JSON.parse(rec.blogTags || "[]")
          : rec.blogTags || [],
      features:
        typeof rec.features === "string"
          ? JSON.parse(rec.features || "[]")
          : rec.features || [],
      address: "",
      publishDate: rec.publishDate
        ? rec.publishDate.slice(0, 16)
        : new Date().toISOString().slice(0, 16),
      publishStatus: rec.publishStatus || "Draft",
    });

    setEditingId(rec._id);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this story?")) return;

    try {
      await API.delete(`/success-stories/${id}`);
      fetchStories();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  /* ================= RESET ================= */
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      image: null,
      category: "",
      author: "",
      authorEmail: "",
      designation: "",
      quotes: "",
      tags: "",
      blogTags: [],
      features: [],
      address: "",
      publishDate: new Date().toISOString().slice(0, 16),
      publishStatus: "Draft",
    });
    setEditingId(null);
    setStep(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f4f6]">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-5 text-white">
        <h1 className="text-xl md:text-2xl font-semibold">
          {editingId ? "Edit Success Story" : "Add Success Story"}
        </h1>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-6">

        {/* LEFT PANEL */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border flex flex-col">
          <div className="border-b px-6 py-4 font-semibold text-lg">
            {editingId ? "Update Story" : "New Success Story"}
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Story Title"
                className="input"
                required
              />

              <input
                type="text"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Author Name"
                className="input"
                required
              />

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="input"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <Editor
                apiKey="your-tinymce-key"
                value={form.description}
                onEditorChange={(content) =>
                  setForm((prev) => ({ ...prev, description: content }))
                }
                init={{ height: 300, menubar: false }}
              />

              <button className="px-6 py-2 bg-indigo-600 text-white rounded">
                {editingId ? "Update Story" : "Publish Story"}
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-lg shadow-sm border p-5">
          <h3 className="font-semibold mb-4">Recent Stories</h3>

          {records.map((rec) => (
            <div key={rec._id} className="flex gap-3 border-b pb-3 mb-3">
              {rec.image ? (
                <img
                  src={getImageUrl(rec.image)}
                  alt=""
                  className="w-14 h-14 object-cover rounded"
                />
              ) : (
                <div className="w-14 h-14 bg-gray-200 rounded" />
              )}

              <div className="flex-1">
                <h4 className="text-sm font-semibold">{rec.title}</h4>
                <div className="flex gap-4 text-xs mt-1">
                  <button
                    onClick={() => handleEdit(rec)}
                    className="text-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(rec._id)}
                    className="text-red-500"
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
  );
}