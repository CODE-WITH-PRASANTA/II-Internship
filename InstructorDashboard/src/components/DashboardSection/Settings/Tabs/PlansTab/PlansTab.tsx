import React, { useState } from "react";
import "./planstab.css";

type Card = {
  id: string;
  type: "Credit Card" | "Debit Card" | "Paypal";
  brand?: string;
  last4: string;
  isDefault?: boolean;
};

type Transaction = {
  orderId: string;
  planName: string;
  paymentMethod: string;
  subscribedOn: string;
  lastDate: string;
  amount: string;
  status: "Paid" | "Pending" | "Cancelled";
};

const PlansTab: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([
    { id: "c1", type: "Credit Card", brand: "Visa", last4: "1568", isDefault: true },
    { id: "c2", type: "Debit Card", brand: "Mastercard", last4: "1279", isDefault: false },
  ]);

  const [transactions] = useState<Transaction[]>([
    { orderId: "#INV1245", planName: "Standard Plan", paymentMethod: "Credit Card", subscribedOn: "11 May 2025", lastDate: "14 Jun 2025", amount: "$199", status: "Paid" },
    { orderId: "#INV3215", planName: "Basic Plan", paymentMethod: "Debit Card", subscribedOn: "12 Apr 2025", lastDate: "14 May 2025", amount: "$99", status: "Pending" },
    { orderId: "#INV4581", planName: "Premium Plan", paymentMethod: "Paypal", subscribedOn: "14 Mar 2025", lastDate: "14 Apr 2025", amount: "$299", status: "Paid" },
    { orderId: "#INV6545", planName: "Basic Plan", paymentMethod: "Debit Card", subscribedOn: "13 Feb 2025", lastDate: "13 Mar 2025", amount: "$99", status: "Cancelled" },
  ]);

  const handleSetDefault = (id: string) =>
    setCards((prev) => prev.map((c) => ({ ...c, isDefault: c.id === id })));

  const handleDeleteCard = (id: string) =>
    setCards((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="planstab-root">
      {/* ---------------- Active Plan & Saved Cards ---------------- */}
      <div className="planstab-topgrid">
        {/* ---------- Active Plan ---------- */}
        <section className="planstab-card planstab-card--plan fade-in">
          <div className="planstab-card-head">
            <h3 className="planstab-card-title">Active Plan</h3>
            <button className="planstab-small-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>Download PDF</span>
            </button>
          </div>

          <div className="planstab-divider" />

          <div className="planstab-planbody slide-up">
            <div>
              <div className="planstab-plan-name">Standard Plan</div>
              <div className="planstab-plan-valid">
                Valid till: <span>May 2025 - Jun 2025</span>
              </div>
            </div>
            <div className="planstab-plan-price-wrapper">
              <div className="planstab-price">$199</div>
            </div>
          </div>

          <div className="planstab-divider thin" />

          <div className="planstab-plan-actions">
            <button className="planstab-btn planstab-btn--ghost">Cancel Subscription</button>
            <button className="planstab-btn planstab-btn--accent">Update Plan</button>
          </div>
        </section>

        {/* ---------- Saved Cards ---------- */}
        <section className="planstab-card fade-in">
          <div className="planstab-card-head">
            <h3 className="planstab-card-title">Saved Cards</h3>
            <button className="planstab-addcard-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add New Card
            </button>
          </div>

          <div className="planstab-cards-grid">
            {cards.map((card, index) => (
              <article
                key={card.id}
                className={`planstab-saved-card ${card.isDefault ? "default" : ""} fade-in`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="planstab-card-left">
                  <div className="planstab-brand">
                    {card.brand === "Visa" ? (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        alt="Visa"
                      />
                    ) : card.brand === "Mastercard" ? (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                        alt="Mastercard"
                      />
                    ) : (
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        alt="Paypal"
                      />
                    )}
                  </div>
                  <div className="planstab-card-meta">
                    <div className="planstab-card-title-sm">{card.type}</div>
                    <div className="planstab-card-sub">
                      {card.brand} •••• {card.last4}
                    </div>
                  </div>
                </div>

                <div className="planstab-card-actions">
                  {card.isDefault ? (
                    <span className="planstab-default-pill">Default</span>
                  ) : (
                    <button
                      className="planstab-link-like"
                      onClick={() => handleSetDefault(card.id)}
                    >
                      Set as Default
                    </button>
                  )}
                  <div className="planstab-icon-actions">
                    <button className="planstab-icon-btn" title="Edit card">
                      ✎
                    </button>
                    <button
                      className="planstab-icon-btn delete"
                      onClick={() => handleDeleteCard(card.id)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* ---------------- Transaction History ---------------- */}
      <div className="planstab-section slide-up">
        <div className="planstab-section-head">
          <h4 className="planstab-section-title">Transaction History</h4>
          <div className="planstab-filter">
            <label className="planstab-filter-label">Status</label>
            <select className="planstab-select">
              <option>All</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="planstab-table-wrap">
          <table className="planstab-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Plan Name</th>
                <th>Payment Method</th>
                <th>Subscribed On</th>
                <th>Last Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr
                  key={tx.orderId}
                  className="fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <td>
                    <a href="#" className="planstab-invoice-link">
                      {tx.orderId}
                    </a>
                  </td>
                  <td>{tx.planName}</td>
                  <td>{tx.paymentMethod}</td>
                  <td>{tx.subscribedOn}</td>
                  <td>{tx.lastDate}</td>
                  <td className="planstab-amount">{tx.amount}</td>
                  <td>
                    <span
                      className={`planstab-pill planstab-pill--${tx.status.toLowerCase()}`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="planstab-row-actions">
                    <button className="planstab-icon-btn">👁</button>
                    <button className="planstab-icon-btn">⬇</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlansTab;
