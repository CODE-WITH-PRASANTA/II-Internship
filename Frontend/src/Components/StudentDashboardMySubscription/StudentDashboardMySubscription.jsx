import React from "react";
import { FaCheckCircle, FaTimesCircle, FaSyncAlt, FaEdit } from "react-icons/fa";
import "./StudentDashboardMySubscription.css";

const StudentDashboardMySubscription = () => (
  <div className="studentdashboard-subscription">
    <div className="header-row">
      <h2>My Subscriptions</h2>
      <button className="btn-upgrade">Upgrade Now — Go Pro $49</button>
    </div>
    <p>Here is list of package/product that you have subscribed.</p>

    {/* Monthly Subscription Card */}
    <div className="studentdashboard-subcard active">
      <div className="subcard-header">
        <div>
          <h3>Monthly <span className="status active">Active</span></h3>
          <p className="subscription-id">Subscription ID: <strong>#LNR236582</strong></p>
        </div>
        <div className="auto-renewal">
          <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
          </label>
          <span className="auto-text">Auto Renewal</span>
        </div>
        <button className="btn-changeplan"><FaEdit /> Change Plan</button>
      </div>
      <div className="subcard-info">
        <div>
          <p className="label">Started On</p>
          <p className="value">10 May 2025</p>
        </div>
        <div>
          <p className="label">Price</p>
          <p className="value"><strong>Monthly</strong></p>
        </div>
        <div>
          <p className="label">Access</p>
          <p className="value"><strong>Access All Courses</strong></p>
        </div>
        <div>
          <p className="label">Billing Date</p>
          <p className="value"><strong>Next Billing On 09 May 2026</strong></p>
        </div>
      </div>
    </div>

    {/* Free Plan Card */}
    <div className="studentdashboard-subcard expired">
      <div className="subcard-header">
        <div>
          <h3>Free Plan <span className="status expired">Expired</span></h3>
          <p className="subscription-id">Subscription ID: <strong>#LNR2568742</strong></p>
        </div>
        <button className="btn-disabled" disabled>Disabled</button>
      </div>
      <div className="subcard-info">
        <div>
          <p className="label">Started On</p>
          <p className="value">16 Aug 2024</p>
        </div>
        <div>
          <p className="label">Price</p>
          <p className="value"><strong>Free - Trial A Month</strong></p>
        </div>
        <div>
          <p className="label">Access</p>
          <p className="value"><strong>Access All Courses</strong></p>
        </div>
        <div>
          <p className="label">Billing Date</p>
          <p className="value"><strong>Next Billing On 05 Aug 2025</strong></p>
        </div>
      </div>
    </div>
  </div>
);

export default StudentDashboardMySubscription;
