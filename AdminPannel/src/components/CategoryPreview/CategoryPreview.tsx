import React, { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import "./CategoryPreview.css";

interface Category {
  id: number;
  name: string;
  type: "Top" | "Normal";
  icon: string | null;
  published: boolean;
}

const CategoryPreview: React.FC = () => {
  const [categories] = useState<Category[]>([
    {
      id: 1,
      name: "Travel & Tourism",
      type: "Top",
      icon: "https://cdn-icons-png.flaticon.com/512/197/197484.png",
      published: true,
    },
    {
      id: 2,
      name: "Technology",
      type: "Normal",
      icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      published: true,
    },
    {
      id: 3,
      name: "Education",
      type: "Top",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
      published: false,
    },
    {
      id: 4,
      name: "Health & Fitness",
      type: "Normal",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png",
      published: true,
    },
  ]);

  return (
    <div className="category-preview-container">
      <h2 className="preview-title">Category Preview</h2>

      {categories.length === 0 ? (
        <p className="empty-msg">No categories available.</p>
      ) : (
        <div className="preview-grid">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`preview-card ${
                cat.published ? "published" : "unpublished"
              }`}
            >
              <div className="icon-wrap">
                {cat.icon ? (
                  <img src={cat.icon} alt={cat.name} />
                ) : (
                  <div className="placeholder-icon">{cat.name[0]}</div>
                )}
              </div>

              <div className="card-info">
                <h3>{cat.name}</h3>
                <p className="type">{cat.type} Category</p>

                <div className="status">
                  {cat.published ? (
                    <>
                      <CheckCircle2 color="#16a34a" />
                      <span>Published</span>
                    </>
                  ) : (
                    <>
                      <XCircle color="#dc2626" />
                      <span>Unpublished</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPreview;
