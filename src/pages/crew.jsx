import React from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import { RxDotFilled } from "react-icons/rx";

const crewlist = [
  {
    id: 1,
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas,
  },
  {
    id: 2,
    role: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: mark,
  },
  {
    id: 3,
    role: "PILOT",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: victor,
  },
  {
    id: 4,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ",
    image: anousheh,
  },
];

const crew = () => {
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    const isFirst = index === crewlist.length - 1;
    const newSlide = isFirst ? 0 : index + 1;
    setIndex(newSlide);
  };
  const prevSlide = () => {
    const isLast = index === 0;
    const newSlide = isLast ? crewlist.length - 1 : index - 1;
    setIndex(newSlide);
  };

  React.useEffect(() => {
    const time = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(time);
  }, [index]);

  return (
    <>
      <div className="crew h-[100vh] w-[100vw] overflow-x-hidden">
        <div className="grid lg:grid-cols-2 items-center  justify-center pt-[7rem] h-[100vh] ">
          <div className="text-white m-4 text-start order-last md:order-first grid m-auto w-[75%] lg:w-[60%]">
            <h2 className="hidden md:block text-center md:text-left text-lg m-8 lg:text-3xl lg:mb-16 lg:text-start grid order-first">
              <span className="opacity-[0.25] mr-5 font-barlow font-[700] tracking-[4px] leading-normal">
                0{index}
              </span>
              <span className="text-[#fff] uppercase tracking-[4.7px] font-barlow font-thin">
                MEET YOUR CREW
              </span>
            </h2>
            <h1 className="lg:text-3xl text-2xl opacity-[0.8] text-[#FFFFFF] mb-2 font-bellefair uppercase">
              {crewlist[index].role}
            </h1>
            <h1 className="lg:text-4xl text-3xl mb-8 uppercase font-bellefair leading-[54px]">
              {crewlist[index].name}
            </h1>
            <p className="md:w-[28rem] w-[65%] text-[18px] text-[#D0D6F9] font-barlow font-[400] leading-[32px] text-start ">
              {crewlist[index].description}
            </p>
            <div className="flex justify-center py-2 cursor-pointer lg:mt-[6rem] mt-[3rem] mr-[20rem]">
              {crewlist.map((item, index) => {
                return (
                  <div key={index} className="text-3xl text-white">
                    <RxDotFilled onClick={() => setIndex(index)} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid h-[100%]">
            <h2 className="block md:hidden text-center md:text-center text-lg m-8 lg:text-3xl lg:mb-16 lg:text-center text-white order-first">
              <span className="text-[#fff] uppercase tracking-[4.7px] font-barlow font-thin">
                MEET YOUR CREW
              </span>
            </h2>
            <div className=" w-fit mx-auto mt-auto">
            <img
              src={crewlist[index].image}
              className="lg:w-[400px] w-[280px] mx-auto my-8 lg:my-0 order-first md:order-last  mt-auto"
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default crew;
