import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppHeader from "../AppHeader/AppHeader";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="AppLayout">
      
      {/* SIDEBAR */}
      <AppSidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MAIN AREA */}
      <div className={`AppLayout-main ${collapsed ? "collapsed" : ""}`}>
        
        {/* HEADER */}
        <AppHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}   // 👈 important for hamburger
        />

        {/* PAGE CONTENT */}
        <div className="AppLayout-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AppLayout;