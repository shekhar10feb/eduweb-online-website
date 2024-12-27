import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb_for_big_screen } from "./Breadcrumb_for_big_screen";
import { Breadcrumb_for_small_screen } from "./Breadcrumb_for_small_screen";
import { Advertisement_1024px } from "../../Advertisement/Advertisement_1024px";
import { Advertisement_300px } from "../../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../../Advertisement/Advertisement_768px";
import { UserConselling } from "../../UserConselling";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../../Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { Pre_Loader } from "../../Home/Pre_Loader";
import { FormatForNoData_Sub_Pages_for_Study_Abroad_Links_New_Pages } from "./FormatForNoData_Sub_Pages_for_Study_Abroad_Links_New_Pages";
import axios from "axios";

export const Breadcrumb = ({
  fieldname,
  coursenameFor_big_screen,
  coursenameFor_small_screen,
  overview,
  colleges,
  countries,
  application_process,
  scholarships,
  aboutFieldname,
  aboutOverview,
  aboutCountries,
  aboutColleges,
  aboutApplicationProcess,
  aboutScholarships,
}) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [filteredDatas, setFilteredDatas] = useState([]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      axios.get("/api/updatedBlogs").then((data) => {
        setDatas(data?.data);
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

  useEffect(() => {
    const filteredData = datas.filter(
      (item) =>
        item.writtenBlogsByAuthor.filter(
          (field) => field.blogCategory === "About Study Abroad"
        ).length !== 0
    );

    setFilteredDatas(filteredData);
  }, [datas]);

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
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-200 lg:mt-12 mt-[2.4rem] md:z-10">
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
            <Link to={"/studyabroad"} className="inline-flex items-center">
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
                Study Abroad
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
                {fieldname} Information
              </h1>
            </div>
            <div className="w-full md:hidden flex justify-center items-center bg-white text-xl font-bold p-1">
              <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
                {fieldname} Information
              </h1>
            </div>
            <div className="w-full flex justify-center items-start flex-row">
              <div className="lg:w-[80%] w-full h-full flex justify-center items-start flex-col bg-transparent pt-[0.1rem] border-r-2 border-gray-200">
                <div className="w-full h-full flex justify-center items-center flex-col">
                  <div className="w-full h-full lg:flex hidden justify-center items-center flex-col">
                    {/* For Big Screen  */}
                    <Breadcrumb_for_big_screen
                      filteredDatas={filteredDatas}
                      overview={overview}
                      colleges={colleges}
                      countries={countries}
                      application_process={application_process}
                      scholarships={scholarships}
                      aboutFieldname={aboutFieldname}
                      aboutOverview={aboutOverview}
                      aboutCountries={aboutCountries}
                      aboutColleges={aboutColleges}
                      aboutApplicationProcess={aboutApplicationProcess}
                      aboutScholarships={aboutScholarships}
                    />
                  </div>

                  {/* For Small Screen */}
                  <div className="w-full lg:hidden flex justify-center items-center flex-col">
                    <Breadcrumb_for_small_screen
                      filteredDatas={filteredDatas}
                      overview={overview}
                      colleges={colleges}
                      countries={countries}
                      application_process={application_process}
                      scholarships={scholarships}
                      aboutFieldname={aboutFieldname}
                      aboutOverview={aboutOverview}
                      aboutCountries={aboutCountries}
                      aboutColleges={aboutColleges}
                      aboutApplicationProcess={aboutApplicationProcess}
                      aboutScholarships={aboutScholarships}
                    />
                  </div>
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
