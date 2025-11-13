import React, { useState } from "react";
import "./Settings.css";
import SecurityTab from "./Tabs/SecurityTab/SecurityTab";
import PlansTab from "./Tabs/PlansTab/PlansTab";
import SocialProfilesTab from "./Tabs/SocialProfilesTab/SocialProfilesTab";
import LinkedAccountsTab from "./Tabs/LinkedAccountsTab/LinkedAccountsTab";
import NotificationsTab from "./Tabs/NotificationsTab/NotificationsTab";
import IntegrationsTab from "./Tabs/IntegrationsTab/IntegrationsTab";
import ProfileTab from "./Tabs/ProfileTab/ProfileTab";
import WithdrawTab from "./Tabs/WithdrawTab/WithdrawTab";

// Import tab components


export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileTab />;
      case "Security":
        return <SecurityTab />;
      case "Plans":
        return <PlansTab />;
      case "Social Profiles":
        return <SocialProfilesTab />;
      case "Linked Accounts":
        return <LinkedAccountsTab />;
      case "Notifications":
        return <NotificationsTab />;
      case "Integrations":
        return <IntegrationsTab />;
      case "Withdraw":
        return <WithdrawTab />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      {/* Tabs Navigation */}
      <div className="settings-tabs">
        {[
          "Profile",
          "Security",
          "Plans",
          "Social Profiles",
          "Linked Accounts",
          "Notifications",
          "Integrations",
          "Withdraw",
        ].map((tab) => (
          <button
            key={tab}
            className={`settings-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="settings-content">{renderTabContent()}</div>
    </div>
  );
};
