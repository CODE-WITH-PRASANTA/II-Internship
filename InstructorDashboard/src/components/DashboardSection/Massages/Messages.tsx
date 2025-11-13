import React from "react";
import "./Messages.css";

interface Chat {
  name: string;
  time: string;
  unread: number;
  active: boolean;
  status: boolean;
}

const Messages: React.FC = () => {
  const chats: Chat[] = [
    { name: "Andrea Jermian", time: "Just Now", unread: 3, active: true, status: true },
    { name: "Samuel James", time: "12:30 PM", unread: 0, active: false, status: false },
    { name: "Adrian Marshall", time: "Just Now", unread: 3, active: false, status: true },
    { name: "Peter Anderson", time: "23/03/24", unread: 0, active: false, status: false },
    { name: "Anderson", time: "23/03/24", unread: 0, active: false, status: false },
    { name: "Andrea", time: "23/03/24", unread: 0, active: false, status: false },
  ];

  return (
    <div className="messages-container">
      {/* Sidebar */}
      <div className="messages-sidebar">
        <div className="messages-sidebar-header">
          <h2>Messages</h2>
        </div>

        <div className="messages-search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="messages-chatlist">
          {chats.map((chat, i) => (
            <div
              className={`messages-chatcard ${chat.active ? "active" : ""}`}
              key={i}
            >
              <div className="messages-avatar">
                <div className={`messages-avatar-status ${chat.status ? "online" : ""}`}></div>
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 3}`}
                  alt={chat.name}
                />
              </div>
              <div className="messages-info">
                <div className="messages-name">{chat.name}</div>
                <div className="messages-time">{chat.time}</div>
              </div>
              {chat.unread > 0 && <span className="messages-badge">{chat.unread}</span>}
              <span className="messages-check">✔✔</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="messages-chatwindow">
        <div className="messages-header">
          <div className="messages-header-user">
            <img src="https://i.pravatar.cc/150?img=11" alt="User" />
            <h3>Ronald Richard</h3>
          </div>
        </div>

        <div className="messages-body">
          <div className="messages-message you">
            <div className="messages-text">How’s the assignment coming along?</div>
            <div className="messages-meta">02:39 PM • You ✔✔</div>
          </div>

          <div className="messages-message other">
            <div className="messages-text">It’s going okay, but I’m stuck on the analysis part.</div>
            <div className="messages-meta">02:40 PM • Ronald Richard</div>
          </div>

          <div className="messages-message you">
            <div className="messages-text">Which part exactly?</div>
            <div className="messages-meta">02:39 PM • You ✔✔</div>
          </div>

          <div className="messages-message other">
            <div className="messages-text">Understanding the variable relationships.</div>
            <div className="messages-meta">02:40 PM • Ronald Richard</div>
          </div>

          <div className="messages-message you">
            <div className="messages-text">
              Try plotting them. Let’s check together.
            </div>
            <div className="messages-meta">02:39 PM • You ✔✔</div>
          </div>

          <div className="messages-message other">
            <div className="messages-text">Sure!</div>
            <div className="messages-meta">02:40 PM • Ronald Richard</div>
          </div>
        </div>

        <div className="messages-footer">
          <input type="text" placeholder="Type your message here..." />
          <button className="messages-sendbtn">➤</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
