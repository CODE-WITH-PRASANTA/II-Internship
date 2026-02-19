import React from "react";
import "./EducationalKnowAbout.css";
import { FiHeart, FiMonitor, FiSmartphone } from "react-icons/fi";

import img1 from "../../assets/About-1122.webp";
import img2 from "../../assets/About-1133.webp";
import img3 from "../../assets/About-1111.webp";

const EducationalKnowAbout = () => {
  return (
    <section className="educationalknowabout-section">

      <div className="educationalknowabout-container">

        {/* IMAGE COLLAGE */}
        <div className="educationalknowabout-media">

          <img
            src={img1}
            alt=""
            className="educationalknowabout-media__img educationalknowabout-media__img--primary"
          />
          <img
            src={img2}
            alt=""
            className="educationalknowabout-media__img educationalknowabout-media__img--top"
          />
          <img
            src={img3}
            alt=""
            className="educationalknowabout-media__img educationalknowabout-media__img--bottom"
          />

        </div>

        {/* CONTENT */}
        <div className="educationalknowabout-content">

          <span className="educationalknowabout-content__badge">
            KNOW ABOUT US
          </span>

          <h2 className="educationalknowabout-content__title">
            Know About Histudy <br /> Learning Platform
          </h2>

          <p className="educationalknowabout-content__desc">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>

          <div className="educationalknowabout-features">

            <div className="educationalknowabout-feature">
              <div className="educationalknowabout-feature__icon educationalknowabout-feature__icon--pink">
                <FiHeart />
              </div>
              <div>
                <h4>Flexible Classes</h4>
                <p>Readable content of when looking at its layout.</p>
              </div>
            </div>

            <div className="educationalknowabout-feature">
              <div className="educationalknowabout-feature__icon educationalknowabout-feature__icon--blue">
                <FiSmartphone />
              </div>
              <div>
                <h4>Learn From Anywhere</h4>
                <p>Repudiandae eos recusandae laboru.</p>
              </div>
            </div>

            <div className="educationalknowabout-feature">
              <div className="educationalknowabout-feature__icon educationalknowabout-feature__icon--orange">
                <FiMonitor />
              </div>
              <div>
                <h4>Experienced Teacher's service.</h4>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>

          </div>

          <button className="educationalknowabout-content__button">
            More About Us →
          </button>

        </div>

      </div>

    </section>
  );
};

export default EducationalKnowAbout;
