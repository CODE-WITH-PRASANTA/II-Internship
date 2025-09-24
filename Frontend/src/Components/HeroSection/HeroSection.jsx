import React from 'react'
import './HeroSection.css'

// Assets
import girlimg from '../../assets/girl-1.webp'

const HeroSection = () => {
  return (
    <section className="HeroSec-section">
      {/* Decorative Shapes */}
      <span className="shape dotted-green"></span>
      <span className="shape dotted-red"></span>
      <span className="shape solid-yellow"></span>
      <span className="shape arc-red"></span>
      <span className="shape circle-blue"></span>
      <span className="shape dotted-green-bottom"></span>
      <span className="shape zigzag-green"></span>

      <div className="HeroSec-container">
        {/* Left Content */}
        <div className="HeroSec-content">
          <h1 className="HeroSec-title">
            Get <span>2500+</span> <br /> Best Online Courses <br /> From EduBlink
          </h1>
          <p className="HeroSec-desc">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </p>
          <button className="HeroSec-btn">Find courses →</button>
        </div>

        {/* Right Image */}
        <div className="HeroSec-image">
          <img src={girlimg} alt="Student" className="HeroSec-girl" />

          {/* Instructor Card */}
          <div className="HeroSec-instructorCard">
            <h4 className="HeroSec-cardTitle">Instructor</h4>
            <div className="HeroSec-instructors">
              <img src="https://i.pravatar.cc/40?img=1" alt="Instructor" />
              <img src="https://i.pravatar.cc/40?img=2" alt="Instructor" />
              <img src="https://i.pravatar.cc/40?img=3" alt="Instructor" />
              <img src="https://i.pravatar.cc/40?img=4" alt="Instructor" />
              <span className="HeroSec-more">+ 200</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
