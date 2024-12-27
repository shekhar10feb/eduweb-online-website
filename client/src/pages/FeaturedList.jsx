import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Advertisement_300px } from "./Advertisement/Advertisement_300px";
import { Advertisement_640px } from "./Advertisement/Advertisement_640px";
import { Advertisement_768px } from "./Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "./Advertisement/Advertisement_1024px";
import { UserConselling } from "./UserConselling";

import { FeaturedListRecords } from "./FeaturedListRecords";
import FeaturedListPagination from "./FeaturedListPagination";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "./Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { Pre_Loader } from "./Home/Pre_Loader";

export const FeaturedList = () => {
  // To hold the actual data
  const [datas, setDatas] = useState("");
  const [showUserConselling, setShowUserConselling] = useState("none");

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = datas.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(datas.length / recordsPerPage);

  useEffect(() => {
    fetch("/api/getting_List_of_Colleges")
      .then((res) => res.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }, []);

  // Continue Reading or Less Reading functionality
  const continueReadingDiv = document.querySelectorAll(".continueReadingDiv");
  const lessReadingDiv = document.querySelectorAll(".lessReadingDiv");
  const continueReadingBtn = document.querySelectorAll(".continueReadingBtn");
  const lessReadingBtn = document.querySelectorAll(".lessReadingBtn");

  for (let i = 0; i < continueReadingDiv.length; i++) {
    continueReadingBtn[i].addEventListener("click", () => {
      continueReadingDiv[i].style.display = "none";
      lessReadingDiv[i].style.display = "flex";
    });
  }

  for (let j = 0; j < lessReadingDiv.length; j++) {
    lessReadingBtn[j].addEventListener("click", () => {
      lessReadingDiv[j].style.display = "none";
      continueReadingDiv[j].style.display = "flex";
    });
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
    <div className="w-full flex justify-center items-start flex-row lg:mt-12 sm:mt-[1.8rem] mt-7">
      <div className="w-full flex justify-center items-center flex-col">
        {/* <!-- Breadcrumb --> */}
        <nav
          className="w-full hidden lg:flex py-1 px-5 text-gray-700 border border-gray-200 bg-[#fff]"
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
                <p className="ml-1 text-sm font-medium md:ml-2 text-gray-500 hover:text-[#000]">
                  Featured List
                </p>
              </div>
            </li>
          </ol>
        </nav>

        <div className="w-full flex justify-center items-start flex-row bg-[#e5e7eb]">
          <div className="w-full flex justify-center items-center flex-col">
            {/* Advertisement for 300px, 640px, 768px */}
            <div className=" w-full sm:hidden flex">
              <Advertisement_300px />
            </div>
            <div className=" w-full md:hidden sm:flex hidden">
              <Advertisement_640px />
            </div>
            <div className=" w-full lg:hidden md:flex hidden">
              <Advertisement_768px />
            </div>

            <div className="w-full lg:hidden flex justify-center items-center flex-col py-1 bg-white mb-1">
              <Career_Conselling_And_University_Previous_Exam_Question_Papers />
            </div>

            <div className="w-full bg-white md:border md:border-gray-200">
              <div className="w-full md:flex hidden justify-start items-center text-xl font-bold m-4">
                <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
                  Featured List of Colleges
                </h1>
              </div>
              <div className="w-full md:hidden flex justify-start items-center text-xl md:font-bold font-semibold py-1 mb-1 px-2 my-2">
                <h1 className="inline-block sm:text-base text-sm underline text-wrap">
                  Featured List of Colleges
                </h1>
              </div>
            </div>

            <div className="w-full h-auto flex justify-between items-start flex-row bg-[#e5e7eb] lg:px-3">
              <div className="lg:w-[75%] w-full flex justify-center items-center flex-col bg-transparent lg:py-4 py-1">
                <div className="w-full flex justify-center items-center flex-col bg-white lg:p-4">
                  <div className="w-full flex justify-center flex-row">
                    {datas ? (
                      <div className="w-full flex justify-center flex-col">
                        <div className="w-full">
                          <FeaturedListRecords datas={currentRecords} />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <FeaturedListPagination
                            nPages={nPages}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-[#00000042]">
                        <Pre_Loader />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Advertisement for 1024px */}
              <div className="lg:w-[23%] hidden h-full lg:flex justify-center items-start lg:py-4">
                <div className="w-full h-auto lg:flex justify-center items-start flex-col">
                  <div className="w-full h-auto bg-white py-[1rem]">
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
