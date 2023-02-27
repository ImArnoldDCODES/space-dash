import React from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";

const crew = () => {
  return (
    <div className="crew h-[100vh]">
      <div className="lg:grid grid-cols-2 gap-10 items-center  justify-center pt-[7rem] crew">
        <div className="text-white  text-center">
          <h2 className="text-left text-lg m-8 lg:text-3xl lg:mb-20 lg:text-center">
            <span className="opacity-50">02</span> Meet your crew{" "}
          </h2>
          <h1 className="text-4xl opacity-50 mb-2">Commander </h1>
          <h1 className="text-5xl mb-8">Douglas Hurley</h1>
          <p className="opacity-50 w-3/4 mx-auto">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        <img
          src={douglas}
          className="w-[300px] lg:w-full mx-auto my-8 "
          alt=""
        />
      </div>
    </div>
  );
};

export default crew;
