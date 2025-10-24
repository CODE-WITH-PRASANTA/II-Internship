import React from "react";
import "./StudentDashboardPaymentInfo.css";
import card1 from "../../assets/card1.webp";
import card2 from "../../assets/card2.webp";
import card3 from "../../assets/card3.webp";
import card4 from "../../assets/card4.webp";

const StudentDashboardPaymentInfo = () => {
  const cards = [
    { img: card1, name: "MasterCard", last4: "1644", exp: "30/2032" },
    { img: card2, name: "Via Card", last4: "7654", exp: "10/2035" },
    { img: card3, name: "American Express", last4: "7892", exp: "25/2028" },
    { img: card4, name: "Crowd Pay Card", last4: "6593", exp: "10/2044" },
  ];

  const billingHistory = [
    { date: "10 May 2023", course: "WordPress Tutorial", method: "****5695", status: "Paid", total: "$465.99" },
    { date: "05 Apr 2023", course: "Figma To HTML Tutorials", method: "****6935", status: "Paid", total: "$392" },
    { date: "02 Mar 2023", course: "Web Dev in PHP", method: "****9863", status: "Pending", total: "$549.20" },
    { date: "16 Feb 2023", course: "Learning Laravel", method: "****6942", status: "Cancel", total: "$425" },
  ];

  return (
    <div className="studentdashboard-paymentinfo">
      <h2>Payment Methods</h2>
      <div className="studentdashboard-cards">
        {cards.map((card, index) => (
          <div key={index} className="payment-card">
            <img src={card.img} alt={card.name} className="card-image" />
            <div className="card-info">
              <h4>{card.name}</h4>
              <p>••••{card.last4}</p>
              <p>Exp: {card.exp}</p>
            </div>
          </div>
        ))}
      </div>

      <h3>Billing History</h3>
      <div className="table-wrapper">
        <table className="studentdashboard-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Course</th>
              <th>Method</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((bill, index) => (
              <tr key={index} className={`status-${bill.status.toLowerCase()}`}>
                <td>{bill.date}</td>
                <td>{bill.course}</td>
                <td>{bill.method}</td>
                <td>{bill.status}</td>
                <td>{bill.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDashboardPaymentInfo;
