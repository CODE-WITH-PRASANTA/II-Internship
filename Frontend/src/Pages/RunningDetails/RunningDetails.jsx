import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/api";

import RubyRailsProgram from "../../Components/RubyRailsProgram/RubyRailsProgram";
import CourseOverview from "../../Components/CourseOverview/CourseOverview";
import SubmitReview from "../../Components/SubmitReview/SubmitReview";
import RunningDeveloper from "../../Components/RunningDeveloper/RunningDeveloper";
import HappyStudent from "../../Components/HappyStudent/HappyStudent";

import "./RunningDetails.css";

const RunningDetails = () => {

  const { id } = useParams();

  const [course,setCourse] = useState(null);

  const fetchCourse = async () => {

    try{

      const res = await API.get(`/internships/${id}`);

      setCourse(res.data);

    }catch(error){
      console.log(error);
    }

  };

  useEffect(()=>{
    fetchCourse();
  },[id]);

  if(!course) return <div>Loading...</div>;

  return (
    <div>

      {/* FULL WIDTH HEADER */}
      <div className="running-details-header">
        <RubyRailsProgram course={course}/>
      </div>

      {/* 2 COLUMN LAYOUT */}
      <div className="running-details-wrapper">

        {/* LEFT SIDE */}
        <div className="running-details-left">
          <CourseOverview course={course}/>
          <SubmitReview />
        </div>

        {/* RIGHT STICKY SIDEBAR */}
        <div className="running-details-right">
          <RunningDeveloper course={course}/>
        </div>

      </div>

      {/* STUDENTS SECTION */}
      <HappyStudent />

    </div>
  );
};

export default RunningDetails;