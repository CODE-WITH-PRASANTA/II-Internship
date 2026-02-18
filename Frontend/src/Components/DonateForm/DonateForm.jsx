import React, { useState } from "react";
import "./DonateForm.css";

const DonateForm = () => {
  const [showList, setShowList] = useState(false);
  const [donations, setDonations] = useState([]);

  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    mobile: "",
    email: "",
    certificate: "No",
    address: "",
    other: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDonation = {
      id: donations.length + 1,
      paymentNumber: "TXN" + Math.floor(Math.random() * 1000000000000),
      date: new Date().toLocaleDateString(),
      ...formData,
    };

    setDonations([newDonation, ...donations]);

    setFormData({
      amount: "",
      name: "",
      mobile: "",
      email: "",
      certificate: "No",
      address: "",
      other: "",
    });
  };

  return (
    <section className="dpk-section">
      {/* TOP BUTTONS */}
      <div className="dpk-top-buttons">
        <button className="dpk-btn-primary">Make a Donation</button>

        <button
          className="dpk-btn-secondary"
          onClick={() => setShowList(!showList)}
        >
          {showList ? "Hide Charity List" : "List of Charities"}
        </button>
      </div>

      {/* INLINE POPUP BELOW BUTTONS */}
      {showList && (
        <div className="dpk-inline-popup">
          <div className="dpk-inline-header">
            <h2 className="dpk-popup-title">Donation Records</h2>

            <input
              type="text"
              placeholder="Search by donor, payment number, or address..."
              className="dpk-search-input"
            />

            <button
              className="dpk-close-btn"
              onClick={() => setShowList(false)}
            >
              ✕
            </button>
          </div>

          <div className="dpk-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>SERIAL NO.</th>
                  <th>PAYMENT NUMBER</th>
                  <th>DATE OF RECEIPT</th>
                  <th>DONOR NAME</th>
                  <th>ADDRESS</th>
                  <th>AMOUNT RECEIVED</th>
                  <th>OTHER INFORMATION</th>
                </tr>
              </thead>
              <tbody>
                {donations.length === 0 ? (
                  <tr>
                    <td colSpan="7">No Donations Yet</td>
                  </tr>
                ) : (
                  donations.map((donor, index) => (
                    <tr key={index}>
                      <td>{donor.id}</td>
                      <td>{donor.paymentNumber}</td>
                      <td>{donor.date}</td>
                      <td className="dpk-donor-name">
                        {donor.name}
                      </td>
                      <td>{donor.address}</td>
                      <td>₹{donor.amount}</td>
                      <td>{donor.other || "N/A"}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* FORM */}
      <form className="dpk-form-box" onSubmit={handleSubmit}>
        <label>Enter Amount (₹): *</label>
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount..."
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <div className="dpk-row">
          <div>
            <label>1. Name: *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name..."
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>2. Mobile Number: *</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number..."
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="dpk-row">
          <div>
            <label>3. Email: *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email..."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>4. Do you want an 80G certificate? *</label>
            <select
              name="certificate"
              value={formData.certificate}
              onChange={handleChange}
            >
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        <label>5. Address: *</label>
        <textarea
          name="address"
          placeholder="Enter Address..."
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>6. Anything Else?:</label>
        <textarea
          name="other"
          placeholder="Anything else..."
          value={formData.other}
          onChange={handleChange}
        />

        <button type="submit" className="dpk-submit-btn">
          Make Payment
        </button>
      </form>
    </section>
  );
};

export default DonateForm;
