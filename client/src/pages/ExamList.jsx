import { Link } from "react-router-dom";
import examsAPI from "../apis/examsAPI";
import { Advertisement_1024px } from "./Advertisement/Advertisement_1024px";
import { Advertisement_300px } from "./Advertisement/Advertisement_300px";
import { Advertisement_640px } from "./Advertisement/Advertisement_640px";
import { Advertisement_768px } from "./Advertisement/Advertisement_768px";

export const ExamList = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col p-3">
        {/* <!-- Breadcrumb --> */}
        <nav
          className="w-full hidden md:flex py-1 px-5 text-gray-700 border border-gray-200 bg-[#fff]"
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
                <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]">
                  Exam List
                </h1>
              </div>
            </li>
          </ol>
        </nav>
        <div className="w-full flex justify-center items-start flex-row">
          <div className="lg:w-[75%] w-full flex justify-center items-center flex-col">
            {/* Advertisement Photos */}
            <div className="w-full h-auto sm:hidden flex z-1">
              <Advertisement_300px />
            </div>
            <div className="w-full h-auto md:hidden sm:flex hidden sm:z-1">
              <Advertisement_640px />
            </div>
            <div className="w-full h-auto lg:hidden md:flex hidden md:z-1">
              <Advertisement_768px />
            </div>
            <div className="w-full flex justify-between items-center flex-row my-2">
              <h1 className="w-auto xl:text-xl lg:text-lg md:text-base text-sm text-black md:font-extrabold font-bold underline underline-offset-1">
                Full Exam List
              </h1>
              <button
                className="w-auto md:hidden text-xs font-medium bg-green-500 p-1 text-[#fff] hover:bg-green-600 sm:rounded-sm rounded"
                onClick={() => navigate("/")}
              >
                Go to Homepage
              </button>
            </div>
            {examsAPI.map((examAPI) => {
              return (
                <div
                  className="lg:w-[85%] md:w-[90%] sm:w-[95%] w-full flex justify-center items-center flex-col bg-gray-100 my-2 md:p-4 p-2 md:rounded-md rounded border border-gray-300"
                  key={examAPI.id}
                >
                  <h1 className="w-full lg:text-base md:text-sm text-xs md:font-bold font-semibold underline text-left md:m-2 m-1 md:ml-4 ml-1">
                    {examAPI.name}
                  </h1>
                  <p className="w-full text-justify lg:text-base md:text-sm text-xs text-gray-600 m-2">
                    {examAPI.description}
                  </p>
                  <Link
                    to={`/exams/${examAPI.name}`}
                    className="w-full text-right md:mr-4 mr-0"
                  >
                    <button
                      className="lg:text-base md:text-sm text-xs py-1 md:px-4 sm:px-3 px-2 bg-green-500 hover:bg-green-600 text-[#fff] rounded-md"
                      key={examAPI.id}
                    >
                      {examAPI.name}
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* </div> */}
          <div className="lg:w-[25%] hidden lg:flex justify-center items-start p-2">
            <div className="w-full h-auto lg:flex hidden lg:z-10">
              <Advertisement_1024px />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
