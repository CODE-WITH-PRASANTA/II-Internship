import React from "react";
import { DollarSign, Wallet, PiggyBank, Edit2, Trash2 } from "lucide-react";
import "./InstructorDashboardEarning.css";
import course1 from "../../assets/courses-1.webp";
import course2 from "../../assets/courses-2.webp";
import course3 from "../../assets/courses-3.webp";
import course4 from "../../assets/courses-4.webp";

const InstructorDashboardEarning = () => {
  const summary = [
    {
      title: "Sales This Month",
      amount: "$890",
      icon: <DollarSign size={30} color="#16a34a" />,
      color: "#16a34a",
      bg: "#E6F4EA",
    },
    {
      title: "Next Payout",
      amount: "$2,580",
      icon: <Wallet size={30} color="#f97316" />,
      color: "#f97316",
      bg: "#FFF7E6",
    },
    {
      title: "Sales Overall",
      amount: "$60,550",
      icon: <PiggyBank size={30} color="#2563eb" />,
      color: "#2563eb",
      bg: "#E6F0FF",
    },
  ];

  const courses = [
    {
      id: 1,
      img: course1,
      name: "Building Scalable APIs With GraphQL",
      selling: 42,
      amount: "$18,432",
      period: "06 months",
    },
    {
      id: 2,
      img: course2,
      name: "Full-Stack Web Development Bootcamp",
      selling: 36,
      amount: "$20,560",
      period: "09 months",
    },
    {
      id: 3,
      img: course3,
      name: "React Mastery: Advanced Projects",
      selling: 44,
      amount: "$45,550",
      period: "12 months",
    },
    {
      id: 4,
      img: course4,
      name: "NodeJS & Express Deep Dive",
      selling: 65,
      amount: "$22,568",
      period: "18 months",
    },
    {
      id: 5,
      img: course1,
      name: "UI/UX Design Essentials",
      selling: 75,
      amount: "$36,980",
      period: "08 months",
    },
  ];

  return (
    <div className="instructordashboardearning">
      {/* === Summary Cards === */}
      <div className="instructordashboardearning-summary-cards">
        {summary.map((card, i) => (
          <div
            key={i}
            className="instructordashboardearning-summary-card"
            style={{ backgroundColor: card.bg }}
          >
            <div className="instructordashboardearning-summary-icon">
              {card.icon}
            </div>
            <div className="instructordashboardearning-summary-text">
              <h2 style={{ color: card.color }}>{card.amount}</h2>
              <p>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* === Recent Selling Courses === */}
      <div className="instructordashboardearning-recent-courses">
        <h3>Recent Selling Courses</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Selling</th>
              <th>Amount</th>
              <th>Period</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td className="instructordashboardearning-course-cell">
                  <img src={course.img} alt={course.name} />
                  <span>{course.name}</span>
                </td>
                <td>{course.selling}</td>
                <td>{course.amount}</td>
                <td>
                  <span className="instructordashboardearning-period-badge">
                    {course.period}
                  </span>
                </td>
                <td>
                  <div className="instructordashboardearning-actions">
                    <button className="instructordashboardearning-edit-btn">
                      <Edit2 size={16} />
                    </button>
                    <button className="instructordashboardearning-delete-btn">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="instructordashboardearning-pagination">
        <button>{"<"}</button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>{">"}</button>
      </div>
    </div>
  );
};

export default InstructorDashboardEarning;
