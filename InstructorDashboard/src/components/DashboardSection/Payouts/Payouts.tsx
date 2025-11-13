import React, { useState } from "react";
import { FaPaypal, FaUniversity, FaRocket } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Payouts.css";

const Payouts: React.FC = () => {
  const payouts = [
    { id: "#1010", date: "22Aug2025", amount: "$160", method: "Paypal", status: "Paid" },
    { id: "#1009", date: "10Aug2025", amount: "$180", method: "BankTransfer", status: "Pending" },
    { id: "#1008", date: "26Jul2025", amount: "$200", method: "Stripe", status: "Paid" },
    { id: "#1007", date: "12Jul2025", amount: "$220", method: "Paypal", status: "Paid" },
    { id: "#1006", date: "01Jul2025", amount: "$250", method: "BankTransfer", status: "Pending" },
    { id: "#1005", date: "25Jun2025", amount: "$300", method: "Stripe", status: "Paid" },
    { id: "#1004", date: "18Jun2025", amount: "$180", method: "Paypal", status: "Paid" },
    { id: "#1003", date: "10Jun2025", amount: "$160", method: "BankTransfer", status: "Pending" },
    { id: "#1002", date: "01Jun2025", amount: "$220", method: "Stripe", status: "Paid" },
    { id: "#1001", date: "25May2025", amount: "$200", method: "Paypal", status: "Paid" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(payouts.length / itemsPerPage);
  const currentItems = payouts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="payouts-container">
      {/* Notification Bar */}
      <div className="payouts-alert">
        <span>
          Your selected payout method was confirmed on <strong>Next Payout on 15 Jan, 2025</strong> for{" "}
          <strong>"payout@example.com"</strong>
        </span>
        <button className="payouts-alert-close">✕</button>
      </div>

      {/* Earnings and Payment Gateway */}
      <div className="payouts-top-section">
        <div className="payouts-earnings">
          <div className="payouts-earnings-info">
            <div className="payouts-icon">
              <FaRocket />
            </div>
            <div>
              <p className="payouts-earnings-label">Earning this month</p>
              <h2 className="payouts-amount">$8,420</h2>
              <p className="payouts-update-text">Update your payout in settings</p>
            </div>
          </div>
          <button className="payouts-withdraw-btn">Withdraw</button>
        </div>

        <div className="payouts-gateway">
          <h3 className="payouts-gateway-title">Select Payment Gateway for Payout</h3>
          <div className="payouts-gateway-options">
            <button className="payouts-paypal active">
              <FaPaypal className="payouts-gateway-icon" /> PayPal
            </button>
            <button className="payouts-bank">
              <FaUniversity className="payouts-gateway-icon" /> Bank Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Payout Table */}
      <div className="payouts-table-section">
        <h3 className="payouts-table-title">Payouts</h3>
        <div className="payouts-filters">
          <div className="payouts-selects">
            <select className="payouts-select">
              <option>Payment Method</option>
              <option>PayPal</option>
              <option>Bank Transfer</option>
              <option>Stripe</option>
            </select>
            <select className="payouts-select">
              <option>Status</option>
              <option>Paid</option>
              <option>Pending</option>
            </select>
          </div>
          <input className="payouts-search" placeholder="Search" />
        </div>

        <table className="payouts-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((payout) => (
              <tr key={payout.id}>
                <td className="payouts-id">{payout.id}</td>
                <td>{payout.date}</td>
                <td>{payout.amount}</td>
                <td>{payout.method}</td>
                <td>
                  <span
                    className={`payouts-status ${
                      payout.status === "Paid" ? "paid" : "pending"
                    }`}
                  >
                    ● {payout.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="payouts-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <HiChevronLeft /> Previous
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payouts;
