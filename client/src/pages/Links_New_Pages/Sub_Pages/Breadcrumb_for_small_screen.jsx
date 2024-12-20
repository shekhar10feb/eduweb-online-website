import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Overview } from "./Overview";
import { Courses } from "./Courses";
import { Career } from "./Career";
import { Admission } from "./Admission";
import { Top_Ranked_Colleges } from "./Top_Ranked_Colleges";
import { Exams } from "./Exams";
import { Colleges_By_Location } from "./Colleges_By_Location";
import { College_Reviews } from "./College_Reviews";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Breadcrumb_for_small_screen = ({
  fieldname,
  filteredDatas,
  overview,
  popular_courses,
  career,
  admission,
  top_ranked_Colleges,
  exams,
  college_by_location,
  college_reviews,
  aboutOverview,
  aboutCourses,
  aboutCareer,
  aboutAdmission,
  aboutTop_Ranked_Colleges,
  aboutExams,
  aboutColleges_By_Location,
  aboutCollege_Reviews,
}) => {
  const [
    activeInBreadcrumbForSmallScreen,
    set_activeInBreadcrumbForSmallScreen,
  ] = useState("1");
  const [backgroundColorOfMenuBtn, setbackgroundColorOfMenuBtn] =
    useState("#1e40af");
  const [KeyboardArrowDownIcon1, setKeyboardArrowDownIcon1] = useState("flex");
  const [KeyboardArrowUpIcon1, setKeyboardArrowUPIcon1] = useState("none");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const takeId = (event) => {
    set_activeInBreadcrumbForSmallScreen(event.currentTarget.id);
  };

  const isMenuOpenFunc = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
      setbackgroundColorOfMenuBtn("#1e40af");
      setKeyboardArrowDownIcon1("flex");
      setKeyboardArrowUPIcon1("none");
    } else {
      setIsMenuOpen(true);
      setbackgroundColorOfMenuBtn("#22c55e");
      setKeyboardArrowDownIcon1("none");
      setKeyboardArrowUPIcon1("flex");
    }
  };
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-center items-center flex-col px-1">
        <div
          className="w-full flex justify-center items-center flex-row bg-blue-800 hover:bg-[#22c55e] md:p-[0.2rem] p-[0.1rem] my-1 sm:rounded-sm rounded cursor-pointer select-none"
          onClick={() => isMenuOpenFunc()}
          style={{ backgroundColor: backgroundColorOfMenuBtn }}
        >
          <h2 className="w-auto text-center md::text-base sm:text-sm text-xs text-white">
            Menu
          </h2>
          <span style={{ display: KeyboardArrowDownIcon1 }}>
            <KeyboardArrowDownIcon sx={{ color: "white" }} />
          </span>
          <span style={{ display: KeyboardArrowUpIcon1 }}>
            <KeyboardArrowUpIcon sx={{ color: "white" }} />
          </span>
        </div>
        <ul id="breadCrumbInSmallScreen" className={isMenuOpen ? "open" : ""}>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1 sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "1"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="1"
              onClick={takeId}
            >
              {overview}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "2"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="2"
              onClick={takeId}
            >
              {popular_courses}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "3"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="3"
              onClick={takeId}
            >
              {career}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "4"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="4"
              onClick={takeId}
            >
              {admission}
            </Link>
          </li>

          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "5"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="5"
              onClick={takeId}
            >
              {top_ranked_Colleges}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "6"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="6"
              onClick={takeId}
            >
              {exams}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "7"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="7"
              onClick={takeId}
            >
              {college_by_location}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.8rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                activeInBreadcrumbForSmallScreen === "8"
                  ? "activeInBreadcrumbForSmallScreen"
                  : "inactiveInBreadcrumbForSmallScreen"
              }
              id="8"
              onClick={takeId}
            >
              {college_reviews}
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full lg:hidden flex justify-center items-center flex-col">
        <ul className="Li_PagesInBreadCrumbForSmallScreenInLinkPages">
          <li
            className={
              activeInBreadcrumbForSmallScreen === "1"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="OverviewForSmallScreenInBreadcrumb_ul1"
          >
            <Overview
              aboutOverview={aboutOverview}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "2"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="CoursesForSmallScreenInBreadcrumb_ul2"
          >
            <Courses
              aboutCourses={aboutCourses}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "3"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="CareerForSmallScreenInBreadcrumb_ul3"
          >
            <Career
              aboutCareer={aboutCareer}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "4"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="AdmissionForSmallScreenInBreadcrumb_ul4"
          >
            <Admission
              aboutAdmission={aboutAdmission}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "5"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="Top_Ranked_CollegesForSmallScreenInBreadcrumb_ul5"
          >
            <Top_Ranked_Colleges
              aboutTop_Ranked_Colleges={aboutTop_Ranked_Colleges}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "6"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="ExamsForSmallScreenInBreadcrumb_ul6"
          >
            <Exams
              aboutExams={aboutExams}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "7"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="Colleges_By_LocationForSmallScreenInBreadcrumb_ul7"
          >
            <Colleges_By_Location
              aboutColleges_By_Location={aboutColleges_By_Location}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForSmallScreen === "8"
                ? "detailsInBreadcrumbForSmallScreen"
                : "closeInBreadcrumbForSmallScreen"
            }
            id="College_ReviewsForSmallScreenInBreadcrumb_ul8"
          >
            <College_Reviews
              aboutCollege_Reviews={aboutCollege_Reviews}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
