import React from "react";
import "./Dashboard.css";
import {
  GraduationCap,
  BookOpen,
  CheckCircle,
  Users,
  Book,
  DollarSign,
  LayoutDashboard,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard: React.FC = () => {
  const stats = [
    { title: "Enrolled Courses", value: 12, icon: <GraduationCap size={28} />, color: "#ede9fe" },
    { title: "Active Courses", value: 8, icon: <BookOpen size={28} />, color: "#fee2e2" },
    { title: "Completed Courses", value: 6, icon: <CheckCircle size={28} />, color: "#dcfce7" },
    { title: "Total Students", value: 17, icon: <Users size={28} />, color: "#dbeafe" },
    { title: "Total Courses", value: 11, icon: <Book size={28} />, color: "#cffafe" },
    { title: "Total Earnings", value: "$486", icon: <DollarSign size={28} />, color: "#f3e8ff" },
  ];

  const data = [
    { month: "Jan", earnings: 80 },
    { month: "Feb", earnings: 100 },
    { month: "Mar", earnings: 70 },
    { month: "Apr", earnings: 110 },
    { month: "May", earnings: 75 },
    { month: "Jun", earnings: 90 },
    { month: "Jul", earnings: 85 },
    { month: "Aug", earnings: 82 },
    { month: "Sep", earnings: 110 },
    { month: "Oct", earnings: 25 },
    { month: "Nov", earnings: 100 },
    { month: "Dec", earnings: 90 },
  ];

  const courses = [
    {
      id: 1,
      title: "Complete HTML, CSS and Javascript Course",
      image: "https://via.placeholder.com/60x60.png?text=HTML",
      enrolled: 0,
      status: "Published",
    },
    {
      id: 2,
      title: "Complete Course on Fullstack Web Developer",
      image: "https://via.placeholder.com/60x60.png?text=Web",
      enrolled: 2,
      status: "Published",
    },
    {
      id: 3,
      title: "Data Science Fundamentals and Advanced Bootcamp",
      image: "https://via.placeholder.com/60x60.png?text=DS",
      enrolled: 2,
      status: "Published",
    },
    {
      id: 4,
      title: "Master Microservices with Spring Boot and Spring Cloud",
      image: "https://via.placeholder.com/60x60.png?text=Spring",
      enrolled: 1,
      status: "Published",
    },
    {
      id: 5,
      title: "Information About UI/UX Design Degree",
      image: "https://via.placeholder.com/60x60.png?text=UIUX",
      enrolled: 0,
      status: "Published",
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">
        <LayoutDashboard className="dashboard-title-icon" />
        Dashboard
      </h2>

      {/* === STAT CARDS === */}
      <div className="dashboard-stats-grid">
        {stats.map((item, index) => (
          <div className="dashboard-stat-card" key={index}>
            <div className="dashboard-stat-icon" style={{ backgroundColor: item.color }}>
              {item.icon}
            </div>
            <div className="dashboard-stat-info">
              <p className="dashboard-stat-title">{item.title}</p>
              <h3 className="dashboard-stat-value">{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* === CHART === */}
      <div className="dashboard-chart-container">
        <div className="dashboard-chart-header">
          <h3>Earnings by Year</h3>
          <div className="dashboard-date-range">10/13/2025 - 11/11/2025</div>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="earnings" fill="url(#colorUv)" radius={[6, 6, 0, 0]} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* === RECENT COURSES === */}
      <div className="dashboard-recent-courses">
        <h3 className="dashboard-recent-courses-title">Recently Created Courses</h3>
        <div className="dashboard-courses-table">
          <div className="dashboard-table-header">
            <span>Courses</span>
            <span>Enrolled</span>
            <span>Status</span>
          </div>

          {courses.map((course) => (
            <div className="dashboard-table-row" key={course.id}>
              <div className="dashboard-course-info">
                <img src={course.image} alt={course.title} />
                <span>{course.title}</span>
              </div>
              <span className="dashboard-enrolled">{course.enrolled}</span>
              <span className={`dashboard-status ${course.status.toLowerCase()}`}>
                {course.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
