import React, { useState } from "react";
import { Outlet } from "react-router-dom";   // 👈 ADD THIS
import "./AppLayout.css";
import AppSidebar from "../AppSidebar/AppSidebar";
import AppHeader from "../AppHeader/AppHeader";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`AppLayout ${collapsed ? "collapsed" : ""}`}>
      <AppSidebar collapsed={collapsed} />

      <div className="AppLayout-main">
        <AppHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        {/* Scrollable middle page */}
        <div className="AppLayout-content">
          <Outlet />   {/* 👈 THIS IS REQUIRED */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;