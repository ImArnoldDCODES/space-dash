import React from "react";
import Logo from "../../assets/shared/logo.svg";

export default function Navbar() {
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

  return (
    <div className="absolute flex w-[100%] justify-between items-center ">
      <div>
        <img src={Logo} alt="logo" className="w-[3rem] h-[3rem] ml-12" />
      </div>
      <div
        className="w-[40rem] h-[100%] flex align-center justify-center"
        style={{
          background: "rgba(11, 13, 23, 0.5)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(3.1px)",
          WebkitBackdropFilter: "blur(3.1px)",
        }}>
        <span className="h-[2px] w-[35rem] right-[38rem] top-[2.7rem] opacity-[0.25] bg-[#fff] absolute content-none z-[1] m-auto"></span>
        <ul className="flex px-5 py-8 gap-10 ml-10 text-[#fff]">
          {navtext.map((list, index) => {
            return (
              <li key={index}>
                <a href={list.path}>{list.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
