import React from "react";
import launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import launch2 from "../assets/technology/image-launch-vehicle-landscape.jpg";

const technology = () => {
  return (
    <div className=" h-[100vh]">
      <div className="grid lg:grid-cols-2 gap-10 items-center  justify-center pt-[9rem] technology">
        <div className="text-white my-6 text-center">
          <h2 className="text-left text-lg m-8 lg:text-3xl lg:mb-20 lg:text-center">
            <span className="opacity-50">02</span> SPACE LAUNCH 101{" "}
          </h2>
          <h1 className="text-4xl opacity-50 mb-2">THE TERMINOLOGY… </h1>
          <h1 className="text-5xl mb-8">LAUNCH VEHICLE</h1>
          <p className="opacity-50 w-3/4 mx-auto">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
        <div className="order-first lg:order-last">
          <img src={launch} className="hidden lg:grid mx-auto my-8 " alt="" />
          <img src={launch2} className=" lg:hidden w-full my-8 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default technology;
