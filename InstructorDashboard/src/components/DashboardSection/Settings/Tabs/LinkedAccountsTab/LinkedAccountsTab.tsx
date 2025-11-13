import { useState } from "react";
import { Facebook, Github, Twitter, Mail } from "lucide-react";
import "./linkedaccountstab.css";

const LinkedAccountsTab = () => {
  const [linked, setLinked] = useState({
    facebook: true,
    google: false,
    github: false,
    twitter: false,
  });

  const toggleLink = (key: string) => {
    setLinked((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const accounts = [
    {
      id: "facebook",
      name: "Facebook",
      desc: "Connect, share, and build global communities with Facebook.",
      icon: <Facebook size={34} color="#1877F2" strokeWidth={2.2} />,
    },
    {
      id: "google",
      name: "Google",
      desc: "Use Google for search, maps, email, and more services.",
      icon: <Mail size={34} color="#EA4335" strokeWidth={2.2} />,
    },
    {
      id: "github",
      name: "Github",
      desc: "Collaborate, host, and manage code projects with GitHub.",
      icon: <Github size={34} color="#000" strokeWidth={2.2} />,
    },
    {
      id: "twitter",
      name: "Twitter",
      desc: "Share updates and join conversations on Twitter.",
      icon: <Twitter size={34} color="#1DA1F2" strokeWidth={2.2} />,
    },
  ];

  return (
    <div className="linkedaccountstab-root">
      <h2 className="linkedaccountstab-title">Linked Accounts</h2>
      <p className="linkedaccountstab-subtitle">
        Manage your social connections and integrations easily.
      </p>
      <div className="linkedaccountstab-card">
        {accounts.map((acc, i) => (
          <div
            key={acc.id}
            className="linkedaccountstab-item"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="linkedaccountstab-front">
              <div className="linkedaccountstab-icon">{acc.icon}</div>
              <div className="linkedaccountstab-info">
                <h4>{acc.name}</h4>
                <p>{acc.desc}</p>
              </div>
            </div>

            <button
              className={`linkedaccountstab-btn ${
                linked[acc.id as keyof typeof linked]
                  ? "linkedaccountstab-remove"
                  : "linkedaccountstab-link"
              }`}
              onClick={() => toggleLink(acc.id)}
            >
              {linked[acc.id as keyof typeof linked]
                ? "Remove Account"
                : "Link Account"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccountsTab;
