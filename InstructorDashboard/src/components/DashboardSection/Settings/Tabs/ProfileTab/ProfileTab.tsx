import React from "react";
import "./ProfileTab.css";

const ProfileTab: React.FC = () => {
  return (
    <div className="profiletab-container">
      {/* Avatar Section */}
      <div className="profiletab-avatar-section">
        <img
          src="https://via.placeholder.com/120"
          alt="avatar"
          className="profiletab-avatar"
        />
        <div className="profiletab-avatar-info">
          <h4>Your Avatar</h4>
          <p>PNG or JPG no bigger than 800px width and height</p>
          <div className="profiletab-avatar-buttons">
            <button className="profiletab-btn upload">Upload</button>
            <button className="profiletab-btn delete">Delete</button>
          </div>
        </div>
      </div>

      <hr className="profiletab-divider" />

      {/* Personal Details */}
      <div className="profiletab-details">
        <h3>Personal Details</h3>
        <p className="profiletab-subtext">Edit your personal information</p>

        <form className="profiletab-form">
          <div className="profiletab-row">
            <div className="profiletab-field">
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" value="Eugene" />
            </div>
            <div className="profiletab-field">
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" value="Andre" />
            </div>
          </div>

          <div className="profiletab-row">
            <div className="profiletab-field">
              <label>
                User Name <span>*</span>
              </label>
              <input type="text" value="instructordemo" />
            </div>
            <div className="profiletab-field">
              <label>
                Phone Number <span>*</span>
              </label>
              <input type="text" value="90154-91036" />
            </div>
          </div>

          <div className="profiletab-field full">
            <label>
              Bio <span>*</span>
            </label>
            <textarea
              rows={4}
              defaultValue="I am a web developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices."
            />
          </div>

          {/* Educational Details */}
          <div className="profiletab-details education">
            <h3>Educational Details</h3>
            <p className="profiletab-subtext">
              Edit your Educational information
            </p>

            <div className="profiletab-row">
              <div className="profiletab-field">
                <label>
                  Degree <span>*</span>
                </label>
                <input type="text" placeholder="" />
              </div>
              <div className="profiletab-field">
                <label>
                  University <span>*</span>
                </label>
                <input type="text" placeholder="" />
              </div>
              <div className="profiletab-field">
                <label>
                  From Date <span>*</span>
                </label>
                <input type="text" placeholder="📅 dd/mm/yyyy" />
              </div>
              <div className="profiletab-field">
                <label>
                  To Date <span>*</span>
                </label>
                <input type="text" placeholder="📅 dd/mm/yyyy" />
              </div>
            </div>

            <button className="profiletab-addnew">+ Add New</button>
          </div>

          {/* Experience */}
          <div className="profiletab-details experience">
            <h3>Experience</h3>
            <p className="profiletab-subtext">Edit your Experience</p>

            <div className="profiletab-row">
              <div className="profiletab-field">
                <label>
                  Company <span>*</span>
                </label>
                <input type="text" placeholder="" />
              </div>
              <div className="profiletab-field">
                <label>
                  Position <span>*</span>
                </label>
                <input type="text" placeholder="" />
              </div>
              <div className="profiletab-field">
                <label>
                  From Date <span>*</span>
                </label>
                <input type="text" placeholder="📅 dd/mm/yyyy" />
              </div>
              <div className="profiletab-field">
                <label>
                  To Date <span>*</span>
                </label>
                <input type="text" placeholder="📅 dd/mm/yyyy" />
              </div>
            </div>

            <button className="profiletab-addnew">+ Add New</button>
          </div>

          {/* Update Button */}
          <button className="profiletab-btn-primary">Update Profile</button>
        </form>
      </div>

      <hr className="profiletab-divider" />

      {/* Delete Account */}
      <div className="profiletab-delete-section">
        <h3>Delete Account</h3>
        <p className="profiletab-delete-warning">
          Are you sure you want to delete your account?
        </p>
        <p className="profiletab-delete-subtext">
          Refers to the action of permanently removing a user's account and
          associated data from a system, service, and platform.
        </p>
        <button className="profiletab-btn delete large">Delete Account</button>
      </div>
    </div>
  );
};

export default ProfileTab;
