import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] overflow-x-hidden home-page">
      <div className="md:flex md:h-[100vh] w-[90%] gap-8 mx-auto pt-12">
        <div className="basis-[50%] m-auto lg:mt-[15rem] mt-[8rem] flex flex-col items-center">
          <div className="text-start m-auto">
            <h4 className="text-[#D0D6F9] text-[28px] font-barlow font-[400] tracking-[4.7px] leading-[32px] tracking-wide">
              SO, YOU WANT TO TRAVEL TO
            </h4>
            <h2 className="text-[#fff] md:text-[150px] text-[100px] font-[400] leading-[172px] font-bellefair">
              SPACE
            </h2>
            <p className="md:w-[28rem] w-[80%] text-[#D0D6F9] md:text-[18px] text-[15px] font-barlow font-normal leading-normal">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="basis-[50%] m-auto lg:mt-[12rem] mt-[8rem] mb-[3rem]">
          <Link to="/destination">
            <div className="bg-[#979797]/25 lg:w-[22rem] lg:h-[22rem] w-[12rem] h-[12rem] text-center text-[#fff] flex m-auto rounded-[50%] hover:w-[24rem] hover:h-[24rem]">
              <div className="bg-[#fff] lg:w-[14rem] lg:h-[14rem] w-[10rem] h-[10rem] text-center text-[#000] text-[30px] flex m-auto rounded-[50%]">
                <h6 className="m-auto text-[#0B0D17] font-bellefair tracking-[2px]">
                  EXPLORE
                </h6>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
