import React, { useState, useEffect } from "react";
import TSKStarRating from "./InstructorRating";

interface InstructorType {
  id?: number;
  name: string;
  designation: string;
  about: string;
  rating: number;
  facebook: string;
  instagram: string;
  linkedin: string;
  image: string | null;
}

interface Props {
  onSubmit: (data: InstructorType) => void;
  editItem: InstructorType | null;
}

const TSKInstructorForm: React.FC<Props> = ({ onSubmit, editItem }) => {
  const [form, setForm] = useState<InstructorType>({
    name: "",
    designation: "",
    about: "",
    rating: 0,
    facebook: "",
    instagram: "",
    linkedin: "",
    image: null,
  });

  useEffect(() => {
    if (editItem) setForm(editItem);
  }, [editItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="tsk-form-card" onSubmit={handleSubmit}>
      
      {/* HEADER */}
      <div className="tsk-card-header">
        <h3>Main Instructor Form</h3>
      </div>

      {/* NAME */}
      <div className="tsk-field">
        <label className="tsk-label">Instructor Name</label>
        <input
          className="tsk-input"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      {/* DESIGNATION + RATING */}
      <div className="tsk-row">
        <div className="tsk-field">
          <label className="tsk-label">Designation</label>
          <input
            className="tsk-input"
            value={form.designation}
            onChange={(e) =>
              setForm({ ...form, designation: e.target.value })
            }
          />
        </div>

        <div className="tsk-field">
          <label className="tsk-label">Rating</label>
          <TSKStarRating
            rating={form.rating}
            setRating={(r) => setForm({ ...form, rating: r })}
          />
        </div>
      </div>

      {/* ABOUT + IMAGE (SAME ROW) */}
      <div className="tsk-row">
        
        <div className="tsk-field">
          <label className="tsk-label">About Instructor</label>
          <textarea
            className="tsk-textarea"
            value={form.about}
            onChange={(e) =>
              setForm({ ...form, about: e.target.value })
            }
          />
        </div>

        <div className="tsk-field">
          <label className="tsk-label">Instructor Image</label>

          <input
            type="file"
            className="tsk-input"
            onChange={(e) => {
              if (e.target.files) {
                setForm({
                  ...form,
                  image: URL.createObjectURL(e.target.files[0]),
                });
              }
            }}
          />

          {/* IMAGE PREVIEW */}
          {form.image && (
            <div className="tsk-preview">
              <img src={form.image} alt="preview" />
            </div>
          )}
        </div>

      </div>

      {/* SOCIAL LINKS */}
      <div className="tsk-field">
        <label className="tsk-label">Facebook</label>
        <input
          className="tsk-input"
          value={form.facebook}
          onChange={(e) =>
            setForm({ ...form, facebook: e.target.value })
          }
        />
      </div>

      <div className="tsk-field">
        <label className="tsk-label">Instagram</label>
        <input
          className="tsk-input"
          value={form.instagram}
          onChange={(e) =>
            setForm({ ...form, instagram: e.target.value })
          }
        />
      </div>

      <div className="tsk-field">
        <label className="tsk-label">LinkedIn</label>
        <input
          className="tsk-input"
          value={form.linkedin}
          onChange={(e) =>
            setForm({ ...form, linkedin: e.target.value })
          }
        />
      </div>

      <button className="tsk-submit-btn">
        {editItem ? "Update Instructor" : "Submit"}
      </button>

    </form>
  );
};

export default TSKInstructorForm;
