import React, { useEffect, useState } from "react";
import "./Pricing.css";

interface PricingProps {
  data: any;
  onChange: (data: any) => void;
}

const Pricing: React.FC<PricingProps> = ({ data, onChange }) => {
  const [isFree, setIsFree] = useState(data?.isFree ?? true);
  const [hasDiscount, setHasDiscount] = useState(data?.hasDiscount ?? false);
  const [price, setPrice] = useState(data?.price ?? "");
  const [discountPrice, setDiscountPrice] = useState(data?.discountPrice ?? "");
  const [expiryType, setExpiryType] = useState(data?.expiryType ?? "limited");
  const [months, setMonths] = useState(data?.months ?? "");

  useEffect(() => {
    onChange({
      isFree,
      hasDiscount,
      price,
      discountPrice,
      expiryType,
      months,
    });
  }, [isFree, hasDiscount, price, discountPrice, expiryType, months]);

  const calculateDiscount = () => {
    if (!price || !discountPrice) return 0;
    const discount = ((+price - +discountPrice) / +price) * 100;
    return discount.toFixed(0);
  };

  return (
    <div className="pricing-container">
      {/* Free Course Checkbox */}
      <div className="pricing-checkbox">
        <input
          type="checkbox"
          id="freeCourse"
          checked={isFree}
          onChange={() => setIsFree(!isFree)}
        />
        <label htmlFor="freeCourse">Check if this is a free course</label>
      </div>

      {/* Price Field */}
      <div className="pricing-field">
        <label>Course Price ($)</label>
        <input
          type="number"
          placeholder="Enter course price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          disabled={isFree}
        />
      </div>

      {/* Discount Checkbox */}
      <div className="pricing-checkbox">
        <input
          type="checkbox"
          id="discountCheck"
          checked={hasDiscount}
          onChange={() => setHasDiscount(!hasDiscount)}
          disabled={isFree}
        />
        <label htmlFor="discountCheck">Check if this course has discount</label>
      </div>

      {/* Discount Price Field */}
      <div className="pricing-field">
        <label>Discount Price ($)</label>
        <input
          type="number"
          placeholder="Enter discount price"
          value={discountPrice}
          onChange={(e) => setDiscountPrice(e.target.value)}
          disabled={isFree || !hasDiscount}
        />
      </div>

      {/* Discount Display */}
      <p className="pricing-discount">
        This course has {price && discountPrice ? calculateDiscount() : 0}% Discount
      </p>

      {/* Expiry Section */}
      <div className="pricing-expiry">
        <label>Expiry Period</label>
        <div className="pricing-radio-group">
          <label className="pricing-radio">
            <input
              type="radio"
              name="expiry"
              checked={expiryType === "lifetime"}
              onChange={() => setExpiryType("lifetime")}
            />
            Lifetime
          </label>

          <label className="pricing-radio">
            <input
              type="radio"
              name="expiry"
              checked={expiryType === "limited"}
              onChange={() => setExpiryType("limited")}
            />
            Limited Time
          </label>
        </div>
      </div>

      {/* Limited Expiry Duration */}
      {expiryType === "limited" && (
        <div className="pricing-field">
          <label>Number of months</label>
          <input
            type="number"
            placeholder="Enter number of months"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
          />
          <p className="pricing-note">
            After purchase, students can access the course until your selected time.
          </p>
        </div>
      )}
    </div>
  );
};

export default Pricing;
