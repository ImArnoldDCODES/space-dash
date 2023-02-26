import React from "react";
import Moon from "../assets/destination/image-moon.png";

const Destination = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden desitination-page">
      <div className="flex h-[100%] m-auto mt-12">
        <div className="basis-[50%] m-auto text-start mt-[13rem] pl-[7rem]">
          <h4 className="text-[28px] text-[#fff] leading-normal tracking-[4px]">
            <span className="opacity-[0.25] mr-5">01</span>
            PICK YOUR DESTINATION
          </h4>
          <img
            src={Moon}
            alt=""
            width={100}
            height={100}
            className="m-auto h-[22rem] w-[22rem] mt-20"
          />
        </div>
        <div className="basis-[50%] m-auto mt-[17rem]">
          <div className="flex flex-col w-fit m-auto">
            <ul className="flex text-[#D0D6F9] gap-10 text-[16px] font-[400]">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
            <div className="">
              <h4 className="text-[#fff] leading-normal text-[100px]">MOON</h4>
              <p className="text-[#D0D6F9] text-[18px] leading-normal w-[28rem]">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <hr className="w-[100%] mt-10 border-[#383B4B]"/>
              <div className="flex gap-16 mt-7">
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] leading-normal">AVG, DISTANCE</h5>
                  <h3 className="text-[#fff] text-[28px] leading-normal">384,400 KM</h3>
                </span>
                <span>
                  <h5 className="text-[14px] text-[#D0D6F9] tracking-[2.3px] leading-normal">AVG, DISTANCE</h5>
                  <h3 className="text-[#fff] text-[28px] leading-normal">384,400 KM</h3>
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
