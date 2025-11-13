import React, { useState } from "react";
import "./WithdrawTab.css";

const WithdrawTab: React.FC = () => {
  const [method, setMethod] = useState("bank");

  return (
    <div className="withdrawtab-container">
      <h2 className="withdrawtab-title">Select a withdraw method</h2>

      <div className="withdrawtab-methods">
        <label
          className={`withdrawtab-card ${
            method === "bank" ? "withdrawtab-card-active" : ""
          }`}
        >
          <input
            type="radio"
            name="withdrawMethod"
            value="bank"
            checked={method === "bank"}
            onChange={() => setMethod("bank")}
          />
          <div className="withdrawtab-card-content">
            <span className="withdrawtab-card-title">Bank Transfer</span>
            <span className="withdrawtab-card-subtitle">
              Minimum withdraw $50
            </span>
          </div>
        </label>

        <label
          className={`withdrawtab-card ${
            method === "stripe" ? "withdrawtab-card-active" : ""
          }`}
        >
          <input
            type="radio"
            name="withdrawMethod"
            value="stripe"
            checked={method === "stripe"}
            onChange={() => setMethod("stripe")}
          />
          <div className="withdrawtab-card-content">
            <span className="withdrawtab-card-title">Stripe</span>
            <span className="withdrawtab-card-subtitle">
              Minimum withdraw $50
            </span>
          </div>
        </label>

        <label
          className={`withdrawtab-card ${
            method === "paypal" ? "withdrawtab-card-active" : ""
          }`}
        >
          <input
            type="radio"
            name="withdrawMethod"
            value="paypal"
            checked={method === "paypal"}
            onChange={() => setMethod("paypal")}
          />
          <div className="withdrawtab-card-content">
            <span className="withdrawtab-card-title">PayPal</span>
            <span className="withdrawtab-card-subtitle">
              Minimum withdraw $50
            </span>
          </div>
        </label>
      </div>

      <form className="withdrawtab-form">
        <div className="withdrawtab-row">
          <div className="withdrawtab-field">
            <label>Account Name *</label>
            <input type="text" placeholder="Enter account name" />
          </div>
          <div className="withdrawtab-field">
            <label>Account Number *</label>
            <input type="text" placeholder="Enter account number" />
          </div>
        </div>

        <div className="withdrawtab-row">
          <div className="withdrawtab-field">
            <label>Bank Name *</label>
            <input type="text" placeholder="Enter bank name" />
          </div>
          <div className="withdrawtab-field">
            <label>IBAN *</label>
            <input type="text" placeholder="Enter IBAN" />
          </div>
        </div>

        <div className="withdrawtab-row">
          <div className="withdrawtab-field withdrawtab-full-width">
            <label>BIC / SWIFT *</label>
            <input type="text" placeholder="Enter BIC / SWIFT" />
          </div>
        </div>

        <button type="submit" className="withdrawtab-button">
          Save Withdrawal Account
        </button>
      </form>
    </div>
  );
};

export default WithdrawTab;
