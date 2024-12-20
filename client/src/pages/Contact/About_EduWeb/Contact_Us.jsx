import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo1 from "../AssetsForContact/24hoursIconForContactUsPage.png";
import photo2 from "../AssetsForContact/correctIcon.png";
import photo3 from "../AssetsForContact/expert-guidance.png";
import { Pre_Loader } from "../../Home/Pre_Loader.jsx";
import { UserConselling } from "../../UserConselling.jsx";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../../Career_Conselling_And_University_Previous_Exam_Question_Papers.jsx";
import { Advertisement_1024px } from "../../Advertisement/Advertisement_1024px.jsx";
import { Advertisement_300px } from "../../Advertisement/Advertisement_300px.jsx";
import { Advertisement_640px } from "../../Advertisement/Advertisement_640px.jsx";
import { Advertisement_768px } from "../../Advertisement/Advertisement_768px.jsx";
import { FormatForNoData } from "./FormatForNoData.jsx";
import axios from "axios";

export const Contact_Us = () => {
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
    // <div className="w-full h-full flex justify-center items-center">
    //   <div className="md:w-9/12 w-full flex justify-center items-start flex-col lg:border lg:border-gray-200">
    //     Breadcrumb
    //     <nav
    //       className="w-full hidden md:flex py-1 px-5 text-gray-700 border border-gray-200 bg-[#fff]"
    //       aria-label="Breadcrumb"
    //     >
    //       <ol className="inline-flex items-center space-x-1 md:space-x-3">
    //         <li className="inline-flex items-center">
    //           <Link
    //             to={"/"}
    //             className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#000]"
    //           >
    //             <svg
    //               className="w-3 h-3 mr-2.5"
    //               aria-hidden="true"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //             >
    //               <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    //             </svg>
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <div className="flex items-center">
    //             <svg
    //               className="w-3 h-3 mx-1 text-gray-400"
    //               aria-hidden="true"
    //               fill="none"
    //               viewBox="0 0 6 10"
    //             >
    //               <path
    //                 stroke="currentColor"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="m1 9 4-4-4-4"
    //               />
    //             </svg>
    //             <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]">
    //               Contact Us
    //             </h1>
    //           </div>
    //         </li>
    //       </ol>
    //     </nav>
    //     <div className="md:my-5 sm:my-3 my-2 pl-1">
    //       <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-bold md:mt-2 mt-1">
    //         Contact Us
    //       </h1>
    //     </div>
    //     <div className="w-full flex justify-center items-center flex-col p-1 bg-gray-200">
    //       <h1 className="lg:text-lg md:text-base md:mt-2 mt-1 font-medium sm:my-2 my-1">
    //         Get our experts to answer your questions within24 Hrs.
    //       </h1>

    //       For Larger Screens
    //       <div className="w-full md:flex hidden lg:justify-evenly md:justify-center items-center flex-row my-4">
    //         <div className="w-1/3 flex justify-center items-center flex-row text-gray-700 italic">
    //           <img
    //             src={photo1}
    //             className="w-[9%]"
    //             alt="Answers within 24 hours in EduWeb | Discover Colleges, Courses and Exams for higher education in India"
    //           />
    //           <p className="lg:text-lg md:text-[0.8rem] font-medium mx-2">Answers within 24 Hrs.</p>
    //         </div>
    //         <div className="w-1/3 flex justify-center items-center flex-row text-gray-700 italic">
    //           <img
    //             src={photo2}
    //             className="w-[9%]"
    //             alt="You will get reliable answers in EduWeb | Discover Colleges, Courses and Exams for higher education in India"
    //           />
    //           <p className="lg:text-lg md:text-[0.8rem] font-medium mx-2">Reliable Answers</p>
    //         </div>
    //         <div className="w-1/3 flex justify-center items-center flex-row text-gray-700 italic">
    //           <img
    //             src={photo3}
    //             className="w-[9%]"
    //             alt="Experts in EduWeb | Discover Colleges, Courses and Exams for higher education in India"
    //           />
    //           <p className="lg:text-lg md:text-[0.8rem] font-medium mx-2">Experts</p>
    //         </div>
    //       </div>

    //       For Smaller Screens
    //       <div className="w-full md:hidden flex justify-evenly items-center flex-row my-2">
    //         <div className="w-1/3 flex justify-center items-center flex-row bg-green-500 text-white mx-2 sm:p-1 italic border-none">
    //           <p className="text-[0.8rem] text-center font-medium">
    //             Answers quickly
    //           </p>
    //         </div>
    //         <div className="w-1/3 flex justify-center items-center flex-row bg-green-500 text-white mx-2 sm:p-1 italic border-none">
    //           <p className="text-[0.8rem] text-center font-medium">
    //             Reliable Answers
    //           </p>
    //         </div>
    //         <div className="w-1/3 flex justify-center items-center flex-row bg-green-500 text-white mx-2 sm:p-1 italic border-none">
    //           <p className="text-[0.8rem] text-center font-medium">
    //             Expert Guidance
    //           </p>
    //         </div>
    //       </div>
    //       <div className="w-full flex justify-center items-center flex-col">
    //         For Larger Screens
    //         <textarea
    //           name="textAreaForContactUs"
    //           id=""
    //           cols="70"
    //           rows="3"
    //           placeholder="Type you questions..."
    //           className="w-[80%] md:flex hidden placeholder:text-sm p-2"
    //         ></textarea>

    //         For Smaller Screens
    //         <textarea
    //           name="textAreaForContactUs"
    //           id=""
    //           cols="70"
    //           rows="2"
    //           placeholder="Type you questions..."
    //           className="sm:w-[80%] w-full md:hidden flex p-1 sm:placeholder:text-sm placeholder:text-xs mt-3"
    //         ></textarea>
    //         <button className="lg:text-base text-sm text-xs bg-blue-700 hover:bg-blue-800 text-white md:font-medium font-normal md:p-2 p-1 md:my-4 my-2">
    //           Ask Question
    //         </button>
    //       </div>
    //     </div>
    //     <div className="w-full p-4 my-2">
    //       <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
    //         Have an opinion or an experience to share with students? - Get
    //         published on EduWeb and join a vibrant community of thought
    //         ‘provokers’!
    //       </p>
    //       <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
    //         Visit this page for details on how to submit your article: <a href="http://" className="text-blue-700">Write for
    //         EduWeb</a>
    //       </p>
    //       <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
    //         Get your College / Institute / Business listed on EduWeb
    //       </p>
    //       <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
    //         Send email to us: <a href="http://" className="text-blue-700">sales@eduweb.com</a>
    //       </p>
    //       <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
    //         Timing: Mon-Fri, 9:30 AM - 6:30 PM (IST)
    //       </p>
    //     </div>
    //   </div>
    // </div>

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
                Contact Us
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

      <div className="w-full flex h-full lg:hidden justify-center items-center my-1 py-2 shadow-lg">
        <Career_Conselling_And_University_Previous_Exam_Question_Papers />
      </div>

      <div className="w-full h-full flex justify-center items-center flex-col bg-transparent md:border md:border-gray-200">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-start items-start flex-col">
            <div className="w-full md:flex hidden justify-start items-center bg-white text-xl font-bold p-2">
              <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
                Contact
              </h1>
            </div>
            <div className="w-full md:hidden flex justify-center items-center bg-white text-xl font-bold p-1">
              <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
                Contact
              </h1>
            </div>
            <div className="w-full flex justify-center items-center flex-row">
              <div className="lg:w-[80%] w-full h-full flex justify-center items-center flex-col lg:mx-1 border-r-2 border-gray-200">
                <div className="w-full flex justify-center items-center flex-col p-2">
                  <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
                    Get your College / Institute / Business listed on EduWeb
                  </p>
                  <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
                    Send email to us:{" "}
                    <a href="http://" className="text-blue-700">
                      sales@eduweb.com
                    </a>
                  </p>
                  <p className="lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] font-medium text-gray-700 md:mt-2 mt-1">
                    Timing: Mon-Fri, 9:30 AM - 6:30 PM (IST)
                  </p>
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
