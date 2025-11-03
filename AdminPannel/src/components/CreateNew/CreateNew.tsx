import React, { useState, useEffect } from "react";
import {
  Edit3,
  Trash2,
  Upload,
  CheckCircle2,
  XCircle,
  Save,
  X,
  Moon,
  Sun,
} from "lucide-react";
import "./CreateNew.css";

interface Category {
  id: number;
  name: string;
  type: "Top" | "Normal";
  icon: string | null;
  published: boolean;
}

const CreateNew: React.FC = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryType, setCategoryType] = useState<"Top" | "Normal">("Normal");
  const [iconPreview, setIconPreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedCategory, setEditedCategory] = useState<Category | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // ✅ Apply theme to html (not body)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleIconUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setIconPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAddCategory = () => {
    if (!categoryName.trim()) return;
    const newCategory: Category = {
      id: Date.now(),
      name: categoryName.trim(),
      type: categoryType,
      icon: iconPreview,
      published: true,
    };
    setCategories((prev) => [newCategory, ...prev]);
    setCategoryName("");
    setIconPreview(null);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  const togglePublish = (id: number) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === id ? { ...cat, published: !cat.published } : cat
      )
    );
  };

  const handleEdit = (category: Category) => {
    setEditingId(category.id);
    setEditedCategory({ ...category });
  };

  const handleSave = () => {
    if (!editedCategory) return;
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === editedCategory.id ? { ...editedCategory } : cat
      )
    );
    setEditingId(null);
    setEditedCategory(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedCategory(null);
  };

  const handleEditIcon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editedCategory) {
      const reader = new FileReader();
      reader.onload = () =>
        setEditedCategory({ ...editedCategory, icon: reader.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="create-category-container">
      {/* Theme Toggle */}
      <div className="theme-toggle">
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? (
            <>
              <Moon size={18} />
              Dark Mode
            </>
          ) : (
            <>
              <Sun size={18} />
              Light Mode
            </>
          )}
        </button>
      </div>

      {/* Left Panel */}
      <div className="create-category-card">
        <h2>Create New Category</h2>

        <div className="upload-section">
          <label htmlFor="iconUpload" className="upload-box">
            {iconPreview ? (
              <img src={iconPreview} alt="icon" className="uploaded-icon" />
            ) : (
              <>
                <Upload size={22} />
                <span>Upload Icon</span>
              </>
            )}
          </label>
          <input
            type="file"
            id="iconUpload"
            accept="image/*"
            onChange={handleIconUpload}
            hidden
          />
        </div>

        <input
          type="text"
          placeholder="Enter category name"
          className="category-input"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />

        <div className="type-selector">
          <label>
            <input
              type="radio"
              value="Top"
              checked={categoryType === "Top"}
              onChange={() => setCategoryType("Top")}
            />
            Top Category
          </label>
          <label>
            <input
              type="radio"
              value="Normal"
              checked={categoryType === "Normal"}
              onChange={() => setCategoryType("Normal")}
            />
            Normal
          </label>
        </div>

        <button className="add-btn" onClick={handleAddCategory}>
          Add Category
        </button>
      </div>

      {/* Right Panel */}
      <div className="category-list">
        <h3>All Categories</h3>
        {categories.length === 0 ? (
          <p className="empty-msg">No categories yet. Add one!</p>
        ) : (
          <div className="category-table">
            <div className="category-header">
              <span>Icon</span>
              <span>Name</span>
              <span>Type</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            {categories.map((cat) =>
              editingId === cat.id && editedCategory ? (
                <div className="category-row editing" key={cat.id}>
                  <div className="category-icon">
                    <label htmlFor={`editIcon-${cat.id}`} className="icon-label">
                      {editedCategory.icon ? (
                        <img
                          src={editedCategory.icon}
                          alt="icon"
                          className="uploaded-icon"
                        />
                      ) : (
                        <Upload size={18} />
                      )}
                    </label>
                    <input
                      type="file"
                      id={`editIcon-${cat.id}`}
                      accept="image/*"
                      onChange={handleEditIcon}
                      hidden
                    />
                  </div>
                  <input
                    type="text"
                    className="edit-input"
                    value={editedCategory.name}
                    onChange={(e) =>
                      setEditedCategory({
                        ...editedCategory,
                        name: e.target.value,
                      })
                    }
                  />
                  <select
                    className="edit-select"
                    value={editedCategory.type}
                    onChange={(e) =>
                      setEditedCategory({
                        ...editedCategory,
                        type: e.target.value as "Top" | "Normal",
                      })
                    }
                  >
                    <option value="Top">Top</option>
                    <option value="Normal">Normal</option>
                  </select>
                  <span
                    className="status"
                    onClick={() => togglePublish(cat.id)}
                  >
                    {cat.published ? (
                      <>
                        <CheckCircle2 color="#16a34a" />
                        Published
                      </>
                    ) : (
                      <>
                        <XCircle color="#dc2626" />
                        Unpublished
                      </>
                    )}
                  </span>
                  <div className="actions">
                    <button className="save-btn" onClick={handleSave}>
                      <Save size={18} />
                    </button>
                    <button className="cancel-btn" onClick={handleCancel}>
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={`category-row ${
                    cat.published ? "published" : "unpublished"
                  }`}
                  key={cat.id}
                >
                  <div className="category-icon">
                    {cat.icon ? (
                      <img src={cat.icon} alt="category icon" />
                    ) : (
                      <Upload size={18} />
                    )}
                  </div>
                  <span>{cat.name}</span>
                  <span>{cat.type}</span>
                  <span
                    className="status"
                    onClick={() => togglePublish(cat.id)}
                    title="Click to toggle status"
                  >
                    {cat.published ? (
                      <>
                        <CheckCircle2 color="#16a34a" />
                        Published
                      </>
                    ) : (
                      <>
                        <XCircle color="#dc2626" />
                        Unpublished
                      </>
                    )}
                  </span>
                  <div className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(cat)}
                    >
                      <Edit3 size={18} />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(cat.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNew;
