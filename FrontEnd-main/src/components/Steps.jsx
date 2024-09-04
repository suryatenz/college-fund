// src/components/Steps.js

import React from "react";

const Steps = ({ currentStep }) => {
  const getStepClass = (step) =>
    currentStep === step ? "text-blue-600 font-bold" : "text-gray-500";

  return (
    <div className="flex justify-around items-center py-4">
      <span className={getStepClass(1)}>1. Select District</span>
      <span className="text-gray-300">-------------------</span>
      <span className={getStepClass(2)}>2. Select College</span>
      <span className="text-gray-300">-------------------</span>
      <span className={getStepClass(3)}>3. Payment</span>
    </div>
  );
};

export default Steps;
