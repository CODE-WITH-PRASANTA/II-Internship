import React, { useState } from "react";
import {
  Edit3,
  Trash2,
  CheckCircle2,
  XCircle,
  Video,
  MapPin,
  Mail,
} from "lucide-react";
import "./StoryPreview.css";

interface Story {
  id: number;
  title: string;
  description: string;
  category: string;
  blogImage?: string;
  authorName: string;
  authorImage?: string;
  aboutAuthor: string;
  mainQuote: string;
  video?: string;
  tags: string[];
  location: string;
  email: string;
  features: string[];
  published: boolean;
}

const StoryPreview: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      title: "Journey from Student to Software Engineer",
      description:
        "My path from college to my dream job was full of challenges, learning, and persistence. Here's how I made it happen!",
      category: "Career",
      blogImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
      authorName: "Ravi Kumar",
      authorImage:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
      aboutAuthor:
        "Ravi is a passionate developer who loves building creative digital products.",
      mainQuote: "Success is not final, failure is not fatal.",
      video: "",
      tags: ["Career", "Motivation", "Success"],
      location: "Bangalore, India",
      email: "ravi@example.com",
      features: [
        "Job placement assistance",
        "Online mentoring support",
        "Hands-on projects",
      ],
      published: true,
    },
    {
      id: 2,
      title: "Exploring Dubai — My Travel Experience",
      description:
        "A week-long journey exploring the futuristic skyline, desert safaris, and cultural richness of Dubai.",
      category: "Travel",
      blogImage:
        "https://images.unsplash.com/photo-1533106418989-88406c7cc8bb?w=600",
      authorName: "Anjali Sharma",
      authorImage:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100",
      aboutAuthor: "Anjali is a travel vlogger sharing unique global stories.",
      mainQuote: "Travel opens your heart, broadens your mind.",
      video: "",
      tags: ["Adventure", "Travel", "Dubai"],
      location: "Dubai, UAE",
      email: "anjali@example.com",
      features: [
        "Luxury stays",
        "Local food tasting",
        "Cultural exploration",
      ],
      published: false,
    },
  ]);

  const handleDelete = (id: number) => {
    if (!confirm("Delete this story?")) return;
    setStories((prev) => prev.filter((s) => s.id !== id));
  };

  const togglePublish = (id: number) => {
    setStories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, published: !s.published } : s))
    );
  };

  return (
    <div className="create-story-container">
      {/* Right Panel Only */}
      <div className="create-story-right">
        <h3>📚 All Stories Preview</h3>

        {stories.length === 0 ? (
          <p className="empty-msg">No stories available.</p>
        ) : (
          <div className="story-list">
            {stories.map((s) => (
              <article
                key={s.id}
                className={`story-card ${s.published ? "published" : "unpublished"}`}
              >
                <div className="story-left">
                  {s.blogImage ? (
                    <img src={s.blogImage} alt={s.title} className="story-image" />
                  ) : (
                    <div className="story-image placeholder">No Image</div>
                  )}
                </div>

                <div className="story-body">
                  <div className="story-headline">
                    <h4>{s.title}</h4>
                    <div className="story-meta">
                      <span className="meta-pill">{s.category}</span>
                      <span className="meta-dot">•</span>
                      <span className="meta-small">
                        <MapPin size={14} /> {s.location || "Unknown"}
                      </span>
                      <span className="meta-dot">•</span>
                      <span className="meta-small">
                        <Mail size={14} /> {s.email || "N/A"}
                      </span>
                    </div>
                  </div>

                  <p className="story-desc">{s.description}</p>

                  <div className="story-author">
                    {s.authorImage ? (
                      <img
                        src={s.authorImage}
                        alt={s.authorName}
                        className="author-avatar"
                      />
                    ) : (
                      <div className="author-avatar placeholder">A</div>
                    )}
                    <div className="author-info">
                      <strong>{s.authorName}</strong>
                      <p className="about-author">{s.aboutAuthor}</p>
                    </div>
                  </div>

                  {s.mainQuote && (
                    <blockquote className="main-quote">“{s.mainQuote}”</blockquote>
                  )}

                  {s.tags.length > 0 && (
                    <div className="card-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.features.length > 0 && (
                    <ul className="card-features">
                      {s.features.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  )}

                  {s.video && (
                    <div className="video-indicator">
                      <Video size={16} /> Video Attached
                    </div>
                  )}
                </div>

                <div className="story-actions">
                  <button className="publish-toggle" onClick={() => togglePublish(s.id)}>
                    {s.published ? (
                      <>
                        <CheckCircle2 size={16} /> Unpublish
                      </>
                    ) : (
                      <>
                        <XCircle size={16} /> Publish
                      </>
                    )}
                  </button>

                  <button className="edit" title="Edit (not implemented)">
                    <Edit3 size={16} /> Edit
                  </button>

                  <button className="delete" onClick={() => handleDelete(s.id)}>
                    <Trash2 size={16} /> Delete
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryPreview;
