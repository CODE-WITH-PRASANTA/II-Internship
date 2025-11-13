import React, { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./Statements.css";

const Statements: React.FC = () => {
  const statements = [
    { id: "#ORD01", course: "InformationAboutUI/UXDesignDegree", date: "22Aug2025", amount: "$160", method: "Paypal", status: "Completed" },
    { id: "#ORD009", course: "BuildResponsiveRealWorldWebsiteswithCrashCourse", date: "10Aug2025", amount: "$180", method: "BankTransfer", status: "Pending" },
    { id: "#ORD008", course: "C#DevelopersDoubleYourCodingwithVisualStudio", date: "26Jul2025", amount: "$200", method: "Stripe", status: "Completed" },
    { id: "#ORD007", course: "WordpressforBeginners-MasterWordpressQuickly", date: "12Jul2025", amount: "$220", method: "Paypal", status: "Completed" },
    { id: "#ORD006", course: "IntroductiontoPythonProgramming", date: "02Jul2025", amount: "$170", method: "Stripe", status: "Completed" },
    { id: "#ORD005", course: "LearnJavaScriptandExpresstobecomeaExpert", date: "25Jun2025", amount: "$150", method: "BankTransfer", status: "Completed" },
    { id: "#ORD004", course: "AdvancedReactandTypeScript", date: "15Jun2025", amount: "$190", method: "Paypal", status: "Completed" },
    { id: "#ORD003", course: "MasteringNodeJSBackendDevelopment", date: "10Jun2025", amount: "$200", method: "Stripe", status: "Pending" },
    { id: "#ORD002", course: "DataSciencewithPythonandPandas", date: "05Jun2025", amount: "$210", method: "BankTransfer", status: "Completed" },
    { id: "#ORD001", course: "CompleteMachineLearningBootcamp", date: "01Jun2025", amount: "$230", method: "Paypal", status: "Completed" },
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(statements.length / itemsPerPage);
  const currentItems = statements.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="statements-container">
      <h2 className="statements-title">Statements</h2>

      {/* Filters */}
      <div className="statements-filters">
        <div className="statements-selects">
          <select className="statements-select">
            <option>Payment Method</option>
            <option>PayPal</option>
            <option>Bank Transfer</option>
            <option>Stripe</option>
          </select>

          <select className="statements-select">
            <option>Status</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>

        <input type="text" placeholder="Search" className="statements-search" />
      </div>

      {/* Table */}
      <div className="statements-table-wrapper">
        <table className="statements-table">
          <thead>
            <tr>
              <th>OrderID</th>
              <th>Course</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, i) => (
              <tr key={i}>
                <td className="statements-id">{item.id}</td>
                <td className="statements-course">{item.course}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.method}</td>
                <td>
                  <span className={`statements-status ${item.status === "Completed" ? "completed" : "pending"}`}>
                    ● {item.status}
                  </span>
                </td>
                <td className="statements-actions">
                  <FaEye className="statements-icon" title="View" />
                  <FaDownload className="statements-icon" title="Download" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="statements-footer">
        <p className="statements-page-text">Page {currentPage} of {totalPages}</p>
        <div className="statements-pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            <HiChevronLeft /> Prev
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
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next <HiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statements;
