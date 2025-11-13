import React, { useState } from "react";
import {
  Info,
  Image as ImageIcon,
  BookOpen,
  FileText,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import "./AddNewCourse.css";

import CourseInformation from "./CourseInformation/CourseInformation";
import Curriculum from "./Curriculum/Curriculum";
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation";
import Pricing from "./Pricing/Pricing";
import CourseMedia from "./CourseMedia/CourseMedia";

const AddNewCourse: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<any>({
    courseInformation: {},
    courseMedia: {},
    curriculum: {},
    additionalInformation: {},
    pricing: {},
  });

  const stepItems = [
    { title: "Course Information", icon: <Info size={18} /> },
    { title: "Course Media", icon: <ImageIcon size={18} /> },
    { title: "Curriculum", icon: <BookOpen size={18} /> },
    { title: "Additional Info", icon: <FileText size={18} /> },
    { title: "Pricing", icon: <DollarSign size={18} /> },
  ];

  const nextStep = () => step < stepItems.length && setStep((s) => s + 1);
  const prevStep = () => step > 1 && setStep((s) => s - 1);

  const handleCourseInformationChange = (data: any) =>
    setFormData((prev: any) => ({ ...prev, courseInformation: data }));

  const handleCourseMediaChange = (data: any) =>
    setFormData((prev: any) => ({ ...prev, courseMedia: data }));

  const handleCurriculumChange = (data: any) =>
    setFormData((prev: any) => ({ ...prev, curriculum: data }));

  const handleAdditionalInformationChange = (data: any) =>
    setFormData((prev: any) => ({ ...prev, additionalInformation: data }));

  const handlePricingChange = (data: any) =>
    setFormData((prev: any) => ({ ...prev, pricing: data }));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CourseInformation
            data={formData.courseInformation}
            onChange={handleCourseInformationChange}
          />
        );
      case 2:
        return (
          <CourseMedia
            data={formData.courseMedia}
            onChange={handleCourseMediaChange}
          />
        );
      case 3:
        return (
          <Curriculum
            data={formData.curriculum}
            onChange={handleCurriculumChange}
          />
        );
      case 4:
        return (
          <AdditionalInformation
            data={formData.additionalInformation}
            onChange={handleAdditionalInformationChange}
          />
        );
      case 5:
        return (
          <Pricing
            data={formData.pricing}
            onChange={handlePricingChange}
          />
        );
      default:
        return null;
    }
  };

  const progressPercent = ((step - 1) / (stepItems.length - 1)) * 100;

  return (
    <div className="addcourse-container">
      <div className="addcourse-card fade-in">
        <h2 className="addcourse-title">Add New Course</h2>

        {/* Step Indicators */}
        <div className="addcourse-steps">
          {stepItems.map((item, index) => {
            const stepNumber = index + 1;
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;
            return (
              <div
                key={index}
                className={`addcourse-step ${
                  isActive ? "active" : isCompleted ? "completed" : ""
                }`}
              >
                <div className="addcourse-step-circle">
                  {isCompleted ? <CheckCircle size={18} /> : item.icon}
                </div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>

        <div className="addcourse-progressbar">
          <div
            className="addcourse-progress"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="addcourse-content slide-in">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="addcourse-buttons">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`addcourse-btn secondary ${step === 1 ? "disabled" : ""}`}
          >
            Previous
          </button>

          {step < stepItems.length ? (
            <button onClick={nextStep} className="addcourse-btn primary">
              Next
            </button>
          ) : (
            <button
              onClick={() => setIsSubmitted(true)}
              className="addcourse-btn success"
            >
              Submit
            </button>
          )}
        </div>
      </div>

      {/* ✅ Success Popup */}
      {isSubmitted && (
        <div className="popup-overlay">
          <div className="popup-box">
            <div className="popup-icon">
              <CheckCircle size={60} color="#22c55e" />
            </div>
            <h3>Congratulations! Course Submitted</h3>
            <p>
              You’ve successfully submitted the course and it’s under review.
              Once the course is reviewed by the reviewer, it will go live.
            </p>
            <button
              className="popup-btn"
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewCourse;
