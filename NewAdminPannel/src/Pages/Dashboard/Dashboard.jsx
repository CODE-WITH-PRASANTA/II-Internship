import React from "react";
import DashboardCard from "../../components/DashboardCard/DashboardCard";

import DashboardSheudle from "../../components/DashboardSheudle/DashboardSheudle";
import DashboardProject from "../../components/DashboardProject/DashboardProject";
import DashbordGraph from "../../Components/DashbordGraph/DashbordGraph";

const Dashboard = () => {
  return (
    <div>
      <DashboardCard />
      <DashbordGraph/>
      <DashboardSheudle />
      <DashboardProject />
    </div>
  );
};

export default Dashboard;