import React from 'react';
import './VideoSection.css';
import video1 from "../../assets/video1.webp";
import video2 from "../../assets/video2.webp";
import video3 from "../../assets/video3.webp";
import video4 from "../../assets/video4.webp";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const VideoSection = () => {
  return (
    <div className="video-gallery">
      <h2>VIDEO GALLERY</h2>
      <div className="video-container">
        <div className="video-item">
          <img src={video1} alt="Video Thumbnail 1" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
          <p>Youtube Video (Popup)</p>
        </div>
        <div className="video-item">
          <img src={video2} alt="Video Thumbnail 2" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
          <p>Vimeo Video (Popup)</p>
        </div>
        <div className="video-item">
          <img src={video3} alt="Video Thumbnail 3" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
          <p>Youtube Video (Popup)</p>
        </div>
        <div className="video-item">
          <img src={video4} alt="Video Thumbnail 4" />
          <div className="play-button">
            <i className="fas fa-play"></i>
          </div>
          <p>Vimeo Video (Popup)</p>
        </div>
      </div>


    </div>
  );
};

export default VideoSection;
