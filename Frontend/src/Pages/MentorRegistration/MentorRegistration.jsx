import React, { useState } from "react";
import "./MentorRegistration.css";
import bgImage from "../../assets/grid8.webp";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaGooglePlusG, 
  FaLinkedinIn, 
  FaPinterestP 
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MentorRegistration = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();   // ✅ added

  const nextStep = () => {
    if (step < 6) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    navigate("/Application-submited"); // ✅ redirect here
  };

  return (
    <div className="i3mentor-container">
      <div className="i3mentor-card">

        {/* ================= LEFT PANEL ================= */}
        <div
          className="i3mentor-left"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="i3mentor-overlay">
            <h1 className="i3mentor-logo">i3 Internship</h1>

            <div className="i3mentor-left-content">
              <h2>
                Hey there! It's great to have you as part of the team
              </h2>
              <p>
                We are glad to see you again! Get access to your Orders,
                Wishlist and Recommendations. Nulla facilisi. Nullam in magna
                id dolor blandit rutrum eget vulputate augue sed eu leo eget
                risus dummy text here now ready works imperdiet.
              </p>
            </div>

            <div className="i3mentor-social-wrapper">
              <div className="i3mentor-social-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaGooglePlusG />
                <FaLinkedinIn />
                <FaPinterestP />
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="i3mentor-right">

          {/* PROGRESS HEADER */}
          <div className="i3mentor-progress-wrapper">
            <p className="i3mentor-progress-text">
              {step} of 6 completed
            </p>

            <div className="i3mentor-progress-bar">
              <div
                className="i3mentor-progress-fill"
                style={{ width: `${(step / 6) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="i3mentor-form">

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2>Personal Information</h2>
                <input placeholder="Full Name *" />
                <input placeholder="Father’s / Spouse’s Name *" />
                <input type="date" />
                <select>
                  <option>Gender *</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Transgender</option>
                </select>
                <input placeholder="Mobile Number *" />
                <input placeholder="Alternate Mobile Number" />
                <input placeholder="Email Address *" />
                <textarea placeholder="Current Address *" />
                <textarea placeholder="Permanent Address (if different) *" />
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2>Educational Qualifications</h2>
                <select>
                  <option>Highest Qualification *</option>
                  <option>Matriculation</option>
                  <option>Intermediate</option>
                  <option>Diploma</option>
                  <option>Graduation</option>
                  <option>Post Graduation</option>
                  <option>M.Phil</option>
                  <option>Ph.D</option>
                </select>
                <input placeholder="Subject/Area of Specialization *" />
                <input placeholder="University / Institution *" />
                <input placeholder="Year of Completion *" />
                <input placeholder="Percentage / Grade *" />
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2>Professional Experience</h2>
                <input placeholder="Current Organization" />
                <input placeholder="Current Designation" />
                <input placeholder="Total Work Experience (Years)" />
                <input placeholder="Teaching/Training Experience" />
                <textarea placeholder="Internship/Field Experience Description" />
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <h2>Mentorship Details</h2>
                <textarea placeholder="Areas of Mentorship *" />
                <select>
                  <option>Preferred Level *</option>
                  <option>School</option>
                  <option>Graduate</option>
                  <option>Postgraduate</option>
                  <option>Research/Professional</option>
                </select>
                <input placeholder="Maximum Interns *" />
                <select>
                  <option>Mode *</option>
                  <option>Online</option>
                  <option>Offline</option>
                  <option>Hybrid</option>
                </select>
                <input placeholder="Availability (Days/Time Slots) *" />
                <textarea placeholder="Self Introduction (150-200 words) *" />
              </>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <>
                <h2>Document Upload</h2>
                <label>Passport Size Photograph *</label>
                <input type="file" />
                <label>Identity Proof *</label>
                <input type="file" />
                <label>Educational Certificates (PDF) *</label>
                <input type="file" />
                <label>Experience Certificates</label>
                <input type="file" />
              </>
            )}

            {/* STEP 6 */}
           {/* STEP 6 */}
{step === 6 && (
  <>
    

   

    <input placeholder="Place" />
    <input type="date" />

    {/* Terms & Conditions */}
    <div className="i3mentor-terms">
      <label className="i3mentor-terms-label">
       
        <input type="checkbox" required />
        <span>
         I declare that all the information provided above is true to
      the best of my knowledge. I agree to the rules and objectives
      of the International Institute of Internship and commit to
      following all guidelines.
        </span>
      </label>
    </div>
  </>
)}


            {/* NAVIGATION */}
            <div className="i3mentor-buttons">
              {step > 1 && (
                <button onClick={prevStep} className="i3mentor-prev">
                  Previous
                </button>
              )}

              {step < 6 ? (
                <button onClick={nextStep} className="i3mentor-next">
                  Next
                </button>
              ) : (
                <button 
                  className="i3mentor-submit"
                  onClick={handleSubmit}   // ✅ redirect here
                >
                  Submit Application
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorRegistration;
