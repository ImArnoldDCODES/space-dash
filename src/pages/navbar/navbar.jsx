import React from "react";
import Logo from "../../assets/shared/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = React.useState(false);
  const navtext = [
    {
      title: "00 HOME",
      path: "/",
    },
    {
      title: "01 DESTINATION",
      path: "/destination",
    },
    {
      title: "02 CREW",
      path: "/crew",
    },
    {
      title: "03 TECHNOLOGY",
      path: "/technology",
    },
  ];

  const handleNav = () => {
    setActive(!active); 
    console.log(active, "active2");
  };
  console.log(active);

  return (
    <>
      <div className="absolute flex w-[100%] justify-between items-center mt-5">
        <NavLink to="/">
          <div>
            <img
              src={Logo}
              alt="logo"
              className="absolue top-[2rem] mt-2 z-[1] md:static w-[3rem] h-[3rem] ml-12"
            />
          </div>
        </NavLink>
        <div className="w-[40rem] h-[100%] flex align-center justify-center nav">
          <span className="hidden lg:block h-[1px] w-[20rem] right-[38rem] top-[2.7rem] opacity-[0.25] bg-[#fff] absolute content-none z-[1] m-auto"></span>
          {/* "hidden md:flex px-5 py-8 gap-10 ml-10 text-[#fff]" */}
          <ul className="hidden md:flex px-5 gap-10 pl-10 text-[#fff]">
            {navtext.map((list, index) => {
              return (
                <NavLink
                  key={index}
                  to={list.path}
                  className="py-8 px-2 flex gap-1">
                  <span className="lg:block hidden font-barlow font-[700] tracking-[2.7px] leading-normal">
                    {list.title.slice(0, 2)}
                  </span>
                  <span className="font-barlow font-[400] tracking-[2.7px] leading-normal">
                    {list.title.slice(2)}{" "}
                  </span>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={
          active === true ? "block lg:hidden h-[65vh] w-[100vw] fixed" : "hidden"
        }
        style={{
          backgroundColor: "#9c9b9e",
        }}>
        <ul className="lg:hidden md:flex px-5 gap-10 pl-10 bg-[#9c9797] text-[#fff] pt-32">
          {navtext.map((list, index) => {
            return (
              <NavLink
                key={index}
                to={list.path}
                className="py-8 px-2 flex gap-1"
                onClick={() => setActive(true)}>
                <span className="font-barlow font-[700] tracking-[2.7px] leading-normal">
                  {list.title.slice(0, 2)}
                </span>
                <span className="font-barlow font-[400] tracking-[2.] leading-normal">
                  {list.title.slice(2)}{" "}
                </span>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="absolute right-[2rem] top-[2rem]" onClick={handleNav}>
        {active && (
          <FaTimes
            className={`${
              active ? "block md:hidden text-4xl text-white" : ""
            } `}
          />
        )}
        {!active && (
          <FaBars
            className={`${
              !active ? "block md:hidden  text-4xl text-white" : ""
            } `}
          />
        )}
      </div>
    </>
  );
}