import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Advertisement_300px } from "../../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../../Advertisement/Advertisement_1024px";
import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../../Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { UserConselling } from "../../UserConselling";
import { Pre_Loader } from "../../Home/Pre_Loader";
import axios from "axios";

export const FIND_BTECH_Colleges = () => {
  const [datas, setDatas] = useState([]);
  const [college, setCollege] = useState("");
  const [search_college, setSearch_college] = useState("");
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [mouse_enter_for_courses_offered, setMouse_enter_for_courses_offered] =
    useState("none");
  const [mouse_enter_for_entrance_exams, setMouse_enter_for_entrance_exams] =
    useState("none");
  const [read_less, setRead_less] = useState("flex");
  const [read_more, setRead_more] = useState("none");
  const [displayErrMsg, setDisplayErrMsg] = useState("hidden");
  const getting_yes_or_no_in_arr = [];

  useEffect(() => {
    try {
      axios.get("/getting_List_of_Colleges").then((data) => {
        setDatas(data?.data);
      });
    } catch (error) {
      return null;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const uppercase_state = college.toUpperCase();

    if (
      uppercase_state !== "" &&
      uppercase_state !== undefined &&
      uppercase_state !== null
    ) {
      {
        Array.isArray(datas)
          ? datas.map((data) => {
              if (
                uppercase_state === data.name.toUpperCase() ||
                data.college_short_name.toUpperCase() === uppercase_state
              ) {
                setSearch_college(uppercase_state);
                getting_yes_or_no_in_arr.push("yes");
              } else {
                getting_yes_or_no_in_arr.push("no");
              }
            })
          : "";
      }
    }

    if (getting_yes_or_no_in_arr.includes("yes")) {
      setDisplayErrMsg("hidden");
    } else if (getting_yes_or_no_in_arr.includes("no")) {
      setDisplayErrMsg("visible");
      setTimeout(() => {
        setDisplayErrMsg("hidden");
      }, 2000);
    }
  };

  const mouse_enter_for_courses_offered_func = () => {
    if (mouse_enter_for_courses_offered === "none") {
      setMouse_enter_for_courses_offered("flex");
    }
  };

  const mouse_leave_for_courses_offered_func = () => {
    if (mouse_enter_for_courses_offered === "flex") {
      setMouse_enter_for_courses_offered("none");
    }
  };

  const mouse_enter_for_entrance_exams_func = () => {
    if (mouse_enter_for_entrance_exams === "none") {
      setMouse_enter_for_entrance_exams("flex");
    }
  };

  const mouse_leave_for_entrance_exams_func = () => {
    if (mouse_enter_for_entrance_exams === "flex") {
      setMouse_enter_for_entrance_exams("none");
    }
  };

  const read_more_btn = () => {
    if (read_more === "none") {
      setRead_more("flex");
      setRead_less("none");
    }
  };

  const read_less_btn = () => {
    if (read_less === "none") {
      setRead_less("flex");
      setRead_more("none");
    }
  };

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
    <div className="w-full h-full flex justify-center items-center flex-col bg-gray-300 lg:mt-12 mt-[2.4rem]">
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
              <h1 className="ml-1 text-sm font-medium md:ml-2 text-gray-500">
                Find B.Tech. College
              </h1>
            </div>
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

      <div className="w-full flex h-full lg:hidden justify-center items-center my-1 py-2 bg-white shadow-lg">
        <Career_Conselling_And_University_Previous_Exam_Question_Papers />
      </div>

      <div className="w-full h-full flex justify-between items-center sm:flex-row flex-col bg-white md:border md:border-gray-200">
        <div className="w-auto md:flex hidden justify-start items-center text-xl font-bold m-4">
          <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
            Find B.Tech. College
          </h1>
        </div>
        <div className="w-auto md:hidden flex justify-center items-center text-xl font-bold sm:mx-2 mx-1 sm:my-4 my-2">
          <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
            Find B.Tech. College
          </h1>
        </div>

        <div className="w-auto h-full flex justify-start items-start flex-col md:p-2 p-1 pl-0">
          <form
            className="w-full flex justify-start items-center flex-row"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="state"
              className="w-9/12 bg-gray-100 sm:p-[0.2rem] p-[0.1rem] sm:text-sm text-xs focus:outline-none border border-gray-500 rounded"
              id="state"
              value={college}
              placeholder="Search your State/UT"
              onChange={(e) => {
                setCollege(e.currentTarget.value);
              }}
            />
            <button
              type="submit"
              className="w-3/12 bg-green-600 hover:bg-blue-800 text-white md:p-1 sm:p-[0.1rem] p-[0.07rem] sm:text-sm text-xs px-1 ml-1 rounded"
            >
              Search
            </button>
          </form>
          <p
            className="w-full flex justify-start items-center flex-row md:text-xs sm:text-[0.7rem] text-[0.6rem] text-red-500"
            style={{ visibility: displayErrMsg }}
          >
            Please enter valid input.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center bg-gray-300">
        <div className="w-full h-full flex justify-start items-start lg:flex-row flex-col">
          <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
            {search_college !== "" ? (
              Array.isArray(datas) ? (
                datas.map((data) => {
                  if (
                    (search_college === data.name.toUpperCase() ||
                      search_college ===
                        data.college_short_name.toUpperCase()) &&
                    data.engineering_rank &&
                    data._id !== "" &&
                    data._id !== undefined &&
                    data._id !== null
                  ) {
                    return (
                      <div
                        className="w-full flex justify-center items-center flex-col bg-blue-200 lg:p-4 p-2"
                        key={data._id}
                      >
                        <div className="w-[100%] flex justify-between items-center flex-col">
                          {data.cover_image ? (
                            <img
                              className="w-full lg:h-48 md:h-36 sm:h-24 h-20 md:flex hidden justify-center items-center object-fill bg-white aspect-square"
                              src={data.cover_image}
                              alt="Eduweb-Online-Website"
                            />
                          ) : (
                            ""
                          )}

                          <div className="w-full flex justify-center md:items-start items-center flex-row relative lg:top-2 bottom-3 md:mt-3 mt-4">
                            <div className="w-11/12 h-full flex md:justify-start justify-center items-center text-center rounded-md">
                              {data.profile_image !== "" ||
                              data.profile_image !== undefined ||
                              data.profile_image !== null ? (
                                <div className="md:w-20 sm:w-16 w-12 md:flex hidden justify-center items-center md:p-1 bg-yellow-400 mr-5 rounded-md">
                                  <img
                                    src={data.profile_image}
                                    className="w-full object-contain aspect-square bg-white rounded-md"
                                    alt="Eduweb-Online-Website"
                                  />
                                </div>
                              ) : (
                                ""
                              )}

                              <h1 className="w-auto flex justify-start items-center xl:text-2xl lg:text-xl md:text-base text-sm font-bold">
                                {data.name === "" ||
                                data.name === undefined ||
                                data.name === null ? (
                                  <p>N/A</p>
                                ) : (
                                  data.name
                                )}
                                {data.college_short_name === "" ||
                                data.college_short_name === undefined ||
                                data.college_short_name === null ? (
                                  <p>N/A</p>
                                ) : (
                                  <span className=" md:flex hidden pl-1">
                                    ({data.college_short_name})
                                  </span>
                                )}
                              </h1>
                              {data.verification_process !== "false" ? (
                                <p className="md:flex hidden text-xs text-green-600 ml-2">
                                  <strong>
                                    <i>(Verified)</i>
                                  </strong>
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>

                          <div className="w-full flex justify-center items-center flex-col">
                            <div className="w-full flex justify-start items-start flex-col lg:mt-6 md:mt-2">
                              {/* Latest News and Events */}
                              {data.latest_news_and_events ? (
                                <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                                  <div className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                                    Latest News and Events
                                  </div>

                                  <div
                                    className="md:w-11/12 w-full md:flex hidden justify-start items-start flex-col text-black md:text-sm text-xs bg-white md:p-2 sm:mb-3 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                                    style={{ display: "0.8rem" }}
                                  >
                                    <ul className="ml-3">
                                      {data.latest_news_and_events
                                        .split("++ ")
                                        .map((item) => {
                                          return (
                                            <li className="p-[0.8rem]">
                                              - {item}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>

                                  <div
                                    className="md:w-11/12 w-full md:hidden flex justify-start items-start flex-col text-black md:text-sm text-xs bg-white p-2 mb-2 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                                    style={{ display: "0.7rem" }}
                                  >
                                    <ul className="ml-1">
                                      {data.latest_news_and_events
                                        .split("++ ")
                                        .map((item) => {
                                          return (
                                            <li className="p-[0.4rem]">
                                              - {item}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                              {/* Rank */}
                              {(data.engineering_rank !== "" &&
                                data.engineering_rank !== undefined &&
                                data.engineering_rank !== null) ||
                              (data.medical_rank !== "" &&
                                data.medical_rank !== undefined &&
                                data.medical_rank !== null) ||
                              (data.law_rank !== "" &&
                                data.law_rank !== undefined &&
                                data.law_rank !== null) ||
                              (data.management_rank !== "" &&
                                data.management_rank !== undefined &&
                                data.management_rank !== null) ||
                              (data.fashion_design_rank !== "" &&
                                data.fashion_design_rank !== undefined &&
                                data.fashion_design_rank !== null) ||
                              (data.pharmacy_rank !== "" &&
                                data.pharmacy_rank !== undefined &&
                                data.pharmacy_rank !== null) ? (
                                <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                                  <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                                    College Rank
                                  </h2>

                                  <div className="md:w-11/12 w-full flex justify-start items-center md:flex-row flex-wrap bg-white text-red-700 gap-1 p-2 md:rounded-md sm:rounded-sm rounded">
                                    {data.engineering_rank !== "" &&
                                    data.engineering_rank !== undefined &&
                                    data.engineering_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Engineering</h1>
                                        <h1>#{data.engineering_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.medical_rank !== "" &&
                                    data.medical_rank !== undefined &&
                                    data.medical_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Medical</h1>
                                        <h1>#{data.medical_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.law_rank !== "" &&
                                    data.law_rank !== undefined &&
                                    data.law_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Law</h1>
                                        <h1>#{data.law_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.management_rank !== "" &&
                                    data.management_rank !== undefined &&
                                    data.management_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Management</h1>
                                        <h1>#{data.management_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.fashion_design_rank !== "" &&
                                    data.fashion_design_rank !== undefined &&
                                    data.fashion_design_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Fashion Design</h1>
                                        <h1>#{data.fashion_design_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.pharmacy_rank !== "" &&
                                    data.pharmacy_rank !== undefined &&
                                    data.pharmacy_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Pharmacy</h1>
                                        <h1>#{data.pharmacy_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {data.overall_rank !== "" &&
                                    data.engineering_rank !== undefined &&
                                    data.engineering_rank !== null ? (
                                      <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                                        <h1>Overall</h1>
                                        <h1>#{data.overall_rank}</h1>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}

                              {/* About College */}
                              {(data.institute_type !== "" &&
                                data.institute_type !== undefined &&
                                data.institute_type !== null) ||
                              (data.approvals !== "" &&
                                data.approvals !== undefined &&
                                data.approvals !== null) ||
                              (data.courses_offered !== "" &&
                                data.courses_offered !== undefined &&
                                data.courses_offered !== null) ||
                              (data.college_campus !== "" &&
                                data.college_campus !== undefined &&
                                data.college_campus !== null) ||
                              (data.ownership !== "" &&
                                data.ownership !== undefined &&
                                data.ownership !== null) ||
                              (data.university_name !== "" &&
                                data.university_name !== undefined &&
                                data.university_name !== null) ||
                              (data.college_admission !== "" &&
                                data.college_admission !== undefined &&
                                data.college_admission !== null) ||
                              (data.entrance_exam !== "" &&
                                data.entrance_exam !== undefined &&
                                data.entrance_exam !== null) ||
                              (data.tel !== "" &&
                                data.tel !== undefined &&
                                data.tel !== null) ||
                              (data.email !== "" &&
                                data.email !== undefined &&
                                data.email !== null) ||
                              (data.city !== "" &&
                                data.city !== undefined &&
                                data.city !== null) ||
                              (data.district_name !== "" &&
                                data.district_name !== undefined &&
                                data.district_name !== null) ||
                              (data.state_or_ut_name !== "" &&
                                data.state_or_ut_name !== undefined &&
                                data.state_or_ut_name !== null) ||
                              (data.college_website !== "" &&
                                data.college_website !== undefined &&
                                data.college_website !== null) ||
                              (data.college_rating !== "" &&
                                data.college_rating !== undefined &&
                                data.college_rating !== null) ||
                              (data.college_details_brochure !== "" &&
                                data.college_details_brochure !== undefined &&
                                data.college_details_brochure !== null) ? (
                                <div className="w-full flex justify-center items-center flex-col md:text-base sm:text-sm text-xs md:mb-4 mb-2">
                                  <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                                    About College
                                  </h2>
                                  <div className="md:w-11/12 w-full flex justify-start items-center flex-wrap bg-white md:p-4 p-2 md:rounded-md sm:rounded-sm rounded">
                                    Institute-Type
                                    {data.institute_type !== "" &&
                                    data.institute_type !== undefined &&
                                    data.institute_type !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Institute-Type:{" "}
                                        <span className="text-blue-700 pl-1 institute_type_preview">
                                          {data.institute_type}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Approvals */}
                                    {data.approvals !== "" &&
                                    data.approvals !== undefined &&
                                    data.approvals !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Approvals:{" "}
                                        <span className="text-blue-700 pl-1 courses_offered_preview">
                                          {data.approvals}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Courses Offered */}
                                    {data.courses_offered !== "" &&
                                    data.courses_offered !== undefined &&
                                    data.courses_offered !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        <span className="w-auto">
                                          Courses:{" "}
                                        </span>
                                        <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                                          <span className="w-auto">
                                            {data.courses_offered.split(",", 2)}{" "}
                                          </span>
                                          <u
                                            className="w-auto flex pl-1 cursor-pointer"
                                            onMouseEnter={() =>
                                              mouse_enter_for_courses_offered_func()
                                            }
                                            onMouseLeave={() =>
                                              mouse_leave_for_courses_offered_func()
                                            }
                                          >
                                            + many more
                                          </u>
                                        </span>{" "}
                                        <span
                                          className="w-auto flex justify-center items-center flex-wrap absolute md:ml-36 sm:ml-28 mt-16 text-purple-800 bg-gray-200 p-1 rounded border border-gray-200"
                                          style={{
                                            display:
                                              mouse_enter_for_courses_offered,
                                          }}
                                        >
                                          {data.courses_offered
                                            .split(" ")
                                            .map((item, index) => {
                                              if (index > 2) {
                                                return (
                                                  <span className="text-[0.7rem] m-[0.05rem]">
                                                    {item}
                                                  </span>
                                                );
                                              }
                                            })}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* College Campus */}
                                    {data.college_campus !== "" &&
                                    data.college_campus !== undefined &&
                                    data.college_campus !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Campus :{" "}
                                        <span className="text-blue-700 text-pretty pl-1 college_campus_preview">
                                          {data.college_campus}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Ownership */}
                                    {data.ownership !== "" &&
                                    data.ownership !== undefined &&
                                    data.ownership !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Ownership:{" "}
                                        <span className="text-blue-700 pl-1 institute_type_preview">
                                          {data.ownership}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* University Name */}
                                    {data.university_name !== "" &&
                                    data.university_name !== undefined &&
                                    data.university_name !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        University Name:{" "}
                                        <span className="text-blue-700 pl-1 university_name_preview">
                                          {data.university_name}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Admission */}
                                    {data.college_admission !== "" &&
                                    data.college_admission !== undefined &&
                                    data.college_admission !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Admission:
                                        <span className="text-blue-700 text-pretty pl-1 admission_preview">
                                          {data.college_admission}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Entrance-Exams */}
                                    {data.entrance_exam !== "" &&
                                    data.entrance_exam !== undefined &&
                                    data.entrance_exam !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        <span className="w-auto">
                                          Entrance-Exams:{" "}
                                        </span>
                                        <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                                          <span className="w-auto sm:flex hidden">
                                            {data.entrance_exam.split(",", 2)}{" "}
                                          </span>
                                          <span className="w-auto sm:hidden flex">
                                            {data.entrance_exam.split(",", 1)}{" "}
                                          </span>
                                          <u
                                            className="w-auto flex pl-1 cursor-pointer"
                                            onMouseEnter={() =>
                                              mouse_enter_for_entrance_exams_func()
                                            }
                                            onMouseLeave={() =>
                                              mouse_leave_for_entrance_exams_func()
                                            }
                                          >
                                            + many more
                                          </u>
                                        </span>{" "}
                                        <span
                                          className="w-auto flex justify-center items-center flex-wrap absolute md:ml-48 sm:ml-28 md:mt-16 text-purple-800 bg-gray-200 p-1 rounded border border-gray-200"
                                          style={{
                                            display:
                                              mouse_enter_for_entrance_exams,
                                          }}
                                        >
                                          {data.entrance_exam
                                            .split(" ")
                                            .map((item, index) => {
                                              if (index > 2) {
                                                return (
                                                  <span className="text-[0.7rem] m-[0.05rem]">
                                                    {item}
                                                  </span>
                                                );
                                              }
                                            })}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Contact */}
                                    {data.tel !== "" &&
                                    data.tel !== undefined &&
                                    data.tel !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Contact:
                                        <span className="text-blue-700 pl-1 contact_preview">
                                          {data.tel}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Email */}
                                    {data.email !== "" &&
                                    data.email !== undefined &&
                                    data.email !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Email:
                                        <span className="text-blue-700 pl-1 email_preview">
                                          {data.email}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* City */}
                                    {data.city !== "" &&
                                    data.city !== undefined &&
                                    data.city !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        City:
                                        <span className="text-blue-700 pl-1 city_preview">
                                          {data.city}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* District */}
                                    {data.district_name !== "" &&
                                    data.district_name !== undefined &&
                                    data.district_name !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        District:
                                        <span className="text-blue-700 pl-1 district_name_preview">
                                          {data.district_name}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* State/UT */}
                                    {data.state_or_ut_name !== "" &&
                                    data.state_or_ut_name !== undefined &&
                                    data.state_or_ut_name !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        State/UT Name:
                                        <span className="text-blue-700 pl-1 state_or_ut_name_preview">
                                          {data.state_or_ut_name}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Website */}
                                    {data.college_website !== "" &&
                                    data.college_website !== undefined &&
                                    data.college_website !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Website:
                                        <span className="text-blue-700 pl-1 website_preview">
                                          {data.college_website}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* College Rating */}
                                    {data.college_rating !== "" &&
                                    data.college_rating !== undefined &&
                                    data.college_rating !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        College Rating:
                                        <span className="text-blue-700 pl-1 college_rating_preview">
                                          {data.college_rating}
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                    {/* Brochure */}
                                    {data.college_details_brochure !== "" &&
                                    data.college_details_brochure !==
                                      undefined &&
                                    data.college_details_brochure !== null ? (
                                      <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                                        Brochure:
                                        <span className="bg-white hover:bg-red-600 text-red-600 hover:text-white ml-1 website_preview border border-red-600 rounded-sm">
                                          <a
                                            href={data.college_details_brochure}
                                            className="p-1"
                                            download
                                          >
                                            Download Brochure
                                          </a>
                                        </span>
                                      </h2>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}

                              {/* Description */}
                              {data.college_description !== "" &&
                              data.college_description !== undefined &&
                              data.college_description !== null ? (
                                <div className="w-full flex justify-center items-center flex-col md:mb-4 mb-2">
                                  <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                                    Description
                                  </h2>

                                  <div className="md:w-11/12 w-full flex justify-start items-center flex-row md:text-sm text-xs bg-white md:p-4 p-2 text-black md:rounded-md sm:rounded-sm rounded latest_news_and_events">
                                    <p
                                      className="w-full flex justify-start items-center flex-row text-black text-left my-1 college_description_read_less_preview"
                                      style={{ display: read_less }}
                                    >
                                      <span className="text-pretty">
                                        {data.college_description.slice(0, 200)}
                                        <span
                                          className="text-purple-700 cursor-pointer"
                                          onClick={read_more_btn}
                                        >
                                          ...Read More
                                        </span>
                                      </span>
                                    </p>

                                    <p
                                      className="w-full flex justify-start items-center flex-row text-black text-left my-1 college_description_read_less_preview"
                                      style={{ display: read_more }}
                                    >
                                      <span className="text-pretty">
                                        {data.college_description}
                                        <span
                                          className="text-purple-700 cursor-pointer"
                                          onClick={read_less_btn}
                                        >
                                          ...Read Less
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                " "
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-gray-200">
                  <Pre_Loader />
                </div>
              )
            ) : (
              <h1 className="text-gray-500">Search your query.</h1>
            )}
          </div>

          <div className="lg:w-[23%] hidden h-full lg:flex justify-center items-start lg:p-4 lg:pl-0">
            <div className="w-full h-auto lg:flex justify-center items-start flex-col">
              <div className="w-full h-auto flex justify-center items-center bg-white py-[1rem]">
                <h2
                  className="w-[90%] lg:flex hidden justify-center items-center md:text-sm text-xs bg-blue-800 text-white hover:bg-green-600 lg:font-bold md:font-semibold font-medium lg:p-2 p-1 lg:my-2 my-1 sm:rounded-sm rounded cursor-pointer"
                  onClick={showUserConsellingFunc}
                >
                  Career Conselling
                </h2>
              </div>

              <div
                className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 left-0 bg-[#000000ab] md:z-20"
                style={{ display: showUserConselling }}
              >
                <UserConselling
                  closeUserConsellingFunc={closeUserConsellingFunc}
                />
              </div>
              <div className="w-full h-auto lg:flex hidden lg:z-10">
                <Advertisement_1024px />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
