import React from "react";
import "./AboutTeam.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import directorImg from "../../assets/team-01.webp";
import mdImg from "../../assets/team-02.webp";
import managerImg from "../../assets/team-03.webp";

const teamMembers = [
  {
    id: 1,
    name: "Jane Seymour",
    role: "Managing Director",
    img: directorImg,
    description: "Steering our company to new heights with visionary leadership and innovation.",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Edward Norton",
    role: "Chief Technology Officer",
    img: mdImg,
    description: "Pioneering technological excellence and delivering cutting-edge digital solutions.",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Penelope Cruz",
    role: "Marketing Manager",
    img: managerImg,
    description: "Crafting powerful strategies that boost brand visibility and revenue growth.",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

const AboutTeam = () => {
  return (
    <section className="AboutTeam-section">
      <div className="AboutTeam-container">
        <p className="AboutTeam-subtitle">OUR LEADERSHIP TEAM</p>
        <h2 className="AboutTeam-title">Meet the Professionals Behind Our Success</h2>
        <p className="AboutTeam-description">
          We combine strategy, creativity, and experience to ensure every project achieves excellence. 
          Get to know the experts driving our company forward.
        </p>
        <span className="AboutTeam-underline"></span>

        <div className="AboutTeam-grid">
          {teamMembers.map((member) => (
            <div className="AboutTeam-card" key={member.id}>
              <div className="AboutTeam-image-wrapper">
                <img src={member.img} alt={member.name} />
                <div className="AboutTeam-overlay">
                  <div className="AboutTeam-social-icons">
                    <a href={member.socials.facebook}>
                      <FaFacebookF />
                    </a>
                    <a href={member.socials.twitter}>
                      <FaTwitter />
                    </a>
                    <a href={member.socials.linkedin}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
              <div className="AboutTeam-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
