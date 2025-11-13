import React, { useState } from "react";
import "./AddNewCourseMain.css";
import { CheckCircle, Info, Image, BookOpen, ListChecks } from "lucide-react";
import CourseStepOneDetails from "./CourseStepOneDetails/CourseStepOneDetails";
import CourseStepTwoMedia from "./CourseStepTwoMedia/CourseStepTwoMedia";
import CourseStepThreeCurriculum from "./CourseStepThreeCurriculum/CourseStepThreeCurriculum";
import CourseStepFourAdditionalInfo from "./CourseStepFourAdditionalInfo/CourseStepFourAdditionalInfo";

/**
 * Parent container for the 4-step course creation flow.
 * Parent handles navigation, progress, collects formData from steps,
 * shows success popup with centered icon and Back to Dashboard button.
 */

const AddNewCourseMain: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [showSuccess, setShowSuccess] = useState(false);

  // aggregated form data kept in parent
  const [formData, setFormData] = useState<any>({
    step1: {},
    step2: {},
    step3: {},
    step4: {},
  });

  const stepsMeta = [
    { id: 1, label: "Course Details", icon: <BookOpen size={18} /> },
    { id: 2, label: "Course Media", icon: <Image size={18} /> },
    { id: 3, label: "Curriculum", icon: <ListChecks size={18} /> },
    { id: 4, label: "Additional Info", icon: <Info size={18} /> },
  ];

  const goNext = () => setStep((s) => Math.min(s + 1, 4));
  const goPrev = () => setStep((s) => Math.max(s - 1, 1));

  // handlers for each step - update parent's formData
  const handleStepChange = (stepKey: "step1" | "step2" | "step3" | "step4") => (
    data: any
  ) => {
    setFormData((prev: any) => ({ ...prev, [stepKey]: data }));
  };

  const handleSubmit = () => {
    // here you can send `formData` to your API
    console.log("Final submit formData:", formData);
    setShowSuccess(true);
  };

  return (
    <div className="addnewcourse-main-container">
      <div className="addnewcourse-card">
        <h2 className="addnewcourse-title">Add New Course</h2>

        {/* Steps bar */}
        <div className="addnewcourse-steps">
          {stepsMeta.map((s) => {
            const isActive = step === s.id;
            const isCompleted = step > s.id;
            return (
              <div
                key={s.id}
                className={`addnewcourse-step ${isActive ? "active" : ""} ${
                  isCompleted ? "completed" : ""
                }`}
                onClick={() => setStep(s.id)}
              >
                <div className="addnewcourse-step-circle">
                  {isCompleted ? (
                    <CheckCircle size={16} />
                  ) : (
                    s.icon
                  )}
                </div>
                <p>{s.label}</p>
              </div>
            );
          })}
        </div>

        <div className="addnewcourse-progressbar">
          <div
            className="addnewcourse-progress"
            style={{ width: `${((step - 1) / (stepsMeta.length - 1)) * 100}%` }}
          />
        </div>

        <div className="addnewcourse-content">
          {step === 1 && (
            <CourseStepOneDetails
              data={formData.step1}
              onChange={handleStepChange("step1")}
            />
          )}

          {step === 2 && (
            <CourseStepTwoMedia
              data={formData.step2}
              onChange={handleStepChange("step2")}
            />
          )}

          {step === 3 && (
            <CourseStepThreeCurriculum
              data={formData.step3}
              onChange={handleStepChange("step3")}
            />
          )}

          {step === 4 && (
            <CourseStepFourAdditionalInfo
              data={formData.step4}
              onChange={handleStepChange("step4")}
            />
          )}
        </div>

        {/* Parent navigation controls (single nav set) */}
        <div className="addnewcourse-buttons">
          <button
            onClick={goPrev}
            disabled={step === 1}
            className={`addnewcourse-btn secondary ${step === 1 ? "disabled" : ""}`}
          >
            Previous
          </button>

          {step < 4 ? (
            <button onClick={goNext} className="addnewcourse-btn primary">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="addnewcourse-btn success">
              Submit
            </button>
          )}
        </div>
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div className="popup-overlay" role="dialog" aria-modal="true">
          <div className="popup-box">
            <div className="popup-icon" aria-hidden>
              <CheckCircle size={56} color="#22c55e" />
            </div>
            <h3>Congratulations! Course Submitted</h3>
            <p>
              You’ve successfully submitted the course & it's under review. Once the course is
              reviewed by the reviewer it will go live.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              <button
                className="popup-btn"
                onClick={() => {
                  // simple redirect to dashboard path
                  window.location.href = "/dashboard";
                }}
              >
                Back to Dashboard
              </button>
              <button
                className="addnewcourse-btn secondary"
                onClick={() => setShowSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNewCourseMain;
