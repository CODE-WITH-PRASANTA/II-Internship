import React from "react";
import "./DashboardCard.css";
import {
  FiBriefcase,
  FiBookOpen,
  FiPlusSquare,
  FiCheckCircle,
  FiArrowUpRight,
  FiArrowDownRight,
} from "react-icons/fi";

const DashboardCard = () => {
  return (
    <div className="adminDash-wrapper">
      <div className="adminDash-container">

        {/* Card 1 */}
        <div className="adminDash-card">
          <div className="adminDash-card-top">
            <h4>Total Projects</h4>
            <div className="adminDash-icon blue">
              <FiBriefcase />
            </div>
          </div>

          <h2 className="adminDash-number">676,90</h2>

          <div className="adminDash-bottom">
            <span>6 min ago</span>
            <div className="adminDash-growth blueText">
              <FiArrowDownRight /> 105.05%
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="adminDash-card">
          <div className="adminDash-card-top">
            <h4>Pending Projects</h4>
            <div className="adminDash-icon pink">
              <FiBookOpen />
            </div>
          </div>

          <h2 className="adminDash-number">406,90</h2>

          <div className="adminDash-bottom">
            <span>30 min ago</span>
            <div className="adminDash-growth pinkText">
              <FiArrowUpRight /> 095.05%
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="adminDash-card">
          <div className="adminDash-card-top">
            <h4>New Projects</h4>
            <div className="adminDash-icon yellow">
              <FiPlusSquare />
            </div>
          </div>

          <h2 className="adminDash-number">716,80</h2>

          <div className="adminDash-bottom">
            <span>1 hr ago</span>
            <div className="adminDash-growth yellowText">
              <FiArrowUpRight /> 006.43%
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="adminDash-card">
          <div className="adminDash-card-top">
            <h4>Completed Projects</h4>
            <div className="adminDash-icon green">
              <FiCheckCircle />
            </div>
          </div>

          <h2 className="adminDash-number">536,80</h2>

          <div className="adminDash-bottom">
            <span>30 min ago</span>
            <div className="adminDash-growth greenText">
              <FiArrowDownRight /> 396.03%
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCard;