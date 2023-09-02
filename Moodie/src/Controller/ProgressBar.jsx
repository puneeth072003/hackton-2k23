import React, { useEffect, useState } from "react";
import "./ProgressBars.css"; // Import your CSS file

const ProgressBars = () => {
  const [positiveValue, setPositiveValue] = useState(0);
  const [neutralValue, setNeutralValue] = useState(0);
  const [negativeValue, setNegativeValue] = useState(0);

  // Simulate receiving data from the backend
  useEffect(() => {
    // Replace these values with data received from your backend
    const backendData = {
      positive: 12,
      neutral: 99,
      negative: 89,
    };

    setPositiveValue(backendData.positive);
    setNeutralValue(backendData.neutral);
    setNegativeValue(backendData.negative);
  }, []);

  return (
    <div className="progress-bars">
      <div
        className="progress-bar positive"
        style={{ width: `${positiveValue}%` }}
      >
        Positive: {positiveValue}%
      </div>
      <div
        className="progress-bar neutral"
        style={{ width: `${neutralValue}%` }}
      >
        Neutral: {neutralValue}%
      </div>
      <div
        className="progress-bar negative"
        style={{ width: `${negativeValue}%` }}
      >
        Negative: {negativeValue}%
      </div>
    </div>
  );
};

export default ProgressBars;
