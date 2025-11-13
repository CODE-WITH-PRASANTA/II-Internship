import React from "react";
import PageMeta from "../../components/common/PageMeta";
import Dashboard from "../../components/DashboardSection/Dashboard/Dashboard";

const Home: React.FC = () => {
  return (
    <>
      <PageMeta
        title="II Internship Instructor Dashboard | Manage Courses, Students & Earnings"
        description="II Internship Instructor Dashboard – Efficiently manage enrolled courses, track student progress, monitor earnings, and gain valuable insights all in one place."
      />

      <div className="w-full">
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
