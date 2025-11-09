import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Eye, Trash2, Upload, Download } from "lucide-react";
import "./CourseDetails.css";

// ✅ Type definitions
interface Student {
  name: string;
  date: string;
  rating: number;
  avatar: string;
}

interface ChartData {
  name: string;
  earnings: number;
}

const CourseDetails: React.FC = () => {
  const students: Student[] = [
    {
      name: "Lori Stevens",
      date: "29 Nov 2021",
      rating: 5,
      avatar: "https://i.pravatar.cc/50?img=11",
    },
    {
      name: "Carolyn Ortiz",
      date: "15 Nov 2021",
      rating: 5,
      avatar: "https://i.pravatar.cc/50?img=12",
    },
    {
      name: "Dennis Barrett",
      date: "28 Oct 2021",
      rating: 4,
      avatar: "https://i.pravatar.cc/50?img=13",
    },
    {
      name: "Billy Vasquez",
      date: "12 Oct 2021",
      rating: 4,
      avatar: "https://i.pravatar.cc/50?img=14",
    },
    {
      name: "Jacqueline Miller",
      date: "31 Sep 2021",
      rating: 4,
      avatar: "https://i.pravatar.cc/50?img=15",
    },
  ];

  const chartData: ChartData[] = [
    { name: "Mon", earnings: 4000 },
    { name: "Tue", earnings: 3000 },
    { name: "Wed", earnings: 5000 },
    { name: "Thu", earnings: 4780 },
    { name: "Fri", earnings: 5890 },
    { name: "Sat", earnings: 4390 },
    { name: "Sun", earnings: 5490 },
  ];

  return (
    <div className="course-wrapper">
      {/* Header */}
      <div className="header-row">
        <h1 className="title">Course Details</h1>
        <button className="edit-btn">Edit Course</button>
      </div>

      <div className="grid-2">
        {/* Left Card */}
        <div className="card">
          <div className="card-header">
            <h2 className="course-main-title">
              The Complete Digital Marketing Course - 12 Courses in 1
            </h2>
          </div>

          <div className="course-content">
            <img
              className="course-banner"
              src="https://picsum.photos/500/300?random=12"
              alt="Course"
            />

            <div className="desc-block">
              <p>
                Satisfied conveying a dependent contented he gentleman agreeable
                do be. Warrant private blushes removed an in equally totally if.
                Delivered dejection necessary objection do Mr prevailed. Mr
                feeling does chiefly cordial in do.
              </p>

              <h3 className="price">$295.55</h3>

              <div className="author-row">
                <img
                  className="author-img"
                  src="https://i.pravatar.cc/50?img=8"
                  alt="Author"
                />
                <div>
                  <h4 className="author-name">By Jacqueline Miller</h4>
                  <span className="author-tag">Founder Eduport company</span>
                </div>
              </div>

              <div className="details-grid">
                <div><strong>Release date:</strong> 29 Aug 2020</div>
                <div><strong>Skills:</strong> All level</div>
                <div><strong>Total Hour:</strong> 4h 50m</div>
                <div><strong>Total Lecture:</strong> 30</div>
                <div><strong>Total Enrolled:</strong> 12,000+</div>
                <div><strong>Language:</strong> English</div>
                <div><strong>Certificate:</strong> Yes</div>
                <div><strong>Review:</strong> 4.5 ⭐</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side with Graphs */}
        <div className="right-col">
          <div className="card">
            <h3 className="sub-title">Total Course Earning</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="card">
            <h3 className="sub-title">New Enrollment This Month</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="earnings"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Student Reviews Section */}
      <div className="review-wrapper">
        <h2 className="review-title">Students all Reviews</h2>

        <div className="review-table">
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="student-info">
                      <img
                        src={s.avatar}
                        alt={s.name}
                        className="review-avatar"
                      />
                      <span>{s.name}</span>
                    </div>
                  </td>
                  <td>{s.date}</td>
                  <td>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={i < s.rating ? "star filled" : "star empty"}
                      >
                        ★
                      </span>
                    ))}
                  </td>
                  <td className="action-icons">
  <span title="View"><Eye className="icon view" /></span>
  <span title="Delete"><Trash2 className="icon delete" /></span>
  <span title="Publish"><Upload className="icon publish" /></span>
  <span title="Unpublish"><Download className="icon unpublish" /></span>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="review-footer">
          <span>Showing 1 to 8 of 20 entries</span>
          <div className="pagination">
            <button>{"<"}</button>
            <button>1</button>
            <button className="active">2</button>
            <button>3</button>
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
