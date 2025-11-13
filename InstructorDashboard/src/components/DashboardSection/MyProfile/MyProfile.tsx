import React from "react";
import "./MyProfile.css";
import {
  IdCard,
  Briefcase,
  User,
  Phone,
  Mail,
  Calendar,
  Cake,
  GraduationCap,
  UserCircle,
  UserCheck,
} from "lucide-react";

const MyProfile: React.FC = () => {
  return (
    <div className="myprofile-container">
      {/* === PAGE TITLE === */}
      <div className="myprofile-title-wrapper">
        <IdCard className="myprofile-title-icon" />
        <h2 className="myprofile-title">My Profile</h2>
      </div>

      {/* === BASIC INFORMATION === */}
      <div className="myprofile-section">
        <h3 className="myprofile-section-title">
          <UserCheck size={20} /> Basic Information
        </h3>

        <div className="myprofile-info-grid">
          <div className="myprofile-info-item">
            <User className="myprofile-label-icon" />
            <span className="myprofile-label">First Name</span>
            <span className="myprofile-value">Eugene</span>
          </div>

          <div className="myprofile-info-item">
            <User className="myprofile-label-icon" />
            <span className="myprofile-label">Last Name</span>
            <span className="myprofile-value">Andre</span>
          </div>

          <div className="myprofile-info-item">
            <Calendar className="myprofile-label-icon" />
            <span className="myprofile-label">Registration Date</span>
            <span className="myprofile-value">16 Jan 2024, 11:15 AM</span>
          </div>

          <div className="myprofile-info-item">
            <UserCircle className="myprofile-label-icon" />
            <span className="myprofile-label">User Name</span>
            <span className="myprofile-value">instructordemo</span>
          </div>

          <div className="myprofile-info-item">
            <Phone className="myprofile-label-icon" />
            <span className="myprofile-label">Phone Number</span>
            <span className="myprofile-value">89104-71829</span>
          </div>

          <div className="myprofile-info-item">
            <Mail className="myprofile-label-icon" />
            <span className="myprofile-label">Email</span>
            <span className="myprofile-value">instructordemo@example.com</span>
          </div>

          <div className="myprofile-info-item">
            <User className="myprofile-label-icon" />
            <span className="myprofile-label">Gender</span>
            <span className="myprofile-value">Male</span>
          </div>

          <div className="myprofile-info-item">
            <Cake className="myprofile-label-icon" />
            <span className="myprofile-label">DOB</span>
            <span className="myprofile-value">16 Jan 2020</span>
          </div>

          <div className="myprofile-info-item">
            <UserCircle className="myprofile-label-icon" />
            <span className="myprofile-label">Age</span>
            <span className="myprofile-value">24</span>
          </div>
        </div>

        <div className="myprofile-bio-section">
          <span className="myprofile-label">Bio</span>
          <p className="myprofile-bio-text">
            I am a web developer with a vast array of knowledge in many different front-end and
            back-end languages, responsive frameworks, databases, and best code practices.
          </p>
        </div>
      </div>

      {/* === EDUCATION SECTION === */}
      <div className="myprofile-section">
        <h3 className="myprofile-section-title">
          <GraduationCap size={20} /> Education
        </h3>
        <div className="myprofile-education-timeline">
          <div className="myprofile-education-item">
            <div className="myprofile-dot"></div>
            <div>
              <p className="myprofile-edu-title">BCA - Bachelor of Computer Applications</p>
              <p className="myprofile-edu-subtitle">International University - (2004 - 2010)</p>
            </div>
          </div>

          <div className="myprofile-education-item">
            <div className="myprofile-dot"></div>
            <div>
              <p className="myprofile-edu-title">MCA - Master of Computer Application</p>
              <p className="myprofile-edu-subtitle">International University - (2010 - 2012)</p>
            </div>
          </div>

          <div className="myprofile-education-item">
            <div className="myprofile-dot"></div>
            <div>
              <p className="myprofile-edu-title">Design Communication Visual</p>
              <p className="myprofile-edu-subtitle">International University - (2012 - 2015)</p>
            </div>
          </div>
        </div>
      </div>

      {/* === EXPERIENCE SECTION === */}
      <div className="myprofile-section">
        <h3 className="myprofile-section-title">
          <Briefcase size={20} /> Experience
        </h3>
        <div className="myprofile-experience-list">
          <div className="myprofile-experience-item">
            <Briefcase className="myprofile-exp-icon" />
            <div>
              <p className="myprofile-exp-title">Web Design & Development Team Leader</p>
              <p className="myprofile-exp-subtitle">Creative Agency - (2013 - 2016)</p>
            </div>
          </div>

          <div className="myprofile-experience-item">
            <Briefcase className="myprofile-exp-icon" />
            <div>
              <p className="myprofile-exp-title">Project Manager</p>
              <p className="myprofile-exp-subtitle">CJobcy Technology Pvt. Ltd - (Present)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
