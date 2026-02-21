import React from "react";
import "./SuccessStoryLayout.css";
import SuccessStoryDetails from "../SuccessStoryDetails/SuccessStoryDetails";
import SuccessStorySidebar from "../SuccessStorySidebar/SuccessStorySidebar";


const SuccessStoryLayout = () => {
  return (
    <div className="successstory-layout-wrapper">
      <div className="successstory-layout-container">
        
        <div className="successstory-layout-left">
          <SuccessStoryDetails />
        </div>

        <div className="successstory-layout-right">
          <SuccessStorySidebar />
        </div>

      </div>
    </div>
  );
};

export default SuccessStoryLayout;
