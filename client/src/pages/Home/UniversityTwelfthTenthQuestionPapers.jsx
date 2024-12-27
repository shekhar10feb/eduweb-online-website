import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Advertisement_300px } from "../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../Advertisement/Advertisement_1024px";
import { UserConselling } from "../UserConselling";
import { Pre_Loader } from "./Pre_Loader";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";

export const UniversityTwelfthTenthQuestionPapers = () => {
  const [datas, setDatas] = useState([]);
  const [state, setState] = useState("");
  const [search_state, setSearch_state] = useState("");
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [displayErrMsg, setDisplayErrMsg] = useState("hidden");
  const getting_yes_or_no_in_arr = [];

  useEffect(() => {
    try {
      axios.get("/api/getting_question_papers").then((data) => {
        setDatas(data?.data);
      });
    } catch (error) {
      return null;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uppercase_state = state.toUpperCase();
    if (
      uppercase_state !== "" &&
      uppercase_state !== undefined &&
      uppercase_state !== null
    ) {
      {
        Array.isArray(datas)
          ? datas.map((data) => {
              if (uppercase_state === data.states_or_uts.toUpperCase()) {
                setSearch_state(uppercase_state);
                getting_yes_or_no_in_arr.push("yes");
              } else {
                getting_yes_or_no_in_arr.push("no");
              }
            })
          : "";
      }
    }

    if (getting_yes_or_no_in_arr.includes("yes")) {
      setDisplayErrMsg("hidden");
    } else if (getting_yes_or_no_in_arr.includes("no")) {
      setDisplayErrMsg("visible");
      setTimeout(() => {
        setDisplayErrMsg("hidden");
      }, 2000);
    }
  };

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
                University/12th/10th Previous Exams Question Papers
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

      <div className="w-full flex md:justify-between justify-center md:items-start items-center md:flex-row flex-col bg-white p-1 border border-gray-300">
        <div className="w-1/2 md:flex hidden justify-start items-center text-xl font-bold ml-4 my-auto">
          <h1 className="w-auto lg:text-lg md:text-base underline text-wrap">
            Search your University/Board in your State/UT
          </h1>
        </div>
        {/*  */}
        <div className="w-auto md:hidden flex justify-start items-center text-xl font-bold">
          <h1 className="w-auto text-center sm:text-base text-sm underline text-wrap">
            Search your University/Board in your State/UT
          </h1>
        </div>
        <div className="w-auto h-full flex justify-start items-start flex-col md:p-2 p-1">
          <form
            className="w-full flex justify-center items-center flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="state"
              className="bg-gray-100 md:p-1 md:ml-2 sm:p-[0.2rem] p-[0.1rem] sm:text-sm text-xs focus:outline-none border border-gray-500 rounded"
              id="state"
              value={state}
              placeholder="Search your State/UT"
              onChange={(e) => {
                setState(e.currentTarget.value);
              }}
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-blue-800 text-white md:p-1 sm:p-[0.1rem] p-[0.07rem] sm:text-sm text-xs px-1 ml-1 rounded"
            >
              Search
            </button>
          </form>
          <p
            className="w-full flex justify-start items-center flex-row md:text-xs sm:text-[0.7rem] text-[0.6rem] text-red-500"
            style={{ visibility: displayErrMsg }}
          >
            Please enter valid input.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-gray-300">
        <div className="w-full h-full flex justify-start items-center lg:flex-row flex-col">
          <div className="w-full flex justify-start items-start">
            <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
              {search_state !== "" ? (
                Array.isArray(datas) ? (
                  datas.map((data) => {
                    if (search_state === data.states_or_uts.toUpperCase()) {
                      return (
                        <div
                          className="w-full flex justify-center items-center flex-col bg-white mb-2 lg:text-base md:text-sm text-xs p-1 text-gray-800 md:font-bold font-semibold hover:bg-blue-800 hover:text-white"
                          key={data._id}
                        >
                          <Link
                            to={`/University_Twelfth_Tenth_Question_Papers/${data.board_name}`}
                            state={{
                              board_or_university_name: `${data.board_name}`,
                              goto_url:
                                "/University_Twelfth_Tenth_Question_Papers",
                            }}
                            className="w-full flex justify-start items-center text-start md:p-2 p-[0.1rem] border border-gray-400"
                          >
                            <KeyboardArrowRightIcon fontSize="small" />
                            {data.board_name}
                          </Link>
                        </div>
                      );
                    }
                  })
                ) : (
                  <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-gray-200">
                    <Pre_Loader />
                  </div>
                )
              ) : (
                <p className="md:text-base text-xs text-gray-600">
                  Search your query!
                </p>
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
        </div>
      </div>
    </div>
  );
};
