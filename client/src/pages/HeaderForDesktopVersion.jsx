import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logoPre.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const HeaderForDesktopVersion = () => {
  const [show1, setShow1] = useState("none");
  const [show2, setShow2] = useState("none");
  const [show3, setShow3] = useState("none");
  const [show4, setShow4] = useState("none");
  const [show5, setShow5] = useState("none");
  const [show6, setShow6] = useState("none");
  const [show7, setShow7] = useState("none");

  const [animate, setAnimate] = useState("none");

  function show1_func() {
    if (show1 === "flex") {
      setShow1("none");
    } else {
      setAnimate("animate_in_show1_HeaderForDesktopVersion 0.4s ease-in-out");
      setShow1("flex");

      setShow2("none");
      setShow3("none");
      setShow4("none");
      setShow5("none");
      setShow6("none");
      setShow7("none");
    }
  }

  function show2_func() {
    if (show2 === "flex") {
      setShow2("none");
    } else {
      setShow2("flex");

      setShow1("none");
      setShow3("none");
      setShow4("none");
      setShow5("none");
      setShow6("none");
      setShow7("none");
    }
  }

  function show3_func() {
    if (show3 === "flex") {
      setShow3("none");
    } else {
      setShow3("flex");

      setShow1("none");
      setShow2("none");
      setShow4("none");
      setShow5("none");
      setShow6("none");
      setShow7("none");
    }
  }

  function show4_func() {
    if (show4 === "flex") {
      setShow4("none");
    } else {
      setShow4("flex");

      setShow1("none");
      setShow2("none");
      setShow3("none");
      setShow5("none");
      setShow6("none");
      setShow7("none");
    }
  }

  function show5_func() {
    if (show5 === "flex") {
      setShow5("none");
    } else {
      setShow5("flex");

      setShow1("none");
      setShow2("none");
      setShow3("none");
      setShow4("none");
      setShow6("none");
      setShow7("none");
    }
  }

  function show6_func() {
    if (show6 === "flex") {
      setShow6("none");
    } else {
      setShow6("flex");

      setShow1("none");
      setShow2("none");
      setShow3("none");
      setShow4("none");
      setShow5("none");
      setShow7("none");
    }
  }

  function show7_func() {
    if (show7 === "flex") {
      setShow7("none");
    } else {
      setShow7("flex");

      setShow1("none");
      setShow2("none");
      setShow3("none");
      setShow4("none");
      setShow5("none");
      setShow6("none");
    }
  }

  function close_drop_down1() {
    setShow1("none");
  }

  function close_drop_down2() {
    setShow2("none");
  }

  function close_drop_down3() {
    setShow3("none");
  }

  function close_drop_down4() {
    setShow4("none");
  }

  function close_drop_down5() {
    setShow5("none");
  }

  function close_drop_down6() {
    setShow6("none");
  }

  function close_drop_down7() {
    setShow7("none");
  }

  function redirectToRegisterPage() {
    window.location.href = "/api/register";
  }

  function redirectToLoginPage() {
    window.location.href = "/api/login";
  }

  return (
    <div className="hidden lg:flex w-[100%] justify-around items-center text-white lg:px-2">
      <div className="xl:w-[15%] lg:w-[18%] flex justify-around items-center">
        <div className="xl:w-[100%] lg:w-[80%] flex justify-start items-center py-1">
          <NavLink to={"/"}>
            <img
              src={logo}
              alt="EduWeb Online Website"
              className="w-32 object-cover aspect-auto"
            />
          </NavLink>
        </div>
      </div>
      <div className="xl:w-[70%] lg:w-[76%] flex justify-center items-center">
        <ul className="w-[100%] flex justify-evenly lg:justify-around items-center flex-row">
          {/* MBA */}
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none">
            <div
              onClick={show1_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                MBA
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show1, animation: animate }}
              onClick={close_drop_down1}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_MBA"}
                    state="About MBA Top Ranked Colleges"
                    className="w-full"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Popular_Courses_For_MBA"}
                    state="About MBA Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link to={"/Exams_For_MBA"} state="About MBA Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Colleges_By_Location_For_MBA"}
                    state="About MBA Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
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
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show2_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                ENGINEERING
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show2, animation: animate }}
              onClick={close_drop_down2}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Engg"}
                    state="About Engineering Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Popular_Courses_For_Engg"}
                    state="About Engineering Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link to={"/Exams_For_Engg"} state="About Engineering Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Engg"}
                    state="About Engineering Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
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
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show3_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                MEDICAL
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show3, animation: animate }}
              onClick={close_drop_down3}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Medical"}
                    state="About Medical Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Popular_Courses_For_Medical"}
                    state="About Medical Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link to={"/Exams_For_Medical"} state="About Medical Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Medical"}
                    state="About Medical Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
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
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show4_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                DESIGN
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show4, animation: animate }}
              onClick={close_drop_down4}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Top_Ranked_Colleges_For_Design"}
                    state="About Design Top Ranked Colleges"
                  >
                    Top Ranked Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Popular_Courses_For_Design"}
                    state="About Design Popular Courses"
                  >
                    Popular Courses
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link to={"/Exams_For_Design"} state="About Design Exams">
                    Exams
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Colleges_By_Location_For_Design"}
                    state="About Design Colleges By Location"
                  >
                    Colleges By Location
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
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
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show5_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                MORE
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show5, animation: animate }}
              onClick={close_drop_down5}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Sarkaari_Exams"}>Sarkari Exams</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Law"}>Law</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Hospitality_And_Travel"}>
                    Hospitality & Travel
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Animation"}>Animation</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Mass_Communication_And_Media"}>
                    Mass Communication & Media
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/IT_And_Software"}>IT & Software</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Arts"}>Arts (Fine/Visual/Performing)</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Science"}>Science</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Architecture_And_Planning"}>
                    Architecture & Planning
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Accounting_And_Commerce"}>
                    Accounting & Commerce
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Banking_Finance_And_Insurance"}>
                    Banking, Finance & Insurance
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Aviation"}>Aviation</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Teaching_And_Education"}>
                    Teaching & Education
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Nursing"}>Nursing</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Beauty_And_Fitness"}>Beauty & Fitness</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Universities_And_Colleges"}>
                    Universities & Colleges
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* STUDY ABROAD */}
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show6_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                STUDY ABROAD
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show6, animation: animate }}
              onClick={close_drop_down6}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Colleges_For_Study_Abroad"}
                    state="About Study Abroad Colleges"
                  >
                    Colleges
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Countries_For_Study_Abroad"}
                    state="About Study Abroad Countries"
                  >
                    Countries
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Application_Process_For_Study_Abroad"}
                    state="About Study Abroad Application Process"
                  >
                    Application Process
                  </Link>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <Link
                    to={"/Scholarships_For_Study_Abroad"}
                    state="About Study Abroad Scholarships"
                  >
                    Scholarships
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* EDUWEB ONLINE */}
          <li className="w-auto flex justify-center items-center flex-row xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none z-40">
            <div
              onClick={show7_func}
              className="w-auto flex justify-center items-center flex-col relative xl:px-1 lg:p-1 lg:rounded-sm text-white hover:bg-blue-600 cursor-pointer select-none"
            >
              <span className="w-auto flex justify-center items-center flex-row xl:text-xs lg:text-[0.7rem] xl:font-bold lg:font-semibold xl:px-1">
                EDUWEB ONLINE
                <ArrowDropDownIcon />
              </span>
            </div>

            <div
              className="w-auto hidden text-xs bg-gray-100 fixed top-[2.9rem] shadow-xl rounded-b-lg"
              style={{ display: show7, animation: animate }}
              onClick={close_drop_down7}
            >
              <ul className="w-full py-[0.8rem]">
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Technology"}>Technology</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Data_Science"}>Data Science</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Management"}>Management</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Finance"}>Finance</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Creativity_And_Desining"}>
                    Creativity & Design
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Emerging_Technologies"}>
                    Emerging Technologies
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Healthcare"}>Healthcare</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Energy_And_Environment"}>
                    Energy & Environment
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Social_Sciences"}>Social Sciences</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Personal_Development"}>
                    Personal Development
                  </NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"/Degree_Programs"}>Degree Programs</NavLink>
                </li>
                <li className="w-full my-[0.08rem] text-gray-600 cursor-pointer hover:bg-gray-200 hover:text-black p-1 hover:p-1 hover:px-[0.8rem] px-[0.8rem] select-none">
                  <NavLink to={"updatedblogs"}>Blogs</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Login & Signup */}
      <div className="xl:w-[10%] lg:w-[12%] flex justify-center items-center select-none">
        <ul className="w-[100%] flex justify-evenly items-center">
          <li className=" flex justify-center items-center xl:px-1 lg:pr-1 lg:p-2 lg:rounded-sm hover:text-blue-800 hover:bg-blue-600 select-none">
            <button
              onClick={() => redirectToLoginPage()}
              className=" text-white text-xs font-bold cursor-pointer"
            >
              Login
            </button>
          </li>
          <li className=" flex justify-center items-center xl:px-1 lg:p-2 lg:rounded-sm hover:text-blue-800 hover:bg-blue-600 select-none">
            <button
              onClick={() => redirectToRegisterPage()}
              className=" text-white text-xs font-bold cursor-pointer"
            >
              Signup
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
