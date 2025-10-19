import React from "react";
import "./SuccessStoryBusinessSection.css";
import img1 from "../../assets/grid2.webp"; // replace with your actual paths
import img2 from "../../assets/grid5.webp";
import img3 from "../../assets/grid8.webp";

const SuccessStoryBusinessSection = () => {
  return (
    <div className="successstorybusinesssection">
      <div className="successstorybusinesssection__images">
        <img src={img1} alt="Science" />
        <img src={img2} alt="Notes" />
        <img src={img3} alt="Feedback" />
      </div>

      <div className="successstorybusinesssection__content">
        <h2 className="successstorybusinesssection__heading">
          Productive rant about business
        </h2>

        <div className="successstorybusinesssection__paragraphs">
          <p>
            Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient
            engrossed concealed and her. Concluded boy perpetual old supposing. Farther-related bed and
            passage comfort civilly. Dashwoods see frankness objection abilities. As hastened oh produced
            prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed of
            add screened rendered six say his striking confined.
            <br /><br />
            Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old
            supposing. Farther-related bed and passage comfort civilly. Dashwoods see frankness objection
            abilities. As hastened oh produced prospect formerly up am. Placing forming nay looking old
            married few has. Margaret disposed.
          </p>

          <p>
            Meant balls it if up doubt small purse. Paid mind even sons does he door no. Attended overcame
            repeated it is perceived Marianne in. I think on style child of. Servants moreover in sensible
            it ye possible. Required his you put the outlived answered position. A pleasure exertion if
            believed provided to. All led out world this music while asked.
            <br /><br />
            Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. I
            think on style child of. Servants moreover in sensible it ye possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryBusinessSection;
