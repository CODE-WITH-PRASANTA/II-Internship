import React, { useState } from "react";
import {
  Edit3,
  Trash2,
  Upload,
  CheckCircle2,
  XCircle,
  Video,
  Save,
  SquarePlus,
  MapPin,
  Mail,
} from "lucide-react";

import "./CreateStory.css";

const CreateStory = () => {
  const [story, setStory] = useState({
    title: "",
    description: "",
    category: "",
    blogImage: null,
    authorName: "",
    authorImage: null,
    aboutAuthor: "",
    mainQuote: "",
    video: null,
    tags: [],
    location: "",
    email: "",
    features: [],
  });

  const [stories, setStories] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = () =>
        setStory((prev) => ({ ...prev, [name]: reader.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setStory((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddTag = () => {
    const t = tagInput.trim();
    if (t && !story.tags.includes(t)) {
      setStory((prev) => ({ ...prev, tags: [...prev.tags, t] }));
      setTagInput("");
    }
  };

  const removeTag = (tag) => {
    setStory((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleAddFeature = () => {
    const f = featureInput.trim();
    if (f) {
      setStory((prev) => ({ ...prev, features: [...prev.features, f] }));
      setFeatureInput("");
    }
  };

  const removeFeature = (feature) => {
    setStory((prev) => ({
      ...prev,
      features: prev.features.filter((f) => f !== feature),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!story.title.trim() || !story.description.trim()) {
      alert("Please fill all required fields!");
      return;
    }

    const newStory = {
      id: Date.now(),
      ...story,
      published: false,
    };

    setStories((prev) => [newStory, ...prev]);

    setStory({
      title: "",
      description: "",
      category: "",
      blogImage: null,
      authorName: "",
      authorImage: null,
      aboutAuthor: "",
      mainQuote: "",
      video: null,
      tags: [],
      location: "",
      email: "",
      features: [],
    });

    setTagInput("");
    setFeatureInput("");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this story?")) return;
    setStories((prev) => prev.filter((s) => s.id !== id));
  };

  const togglePublish = (id) => {
    setStories((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, published: !s.published } : s
      )
    );
  };

  return (
    <div className="create-story-container">
      {/* Left Panel */}
      <div className="create-story-left">
        <h2>📝 Create New Success Story</h2>

        <form onSubmit={handleSubmit} className="create-story-form">
          <input
            type="text"
            name="title"
            placeholder="Story Title"
            value={story.title}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Story Description"
            value={story.description}
            onChange={handleChange}
            rows={3}
            required
          />

          <select
            name="category"
            value={story.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Career">Career</option>
            <option value="Education">Education</option>
            <option value="Travel">Travel</option>
            <option value="Client Review">Client Review</option>
          </select>

          <label className="file-upload">
            <Upload size={16} /> Upload Blog Image
            <input
              type="file"
              name="blogImage"
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </label>

          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            value={story.authorName}
            onChange={handleChange}
            required
          />

          <label className="file-upload">
            <Upload size={16} /> Upload Author Image
            <input
              type="file"
              name="authorImage"
              accept="image/*"
              onChange={handleChange}
              hidden
            />
          </label>

          <textarea
            name="aboutAuthor"
            placeholder="About Author"
            value={story.aboutAuthor}
            onChange={handleChange}
            rows={2}
          />

          <textarea
            name="mainQuote"
            placeholder="Main Quote"
            value={story.mainQuote}
            onChange={handleChange}
            rows={2}
          />

          <label className="file-upload">
            <Video size={16} /> Upload Video (optional)
            <input
              type="file"
              name="video"
              accept="video/*"
              onChange={handleChange}
              hidden
            />
          </label>

          <button type="submit" className="publish-btn">
            <Save size={16} /> Publish Story
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStory;