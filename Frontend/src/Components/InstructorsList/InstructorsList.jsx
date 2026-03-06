import React from "react";
import "./InstructorsList.css";
import in1 from "../../assets/in1.webp";
import in2 from "../../assets/in2.webp";
import in3 from "../../assets/in3.webp";
import in4 from "../../assets/in4.webp";
import in5 from "../../assets/in5.webp";
import in6 from "../../assets/in6.webp";
import in7 from "../../assets/in7.webp";
import in8 from "../../assets/in8.webp";

const instructors = [
  { name: "Dennis Barrett", college: "Sigma College", subject: "Digital Marketing", rating: 4.3, img: in1 },
  { name: "Jacqueline Miller", college: "Eastbay College", subject: "Graphic Designer", rating: 4.0, img: in2 },
  { name: "Louis Ferguson", college: "Cambridge College", subject: "Engineering Physics", rating: 3.8, img: in3 },
  { name: "Frances Guerrero", college: "LPU College", subject: "Graphic Designer", rating: 4.5, img: in4 },
  { name: "Amanda Scott", college: "Global College", subject: "UX/UI Design", rating: 4.7, img: in5 },
  { name: "George Hudson", college: "Modern University", subject: "Computer Science", rating: 4.2, img: in6 },
  { name: "Sophia Wilson", college: "Tech Institute", subject: "Frontend Development", rating: 4.6, img: in7 },
  { name: "Michael Clark", college: "Creative Arts College", subject: "Photography", rating: 4.4, img: in8 }
];

const InstructorsList = () => {
  return (
    <div className="instructorslist-container">
      

      {/* Filters Section */}
      <div className="instructorslist-filters">
        <input type="text" placeholder="🔍 Search instructor" />

        <select>
          <option value="">Select Category</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
          <option value="development">Development</option>
          <option value="photography">Photography</option>
          <option value="science">Science</option>
        </select>

        <select>
          <option value="">Sort by</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
          <option value="college">College</option>
        </select>

        <select>
          <option value="">Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button>Filter Results</button>
      </div>

      {/* Instructor Cards */}
      <div className="instructorslist-grid">
        {instructors.map((instructor, index) => (
          <div className="instructorslist-card" key={index}>
            <div className="instructorslist-img">
              <img src={instructor.img} alt={instructor.name} />
            </div>

            <div className="instructorslist-info">
              <div className="instructorslist-name">
                <h3>{instructor.name}</h3>
                <span className="instructorslist-rating">
                  {instructor.rating} <i className="fas fa-star"></i>
                </span>
              </div>

              <p className="instructorslist-college">
                Professor at {instructor.college}
              </p>

              <p className="instructorslist-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              <div className="subject-social">
                <p className="instructorslist-subject">{instructor.subject}</p>
                <div className="instructorslist-social">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsList;
