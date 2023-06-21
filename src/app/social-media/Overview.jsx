"use client";

import React, { useEffect, useRef } from "react";
import CountUp from "countup";
import Image from "next/image";

const cards = [
  {
    overviewText: "Page Views",
    overviewLogo: "images/icon-facebook.svg",
    overviewNum: 87,
    todaysremarkimg: "images/icon-up.svg",
    status: "hsl(163, 72%, 41%)",
    percent: "3%",
  },
  {
    overviewText: "Likes",
    overviewLogo: "images/icon-facebook.svg",
    overviewNum: 52,
    todaysremarkimg: "images/icon-down.svg",
    status: "hsl(356, 69%, 56%)",
    percent: "2%",
  },
  {
    overviewText: "Likes",
    overviewLogo: "images/icon-instagram.svg",
    overviewNum: 5462,
    todaysremarkimg: "images/icon-up.svg",
    status: "hsl(163, 72%, 41%)",
    percent: "2257%",
  },
  {
    overviewText: "Profile Views",
    overviewLogo: "images/icon-instagram.svg",
    overviewNum: 52000,
    todaysremarkimg: "images/icon-up.svg",
    status: "hsl(163, 72%, 41%)",
    percent: "1375%",
  },
  {
    overviewText: "Retweets",
    overviewLogo: "images/icon-twitter.svg",
    overviewNum: 117,
    todaysremarkimg: "images/icon-up.svg",
    status: "hsl(163, 72%, 41%)",
    percent: "303%",
  },
  {
    overviewText: "Likes",
    overviewLogo: "images/icon-twitter.svg",
    overviewNum: 507,
    todaysremarkimg: "images/icon-up.svg",
    status: "hsl(163, 72%, 41%)",
    percent: "553%",
  },
  {
    overviewText: "Likes",
    overviewLogo: "images/icon-facebook.svg",
    overviewNum: 107,
    todaysremarkimg: "images/icon-down.svg",
    status: "hsl(356, 69%, 56%)",
    percent: "19%",
  },
  {
    overviewText: "Total Views",
    overviewLogo: "images/icon-facebook.svg",
    overviewNum: 1407,
    todaysremarkimg: "images/icon-down.svg",
    percent: "12%",
    status: "hsl(356, 69%, 56%)",
  },
];

const Overview = ({ isDarkMode }) => {
  const countUpRefs = useRef([]);

  useEffect(() => {
    countUpRefs.current.forEach((ref, index) => {
      const countUp = new CountUp(ref, 0, cards[index].overviewNum, 0, 2, {
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
      <div className="grid md:grid-cols-4 md:gap-y-4 sm:grid-cols-1 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`cards ${
              isDarkMode
                ? "bg-[var(--dark-card-color)]"
                : "bg-[var(--light-card-color)]"
            } hover:opacity-60 p-8 rounded-lg`}
          >
            <div
              className={`flex justify-around items-center font-medium ${
                isDarkMode ? "text-dark-text-color" : "text-light-text-color"
              }`}
            >
              <h3>{card.overviewText}</h3>
              <div>
                <Image height={30} width={30} src={card.overviewLogo} alt="" />
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <h1
                className={`f-size font-bold ${
                  isDarkMode ? "text-light-bg-color" : "text-dark-bg-color"
                }`}
                ref={(ref) => (countUpRefs.current[index] = ref)}
              />
              <div
                className="flex items-center gap-1"
                style={{ color: card.status }}
              >
                <div>
                  <Image
                    height={10}
                    width={10}
                    src={card.todaysremarkimg}
                    alt=""
                  />
                </div>
                <p>{card.percent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
