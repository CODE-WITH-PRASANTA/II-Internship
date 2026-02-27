import React, { useState } from "react";
import "./AppHeader.css";
import avatar from "../../assets/User-4.webp"; // ✅ import profile image

import {
  FiMenu,
  FiBell,
  FiMoon,
  FiSun,
  FiSearch
} from "react-icons/fi";

const AppHeader = ({ collapsed, setCollapsed }) => {
  const [dark, setDark] = useState(false);

  return (
    <header className="AppHeader">
      
      {/* LEFT */}
      <div className="AppHeader-left">
        <button
          className="AppHeader-menuBtn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FiMenu />
        </button>

        <div className="AppHeader-search">
          <FiSearch />
          <input placeholder="Search for results..." />
        </div>
      </div>

      {/* RIGHT */}
      <div className="AppHeader-right">
        <button
          className="AppHeader-icon"
          onClick={() => setDark(!dark)}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>

        <button className="AppHeader-icon notification">
          <FiBell />
          <span className="dot" />
        </button>

        <div className="AppHeader-profile">
          <img src={avatar} alt="profile" />
          <span className="profile-name">Musharof</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;