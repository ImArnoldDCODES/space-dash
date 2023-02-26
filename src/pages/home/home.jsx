import React from "react";
import DesktopBg from "../../assets/home/background-home-desktop.jpg";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden home-page">
      <div className="flex h-[100%] m-auto mt-12">
        <div className="basis-[50%] m-auto text-start mt-[13rem] pl-[9rem]">
          <h4 className="text-[#D0D6F9] text-[28px] font-[400] leading-normal tracking-wide">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h2 className="text-[#fff] text-[150px] font-[400] leading-normal">
            SPACE
          </h2>
          <p className="w-[28rem] text-[#D0D6F9] text-[18px] font-[400] leading-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="basis-[50%] m-auto mt-[16rem]">
          <div className="bg-[#979797]/50 w-[22rem] h-[22rem] text-center text-[#fff] flex m-auto rounded-[50%]">
            <div className="bg-[#fff] w-[14rem] h-[14rem] text-center text-[#000] text-[30px] flex m-auto rounded-[50%]">
              <h6 className="m-auto">EXPLORE</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
