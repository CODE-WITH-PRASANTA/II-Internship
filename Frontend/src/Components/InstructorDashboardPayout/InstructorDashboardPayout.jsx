import React from "react";
import "./InstructorDashboardPayout.css";

const InstructorDashboardPayout = () => {
  const payouts = [
    {
      id: "PAY001",
      amount: "$1,200",
      method: "PayPal",
      date: "Oct 20, 2025",
      status: "Completed",
    },
    {
      id: "PAY002",
      amount: "$800",
      method: "Bank Transfer",
      date: "Sep 15, 2025",
      status: "Completed",
    },
    {
      id: "PAY003",
      amount: "$500",
      method: "PayPal",
      date: "Pending",
      status: "Pending",
    },
    {
      id: "PAY004",
      amount: "$750",
      method: "Bank Transfer",
      date: "Aug 10, 2025",
      status: "Completed",
    },
    {
      id: "PAY005",
      amount: "$620",
      method: "PayPal",
      date: "Jul 25, 2025",
      status: "Pending",
    },
  ];

  const handleRequestPayout = () => {
    alert("✅ Payout request submitted!");
  };

  return (
    <div className="instructordashboardpayout-wrapper">
      <h2 className="instructordashboardpayout-title">Payouts</h2>

      <button
        className="instructordashboardpayout-request-btn"
        onClick={handleRequestPayout}
      >
        Request Payout
      </button>

      <div className="instructordashboardpayout-table-wrapper">
        <table className="instructordashboardpayout-table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id}>
                <td>{payout.id}</td>
                <td>{payout.amount}</td>
                <td>{payout.method}</td>
                <td>{payout.date}</td>
                <td
                  className={`instructordashboardpayout-status ${
                    payout.status === "Completed" ? "completed" : "pending"
                  }`}
                >
                  {payout.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer: Showing entries + Pagination */}
      <div className="instructordashboardpayout-footer">
        <p className="payout-showing">Showing 1 to {payouts.length} of 20 entries</p>
        <div className="payout-pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardPayout;
