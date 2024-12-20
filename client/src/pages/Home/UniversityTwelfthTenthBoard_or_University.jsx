import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Advertisement_300px } from "../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../Advertisement/Advertisement_1024px";
import { UserConselling } from "../UserConselling";
import { Pre_Loader } from "./Pre_Loader";
import axios from "axios";

export const UniversityTwelfthTenthBoard_or_University = () => {
  const [datas, setDatas] = useState([]);
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [showHello, setShowHello] = useState("none");

  const location = useLocation();
  const { board_or_university_name, goto_url } = location.state;

  useEffect(() => {
    try {
      axios.get("/api/getting_question_papers").then((data) => {
        setDatas(data?.data);
      });
    } catch (error) {
      return null;
    }
  }, []);

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

  const showHelloFunc = () => {
    if (showHello === "none") {
      setShowHello("flex");
    }
  };

  const closeHelloFunc = () => {
    if (showHello === "flex") {
      setShowHello("none");
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-300 lg:mt-12 mt-[2.4rem]">
      <nav
        className="w-full h-auto lg:flex hidden py-1 px-5 text-gray-700 bg-[#fff]"
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
          <li>
            <Link
              to={`${goto_url}`}
              className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#000]"
            >
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
              <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500">
                University/12th/10th Previous Exams Question Papers
              </h1>
            </Link>
          </li>
          <li>
            <div className="flex items-center">
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
              <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500">
                {board_or_university_name}
              </h1>
            </div>
          </li>
        </ol>
      </nav>
      <div className="w-full h-auto sm:hidden flex z-1">
        <Advertisement_300px />
      </div>
      <div className="w-full h-auto md:hidden sm:flex hidden sm:z-1">
        <Advertisement_640px />
      </div>
      <div className="w-full h-auto lg:hidden md:flex hidden md:z-1">
        <Advertisement_768px />
      </div>
      <div className="w-full bg-white flex md:justify-between justify-center md:items-start items-center md:flex-row flex-col p-1 border border-gray-300">
        <div className="w-1/2 md:flex hidden justify-start items-center text-xl font-bold ml-4 my-auto">
          <h1 className="w-auto lg:text-lg md:text-base underline text-wrap">
            {board_or_university_name}
          </h1>
        </div>
        <div className="w-auto md:hidden flex justify-start items-center text-xl font-bold">
          <h1 className="w-auto text-center sm:text-base text-sm underline text-wrap">
            {board_or_university_name}
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-gray-300">
        <div className="w-full h-full flex justify-start items-center lg:flex-row flex-col">
          <div className="w-full flex justify-start items-start">
            <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
              {Array.isArray(datas) ? (
                datas.map((data) => {
                  if (
                    board_or_university_name.toUpperCase() ===
                    data.board_name.toUpperCase()
                  ) {
                    return (
                      <div
                        className="w-[100%] flex justify-between items-center flex-row md:text-base sm:text-sm text-xs p-1 bg-white"
                        key={data._id}
                      >
                        <h1 className="ml-2 text-gray-700 font-bold">
                          {data.name}
                        </h1>
                        <a
                          // href={data.question_paper}
                          className="bg-green-500 text-white py-1 px-2 cursor-pointer"
                          onClick={showHelloFunc}
                          download
                        >
                          Download
                        </a>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-gray-200">
                  <Pre_Loader />
                </div>
              )}
            </div>
            <div className="lg:w-[23%] hidden h-full lg:flex justify-center items-start lg:p-4 lg:pl-0">
              <div className="w-full h-auto lg:flex justify-center items-start flex-col">
                <div className="w-full h-auto flex justify-center items-center bg-white py-[1rem]">
                  <h2
                    className="w-[90%] lg:flex hidden justify-center items-center md:text-sm text-xs bg-blue-800 text-white hover:bg-green-600 lg:font-bold md:font-semibold font-medium lg:p-2 p-1 lg:my-2 my-1 sm:rounded-sm rounded cursor-pointer"
                    onClick={showUserConsellingFunc}
                  >
                    Career Conselling
                  </h2>
                </div>

                <div
                  className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 left-0 bg-[#000000ab] md:z-20"
                  style={{ display: showUserConselling }}
                >
                  <UserConselling
                    closeUserConsellingFunc={closeUserConsellingFunc}
                  />
                </div>
                <div className="w-full h-auto lg:flex hidden lg:z-10">
                  <Advertisement_1024px />
                </div>
              </div>
            </div>
          </div>

          {/* Message to the User to please Login/Register to download this pdf. */}
          <div
            className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 left-0 bg-[#000000ab] z-20"
            style={{ display: showHello }}
          >
            <div className="md:w-[12rem] w-[10rem] flex justify-center items-center flex-col bg-white lg:p-2 p-1 lg:rounded-md rounded">
              <div className="w-full flex justify-center items-center flex-col p-1 border border-gray-500 lg:rounded-md rounded">
                <div className="w-full flex justify-end items-center">
                  <button
                    className="w-auto text-xs transition ease-in-out delay-150 font-semibold text-gray-500 hover:text-black cursor-pointer"
                    onClick={closeHelloFunc}
                  >
                    X
                  </button>
                </div>
                <p className="md:text-base text-sm mb-4">
                  Please{" "}
                  <a
                    href="https://eduweb-online-website.onrender.com/api/register"
                    className="text-blue-800 cursor-pointer hover:text-blue-600"
                  >
                    Register
                  </a>
                  /
                  <a
                    href="https://eduweb-online-website.onrender.com/api/login"
                    className="text-blue-800 cursor-pointer hover:text-blue-600"
                  >
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
