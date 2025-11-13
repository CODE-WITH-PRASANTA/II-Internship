import React, { useState } from "react";
import { Video, VideoIcon, Save } from "lucide-react"; // ✅ using Lucide icons
import "./integrationstab.css";

const IntegrationsTab: React.FC = () => {
  const [zoomEnabled, setZoomEnabled] = useState(true);
  const [googleMeetEnabled, setGoogleMeetEnabled] = useState(false);

  return (
    <div className="integrationstab-container">
      <div className="integrationstab-card fade-in">
        {/* 🔹 Zoom Integration */}
        <div className="integrationstab-service slide-up">
          <div className="integrationstab-header">
            <div className="integrationstab-info">
              <div className="integrationstab-iconbox zoom">
                <Video size={30} />
              </div>
              <div>
                <h3 className="integrationstab-title">Zoom Meeting</h3>
                <p className="integrationstab-desc">
                  A real-time video and screen-sharing platform for teams and professionals.
                </p>
              </div>
            </div>

            <label className="integrationstab-switch">
              <input
                type="checkbox"
                checked={zoomEnabled}
                onChange={() => setZoomEnabled(!zoomEnabled)}
              />
              <span className="integrationstab-slider"></span>
            </label>
          </div>

          {zoomEnabled && (
            <div className="integrationstab-form fade-in">
              <div className="integrationstab-field">
                <label>
                  Client ID <span className="integrationstab-required">*</span>
                </label>
                <input type="text" placeholder="Enter Client ID" />
              </div>
              <div className="integrationstab-field">
                <label>
                  Client Secret Key <span className="integrationstab-required">*</span>
                </label>
                <input type="text" placeholder="Enter Client Secret Key" />
              </div>
            </div>
          )}
        </div>

        <hr className="integrationstab-divider" />

        {/* 🔹 Google Meet Integration */}
        <div className="integrationstab-service slide-up">
          <div className="integrationstab-header">
            <div className="integrationstab-info">
              <div className="integrationstab-iconbox meet">
                <VideoIcon size={30} />
              </div>
              <div>
                <h3 className="integrationstab-title">Google Meet</h3>
                <p className="integrationstab-desc">
                  A seamless video conferencing platform for virtual collaboration and meetings.
                </p>
              </div>
            </div>

            <label className="integrationstab-switch">
              <input
                type="checkbox"
                checked={googleMeetEnabled}
                onChange={() => setGoogleMeetEnabled(!googleMeetEnabled)}
              />
              <span className="integrationstab-slider"></span>
            </label>
          </div>

          {googleMeetEnabled && (
            <div className="integrationstab-form fade-in">
              <div className="integrationstab-field">
                <label>
                  Client ID <span className="integrationstab-required">*</span>
                </label>
                <input type="text" placeholder="Enter Client ID" />
              </div>
              <div className="integrationstab-field">
                <label>
                  Client Secret Key <span className="integrationstab-required">*</span>
                </label>
                <input type="text" placeholder="Enter Client Secret Key" />
              </div>
            </div>
          )}
        </div>

        <button className="integrationstab-savebtn bounce">
          <Save size={18} /> Save Changes
        </button>
      </div>
    </div>
  );
};

export default IntegrationsTab;
