import React, { useState } from "react";
import { Link } from "react-router-dom";

export const FormatForNoData_for_ABOUT = ({
  nav_title,
  main_title,
  Advertisement_1024px,
  Advertisement_300px,
  Advertisement_640px,
  Advertisement_768px,
  UserConselling,
  Career_Conselling_And_University_Previous_Exam_Question_Papers,
}) => {
  const [showUserConselling, setShowUserConselling] = useState("none");

  const showUserConsellingFunc = () => {
    if (showUserConselling === "none") {
      setShowUserConselling("flex");
    }
  };

  const closeUserConsellingFunc = () => {
    if (showUserConselling === "flex") {
      setShowUserConselling("none");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-200 lg:mt-12 mt-[2.4rem]">
      <nav
        className="w-full lg:flex hidden py-1 px-5 text-gray-700 bg-[#fff]"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to={"/"}
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#000]"
            >
              <svg
                className="w-3 h-3 mr-2.5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li className="inline-flex items-center">
            <Link to={"/more"} className="inline-flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]">
                {nav_title}
              </h1>
            </Link>
          </li>
        </ol>
      </nav>
      <div className=" w-full sm:hidden flex">
        <Advertisement_300px />
      </div>
      <div className=" w-full md:hidden sm:flex hidden">
        <Advertisement_640px />
      </div>
      <div className=" w-full lg:hidden md:flex hidden">
        <Advertisement_768px />
      </div>

      <div className="w-full flex h-full lg:hidden justify-center items-center my-1 py-2 shadow-lg">
        <Career_Conselling_And_University_Previous_Exam_Question_Papers />
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col bg-transparent md:border md:border-gray-200">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-start items-start flex-col">
            <div className="w-full md:flex hidden justify-start items-center bg-white text-xl font-bold p-2">
              <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
                {main_title}
              </h1>
            </div>
            <div className="w-full md:hidden flex justify-center items-center bg-white text-xl font-bold p-1">
              <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
                {main_title}
              </h1>
            </div>
            <div className="w-full flex justify-center items-start flex-row">
              <div className="lg:w-[80%] w-full h-full flex justify-center items-start flex-col bg-transparent lg:mx-1">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
                    <h2 className="text-gray-500 italic">Sorry, no query!</h2>
                  </div>
                </div>
              </div>
              <div className="lg:w-[20%] h-full hidden lg:flex justify-center items-start sticky top-0 mt-1">
                <div className="w-full h-auto lg:flex justify-center items-start flex-col">
                  <div className="w-full h-auto bg-white lg:py-[1rem] py-0">
                    <Career_Conselling_And_University_Previous_Exam_Question_Papers
                      showUserConsellingFunc={showUserConsellingFunc}
                    />
                  </div>

                  <div
                    className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 left-0 bg-[#000000ab] md:z-20"
                    style={{ display: showUserConselling }}
                  >
                    <UserConselling
                      closeUserConsellingFunc={closeUserConsellingFunc}
                    />
                  </div>

                  <div className="w-full h-auto lg:flex hidden">
                    <Advertisement_1024px />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
