import React from "react";
import "./Earnings.css";
import { FiDollarSign, FiStar, FiUsers, FiCalendar } from "react-icons/fi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface Order {
  id: string;
  date: string;
  course: string;
  amount: string;
}

const orders: Order[] = [
  { id: "ORD010", date: "28 Jan 2025", course: "Information about UI/UX Design Degree", amount: "$160" },
  { id: "ORD009", date: "22 Jan 2025", course: "Wordpress for Beginners - Master Wordpress Quickly", amount: "$140" },
  { id: "ORD008", date: "17 Jan 2025", course: "Sketch from A to Z (2022): Become an app designer", amount: "$200" },
  { id: "ORD007", date: "08 Jan 2025", course: "Learn Angular Fundamental From beginning to advance", amount: "$170" },
  { id: "ORD006", date: "03 Jan 2025", course: "C# Developers Double Your Coding Speed", amount: "$120" },
];

const chartData = [
  { name: "Jan", value: 25 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 30 },
  { name: "Apr", value: 55 },
  { name: "May", value: 25 },
  { name: "Jun", value: 35 },
  { name: "Jul", value: 25 },
  { name: "Aug", value: 50 },
  { name: "Sep", value: 20 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 20 },
  { name: "Dec", value: 50 },
];

const Earnings: React.FC = () => {
  return (
    <div className="earnings-container">
      {/* Stats Section */}
      <h2 className="earnings-title">Earnings</h2>

      <div className="earnings-stat-grid">
        <div className="earnings-stat-card green">
          <div className="earnings-icon-box">
            <FiDollarSign />
          </div>
          <div>
            <h4>Revenue</h4>
            <h2>$8420</h2>
            <p>Earning this month</p>
          </div>
        </div>

        <div className="earnings-stat-card pink">
          <div className="earnings-icon-box">
            <FiStar />
          </div>
          <div>
            <h4>Courses Ratings</h4>
            <h2>4.8</h2>
            <p>Rating this month</p>
          </div>
        </div>

        <div className="earnings-stat-card purple">
          <div className="earnings-icon-box">
            <FiUsers />
          </div>
          <div>
            <h4>Students Enrolled</h4>
            <h2>12000</h2>
            <p>New this month</p>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="earnings-chart-card">
        <div className="earnings-chart-header">
          <h3>Earnings by Year</h3>
          <button className="earnings-date-btn">
            <FiCalendar /> Select time
          </button>
        </div>

        <div className="earnings-chart">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ff647f"
                fill="#ff647f55"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders Section Header */}
      <div className="earnings-header-row">
        <h2 className="earnings-subtitle">Earnings</h2>
        <div className="earnings-date-range">
          <FiCalendar className="calendar-icon" /> 10/13/2025 - 11/11/2025
        </div>
      </div>

      {/* Orders Table */}
      <div className="earnings-table-wrapper">
        <table className="earnings-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Course</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.course}</td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Earnings;
