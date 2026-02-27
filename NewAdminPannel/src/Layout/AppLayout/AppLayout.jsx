import React, { useState } from "react";
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
          {/* YOUR PAGE CONTENT HERE */}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;