import { useNavigate, useParams, Link } from "react-router-dom";
import examsAPI from "../apis/examsAPI";
import { Advertisement_1024px } from "./Advertisement/Advertisement_1024px";
import { Advertisement_300px } from "./Advertisement/Advertisement_300px";
import { Advertisement_640px } from "./Advertisement/Advertisement_640px";
import { Advertisement_768px } from "./Advertisement/Advertisement_768px";

export const SingleExam = () => {
  const navigate = useNavigate();
  const { examName } = useParams();

  // Get the exam
  const SingleExam = examsAPI.find(
    (examAPI) => examAPI.name === String(examName)
  );

  const { name, mainContent } = SingleExam;

  return (
    <div className="w-full flex justify-center items-start flex-row p-3">
      <div className="w-[100%] flex justify-center items-center flex-col">
        {/* <!-- Breadcrumb --> */}
        <nav
          class="w-full hidden md:flex py-1 px-5 text-gray-700 border border-gray-200 bg-[#fff]"
          aria-label="Breadcrumb"
        >
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#000]"
              >
                <svg
                  class="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                <Link
                  to={"/"}
                  className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]"
                >
                  Home
                </Link>
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  to={"/examlist"}
                  className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]"
                >
                  Exam List
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]">
                  {name}
                </h1>
              </div>
            </li>
          </ol>
        </nav>
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-start flex-col">
            <div className="w-full h-auto sm:hidden flex z-1">
              <Advertisement_300px />
            </div>
            <div className="w-full h-auto md:hidden sm:flex hidden sm:z-1">
              <Advertisement_640px />
            </div>
            <div className="w-full h-auto lg:hidden md:flex hidden md:z-1">
              <Advertisement_768px />
            </div>
            <button
              className="w-full md:hidden text-xs font-medium bg-green-500 p-1 text-[#fff] hover:bg-green-600 sm:rounded-sm rounded my-2"
              onClick={() => navigate("/")}
            >
              Go to Homepage
            </button>
            <div className="w-full lg:h-[80vh] h-auto flex justify-center items-center flex-row md:mt-4">
              <div className="lg:w-[65%] w-full flex justify-start items-stretch flex-col mx-auto p-2 md:rounded-md sm:rounded-sm rounded border border-gray-400 lg:shadow-xl md:shadow-lg sm:shadow-md shadow">
                <div className="w-full flex justify-between items-center flex-col my-2">
                  <h1 className="w-full text-left xl:text-xl lg:text-lg md:text-base text-sm text-black md:font-extrabold font-bold px-2 underline underline-offset-1">
                    {name}
                  </h1>
                </div>
                <div className="w-full flex justify-center items-center">
                  <p className="w-full text-justify lg:text-base md:text-sm text-xs text-gray-600 mx-2">
                    {mainContent}
                  </p>
                </div>
                <div className="w-full hidden md:flex justify-end items-center md:mt-3">
                  <button
                    className="w-auto md:flex hidden bg-green-500 text-[#fff] hover:bg-green-600 md:rounded-md sm:rounded rounded-sm md:p-2 mx-1 lg:text-base md:text-sm text-xs md:text-semibold"
                    onClick={() => navigate("/")}
                  >
                    Back to Homepage
                  </button>
                </div>
              </div>
              <div className="lg:w-[25%] hidden lg:flex justify-center items-start p-2">
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
