import React, { useState } from "react";
import API from "../../api/api";
import { useParams } from "react-router-dom";
import "./SubmitReview.css";

const SubmitReview = () => {

  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    review: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submitReview = async () => {

    try {

      await API.post("/reviews/create", {
        ...form,
        internshipId: id
      });

      alert("Review submitted!");

      setForm({
        name: "",
        email: "",
        review: ""
      });

    } catch (error) {

      console.log(error);

    }

  };

  return (
    <div className="submit-review-wrapper">
      <div className="submit-review-container">

        <h2 className="submit-review-title">Submit Reviews</h2>

        <div className="submit-review-row">

          <div className="submit-review-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="submit-review-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>

        </div>

        <div className="submit-review-field full">
          <label>Review</label>
          <textarea
            rows="6"
            name="review"
            value={form.review}
            onChange={handleChange}
            placeholder="Review"
          />
        </div>

        <button
          className="submit-review-btn"
          onClick={submitReview}
        >
          Submit Review
        </button>

      </div>
    </div>
  );
};

export default SubmitReview;