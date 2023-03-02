import React, { useState, useEffect } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import { NavLink } from "react-router-dom";

const planets = [
  {
    id: 1,
    name: "MOON",
    description:
      " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: moon,
    distance: "384,400 km",
    time: "3 DAYS",
  },
  {
    id: 2,
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: mars,
    distance: "225 MIL. km",
    time: "9 MONTHS",
  },
  {
    id: 3,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: europa,
    distance: "628 MIL. km",
    time: "3 YEARS",
  },
  {
    id: 4,
    name: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    image: titan,
    distance: "1.6 BIL. km",
    time: "7 YEARS",
  },
];

const links = [
  { id: 1, name: "MOON" },
  { id: 2, name: "MARS" },
  { id: 3, name: "EUROPA" },
  { id: 4, name: "TITAN" },
];

const Destination = () => {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    const isFirst = index === planets.length - 1;
    const newSlide = isFirst ? 0 : index + 1;
    setIndex(newSlide);
  };
  const prevSlide = () => {
    const isLast = index === 0;
    const newSlide = isLast ? planets.length - 1 : index - 1;
    setIndex(newSlide);
  };

  React.useEffect(() => {
    const time = setTimeout(() => {
      nextSlide();
    }, 8000);
    return () => clearTimeout(time);
  }, [index]);

  const gotToSlide = (slideIndex) => {
    setIndex(slideIndex);
    console.log(index);
  };
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden desitination-page">
      <div className="grid lg:grid-cols-2 gap-8 m-auto pt-[12rem] desitination-page ">
        <div className=" m-auto text-start  ">
          <h4 className="text-2xl text-center font-barlow font-thin text-[#fff] leading-[34px] tracking-[4px]">
            <span className="opacity-[0.25] mr-5 font-barlow font-[700] tracking-[4px] leading-normal">
              0{index}
            </span>
            PICK YOUR DESTINATION
          </h4>
          <img
            src={planets[index].image}
            alt=""
            width={100}
            height={100}
            className="lg:ml-[8rem] w-[24rem] my-10 mx-auto"
          />
        </div>
        <div className="m-auto">
          <div className="flex flex-col w-fit m-auto">
            {/* <ul className="flex text-[#D0D6F9] gap-10 text-[16px] leading-[19px] font-barlow tracking-[2px] font-[400] cursor-pointer mx-auto lg:mx-0">
              {links.map((link, index) => {
                return (
                  <li key={link.id} onClick={() => gotToSlide(index)}>
                    {link.name}
                  </li>
                );
              })}
            </ul> */}
            <ul className="flex text-[#D0D6F9] gap-10 text-[16px] leading-[19px] font-barlow tracking-[2px] font-[400] cursor-pointer mx-auto lg:mx-0">
              <li onClick={() => gotToSlide(0)}>
                {planets[0].name}
                <span
                  className={
                    index === 0
                      ? "hidden lg:block h-[3px] w-[2.3rem] bg-[#fff] content-none mt-2"
                      : ""
                  }
                ></span>
              </li>
              <li onClick={() => gotToSlide(1)}>
                {planets[1].name}
                <span
                  className={
                    index === 1
                      ? "hidden lg:block h-[3px] w-[2.3rem] bg-[#fff] content-none mt-2"
                      : ""
                  }
                ></span>
              </li>
              <li onClick={() => gotToSlide(2)}>
                {planets[2].name}
                <span
                  className={
                    index === 2
                      ? "hidden lg:block h-[3px] w-[2.3rem] bg-[#fff] content-none mt-2"
                      : ""
                  }
                ></span>
              </li>
              <li onClick={() => gotToSlide(3)}>
                {planets[3].name}
                <span
                  className={
                    index === 3
                      ? "hidden lg:block h-[3px] w-[2.3rem] bg-[#fff] content-none mt-2"
                      : ""
                  }
                ></span>
              </li>
            </ul>

            <div className="text-center lg:text-left">
              <h4 className="text-white font-bellefair font-[400] my-8 text-5xl md:text-6xl">
                {planets[index].name}
              </h4>
              <p className="text-[#D0D6F9] font-barlow font-200 text-[18px] leading-[32px] w-[24rem]">
                {planets[index].description}
              </p>
              <hr className="w-[100%] mt-10 border-[#383B4B]" />
              <div className="md:flex justify-center lg:justify-start gap-16 my-7">
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] font-barlow font-[400] leading-normal">
                    AVG, DISTANCE
                  </h5>
                  <h3 className="text-[#fff] mb-6 text-[28px] leading-normal font-bellefair font-[400]">
                    {planets[index].distance}
                  </h3>
                </span>
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] font-barlow font-[400] leading-normal">
                    EST. TRAVEL TIME
                  </h5>
                  <h3 className="text-[#fff] text-[28px] leading-normal font-bellefair font-[400]">
                    {planets[index].time}
                  </h3>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
