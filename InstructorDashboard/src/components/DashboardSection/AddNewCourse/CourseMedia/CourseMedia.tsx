import React, { useState } from "react";
import "./CourseMedia.css";

interface CourseMediaProps {
  data: any;
  onChange: (data: any) => void;
  onNext?: () => void; // ✅ made optional to fix the error
}

const CourseMedia: React.FC<CourseMediaProps> = ({ data, onChange }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [videoType, setVideoType] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleThumbnailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange({ ...data, thumbnail: file });
    }
  };

  const handleVideoChange = (value: string) => {
    setVideoType(value);
    onChange({ ...data, videoType: value });
  };

  const handleVideoUrlChange = (value: string) => {
    setVideoUrl(value);
    onChange({ ...data, videoUrl: value });
  };

  return (
    <div className="courseinformation-container">
      <h2 className="courseinformation-title">Course Media</h2>
      <p className="courseinformation-subtitle">
        Intro course overview provider type (.mp4, YouTube, Vimeo etc.)
      </p>

      {/* Course Thumbnail */}
      <div className="courseinformation-section">
        <label className="courseinformation-label">
          Course Thumbnail <span className="required">*</span>
        </label>

        <div className="courseinformation-thumbnail-upload">
          <input
            type="text"
            value={thumbnail ? "File Selected" : "No File Selected"}
            readOnly
            className="courseinformation-input"
          />
          <label className="courseinformation-upload-btn">
            Upload File
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              hidden
            />
          </label>
        </div>

        <div className="courseinformation-upload-box">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt="Thumbnail Preview"
              className="courseinformation-thumbnail-preview"
            />
          ) : (
            <div className="courseinformation-upload-placeholder">
              <div className="courseinformation-upload-icon">📷</div>
              <p className="courseinformation-upload-text">Upload Image</p>
              <p className="courseinformation-upload-info">
                JPEG, PNG, GIF, or WebP formats (max 2 MB)
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Course Video */}
      <div className="courseinformation-section">
        <label className="courseinformation-label">
          Course Video <span className="required">*</span>
        </label>

        <div className="courseinformation-video-inputs">
          <select
            className="courseinformation-select"
            value={videoType}
            onChange={(e) => handleVideoChange(e.target.value)}
          >
            <option value="">Select</option>
            <option value="YouTube">YouTube</option>
            <option value="Vimeo">Vimeo</option>
            <option value="MP4">MP4 File</option>
          </select>

          <input
            type="text"
            placeholder="External URL Link"
            value={videoUrl}
            onChange={(e) => handleVideoUrlChange(e.target.value)}
            className="courseinformation-input"
          />
        </div>

        {videoUrl && (
          <div className="courseinformation-video-preview">
            <img
              src="https://images.unsplash.com/photo-1590608897129-79da98d159a2?w=1200"
              alt="Video preview"
              className="courseinformation-video-thumbnail"
            />
            <div className="courseinformation-play-button">&#9658;</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseMedia;
