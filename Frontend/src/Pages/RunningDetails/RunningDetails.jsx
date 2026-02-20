import React from "react";
import RubyRailsProgram from "../../Components/RubyRailsProgram/RubyRailsProgram";
import CourseOverview from "../../Components/CourseOverview/CourseOverview";
import SubmitReview from "../../Components/SubmitReview/SubmitReview";
import RunningDeveloper from "../../Components/RunningDeveloper/RunningDeveloper";
import HappyStudent from "../../Components/HappyStudent/HappyStudent";

import "./RunningDetails.css";

const RunningDetails = () => {
  return (
    <div>

      {/* FULL WIDTH HEADER */}
      <div className="running-details-header">
        <RubyRailsProgram />
      </div>

      {/* 2 COLUMN LAYOUT */}
      <div className="running-details-wrapper">

        {/* LEFT SIDE */}
        <div className="running-details-left">
          <CourseOverview />
          <SubmitReview />
        </div>

        {/* RIGHT STICKY SIDEBAR */}
        <div className="running-details-right">
          <RunningDeveloper />
        </div>
      </div>

      {/* STUDENTS SECTION */}
      <HappyStudent />
    </div>
  );
};

export default RunningDetails;
