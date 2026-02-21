import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessStoryGrid.css";
import API, { getImageUrl } from "../../api/api";

const STORIES_PER_PAGE = 8;

function SuccessStoryGrid() {
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const fetchStories = async () => {
    try {
      const res = await API.get("/success-stories");

      const publishedStories = (res.data || []).filter(
        (story) => story.publishStatus === "Published"
      );

      setStories(publishedStories);
    } catch (err) {
      console.error("FETCH SUCCESS STORIES ERROR:", err);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);
  const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
  const currentStories = stories.slice(
    startIndex,
    startIndex + STORIES_PER_PAGE
  );

  return (
    <section className="successstorygrid-container">
      <div className="successstorygrid-wrapper">
        {currentStories.map((story, index) => {
          const plainText = story.description
            ? story.description.replace(/<[^>]+>/g, "")
            : "";

          const shortDescription =
            plainText.length > 120
              ? plainText.slice(0, 120) + "..."
              : plainText;

          return (
            <div
              className="successstorygrid-card"
              key={story._id}
              style={{ "--delay": index * 0.1 + "s", cursor: "pointer" }}
              onClick={() =>
                navigate(`/SuccessStory/details/${story._id}`)
              }
            >
              <div className="successstorygrid-image">
                <img
                  src={
                    story.image
                      ? getImageUrl(story.image)
                      : "/placeholder.png"
                  }
                  alt={story.title}
                />
              </div>

              <div className="successstorygrid-content">
                <h3 className="successstorygrid-title">
                  {story.title}
                </h3>

                <p className="successstorygrid-desc">
                  {shortDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SuccessStoryGrid;