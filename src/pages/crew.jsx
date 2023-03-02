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
      <div className="crew h-[100vh]">
        <div className="grid lg:grid-cols-2 items-center  justify-center pt-[7rem] crew">
          <div className="text-white m-4 text-center order-last md:order-first grid">
            <h2 className="hidden md:block text-center md:text-left text-lg m-8 lg:text-3xl lg:mb-16 lg:text-center grid order-first">
              <span className="opacity-50">02</span> Meet your crew{" "}
            </h2>
            <h1 className="text-3xl opacity-50 mb-2">
              {crewlist[index].role}{" "}
            </h1>
            <h1 className="text-4xl mb-8">{crewlist[index].name}</h1>
            <p className="opacity-50 w-[90%] mx-auto text-xl">
              {crewlist[index].description}
            </p>
            <div className="flex justify-center py-2 cursor-pointer">
              {crewlist.map((item, index) => {
                return (
                  <div key={index} className="text-3xl text-white">
                    <RxDotFilled onClick={() => setIndex(index)} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid">
            <h2 className="block md:hidden text-center md:text-center text-lg m-8 lg:text-3xl lg:mb-16 lg:text-center text-white order-first">
              <span className="opacity-50">02</span> Meet your crew{" "}
            </h2>
            <img
              src={crewlist[index].image}
              className="w-[300px] mx-auto my-8 order-first md:order-last"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default crew;
