import React from "react";
import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launch2 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import space2 from "../assets/technology/image-space-capsule-landscape.jpg";
import space from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport2 from "../assets/technology/image-spaceport-landscape.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import { RxDotFilled } from "react-icons/rx";

const tech = [
  {
    id: 1,
    role: "THE TERMINOLOGY… ",
    name: "LAUNCH VEHICLE",
    description:
      " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: [
      { id: 10, image1: launch },
      { id: 20, image2: launch2 },
    ],
    value: 1,
  },
  {
    id: 2,
    role: "THE TERMINOLOGY…  ",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: [
      { id: 30, image1: spaceport },
      { id: 40, image2: spaceport2 },
    ],
    value: 2,
  },
  {
    id: 3,
    role: "THE TERMINOLOGY…",
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",

    image: [
      { id: 50, image1: space },
      { id: 60, image2: space2 },
    ],
    value: 3,
  },
];

const technology = () => {
  const [index, setIndex] = React.useState(0);
  // const [value, setValue] = React.useState(0);
  const [active, setActive] = React.useState(true);

  const nextSlide = () => {
    const isFirst = index === tech.length - 1;
    const newSlide = isFirst ? 0 : index + 1;
    setIndex(newSlide);
  };
  const prevSlide = () => {
    const isLast = index === 0;
    const newSlide = isLast ? tech.length - 1 : index - 1;
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
  let toggle = active ? "text-red-500" : null;

  return (
    <div className=" h-[100vh] technology h-[100vh] w-[100vw] overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-10 items-center  justify-center pt-[9rem]">
        <div className="lg:flex gap-5 mx-6">
          <div className="flex lg:flex-col justify-center py-2 cursor-pointer">
            {tech.map((item, index) => {
              return (
                <div key={index} className="text-4xl text-gray-700">
                  <RxDotFilled onClick={() => setIndex(index)} />
                </div>
              );
            })}
          </div>
          <div className="text-white my-6 text-center">
            <h2 className="hidden lg:block text-left text-lg m-8 lg:text-3xl lg:mb-20 lg:text-center">
              <span className="opacity-[0.25] mr-5 font-barlow font-[700] tracking-[4px] leading-normal">
                0{index}
              </span>
              <span className="text-[#fff] uppercase tracking-[4.7px] font-barlow font-thin">
                SPACE LAUNCH 10{index}
              </span>
            </h2>
            <h1 className="text-[16px] mb-2 uppercase font-bellefair leading-[54px] text-[#D0D6F9]">
              {tech[index].role}
            </h1>
            <h1 className="text-3xl md:text-5xl mb-8 uppercase font-bellefair leading-[54px]">
              {tech[index].name}
            </h1>
            <p className="text-[#D0D6F9] font-barlow font-thin leading-[32px] lg:w-3/4 w-[100%] mx-auto">
              {tech[index].description}
            </p>
          </div>
        </div>
        <div className="order-first lg:order-last">
          <h2 className="block lg:hidden text-
          left md:text-left text-lg m-8 lg:text-3xl text-white m-x-4 lg:mb-20 lg:text-center mr-auto w-fit">
            <span className="opacity-[0.25] mr-5 font-barlow font-[700] tracking-[4px] leading-normal">
              0{index}
            </span>
            <span className="text-[#fff] uppercase tracking-[4.7px] font-barlow font-thin">
              SPACE LAUNCH 10{index}
            </span>
          </h2>
          <img
            src={tech[index].image[0].image1}
            className="hidden lg:grid mx-auto my-8 "
            alt=""
          />
          <img
            src={tech[index].image[1].image2}
            className=" lg:hidden w-full my-8 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default technology;
