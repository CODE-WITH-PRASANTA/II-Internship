import React, { useState } from "react";
import "./securitytab.css";

function SecurityTab() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [currentEmail] = useState("richard@example.com");
  const [newEmail, setNewEmail] = useState("");
  const [emailSaved, setEmailSaved] = useState(false);

  // crude strength calculation for visual only
  const calcStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    return Math.min(score, 3);
  };

  const strength = calcStrength(newPassword);

  const onSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSaved(true);
    setTimeout(() => setEmailSaved(false), 3000);
  };

  return (
    <div className="securitytab-wrapper" role="region" aria-label="Security Settings">
      <div className="securitytab-card">
        <h2 className="securitytab-title">Change Password</h2>
        <p className="securitytab-sub">
          Can't remember your current password?{" "}
          <a href="#" className="securitytab-link">
            Reset your password via email
          </a>
        </p>

        {/* Current Password */}
        <label className="securitytab-label">
          Current Password <span className="securitytab-required">*</span>
        </label>
        <div className="securitytab-input-wrap">
          <input
            type={showCurrent ? "text" : "password"}
            className="securitytab-input"
            placeholder=""
            aria-label="Current Password"
          />
          <button
            type="button"
            className="securitytab-eye"
            onClick={() => setShowCurrent(!showCurrent)}
            aria-label="toggle current password visibility"
          >
            {showCurrent ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M3 3l18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            )}
          </button>
        </div>

        {/* New Password */}
        <label className="securitytab-label">
          New Password <span className="securitytab-required">*</span>
        </label>
        <div className="securitytab-input-wrap">
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type={showNew ? "text" : "password"}
            className="securitytab-input"
            placeholder=""
            aria-label="New Password"
          />
          <button
            type="button"
            className="securitytab-eye"
            onClick={() => setShowNew(!showNew)}
            aria-label="toggle new password visibility"
          >
            {showNew ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M3 3l18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            )}
          </button>
        </div>

        {/* Password strength bar */}
        <div className="securitytab-strength" aria-hidden>
          <div className={`bar ${strength >= 1 ? "filled" : ""}`}></div>
          <div className={`bar ${strength >= 2 ? "filled" : ""}`}></div>
          <div className={`bar ${strength >= 3 ? "filled" : ""}`}></div>
        </div>

        {/* Confirm Password */}
        <label className="securitytab-label">
          Confirm Password <span className="securitytab-required">*</span>
        </label>
        <div className="securitytab-input-wrap">
          <input
            type={showConfirm ? "text" : "password"}
            className="securitytab-input"
            placeholder=""
            aria-label="Confirm Password"
          />
          <button
            type="button"
            className="securitytab-eye"
            onClick={() => setShowConfirm(!showConfirm)}
            aria-label="toggle confirm password visibility"
          >
            {showConfirm ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M3 3l18 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            )}
          </button>
        </div>

        {/* Save button */}
        <div className="securitytab-actions">
          <button className="securitytab-save-btn" aria-label="Save password changes">
            Save Changes
          </button>
        </div>
      </div>

      {/* ----- NEW: Change Email Section (added after save button) ----- */}
      <form
        className="securitytab-card securitytab-card--email"
        onSubmit={onSaveEmail}
        aria-labelledby="security-email-title"
      >
        <div className="securitytab-email-header">
          <h3 id="security-email-title" className="securitytab-title small">
            Change Email
          </h3>
          <div className="securitytab-email-icon" aria-hidden>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 7.5A4.5 4.5 0 0 1 7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9z"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.12"
              />
              <path
                d="M3 7.5L12 13l9-5.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="securitytab-sub securitytab-email-sub">
          Your current email address is{" "}
          <strong className="securitytab-email-strong">{currentEmail}</strong>
        </p>

        <label className="securitytab-label">
          New Email Address <span className="securitytab-required">*</span>
        </label>
        <div className="securitytab-input-wrap">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            required
            placeholder="you@domain.com"
            className="securitytab-input securitytab-input--email"
            aria-label="New Email Address"
          />
          <div className="securitytab-email-hint" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12.5L12 18l10-5.5"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="securitytab-actions securitytab-actions--email">
          <button
            type="submit"
            className={`securitytab-save-btn securitytab-save-btn--email ${
              emailSaved ? "saved" : ""
            }`}
            aria-live="polite"
            aria-pressed={emailSaved}
          >
            {emailSaved ? (
              <>
                <svg
                  className="checkmark"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="white"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Saved
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </form>

      <div className="securitytab-footer-spacer" />
    </div>
  );
}

export default SecurityTab;
