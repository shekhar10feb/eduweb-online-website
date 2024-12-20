import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Application_Process_For_Study_Abroad } from "./Application_Process_For_Study_Abroad";
import { Colleges_For_Study_Abroad } from "./Colleges_For_Study_Abroad";
import { Countries_For_Study_Abroad } from "./Countries_For_Study_Abroad";
import { Overview_For_Study_Abroad } from "./Overview_For_Study_Abroad";
import { Scholarships_For_Study_Abroad } from "./Scholarships_For_Study_Abroad";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Breadcrumb_for_small_screen = ({
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
    active_Breadcrumb_For_Small_Screen_For_Study_Abroad,
    set_Active_Breadcrumb_For_Small_Screen_For_Study_Abroad,
  ] = useState("1");
  const [backgroundColorOfMenuBtn, setbackgroundColorOfMenuBtn] =
    useState("#1e40af");
  const [KeyboardArrowDownIcon1, setKeyboardArrowDownIcon1] = useState("flex");
  const [KeyboardArrowUpIcon1, setKeyboardArrowUPIcon1] = useState("none");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const takeId = (event) => {
    set_Active_Breadcrumb_For_Small_Screen_For_Study_Abroad(
      event.currentTarget.id
    );
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
        <ul
          id="breadCrumb_In_Small_Screen_For_Study_Abroad"
          className={isMenuOpen ? "open" : ""}
        >
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.7rem] bg-blue-800 hover:bg-blue-700 text-white my-1 sm:rounded-sm rounded">
            <Link
              className={
                active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "1"
                  ? "active_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                  : "inactive_Breadcrumb_For_Small_Screen_For_Study_Abroad"
              }
              id="1"
              onClick={takeId}
            >
              {overview}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.7rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "2"
                  ? "active_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                  : "inactive_Breadcrumb_For_Small_Screen_For_Study_Abroad"
              }
              id="2"
              onClick={takeId}
            >
              {colleges}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.7rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "3"
                  ? "active_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                  : "inactive_Breadcrumb_For_Small_Screen_For_Study_Abroad"
              }
              id="3"
              onClick={takeId}
            >
              {countries}
            </Link>
          </li>
          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.7rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "4"
                  ? "active_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                  : "inactive_Breadcrumb_For_Small_Screen_For_Study_Abroad"
              }
              id="4"
              onClick={takeId}
            >
              {application_process}
            </Link>
          </li>

          <li className="w-full flex justify-center items-center sm:text-[0.9rem] text-[0.7rem] bg-blue-800 hover:bg-blue-700 text-white my-1  sm:rounded-sm rounded">
            <Link
              className={
                active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "5"
                  ? "active_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                  : "inactive_Breadcrumb_For_Small_Screen_For_Study_Abroad"
              }
              id="5"
              onClick={takeId}
            >
              {scholarships}
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full lg:hidden flex justify-center items-center flex-col">
        <ul className="Li_Pages_In_Breadcrumb_For_Small_Screen_For_Study_Abroad_Link_Pages">
          <li
            className={
              active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "1"
                ? "details_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
            }
            id="Overview_For_Breadcrumb_For_Small_Screen_For_Study_Abroad_ul1"
          >
            <Overview_For_Study_Abroad
              aboutOverview={aboutOverview}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "2"
                ? "details_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
            }
            id="Colleges_For_Breadcrumb_For_Small_Screen_For_Study_Abroad_ul2"
          >
            <Colleges_For_Study_Abroad
              aboutColleges={aboutColleges}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "3"
                ? "details_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
            }
            id="Countries_For_Breadcrumb_For_Small_Screen_For_Study_Abroad_ul3"
          >
            <Countries_For_Study_Abroad
              aboutCountries={aboutCountries}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "4"
                ? "details_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
            }
            id="Application_Process_For_Breadcrumb_For_Small_Screen_For_Study_Abroad_ul4"
          >
            <Application_Process_For_Study_Abroad
              aboutApplicationProcess={aboutApplicationProcess}
              aboutFieldname={aboutFieldname}
              filteredDatas={filteredDatas}
            />
          </li>
          <li
            className={
              active_Breadcrumb_For_Small_Screen_For_Study_Abroad === "5"
                ? "details_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
                : "close_In_Breadcrumb_For_Small_Screen_For_Study_Abroad"
            }
            id="Scholarships_For_Breadcrumb_For_Small_Screen_For_Study_Abroad_ul5"
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
