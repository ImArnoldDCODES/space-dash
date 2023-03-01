import React, { useState, useEffect } from "react";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";

const planets = [
  {
    id: 1,
    name: "MOON",
    description:
      " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    image: moon,
    distance: "384,400 km",
    time: "3 days",
  },
  {
    id: 2,
    name: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    image: mars,
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    id: 3,
    name: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: europa,
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    id: 4,
    name: "TITAN",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    image: titan,
    distance: "1.6 BIL. km",
    time: "7 years",
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
    }, 5000);
    return () => clearTimeout(time);
  }, [index]);

  const gotToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden desitination-page">
      <div className="grid lg:grid-cols-2 gap-8 m-auto mt-[12rem] ">
        <div className=" m-auto text-start  ">
          <h4 className="text-2xl text-center text-[#fff] leading-normal tracking-[4px]">
            <span className="opacity-[0.25] mr-5">01</span>
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
        <div className=" m-auto  ">
          <div className="flex flex-col w-fit m-auto">
            <ul className="flex text-[#D0D6F9] gap-10 text-[16px] font-[400] cursor-pointer mx-auto lg:mx-0">
              {links.map((link, index) => {
                return (
                  <li key={link.id} onClick={() => gotToSlide(index)}>
                    {link.name}
                  </li>
                );
              })}
            </ul>

            <div className="text-center lg:text-left">
              <h4 className="text-white leading-normal my-5 text-5xl md:text-6xl">
                {planets[index].name}
              </h4>
              <p className="text-[#D0D6F9] text-[18px] leading-normal w-[28rem]">
                {planets[index].description}
              </p>
              <hr className="w-[100%] mt-10 border-[#383B4B]" />
              <div className="md:flex justify-center lg:justify-start gap-16 my-7">
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] leading-normal">
                    AVG, DISTANCE
                  </h5>
                  <h3 className="text-[#fff] mb-6 text-[28px] leading-normal">
                    {planets[index].distance}
                  </h3>
                </span>
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] leading-normal">
                    AVG, Time
                  </h5>
                  <h3 className="text-[#fff] text-[28px] leading-normal">
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
