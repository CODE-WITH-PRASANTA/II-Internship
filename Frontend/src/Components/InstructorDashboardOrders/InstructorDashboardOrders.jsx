import React from "react";
import { Search } from "lucide-react";
import "./InstructorDashboardOrders.css";

const InstructorDashboardOrders = () => {
  const orders = [
    {
      course: "Web Design A Beginner's Guide",
      orderId: "#LN12635",
      date: "10 Jan 2025",
      amount: "$156",
      payment: "PayPal",
    },
    {
      course: "HTML & CSS Basics For Beginners",
      orderId: "#LN12636",
      date: "05 Jan 2025",
      amount: "$167",
      payment: "Debit Card",
    },
    {
      course: "WordPress For Beginners: Creating Your Blog",
      orderId: "#LN12637",
      date: "10 Dec 2024",
      amount: "$189",
      payment: "Credit Card",
    },
    {
      course: "JavaScript Interactive Web Development",
      orderId: "#LN12638",
      date: "18 Nov 2024",
      amount: "$362",
      payment: "PayPal",
    },
    {
      course: "SEO Crash Course: Ranking Your Website",
      orderId: "#LN12639",
      date: "08 Nov 2024",
      amount: "$265",
      payment: "Credit Card",
    },
    {
      course: "E-Commerce Setting Up Your Online Store",
      orderId: "#LN12640",
      date: "26 Oct 2024",
      amount: "$450",
      payment: "PayPal",
    },
    {
      course: "Responsive Web Design For Mobile Users",
      orderId: "#LN12641",
      date: "06 Sep 2024",
      amount: "$136",
      payment: "Debit Card",
    },
    {
      course: "UI/UX Design User-Friendly Interfaces",
      orderId: "#LN12642",
      date: "12 Sep 2024",
      amount: "$250",
      payment: "Credit Card",
    },
  ];

  return (
    <div className="instructordashboardorders-wrapper">
      <h2 className="instructordashboardorders-title">All Orders</h2>

      {/* Search and Filter */}
      <div className="instructordashboardorders-filters">
        <div className="instructordashboardorders-search-box">
          <Search size={18} />
          <input type="text" placeholder="Search" />
        </div>
        <select className="instructordashboardorders-select">
          <option>Free</option>
          <option>Paid</option>
        </select>
      </div>

      {/* Table */}
      <div className="instructordashboardorders-table-wrapper">
        <table className="instructordashboardorders-table">
          <thead>
            <tr>
              <th>Order Title</th>
              <th>Order ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o, i) => (
              <tr key={i}>
                <td className="instructordashboardorders-order-title">{o.course}</td>
                <td>{o.orderId}</td>
                <td>{o.date}</td>
                <td>{o.amount}</td>
                <td>{o.payment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="instructordashboardorders-pagination">
        <p>Showing 1 to 8 of 20 entries</p>
        <div className="instructordashboardorders-page-controls">
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

export default InstructorDashboardOrders;
