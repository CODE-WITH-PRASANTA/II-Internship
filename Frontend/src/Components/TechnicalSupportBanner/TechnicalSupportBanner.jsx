import React from "react";
import "./TechnicalSupportBanner.css";
import mobileImg from "../../assets/rectangle.webp";
import user1 from "../../assets/banner2.webp";
import user2 from "../../assets/banner4.webp";
import user3 from "../../assets/banner5.webp";

const TechnicalSupportBanner = () => {
  return (
    <section className="technicalsupportbanner">
      <div className="technicalsupportbanner-content">
        <div className="technicalsupportbanner-left">
          <div className="technicalsupportbanner-tag">
            <span className="dot"></span> Tech Support Service
          </div>

          <h1 className="technicalsupportbanner-title">
            24/7 Tech Support <br />
            That Never Lets You <br />
            Down
          </h1>

          <p className="technicalsupportbanner-subtext">
            Get instant help from certified experts for your computer, mobile,
            and network issues—anytime, anywhere.
          </p>

          <div className="technicalsupportbanner-users">
            <div className="technicalsupportbanner-userimages">
              <img src={user1} alt="user" />
              <img src={user2} alt="user" />
              <img src={user3} alt="user" />
            </div>
            <span>Trusted by 10,000+ Users</span>
          </div>

          <div className="technicalsupportbanner-buttons">
            <button className="call-btn">Call an Expert</button>
            <button className="support-btn">
              Get Support Now <span>↗</span>
            </button>
          </div>
        </div>

        <div className="technicalsupportbanner-right">
          <img src={mobileImg} alt="mobile" className="technicalsupportbanner-mobile" />

          <div className="technicalsupportbanner-card rating-card">
            <div className="technicalsupportbanner-userimages small">
              <img src={user1} alt="user" />
              <img src={user2} alt="user" />
              <img src={user3} alt="user" />
            </div>
            <div className="technicalsupportbanner-stars">
              ⭐⭐⭐⭐⭐
            </div>
          </div>

          <div className="technicalsupportbanner-card cybersecurity-card">
            <h3>Cybersecurity & Protection</h3>
            <p>– Troubleshooting, software installation, performance optimization</p>
          </div>

          <div className="technicalsupportbanner-card mobile-card">
            <h3>Mobile & Tablet Support</h3>
            <p>– Troubleshooting, software installation, performance optimization</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupportBanner;
