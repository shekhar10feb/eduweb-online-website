import { NavLink } from "react-router-dom";
import React from "react";

export const Links = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col bg-[#171717] text-lg font-bold md:px-2 px-1 lg:py-6 md:py-4 sm:py-2 py-1">
        <div className="w-full">
          <h1 className="w-full text-left lg:text-2xl md:text-xl sm:text-lg text-base text-white font-extrabold lg:ml-[1.5rem] md:ml-[1.2rem] sm:ml-[0.9rem] ml-0.6rem md:py-2 my-1 lg:p-3 p-2">
            Links
          </h1>
        </div>
        <div className="w-[90%] md:text-[0.8rem] sm:text-[0.7rem] text-[0.6rem] flex md:justify-center justify-between items-center flex-row">
          {/* For Desktop Version */}
          <div className="w-full md:flex hidden justify-between items-center">
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/mba"}>MBA</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/engineering"}>ENGINEERING</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/medical"}>MEDICAL</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/design"}>DESIGN</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/more"}>MORE</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/studyabroad"}>STUDY ABROAD</NavLink>
            </button>
            <button className="text-gray-600 hover:text-[#fff] lg:m-2 md:m-1 lg:mx-4 md:mx-2">
              <NavLink to={"/eduwebonline"}>EDUWEB ONLINE</NavLink>
            </button>
          </div>
          {/* For Mobile Version */}
          <div className="w-full md:hidden flex justify-center items-center">
            <div className="w-[50%] flex justify-evenly items-start md:flex-row flex-col">
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/mba"}>MBA</NavLink>
              </button>
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/engineering"}>ENGINEERING</NavLink>
              </button>
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/medical"}>MEDICAL</NavLink>
              </button>
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/design"}>DESIGN</NavLink>
              </button>
            </div>
            <div className="w-[50%] flex  justify-around items-start md:flex-row flex-col">
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/more"}>MORE</NavLink>
              </button>
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/studyabroad"}>STUDY ABROAD</NavLink>
              </button>
              <button className="text-gray-600 hover:text-[#fff] m-1">
                <NavLink to={"/eduwebonline"}>EDUWEB ONLINE</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
