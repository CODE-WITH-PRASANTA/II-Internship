import React from "react";
import "./CAPPolicy.css";

const CAPPolicy = () => {
  return (
    <section className="CAPPolicy-section">

      <div className="CAPPolicy-container">

        <h1 className="CAPPolicy-title">Cancellation and Refund Policy</h1>

        <p className="CAPPolicy-intro">
          <b>DIVYA PRERAK KAHANIYAN HUMANITY RESEARCH CENTRE TRUST</b> believes in helping its
          customers as much as possible, and thus has a liberal cancellation policy.
          The details are as follows:
        </p>

        {/* Cancellation Terms */}
        <div className="CAPPolicy-block">
          <h3 className="CAPPolicy-heading">Cancellation Terms</h3>
          <ul>
            <li>
              Cancellations will be considered only if the request is made within
              7 days of placing the order. However, if the order has been
              communicated to the vendors/merchants and they have initiated the
              shipping process, the request may not be entertained.
            </li>

            <li>
              We do not accept cancellation requests for perishable items such
              as flowers, eatables, etc. However, if the quality of the
              delivered product is not satisfactory, a refund or replacement
              may be provided.
            </li>
          </ul>
        </div>

        {/* Damaged Items */}
        <div className="CAPPolicy-block">
          <h3 className="CAPPolicy-heading">Damaged or Defective Items</h3>
          <ul>
            <li>
              If you receive a damaged or defective item, please report it to
              our Customer Service team within 7 days of receipt. The claim
              will be entertained once the merchant verifies the issue.
            </li>
          </ul>
        </div>

        {/* Product Not Expected */}
        <div className="CAPPolicy-block">
          <h3 className="CAPPolicy-heading">Product Not as Expected</h3>
          <ul>
            <li>
              If the received product does not match the description on our
              site or your expectations, notify our Customer Service team
              within 7 days. They will review the complaint and make an
              appropriate decision.
            </li>
          </ul>
        </div>

        {/* Warranty */}
        <div className="CAPPolicy-block">
          <h3 className="CAPPolicy-heading">Warranty-Related Issues</h3>
          <ul>
            <li>
              For products that come with a manufacturer’s warranty, please
              reach out directly to the manufacturer for support and warranty
              claims.
            </li>
          </ul>
        </div>

        {/* Refund */}
        <div className="CAPPolicy-block">
          <h3 className="CAPPolicy-heading">Refund Process</h3>
          <ul>
            <li>
              For any refunds approved by <b>DIVYA PRERAK KAHANIYAN HUMANITY RESEARCH
              CENTRE TRUST</b>, the process will take approximately 6-8 days to
              be completed.
            </li>
          </ul>
        </div>

      </div>

    </section>
  );
};

export default CAPPolicy;