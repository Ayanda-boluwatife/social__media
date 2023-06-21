"use client";

import React, { useState } from "react";

const ToggleButton = ({ isDarkMode, onToggle }) => {
  const [isChecked, setIsChecked] = useState(isDarkMode);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onToggle(!isChecked);
  };

  return (
    <div
      className={`toggle-button ${isChecked ? "dark-mode" : "light-mode"}`}
      onClick={handleToggle}
    >
      <div className="toggle-slider"></div>
    </div>
  );
};

export default ToggleButton;
