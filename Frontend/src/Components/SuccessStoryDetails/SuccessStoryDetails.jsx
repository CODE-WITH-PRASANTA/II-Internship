import React, { useEffect, useState } from "react";
import "./SuccessStoryDetails.css";
import {
  FiCalendar,
  FiUser,
  FiClock,
  FiMessageCircle,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiArrowRight
} from "react-icons/fi";
import { useParams } from "react-router-dom";
import API, { getImageUrl } from "../../api/api";

import authorImage from "../../assets/Author-1.webp";
import comment1 from "../../assets/Author-2.webp";
import comment2 from "../../assets/Author-3.webp";

const SuccessStoryDetails = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);

  /* ================= FETCH STORY ================= */
  useEffect(() => {
    const fetchStory = async () => {
      try {
        const res = await API.get(`/success-stories/${id}`);
        setStory(res.data);
      } catch (err) {
        console.error("FETCH STORY ERROR:", err);
      }
    };

    if (id) fetchStory();
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div className="successstorydetails-main-wrapper">

      {/* FEATURE IMAGE */}
      <div className="successstorydetails-feature-image">
        <img
          src={
            story.image
              ? getImageUrl(story.image)
              : "/placeholder.png"
          }
          alt="Story"
        />
      </div>

      {/* META INFO */}
      <div className="successstorydetails-meta-info">
        <span>
          <FiCalendar />{" "}
          {story.publishDate
            ? new Date(story.publishDate).toLocaleDateString()
            : ""}
        </span>
        <span>
          <FiUser /> {story.author}
        </span>
        <span>
          <FiClock /> 5 Min Read
        </span>
        <span>
          <FiMessageCircle /> 05 Comments
        </span>
      </div>

      {/* TITLE */}
      <h1 className="successstorydetails-main-title">
        {story.title}
      </h1>

      {/* DESCRIPTION */}
      <div
        className="successstorydetails-paragraph"
        dangerouslySetInnerHTML={{ __html: story.description }}
      />

      {/* QUOTE BOX */}
      {story.quotes && (
        <div className="successstorydetails-quote-section">
          <p>{story.quotes}</p>
        </div>
      )}

      {/* SUB HEADING */}
      {story.features && story.features.length > 0 && (
        <>
          <h2 className="successstorydetails-sub-title">
            What Will I Learn From This Course?
          </h2>

          <ul className="successstorydetails-learning-list">
            {story.features.map((item, index) => (
              <li key={index}>
                <span className="successstorydetails-yellow-icon">
                  <FiArrowRight />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* TAGS & SHARE (UNCHANGED) */}
      <div className="successstorydetails-tag-share">
        <div className="successstorydetails-tags">
          <span>Bath Cleaning</span>
          <span>Cleaning</span>
        </div>

        <div className="successstorydetails-share-icons">
          <span>Share :</span>
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>

      {/* AUTHOR CARD */}
      <div className="successstorydetails-author-card">
        <img src={authorImage} alt="Author" />
        <div>
          <span className="successstorydetails-author-role">Author</span>
          <h3>{story.author}</h3>
          <p>
            Thank you for reading this inspiring success story.
          </p>
        </div>
      </div>

      {/* STATIC COMMENTS (UI SAME) */}
      <h2 className="successstorydetails-comments-title">02 Comments</h2>

      <div className="successstorydetails-comment-box">
        <img src={comment1} alt="User" />
        <div>
          <h4>Jessica Rose</h4>
          <span>20 July, 2024</span>
          <p>Amazing and inspiring story.</p>
          <button>REPLY</button>
        </div>
      </div>

      <div className="successstorydetails-comment-box">
        <img src={comment2} alt="User" />
        <div>
          <h4>Parker Willy</h4>
          <span>20 July, 2024</span>
          <p>Very motivating content.</p>
          <button>REPLY</button>
        </div>
      </div>

      {/* COMMENT FORM */}
      <div className="successstorydetails-comment-form">
        <h2>Post A Comment</h2>
        <p>Your email address will not be published. Required fields are marked *</p>

        <textarea placeholder="Comment"></textarea>

        <div className="successstorydetails-form-row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Website" />
        </div>

        <div className="successstorydetails-checkbox">
          <input
            type="checkbox"
            id="saveinfo"
            className="successstorydetails-checkbox-input"
          />
          <label
            htmlFor="saveinfo"
            className="successstorydetails-checkbox-label"
          >
            Save my name, email, and website in this browser for the next time I comment.
          </label>
        </div>

        <button className="successstorydetails-submit-btn">
          Post Comment <FiArrowRight />
        </button>
      </div>

    </div>
  );
};

export default SuccessStoryDetails;