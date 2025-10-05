import React from 'react';
import './YouCanBe.css';
import i1 from "../../assets/add-course.webp";
import i2 from "../../assets/create-account.webp";
import i3 from "../../assets/earn-money.webp";

const YouCanBe = () => {
  return (
    <div className="youcanbe">
      <h1>You can be your guiding star with our help</h1>
      <p>
        As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted.
      </p>
      <div className="youcanbe-cards">
        
        <div className="youcanbe-card">
          <div className="card-icon">
            <img src={i2} alt="Create Account" />
          </div>
          <h2>Create Account</h2>
          <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Delivered dejection necessary objection..</p>
        </div>

        <div className="youcanbe-card">
          <div className="card-icon">
            <img src={i1} alt="Add your Course" />
          </div>
          <h2>Add your Course</h2>
          <p>Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you...</p>
        </div>

        <div className="youcanbe-card">
          <div className="card-icon">
            <img src={i3} alt="Start Earning Money" />
          </div>
          <h2>Start Earning Money</h2>
          <p>Insipidity the sufficient discretion imprudence resolution sir him decisively. Delivered dejection necessary objectio...</p>
        </div>

      </div>
    </div>
  );
};

export default YouCanBe;
