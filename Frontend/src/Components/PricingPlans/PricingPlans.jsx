import React, { useState } from 'react';
import './PricingPlans.css';

const monthlyPlans = [
  {
    title: "One-Time Fix",
    description: "Enjoy basic features and an unlimited user",
    price: "$1 /Month",
    features: [
      "Free to use",
      "Unlimited users",
      "Basic features",
      "No risk",
      "Quick and easy to get started"
    ]
  },
  {
    title: "Monthly Support",
    description: "Ongoing support for your business",
    price: "$5 /Month",
    features: [
      "Priority support",
      "Unlimited users",
      "Advanced features",
      "No risk",
      "Quick setup"
    ]
  },
  {
    title: "Enterprise Plan",
    description: "Full business coverage",
    price: "$25 /Month",
    features: [
      "Dedicated account manager",
      "Unlimited users",
      "All features",
      "Risk-free trial",
      "Premium support"
    ]
  }
];

const yearlyPlans = [
  {
    title: "One-Time Fix",
    description: "Enjoy basic features and an unlimited user",
    price: "$10 /Year",
    features: [
      "Free to use",
      "Unlimited users",
      "Basic features",
      "No risk",
      "Quick and easy to get started"
    ]
  },
  {
    title: "Monthly Support",
    description: "Ongoing support for your business",
    price: "$50 /Year",
    features: [
      "Priority support",
      "Unlimited users",
      "Advanced features",
      "No risk",
      "Quick setup"
    ]
  },
  {
    title: "Enterprise Plan",
    description: "Full business coverage",
    price: "$250 /Year",
    features: [
      "Dedicated account manager",
      "Unlimited users",
      "All features",
      "Risk-free trial",
      "Premium support"
    ]
  }
];

const PricingPlans = () => {
  const [activePlan, setActivePlan] = useState('monthly');

  const plansToShow = activePlan === 'monthly' ? monthlyPlans : yearlyPlans;

  return (
    <div className="pricingplans-container">
      <div className="pricingplans-header">
        <h2>Flexible Plans to Fit Your Needs</h2>
        <p>Choose the right support package for you—whether it’s a quick fix, ongoing care, or full business coverage. No hidden fees, just reliable service.</p>
      </div>

      <div className="pricingplans-toggle">
        <button
          className={activePlan === 'monthly' ? 'active' : ''}
          onClick={() => setActivePlan('monthly')}
        >
          Monthly
        </button>
        <button
          className={activePlan === 'yearly' ? 'active' : ''}
          onClick={() => setActivePlan('yearly')}
        >
          Yearly
        </button>
      </div>

      <div className="pricingplans-grid">
        {plansToShow.map((plan, idx) => (
          <div className="pricingplans-card" key={idx}>
            <h3 className="pricingplans-card-title">{plan.title}</h3>
            <p className="pricingplans-card-description">{plan.description}</p>
            <div className="pricingplans-card-price">{plan.price}</div>
            <ul className="pricingplans-card-features">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="pricingplans-check">&#10003;</span> {feature}
                </li>
              ))}
            </ul>
            <button className="pricingplans-card-button">Contact Us</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
