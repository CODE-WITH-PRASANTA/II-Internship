import React from 'react';
import './SuccessStoryDetailsSection.css';
import successImage from '../../assets/success.webp';
import { FaHeart, FaEye } from 'react-icons/fa';

const SuccessStoryDetailsSection = () => {
  return (
    <section className="successstorydetailssection">
      <div className="successstorydetailssection__container">
        {/* Left: Author Info */}
        <div className="successstorydetailssection__author">
          <img src={successImage} alt="Author" className="successstorydetailssection__image" />
          <h2 className="successstorydetailssection__name">Frances Guerrero</h2>
          <p className="successstorydetailssection__role">Editor at Eduport</p>
          <p className="successstorydetailssection__date">Nov 15, 2021</p>
          <p className="successstorydetailssection__readtime">5 min read</p>
          <div className="successstorydetailssection__stats">
            <span className="successstorydetailssection__likes">
              <FaHeart /> 266
            </span>
            <span className="successstorydetailssection__views">
              <FaEye /> 2K
            </span>
          </div>
        </div>

        {/* Right: Article Content */}
        <div className="successstorydetailssection__content">
          <div className="successstorydetailssection__meta">
            <span className="successstorydetailssection__time">40D ago</span>
            <span className="successstorydetailssection__tag">Research</span>
          </div>
          <h1 className="successstorydetailssection__title">
            Never underestimate the <br />
            influence of Eduport
          </h1>
          <p className="successstorydetailssection__paragraph">
            For who thoroughly her boy estimating conviction. Removed demands expense account in
            outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be
            projecting own. Thirty it matter enable become admire in giving. See resolved goodness
            felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive
            laughing six did far.
          </p>
          <p className="successstorydetailssection__paragraph">
            Perceived end knowledge certainly day sweetness why cordially. On forth doubt miles of
            child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution
            astonished. Demesne new manners savings staying had. Under folly balls, death own point
            now men. Match way these she avoids seeing death. She who drift their fat off. Ask a
            quick six seven offer see among. Handsome met debating sir dwelling age material. As
            style lived he worse dried. Offered related so visitors we private removed.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default SuccessStoryDetailsSection;
