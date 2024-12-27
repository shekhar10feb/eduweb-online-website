import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logoPre.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import { UserConselling } from "./UserConselling";

export const HeaderForMobileVersion = () => {
  const [isVisible3, setVisible3] = useState("none");
  const [isVisible4, setVisible4] = useState("none");

  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const [isMenuOpen5, setIsMenuOpen5] = useState(false);
  const [isMenuOpen6, setIsMenuOpen6] = useState(false);
  const [isMenuOpen7, setIsMenuOpen7] = useState(false);

  const [isDownArrow1, setIsDownArrow1] = useState("flex");
  const [isDownArrow2, setIsDownArrow2] = useState("flex");
  const [isDownArrow3, setIsDownArrow3] = useState("flex");
  const [isDownArrow4, setIsDownArrow4] = useState("flex");
  const [isDownArrow5, setIsDownArrow5] = useState("flex");
  const [isDownArrow6, setIsDownArrow6] = useState("flex");
  const [isDownArrow7, setIsDownArrow7] = useState("flex");

  const [isUpArrow1, setIsUpArrow1] = useState("none");
  const [isUpArrow2, setIsUpArrow2] = useState("none");
  const [isUpArrow3, setIsUpArrow3] = useState("none");
  const [isUpArrow4, setIsUpArrow4] = useState("none");
  const [isUpArrow5, setIsUpArrow5] = useState("none");
  const [isUpArrow6, setIsUpArrow6] = useState("none");
  const [isUpArrow7, setIsUpArrow7] = useState("none");

  const [showUserConselling, setShowUserConselling] = useState("none");

  function funcVisible3() {
    if (isVisible3 === "none") {
      setVisible3("flex");
      // setAnimated("0.8s ease-in-out 1s 1 test");
    } else {
      setVisible3("none");
      // setAnimated("0.8s ease-in-out 1s 1 test");
    }
  }

  function funcVisible4() {
    if (isVisible4 === "none") {
      setVisible4("flex");
      // setAnimated("0.8s ease-in-out 1s 1 test");
    } else {
      setVisible4("none");
      // setAnimated("0.8s ease-in-out 1s 1 test");
    }
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

  const isChangeDirectionOfArrowFunc1 = () => {
    if (isDownArrow1 === "flex" && isUpArrow1 === "none") {
      setIsDownArrow1("none");
      setIsUpArrow1("flex");
    } else {
      setIsDownArrow1("flex");
      setIsUpArrow1("none");
    }
  };

  const isChangeDirectionOfArrowFunc2 = () => {
    if (isDownArrow2 === "flex" && isUpArrow2 === "none") {
      setIsDownArrow2("none");
      setIsUpArrow2("flex");
    } else {
      setIsDownArrow2("flex");
      setIsUpArrow2("none");
    }
  };

  const isChangeDirectionOfArrowFunc3 = () => {
    if (isDownArrow3 === "flex" && isUpArrow3 === "none") {
      setIsDownArrow3("none");
      setIsUpArrow3("flex");
    } else {
      setIsDownArrow3("flex");
      setIsUpArrow3("none");
    }
  };

  const isChangeDirectionOfArrowFunc4 = () => {
    if (isDownArrow4 === "flex" && isUpArrow4 === "none") {
      setIsDownArrow4("none");
      setIsUpArrow4("flex");
    } else {
      setIsDownArrow4("flex");
      setIsUpArrow4("none");
    }
  };

  const isChangeDirectionOfArrowFunc5 = () => {
    if (isDownArrow5 === "flex" && isUpArrow5 === "none") {
      setIsDownArrow5("none");
      setIsUpArrow5("flex");
    } else {
      setIsDownArrow5("flex");
      setIsUpArrow5("none");
    }
  };

  const isChangeDirectionOfArrowFunc6 = () => {
    if (isDownArrow6 === "flex" && isUpArrow6 === "none") {
      setIsDownArrow6("none");
      setIsUpArrow6("flex");
    } else {
      setIsDownArrow6("flex");
      setIsUpArrow6("none");
    }
  };

  const isChangeDirectionOfArrowFunc7 = () => {
    if (isDownArrow7 === "flex" && isUpArrow7 === "none") {
      setIsDownArrow7("none");
      setIsUpArrow7("flex");
    } else {
      setIsDownArrow7("flex");
      setIsUpArrow7("none");
    }
  };

  function redirectToRegisterPage() {
    window.location.href = "/api/register";
  }

  function redirectToLoginPage() {
    window.location.href = "/api/login";
  }

  return (
    <div className="flex lg:hidden w-[100%] justify-center items-center flex-row text-white p-1">
      <div className="flex w-[35%] justify-start items-center p-[0.1rem]">
        <div
          className="w-[2rem] md:scale-[1.1] md:mx-2 flex justify-center items-center rounded-sm border border-[#fff] cursor-pointer transition ease-in-out delay-100 hover:scale-[1.03] select-none"
          onClick={funcVisible4}
        >
          <MenuIcon />
        </div>
        <div className="w-[5rem] md:w-[7rem] flex justify-around items-center cursor-pointer select-none">
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="EduWeb Online Website"
              className="w-[100%] object-cover aspect-auto"
            />
          </NavLink>
        </div>
      </div>
      <div
        style={{ display: isVisible4 }}
        className="w-[40%] sm:w-[25%] md:w-[30%] h-[100vh] absolute top-9 sm:top-[2.3rem] md:top-[2.8rem] left-0 flex justify-start items-start bg-[#fff] z-40"
      >
        <ul className="w-[100%] flex justify-center items-start flex-col text-[0.6rem] sm:text-[0.75rem] md:text-[0.8rem] font-semibold text-[#000]">
          {/* MBA */}
          <li
            onClick={() =>
              isMenuOpen1 ? setIsMenuOpen1(false) : setIsMenuOpen1(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc1}
            >
              MBA
              <span style={{ display: isDownArrow1 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow1 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion1"
              className={isMenuOpen1 ? "open" : "close"}
            >
              <ul className="w-full">
                {/* MBA */}
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_MBA"}
                    state="About MBA Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Popular_Courses_For_MBA"}
                    state="About MBA Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link to={"/Exams_For_MBA"} state="About MBA Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Colleges_By_Location_For_MBA"}
                    state="About MBA Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/College_Reviews_For_MBA"}
                    state="About MBA College Reviews"
                  >
                    College Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* ENGINEERING */}
          <li
            onClick={() =>
              isMenuOpen2 ? setIsMenuOpen2(false) : setIsMenuOpen2(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc2}
            >
              ENGINEERING
              <span style={{ display: isDownArrow2 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow2 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion2"
              className={isMenuOpen2 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Engg"}
                    state="About Engineering Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Popular_Courses_For_Engg"}
                    state="About Engineering Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link to={"/Exams_For_Engg"} state="About Engineering Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Engg"}
                    state="About Engineering Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/College_Reviews_For_Engg"}
                    state="About Engineering College Reviews"
                  >
                    College Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* MEDICAL */}
          <li
            onClick={() =>
              isMenuOpen3 ? setIsMenuOpen3(false) : setIsMenuOpen3(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc3}
            >
              MEDICAL
              <span style={{ display: isDownArrow3 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow3 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion3"
              className={isMenuOpen3 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Medical"}
                    state="About Medical Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Popular_Courses_For_Medical"}
                    state="About Medical Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link to={"/Exams_For_Medical"} state="About Medical Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Medical"}
                    state="About Medical Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/College_Reviews_For_Medical"}
                    state="About Medical College Reviews"
                  >
                    College Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* DESIGN */}
          <li
            onClick={() =>
              isMenuOpen4 ? setIsMenuOpen4(false) : setIsMenuOpen4(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc4}
            >
              DESIGN
              <span style={{ display: isDownArrow4 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow4 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion4"
              className={isMenuOpen4 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Design"}
                    state="About Design Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Popular_Courses_For_Design"}
                    state="About Design Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link to={"/Exams_For_Design"} state="About Design Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Design"}
                    state="About Design Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/College_Reviews_For_Design"}
                    state="About Design College Reviews"
                  >
                    College Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* MORE */}
          <li
            onClick={() =>
              isMenuOpen5 ? setIsMenuOpen5(false) : setIsMenuOpen5(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc5}
            >
              MORE
              <span style={{ display: isDownArrow5 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow5 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion5"
              className={isMenuOpen5 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Sarkaari_Exams"}>Sarkari Exams</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Law"}>Law</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Hospitality_And_Travel"}>
                    Hospitality & Travel
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Animation"}>Animation</NavLink>
                </li>
                <li className="my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Mass_Communication_And_Media"}>
                    Mass Communication & Media
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/IT_And_Software"}>IT & Software</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Arts"}>Arts (Fine/Visual/Performing)</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Science"}>Science</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Architecture_And_Planning"}>
                    Architecture & Planning
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Accounting_And_Commerce"}>
                    Accounting & Commerce
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Banking_Finance_And_Insurance"}>
                    Banking, Finance & Insurance
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Aviation"}>Aviation</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Teaching_And_Education"}>
                    Teaching & Education
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Nursing"}>Nursing</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Beauty_And_Fitness"}>Beauty & Fitness</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"/Universities_And_Colleges"}>
                    Universities & Colleges
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* STUDY ABROAD */}
          <li
            onClick={() =>
              isMenuOpen6 ? setIsMenuOpen6(false) : setIsMenuOpen6(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc6}
            >
              STUDY ABROAD
              <span style={{ display: isDownArrow6 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow6 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion6"
              className={isMenuOpen6 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Colleges_For_Study_Abroad"}
                    state="Study Abroad About Colleges For Study Abroad"
                  >
                    Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Countries_For_Study_Abroad"}
                    state="Study Abroad About Countries For Study Abroad"
                  >
                    Countries
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Application_Process_For_Study_Abroad"}
                    state="Study Abroad About Application Process For Study Abroad"
                  >
                    Application Process
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <Link
                    to={"/Scholarships_For_Study_Abroad"}
                    state="Study Abroad About Scholarships For Study Abroad"
                  >
                    Scholarships
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* EDUWEB ONLINE */}
          <li
            onClick={() =>
              isMenuOpen7 ? setIsMenuOpen7(false) : setIsMenuOpen7(true)
            }
            className="w-[100%] flex justify-center items-center flex-col border-b-2 border-gray-300 cursor-pointer select-none"
          >
            <span
              className="w-[100%] flex justify-between items-center flex-row cursor-pointer md:p-2 sm:p-1 sm:pl-2 pl-1 select-none"
              onClick={isChangeDirectionOfArrowFunc7}
            >
              EDUWEB ONLINE
              <span style={{ display: isDownArrow7 }}>
                <ArrowDropDownIcon />
              </span>
              <span style={{ display: isUpArrow7 }}>
                <ArrowDropUpIcon />
              </span>
            </span>
            <div
              id="navForMobileVersion7"
              className={isMenuOpen7 ? "open" : "close"}
            >
              <ul className="w-full">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Technology
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Data Science
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Management
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Finance
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Creativity & Design
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Emerging Technologies
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Healthcare
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Energy & Environment
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Social Sciences
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Personal Development
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  Degree Programs
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 select-none">
                  <NavLink to={"updatedblogs"}>Blogs</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-[40%] lg::hidden flex justify-end items-center">
        <div className="sm:w-[50%] w-[80%] flex justify-end items-center">
          <button
            className="w-[100%] bg-green-600 hover:bg-green-500 sm:text-xs text-[0.7rem] font-semibold rounded-sm sm:p-[0.4rem] py-[0.4rem] px-[0.1rem] cursor-pointer"
            onClick={showUserConsellingFunc}
          >
            Need Conselling?
          </button>
        </div>
      </div>

      {/* Need Conselling Green Button */}
      <div
        className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 bg-[#000000ab] z-50 border-2 border-blue-500 select-none"
        style={{ display: showUserConselling }}
      >
        <UserConselling closeUserConsellingFunc={closeUserConsellingFunc} />
      </div>

      {/* LOGIN & SIGNUP PAGE */}
      <div
        className="flex w-[25%] justify-end items-center md:p-[0.2rem] select-none"
        onClick={funcVisible3}
      >
        <span className="w-auto md:scale-[1.2] flex justify-center items-center text-xs font-bold cursor-pointer transition ease-in-out delay-100 hover:scale-[1.05] select-none">
          <PersonIcon />
          <ArrowDropDownIcon />
        </span>
      </div>

      <div
        style={{ display: isVisible3 }}
        className="w-[25%] md:w-[20%] h-[100vh] flex justify-center items-center absolute top-9 md:top-[3.2rem] right-0 bg-[#fff] text-[#000] transition ease-in-out delay-150 z-40"
      >
        <div
          className="w-[80%] absolute top-5 right-5 flex justify-end items-center font-semibold text-lg text-gray-500 border-none hover:text-[#000] transition ease-in-out delay-150 cursor-pointer z-40"
          onClick={funcVisible3}
        >
          <CloseIcon />
        </div>

        <ul className="w-[100%] h-[100%] flex justify-start items-center pt-10 flex-col">
          <li className="text-sm font-semibold md:text-lg text-black my-5 cursor-pointer select-none">
            <button onClick={() => redirectToLoginPage()}>Login</button>
          </li>
          <li className="text-sm font-semibold md:text-lg text-black my-5 cursor-pointer select-none">
            <button onClick={() => redirectToRegisterPage()}>Signup</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
