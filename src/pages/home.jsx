import React from "react";

export default function Home() {
  return (
    <div className=" home-page">
      <div className="md:flex md:h-[100vh] w-[90%] gap-8 mx-auto pt-12 ">
        <div className=" m-auto text-center md:text-start mt-[13rem] mx-auto w-4/5">
          <h4 className="text-[#D0D6F9] text-[25px] ">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h2 className="text-[#fff] text-[100px] font-[400] ">SPACE</h2>
          <p className=" text-[#D0D6F9] leading-normal">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className=" m-auto my-8 md:mt-[15rem]">
          <div className="md:bg-[#979797]/50 w-[22rem] h-[22rem] text-center text-[#fff] flex m-auto rounded-[50%]">
            <div className="bg-[#fff] w-[14rem] h-[14rem] text-center text-[#000] text-[30px] flex m-auto rounded-[50%]">
              <h6 className="m-auto">EXPLORE</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
