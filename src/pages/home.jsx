import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" h-[100vh]">
      <div className="md:flex gap-8 px-12 mx-auto pt-12 home-page">
        <div className=" m-auto text-center md:text-start mt-[13rem] mx-auto w-4/5">
          <h4 className="text-[#D0D6F9] text-[25px] font-barlow">
            SO, YOU WANT TO TRAVEL TO
          </h4>
          <h2 className="text-[#fff] text-[100px] font-[400] ">SPACE</h2>
          <p className=" text-[#D0D6F9] md:w-3/5 leading-normal font-barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination">
          <div className=" m-auto my-8 md:mt-[15rem]">
            <div className="md:bg-[#979797]/50 w-[22rem] h-[22rem] text-center text-[#fff] flex m-auto rounded-[50%]">
              <div className="bg-[#fff] w-[14rem] h-[14rem] text-center text-[#000] text-[30px] flex m-auto rounded-[50%]">
                <h6 className="m-auto">EXPLORE</h6>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
