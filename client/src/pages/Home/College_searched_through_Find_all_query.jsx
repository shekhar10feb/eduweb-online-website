import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Advertisement_300px } from "../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../Advertisement/Advertisement_1024px";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { UserConselling } from "../UserConselling";
import { Pre_Loader } from "./Pre_Loader";
import { College_searched_through_Find_all_query_for_single_query } from "./College_searched_through_Find_all_query_for_single_query.jsx";

export const College_searched_through_Find_all_query = () => {
  const [mouse_enter_for_courses_offered, setMouse_enter_for_courses_offered] = useState("none");
  const [mouse_enter_for_entrance_exams, setMouse_enter_for_entrance_exams] = useState("none");
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [isLoading, setIsLoading] = useState(true);
  const [filteredDatas, setFilteredDatas] = useState([]);

  const location = useLocation();

  const {
    text_from_All_Colleges,
    searching_from_All_Colleges,
    goto_url,
    directly_from_All_Colleges,
    data,
  } = location.state;

  useEffect(() => {
    setIsLoading(true);
    try {
      setFilteredDatas(data);
    } catch (error) {
      return null;
    }
    setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }

  const mouse_enter_for_courses_offered_func = () => {
    if (mouse_enter_for_courses_offered === "none") {
      setMouse_enter_for_courses_offered("flex");
    }
  };

  const mouse_leave_for_courses_offered_func = () => {
    if (mouse_enter_for_courses_offered === "flex") {
      setMouse_enter_for_courses_offered("none");
    }
  };

  const mouse_enter_for_entrance_exams_func = () => {
    if (mouse_enter_for_entrance_exams === "none") {
      setMouse_enter_for_entrance_exams("flex");
    }
  };

  const mouse_leave_for_entrance_exams_func = () => {
    if (mouse_enter_for_entrance_exams === "flex") {
      setMouse_enter_for_entrance_exams("none");
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
    <div className="w-full flex justify-center items-center flex-col bg-gray-300 lg:mt-12 mt-[2.4rem]">
      {directly_from_All_Colleges ? (
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
              <Link
                to={`/All_Colleges`}
                state={"COLLEGE"}
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
                All Colleges
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
                  {filteredDatas.name.toUpperCase()}
                </h1>
              </div>
            </li>
          </ol>
        </nav>
      ) : (
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
              <Link
                to={`/All_Colleges`}
                state={"COLLEGE"}
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
                All Colleges
              </Link>
            </li>

            <li className="inline-flex items-center">
              <div className="w-auto flex justify-center items-center">
                <Link
                  to={goto_url}
                  state={searching_from_All_Colleges}
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
                  {text_from_All_Colleges}
                </Link>
              </div>
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
                  {filteredDatas.name.toUpperCase()}
                </h1>
              </div>
            </li>
          </ol>
        </nav>
      )}

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
                College: {filteredDatas.name.toUpperCase()}
              </h1>
            </div>
            <div className="w-full md:hidden flex justify-center items-center bg-white text-xl font-bold p-1">
              <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
                College: {filteredDatas.name.toUpperCase()}
              </h1>
            </div>
            <div className="w-full flex justify-center items-start flex-row">
              <div className="lg:w-[80%] w-full h-full flex justify-center items-start flex-col bg-transparent lg:mx-1">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <ul className="w-full h-full flex justify-center items-center flex-col">
                    {filteredDatas ? (
                      <div
                        className="w-full h-full flex justify-center items-start flex-col bg-white my-1 shadow-lg"
                        key={filteredDatas._id}
                      >
                        <College_searched_through_Find_all_query_for_single_query
                          filteredData={filteredDatas}
                          Pre_Loader={Pre_Loader}
                          mouse_enter_for_courses_offered={
                            mouse_enter_for_courses_offered
                          }
                          mouse_enter_for_entrance_exams={
                            mouse_enter_for_entrance_exams
                          }
                          mouse_enter_for_courses_offered_func={
                            mouse_enter_for_courses_offered_func
                          }
                          mouse_leave_for_courses_offered_func={
                            mouse_leave_for_courses_offered_func
                          }
                          mouse_enter_for_entrance_exams_func={
                            mouse_enter_for_entrance_exams_func
                          }
                          mouse_leave_for_entrance_exams_func={
                            mouse_leave_for_entrance_exams_func
                          }
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center items-center flex-col">
                        <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
                          <h2 className="text-gray-500 italic">
                            Sorry, no query again!
                          </h2>
                        </div>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
              <div className="lg:w-[20%] h-full hidden lg:flex justify-center items-start mt-1">
                <div className="w-full h-auto lg:flex justify-center items-start flex-col">
                  <div className="w-full h-auto bg-white lg:py-[1rem] py-0">
                    <Career_Conselling_And_University_Previous_Exam_Question_Papers
                      showUserConsellingFunc={showUserConsellingFunc}
                    />
                  </div>

                  <div
                    className="lg:w-full h-[100vh] justify-center items-center flex-col absolute top-0 left-0 bg-[#000000ab] lg:mt-[2.9rem] md:z-20"
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
