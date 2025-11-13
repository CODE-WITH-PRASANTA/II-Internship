import React, { useState } from "react";
import "./socialprofilestab.css";
import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"; // ✅ modern icon library

function SocialProfilesTab() {
  const [profiles, setProfiles] = useState({
    twitter: "https://www.twitter.com/",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  });

  const handleChange = (key: string, value: string) => {
    setProfiles((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saved Social Profiles:", profiles);
  };

  return (
    <div className="socialprofilestab-root">
      <form className="socialprofilestab-card" onSubmit={handleSave}>
        <h2 className="socialprofilestab-title">Social Profiles</h2>
        <p className="socialprofilestab-sub">
          Add your social links to display on your profile.
        </p>

        {Object.entries(profiles).map(([key, value]) => (
          <div className="socialprofilestab-field" key={key}>
            <label className="socialprofilestab-label">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            <div className="socialprofilestab-input-wrap">
              <span className="socialprofilestab-icon">
                {key === "twitter" && <Twitter size={20} color="#1DA1F2" />}
                {key === "facebook" && <Facebook size={20} color="#1877F2" />}
                {key === "instagram" && (
                  <Instagram size={20} color="#E4405F" />
                )}
                {key === "linkedin" && <Linkedin size={20} color="#0077B5" />}
                {key === "youtube" && <Youtube size={20} color="#FF0000" />}
              </span>
              <input
                type="url"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
                className="socialprofilestab-input"
                placeholder={`Enter your ${key} profile link`}
              />
            </div>
          </div>
        ))}

        <button type="submit" className="socialprofilestab-savebtn">
          Save Social Profile
        </button>
      </form>
    </div>
  );
}

export default SocialProfilesTab;
