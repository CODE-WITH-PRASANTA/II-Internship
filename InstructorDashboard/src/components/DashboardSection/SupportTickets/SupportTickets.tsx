import React from "react";
import "./SupportTickets.css";

export const SupportTickets: React.FC = () => {
  const tickets = [
    { id: "#TIC010", date: "22Aug2025", subject: "IssuewithCourseNotificationEmails", priority: "High", category: "MailingIssues", status: "Opened" },
    { id: "#TIC009", date: "10Aug2025", subject: "Ihaveaproblem", priority: "Low", category: "LanguageIssues", status: "Inprogress" },
    { id: "#TIC008", date: "26Jul2025", subject: "AccountActivationmailnotreceived", priority: "High", category: "MailingIssues", status: "Closed" },
    { id: "#TIC007", date: "12Jul2025", subject: "EnablingSSHservice", priority: "High", category: "InstallationError", status: "Opened" },
    { id: "#TIC006", date: "02Jul2025", subject: "PaymentProcessedbutnotshowed", priority: "Low", category: "PaymentIssues", status: "Closed" },
    { id: "#TIC005", date: "25Jun2025", subject: "whenwillstarttheorder", priority: "High", category: "DemoProblem", status: "Inprogress" },
  ];

  return (
    <div className="supporttickets-container">
      <div className="supporttickets-header">
        <h2>Support Tickets</h2>
        <button className="supporttickets-add-btn">+ Add Ticket</button>
      </div>

      <div className="supporttickets-cards">
        <div className="supporttickets-card purple">
          <div className="icon">🎓</div>
          <div>
            <p>Total Tickets</p>
            <h3>50</h3>
          </div>
        </div>
        <div className="supporttickets-card pink">
          <div className="icon">📕</div>
          <div>
            <p>Opened Tickets</p>
            <h3>30</h3>
          </div>
        </div>
        <div className="supporttickets-card green">
          <div className="icon">🟢</div>
          <div>
            <p>Closed Tickets</p>
            <h3>25</h3>
          </div>
        </div>
      </div>

      <div className="supporttickets-filters">
        <select><option>Category</option></select>
        <select><option>Priority</option></select>
        <select><option>Status</option></select>
        <input type="text" placeholder="Search" />
      </div>

      <div className="supporttickets-table-container">
        <table className="supporttickets-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Date</th>
              <th>Subject</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.date}</td>
                <td>{t.subject}</td>
                <td>
                  <span className={`priority ${t.priority.toLowerCase()}`}>
                    ● {t.priority}
                  </span>
                </td>
                <td>{t.category}</td>
                <td>
                  <span className={`status ${t.status.toLowerCase()}`}>
                    ● {t.status}
                  </span>
                </td>
                <td className="actions">
                  <span className="icon-btn">👁️</span>
                  <span className="icon-btn">✏️</span>
                  <span className="icon-btn delete">🗑️</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="supporttickets-footer">
        <div className="supporttickets-pageinfo">Page 1 of 10</div>
        <div className="supporttickets-pagination">
          <button className="page-btn">&laquo;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">&raquo;</button>
        </div>
      </div>
    </div>
  );
};
