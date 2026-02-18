import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import DashbordGraph from "../../components/DashbordGraph/DashbordGraph";

const Dashboard: React.FC = () => {
  return (
    <div>
      <DashboardCard />
      <DashbordGraph />
    </div>
  );
};

export default Dashboard;
