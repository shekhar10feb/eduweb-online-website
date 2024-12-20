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

export const Breadcrumb_for_big_screen = ({
  filteredDatas,
  fieldname,
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
  const [activeInBreadcrumbForBigScreen, setActiveInBreadcrumbForBigScreen] =
    useState("1");

  const takeId = (event) => {
    setActiveInBreadcrumbForBigScreen(event.currentTarget.id);
  };
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <ul className="w-full flex justify-between items-center flex-row text-base lg:border-t-2 lg:border-b-2 lg:border-gray-200 bg-yellow-100">
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "1"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="1"
            onClick={takeId}
          >
            {overview}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "2"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="2"
            onClick={takeId}
          >
            {popular_courses}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "3"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="3"
            onClick={takeId}
          >
            {career}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "4"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="4"
            onClick={takeId}
          >
            {admission}
          </Link>
        </li>

        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "5"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="5"
            onClick={takeId}
          >
            {top_ranked_Colleges}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "6"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="6"
            onClick={takeId}
          >
            {exams}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "7"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="7"
            onClick={takeId}
          >
            {college_by_location}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              activeInBreadcrumbForBigScreen === "8"
                ? "activeInBreadcrumbForBigScreen"
                : "inactiveInBreadcrumbForBigScreen"
            }
            id="8"
            onClick={takeId}
          >
            {college_reviews}
          </Link>
        </li>
      </ul>
      <div className="w-full">
        <ul className="Li_PagesInBreadCrumbForBigScreenInLinkPages">
          <li
            className={
              activeInBreadcrumbForBigScreen === "1"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="OverviewForBigScreenInBreadcrumb_ul1"
          >
            <Overview
              aboutOverview={aboutOverview}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "2"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="CoursesForBigScreenInBreadcrumb_ul2"
          >
            <Courses
              aboutCourses={aboutCourses}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "3"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="CareerForBigScreenInBreadcrumb_ul3"
          >
            <Career aboutCareer={aboutCareer} filteredDatas={filteredDatas} fieldname={fieldname} />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "4"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="AdmissionForBigScreenInBreadcrumb_ul4"
          >
            <Admission
              aboutAdmission={aboutAdmission}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "5"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="Top_Ranked_CollegesForBigScreenInBreadcrumb_ul5"
          >
            <Top_Ranked_Colleges
              aboutTop_Ranked_Colleges={aboutTop_Ranked_Colleges}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "6"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="ExamsForBigScreenInBreadcrumb_ul6"
          >
            <Exams aboutExams={aboutExams} filteredDatas={filteredDatas} fieldname={fieldname} />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "7"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="Colleges_By_LocationForBigScreenInBreadcrumb_ul7"
          >
            <Colleges_By_Location
              aboutColleges_By_Location={aboutColleges_By_Location}
              filteredDatas={filteredDatas} 
              fieldname={fieldname}
            />
          </li>
          <li
            className={
              activeInBreadcrumbForBigScreen === "8"
                ? "detailsInBreadcrumbForBigScreen"
                : "closeInBreadcrumbForBigScreen"
            }
            id="College_ReviewsForBigScreenInBreadcrumb_ul8"
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
