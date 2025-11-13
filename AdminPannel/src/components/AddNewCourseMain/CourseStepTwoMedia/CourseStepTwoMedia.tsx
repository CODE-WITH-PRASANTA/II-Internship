import React, { useEffect, useState } from "react";
import { UploadCloud, Video, PlayCircle } from "lucide-react";
import "./CourseStepTwoMedia.css";

interface Props {
  data?: any;
  onChange?: (data: any) => void;
}

const CourseStepTwoMedia: React.FC<Props> = ({ data = {}, onChange }) => {
  const [imageFileName, setImageFileName] = useState<string>(data.imageFileName ?? "No file chosen");
  const [videoUrl, setVideoUrl] = useState<string>(data.videoUrl ?? "");
  const [videoPreview, setVideoPreview] = useState<string>(data.videoPreview ?? "");

  useEffect(() => {
    onChange?.({ imageFileName, videoUrl, videoPreview });
  }, [imageFileName, videoUrl, videoPreview, onChange]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => setVideoPreview((reader.result as string) || "");
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="coursesteptwomedia-form animate-fade-in">
      <h2 className="coursesteptwomedia-title">Course Media</h2>
      <hr className="coursesteptwomedia-divider" />

      {/* ===== Image Upload ===== */}
      <div className="coursesteptwomedia-image-upload animate-slide-up">
        <div className="coursesteptwomedia-upload-area">
          <UploadCloud className="coursesteptwomedia-upload-icon" />
          <p className="coursesteptwomedia-upload-text">
            <strong>Upload course image here, or </strong>
            <a href="#" className="coursesteptwomedia-browse-link" onClick={(e) => e.preventDefault()}>
              Browse
            </a>
          </p>

          <div className="coursesteptwomedia-file-input-container">
            <label className="coursesteptwomedia-file-btn" htmlFor="courseImageLocal">
              <UploadCloud size={18} /> Choose File
            </label>
            <span className="coursesteptwomedia-file-name">{imageFileName}</span>
            <input
              id="courseImageLocal"
              type="file"
              accept=".jpg,.jpeg,.png"
              hidden
              onChange={handleImageChange}
            />
          </div>

          <p className="coursesteptwomedia-note">
            <strong>Note:</strong> Only JPG, JPEG and PNG. Suggested 600x450px.
          </p>
        </div>
        <button type="button" className="coursesteptwomedia-remove-btn">Remove image</button>
      </div>

      {/* ===== Video Upload ===== */}
      <div className="coursesteptwomedia-video-section animate-slide-up">
        <h3>Upload video</h3>
        <div className="coursesteptwomedia-form-group">
          <label>Video URL</label>
          <input
            type="text"
            placeholder="Enter video URL"
            className="coursesteptwomedia-video-url-input"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>

        <div className="coursesteptwomedia-divider"><span>Or</span></div>

        <div className="coursesteptwomedia-video-upload-options">
          {[".mp4", ".webm", ".ogg"].map((ext) => (
            <div className="coursesteptwomedia-form-group coursesteptwomedia-video-row" key={ext}>
              <label className="coursesteptwomedia-file-label">
                <Video size={18} /> Choose File
                <input type="file" accept={ext} />
              </label>
              <span className="coursesteptwomedia-file-name">{ext}</span>
            </div>
          ))}
        </div>

        {(videoUrl || videoPreview) && (
          <div className="coursesteptwomedia-video-preview animate-fade-in">
            <h3>Video preview</h3>
            <div className="coursesteptwomedia-preview-box">
              <img
                src={videoPreview || "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg"}
                alt="Video preview"
                className="coursesteptwomedia-preview-image"
              />
              <button className="coursesteptwomedia-play-button">
                <PlayCircle size={32} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseStepTwoMedia;
