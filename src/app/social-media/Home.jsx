"use client";

import React, { useEffect, useRef } from "react";
import CountUp from "countup";
import Image from "next/image";

const formatNumber = (number) => {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + "k";
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "m";
  } else {
    return number.toString();
  }
};

const cards = [
  {
    socialLogo: "images/icon-facebook.svg",
    username: "@nathanf",
    numOfFollowers: 1987,
    followers: "Followers",
    todaysremarkimg: "images/icon-up.svg",
    todaysremark: "12 today",
    status: "hsl(163, 72%, 41%)",
    borderColor: "hsl(208, 92%, 53%)",
  },
  {
    socialLogo: "images/icon-twitter.svg",
    username: "@nathanf",
    numOfFollowers: 1044,
    followers: "Followers",
    todaysremarkimg: "images/icon-up.svg",
    todaysremark: "99 today",
    status: "hsl(163, 72%, 41%)",
    borderColor: "hsl(203, 89%, 53%)",
  },
  {
    socialLogo: "images/icon-instagram.svg",
    username: "@nathanf",
    numOfFollowers: 11000,
    followers: "Followers",
    todaysremarkimg: "images/icon-up.svg",
    todaysremark: "1099 today",
    status: "hsl(163, 72%, 41%)",
    borderColor:
      "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  {
    socialLogo: "images/icon-youtube.svg",
    username: "@nathanf",
    numOfFollowers: 8239,
    followers: "Subscribers",
    todaysremarkimg: "images/icon-down.svg",
    todaysremark: "144 today",
    status: "hsl(356, 69%, 56%)",
    borderColor: "hsl(348, 97%, 39%)",
  },
];

const Home = ({ isDarkMode }) => {
  const countUpRefs = useRef([]);

  useEffect(() => {
    countUpRefs.current.forEach((ref, index) => {
      const countUp = new CountUp(ref, 0, cards[index].numOfFollowers, 0, 2, {
        separator: ",",
      });
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }, []);

  return (
    <section className="container">
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-1 pt-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cards flex flex-col items-center justify-center ${
              isDarkMode ? "bg-dark-card-color" : "bg-light-card-color"
            } hover:opacity-60 p-8 rounded-lg`}
            style={{ borderTop: "4px solid", borderColor: card.borderColor }}
          >
            <div className="flex gap-2 items-center">
              <div>
                <Image height={30} width={30} src={card.socialLogo} alt="" />
              </div>
              <p
                className={`leadind-relaxed font-medium ${
                  isDarkMode ? "text-dark-text-color" : "text-light-text-color"
                }`}
              >
                {card.username}
              </p>
            </div>
            <h1
              className={`f-size-xl font-bold ${
                isDarkMode ? "text-light-bg-color" : "text-dark-bg-color"
              }`}
              ref={(ref) => (countUpRefs.current[index] = ref)}
            />
            <div className="flex items-center gap-1">
              <p
                className={`leadind-relaxed font-medium ${
                  isDarkMode ? "text-dark-text-color" : "text-light-text-color"
                }`}
              >
                {formatNumber(card.numOfFollowers)}
              </p>
              <p
                className={`leadind-relaxed font-medium ${
                  isDarkMode ? "text-dark-text-color" : "text-light-text-color"
                }`}
              >
                {card.followers}
              </p>
            </div>
            <div
              className={`flex items-center gap-1`}
              style={{ color: card.status }}
            >
              <Image height={10} width={10} src={card.todaysremarkimg} alt="" />
              <p>{card.todaysremark}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
