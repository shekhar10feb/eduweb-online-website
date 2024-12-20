import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Advertisement_300px } from "../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../Advertisement/Advertisement_1024px";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { UserConselling } from "../UserConselling";
import { CollegeFormat_for_List_of_Colleges_in_Engg_Management_Medical_Design_Law_Pharamacy } from "./CollegeFormat_for_List_of_Colleges_in_Engg_Management_Medical_Design_Law_Pharamacy";
import { Pre_Loader } from "./Pre_Loader";
import axios from "axios";

export const Medical_colleges_in_Home_Folder = () => {
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { state } = useLocation();
  const uppercase_state = state.trim().toUpperCase();

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      axios.get("/api/getting_List_of_Colleges").then((data) => {
        const approvedBlogs = data?.data.sort((a, b) =>
          +a.medical_rank > +b.medical_rank ? 1 : -1
        );
        setDatas(approvedBlogs);
      });
    } catch (error) {
      return null;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchBlogs();
    } catch (error) {
      return null;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }

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
              to={"/All_Colleges"}
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
                Medical Colleges
              </h1>
            </div>
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

      <div className="w-full flex h-full lg:hidden justify-center items-center my-1 py-2 bg-white shadow-lg">
        <Career_Conselling_And_University_Previous_Exam_Question_Papers />
      </div>

      <div className="w-full bg-white md:border md:border-gray-200">
        <div className="w-full md:flex hidden justify-start items-center text-xl font-bold m-4">
          <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
            College searching in Medical field
          </h1>
        </div>
        <div className="w-full md:hidden flex justify-center items-center text-xl font-bold sm:mx-2 mx-1 sm:my-4 my-2">
          <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
            College searching in Medical field
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full h-full flex justify-start items-start lg:flex-row flex-col bg-gray-300">
          <div className="w-full flex justify-center items-start flex-row">
            <div className="lg:w-[80%] w-full h-full flex justify-center items-start flex-col bg-transparent lg:mx-1 border-r-2 border-gray-200">
              <div className="w-full h-full flex justify-center items-center flex-col">
                {datas.length > 0 ? (
                  <ul className="w-full h-full flex justify-center items-center flex-col">
                    {datas.map((item) => {
                      if (item.medical_rank) {
                        const link = `/All_Colleges/Medical_colleges/${item.name}`;
                        const text_from_All_Colleges = "Medical Colleges";
                        const goto_url = "/All_Colleges/Medical_colleges";
                        return (
                          <div
                            className="w-full h-full flex justify-center items-start flex-col bg-white sm:p-2 p-1 my-1 shadow-lg"
                            key={item._id}
                          >
                            <CollegeFormat_for_List_of_Colleges_in_Engg_Management_Medical_Design_Law_Pharamacy
                              data={item}
                              link={link}
                              text_from_All_Colleges={text_from_All_Colleges}
                              goto_url={goto_url}
                              uppercase_state={uppercase_state}
                              rank={item.medical_rank}
                              fees={item.medical_rank}
                              course="Medical"
                              field="Medical"
                            />
                          </div>
                        );
                      }
                    })}
                  </ul>
                ) : (
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
                      <h2 className="text-gray-500 italic">Sorry, no query!</h2>
                    </div>
                  </div>
                )}
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
  );
};
