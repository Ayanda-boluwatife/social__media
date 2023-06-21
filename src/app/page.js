"use client";
import React, { useState } from "react";
import Home from "./social-media/Home";
import Overview from "./social-media/Overview";
import ToggleButton from "./social-media/ToogleButton";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggle = (isChecked) => {
    setIsDarkMode(isChecked);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-dark-bg-color" : "bg-light-bg-color"
      } h-full`}
    >
      <div
        className={`${
          isDarkMode ? "bg-dark-top-bg-color" : "bg-light-top-bg-color"
        } p-10 rounded-b-2xl`}
      >
        <marquee
          behavior="scroll"
          direction="left"
          className={`text-${
            isDarkMode ? "dark" : "light"
          }-text-color leading-relaxed font-serif`}
        >
          Built With Love By Ayanda Boluwatife, Email:
          ayandaboluwatife.msme@gmail.com, Contact-Info: +234-9115819983,
          +234-9164859994.
        </marquee>
        <div className="container md:flex md:flex-row sm:flex-col justify-between">
          <div className="md:border-b-0 sm:border-b-2 sm:border-dark-text-color">
            <h1
              className={`f-size font-bold ${
                isDarkMode
                  ? "text-dark-white-text-color"
                  : "text-light-white-text-color"
              }`}
            >
              Social Media Dashboard
            </h1>
            <p
              className={`text-${
                isDarkMode ? "dark" : "light"
              }-text-color font-bold`}
            >
              Total Followers: 23,004
            </p>
          </div>
          <div className="toggle-container flex items-center md:justify-center md:mt-0 sm:mt-8 sm:justify-between gap-2">
            <p
              className={`font-bold ${
                isDarkMode ? "text-dark-text-color" : "text-light-text-color"
              }`}
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </p>
            <ToggleButton isDarkMode={isDarkMode} onToggle={handleToggle} />
          </div>
        </div>
      </div>
      <div>
        <Home isDarkMode={isDarkMode} />
        <div className="mt-4">
          <Overview isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
};

export default App;
