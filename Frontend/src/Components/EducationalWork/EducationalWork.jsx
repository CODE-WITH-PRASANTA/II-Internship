import React, { useState } from "react";
import "./EducationalWork.css";
import { FiArrowRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

import videoImg from "../../assets/A-2.webp";

const EducationalWork = () => {
  const [play, setPlay] = useState(false);

  return (
    <section className="careerSection">

      <div className="careerSection__container">

        {/* LEFT */}
        <div className="careerSection__content">

          <span className="careerSection__badge">
            HOW WE WORK
          </span>

          <h3 className="careerSection__title">
            Build your Career And <br />
            Upgrade Your Life
          </h3>

          <p className="careerSection__desc">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ad, quo laborum cumque ea dolorum ex adipisci mollitia optio iure, culpa facilis itaque tempore quam quasi tempora cupiditate maxime ipsa.
          </p>

          <button className="careerSection__cta careerSection__cta--gradient">
            <span className="careerSection__ctaCircle">
              <FiArrowRight />
            </span>
            Learn More About Us
          </button>

        </div>

        {/* RIGHT MEDIA */}
        <div className="careerSection__media">

          {!play && (
            <>
              <img src={videoImg} alt="" />

              <button
                className="careerSection__playBtn"
                onClick={() => setPlay(true)}
              >
                <FaPlay />
              </button>
            </>
          )}

          {play && (
            <iframe
              className="careerSection__videoFrame"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&rel=0"
              title="video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}

        </div>

      </div>

    </section>
  );
};

export default EducationalWork;
