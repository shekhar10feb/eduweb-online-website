import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Application_Process_For_Study_Abroad } from "./Application_Process_For_Study_Abroad";
import { Colleges_For_Study_Abroad } from "./Colleges_For_Study_Abroad";
import { Countries_For_Study_Abroad } from "./Countries_For_Study_Abroad";
import { Overview_For_Study_Abroad } from "./Overview_For_Study_Abroad";
import { Scholarships_For_Study_Abroad } from "./Scholarships_For_Study_Abroad";

export const Breadcrumb_for_big_screen = ({
  filteredDatas,
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
  const [
    active_Breadcrumb_For_Big_Screen_For_Study_Abroad,
    set_Active_Breadcrumb_For_Big_Screen_For_Study_Abroad,
  ] = useState("1");

  const takeId = (event) => {
    set_Active_Breadcrumb_For_Big_Screen_For_Study_Abroad(
      event.currentTarget.id
    );
  };
  return (
    <div className="w-full flex justify-center items-center flex-col bg-white">
      <ul className="w-full flex justify-evenly items-center flex-row text-base  lg:border-t-2 lg:border-b-2 lg:border-gray-200 bg-yellow-100">
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "1"
                ? "active_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "inactive_Breadcrumb_For_Big_Screen_For_Study_Abroad"
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
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "2"
                ? "active_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "inactive_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="2"
            onClick={takeId}
          >
            {colleges}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "3"
                ? "active_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "inactive_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="3"
            onClick={takeId}
          >
            {countries}
          </Link>
        </li>
        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "4"
                ? "active_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "inactive_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="4"
            onClick={takeId}
          >
            {application_process}
          </Link>
        </li>

        <li className="w-auto p-[0.8rem]">
          <Link
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "5"
                ? "active_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "inactive_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="5"
            onClick={takeId}
          >
            {scholarships}
          </Link>
        </li>
      </ul>
      <div className="w-full">
        <ul className="Li_Pages_In_Breadcrumb_For_Big_Screen_For_Study_Abroad_Link_Pages">
          <li
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "1"
                ? "details_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="Overview_For_Breadcrumb_For_Big_Screen_For_Study_Abroad_ul1"
          >
            <Overview_For_Study_Abroad
              aboutOverview={aboutOverview}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "2"
                ? "details_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="Colleges_For_Breadcrumb_For_Big_Screen_For_Study_Abroad_ul2"
          >
            <Colleges_For_Study_Abroad
              aboutColleges={aboutColleges}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "3"
                ? "details_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="Countries_For_Breadcrumb_For_Big_Screen_For_Study_Abroad_ul3"
          >
            <Countries_For_Study_Abroad
              aboutCountries={aboutCountries}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "4"
                ? "details_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="Application_Process_For_Breadcrumb_For_Big_Screen_For_Study_Abroad_ul4"
          >
            <Application_Process_For_Study_Abroad
              aboutApplicationProcess={aboutApplicationProcess}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Big_Screen_For_Study_Abroad === "5"
                ? "details_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Big_Screen_For_Study_Abroad"
            }
            id="Scholarships_For_Breadcrumb_For_Big_Screen_For_Study_Abroad_ul5"
          >
            <Scholarships_For_Study_Abroad
              aboutScholarships={aboutScholarships}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
