import { useParams, Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Advertisement_300px } from "../Advertisement/Advertisement_300px";
import { Advertisement_640px } from "../Advertisement/Advertisement_640px";
import { Advertisement_768px } from "../Advertisement/Advertisement_768px";
import { Advertisement_1024px } from "../Advertisement/Advertisement_1024px";

import { Career_Conselling_And_University_Previous_Exam_Question_Papers } from "../Career_Conselling_And_University_Previous_Exam_Question_Papers";
import { UserConselling } from "../UserConselling";
import { Pre_Loader } from "../Home/Pre_Loader";

export const Get_College_Full_Detail = () => {
  const [datas, setDatas] = useState("");
  const [mouse_enter_for_courses_offered, setMouse_enter_for_courses_offered] =
    useState("none");
  const [mouse_enter_for_entrance_exams, setMouse_enter_for_entrance_exams] =
    useState("none");
  const [read_less, setRead_less] = useState("flex");
  const [read_more, setRead_more] = useState("none");
  const [showUserConselling, setShowUserConselling] = useState("none");

  const { getcollegefulldetail } = useParams();

  const location = useLocation();
  const { text_from_All_Colleges, searching_from_All_Colleges, goto_url } =
    location.state;

  // console.log("text_from_All_Colleges: ", text_from_All_Colleges);
  // console.log("searching_from_All_Colleges: ", searching_from_All_Colleges);
  // console.log("goto_url: ", goto_url);

  useEffect(() => {
    try {
      fetch("/api/getting_List_of_Colleges")
        .then((res) => res.json())
        .then((data) => {
          // Get the College
          const SingleCollege = data.find(
            (item) => item.name === String(getcollegefulldetail)
          );
          setDatas(SingleCollege);
        });
    } catch (error) {
      console.log(
        "There is an error in UpdatedBlogs.jsx in client version",
        error
      );
    }
  }, []);

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
    <div className="w-full flex justify-center items-center flex-col bg-gray-300 lg:mt-12 mt-[2.4rem]">
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
            <div className="w-auto flex justify-center items-center">
              <Link
                to={goto_url}
                state={searching_from_All_Colleges}
                className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#000]"
              >
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
                {text_from_All_Colleges}
              </Link>
            </div>
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
                {datas.name}
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

      <div className="w-full bg-white md:border md:border-gray-200">
        <div className="w-full md:flex hidden justify-start items-center text-xl font-bold m-4">
          <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
            College: {datas.name}
          </h1>
        </div>
        <div className="w-full md:hidden flex justify-center items-center text-xl font-bold sm:mx-2 mx-1 sm:my-4 my-2">
          <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
            College: {datas.name}
          </h1>
        </div>
      </div>

      <div className="w-[100%] h-auto flex justify-between items-start flex-row lg:px-3 bg-[#e5e7eb]">
        <div className="lg:w-[75%] w-full flex justify-center items-center flex-col bg-transparent lg:py-4 md:py-3 sm:py-2 py-1">
          {datas.name ? (
            <div
              className="w-[100%] flex justify-center items-center flex-col bg-blue-200 lg:p-4 p-2"
              key={datas._id}
            >
              <div className="w-[100%] flex justify-between items-center flex-col">
                {datas.cover_image ? (
                  <img
                    className="w-full lg:h-48 md:h-36 sm:h-24 h-20 md:flex hidden justify-center items-center object-fill bg-white aspect-square"
                    src={datas.cover_image}
                    alt="Get College Full Detail on Eduweb Online Website"
                  />
                ) : (
                  ""
                )}

                <div className="w-full flex justify-center md:items-start items-center flex-row relative lg:top-2 bottom-3 md:mt-3 mt-4">
                  <div className="w-11/12 h-full flex md:justify-start justify-center items-center text-center rounded-md">
                    {datas.profile_image !== "" ||
                    datas.profile_image !== undefined ||
                    datas.profile_image !== null ? (
                      <div className="md:w-20 sm:w-16 w-12 md:flex hidden justify-center items-center md:p-1 bg-yellow-400 mr-5 rounded-md">
                        <img
                          src={datas.profile_image}
                          className="w-full object-contain aspect-square bg-white rounded-md"
                          alt="Get College Full Detail on Eduweb Online Website"
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <h1 className="w-auto flex justify-start items-center xl:text-2xl lg:text-xl md:text-base text-sm font-bold">
                      {datas.name === "" ||
                      datas.name === undefined ||
                      datas.name === null ? (
                        <p>N/A</p>
                      ) : (
                        datas.name
                      )}
                      {datas.college_short_name === "" ||
                      datas.college_short_name === undefined ||
                      datas.college_short_name === null ? (
                        <p>N/A</p>
                      ) : (
                        <span className=" md:flex hidden pl-1">
                          ({datas.college_short_name})
                        </span>
                      )}
                    </h1>
                    {datas.verification_process !== "false" ? (
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
                    {datas.latest_news_and_events ? (
                      <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                        <div className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                          Latest News and Events
                        </div>

                        <div
                          className="md:w-11/12 w-full md:flex hidden justify-start items-start flex-col text-black md:text-sm text-xs bg-white md:p-2 sm:mb-3 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                          style={{ display: "0.8rem" }}
                        >
                          <ul className="ml-3">
                            {datas.latest_news_and_events
                              .split("++ ")
                              .map((item) => {
                                return <li className="p-[0.8rem]">- {item}</li>;
                              })}
                          </ul>
                        </div>

                        <div
                          className="md:w-11/12 w-full md:hidden flex justify-start items-start flex-col text-black md:text-sm text-xs bg-white p-2 mb-2 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                          style={{ display: "0.7rem" }}
                        >
                          <ul className="ml-1">
                            {datas.latest_news_and_events
                              .split("++ ")
                              .map((item) => {
                                return <li className="p-[0.4rem]">- {item}</li>;
                              })}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {/* Rank */}
                    {(datas.engineering_rank !== "" &&
                      datas.engineering_rank !== undefined &&
                      datas.engineering_rank !== null) ||
                    (datas.medical_rank !== "" &&
                      datas.medical_rank !== undefined &&
                      datas.medical_rank !== null) ||
                    (datas.law_rank !== "" &&
                      datas.law_rank !== undefined &&
                      datas.law_rank !== null) ||
                    (datas.management_rank !== "" &&
                      datas.management_rank !== undefined &&
                      datas.management_rank !== null) ||
                    (datas.fashion_design_rank !== "" &&
                      datas.fashion_design_rank !== undefined &&
                      datas.fashion_design_rank !== null) ||
                    (datas.pharmacy_rank !== "" &&
                      datas.pharmacy_rank !== undefined &&
                      datas.pharmacy_rank !== null) ? (
                      <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                        <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                          College Rank
                        </h2>

                        <div className="md:w-11/12 w-full flex justify-start items-center md:flex-row flex-wrap bg-white text-red-700 gap-1 p-2 md:rounded-md sm:rounded-sm rounded">
                          {datas.engineering_rank !== "" &&
                          datas.engineering_rank !== undefined &&
                          datas.engineering_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Engineering</h1>
                              <h1>#{datas.engineering_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.medical_rank !== "" &&
                          datas.medical_rank !== undefined &&
                          datas.medical_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Medical</h1>
                              <h1>#{datas.medical_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.law_rank !== "" &&
                          datas.law_rank !== undefined &&
                          datas.law_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Law</h1>
                              <h1>#{datas.law_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.management_rank !== "" &&
                          datas.management_rank !== undefined &&
                          datas.management_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Management</h1>
                              <h1>#{datas.management_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.fashion_design_rank !== "" &&
                          datas.fashion_design_rank !== undefined &&
                          datas.fashion_design_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Fashion Design</h1>
                              <h1>#{datas.fashion_design_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.pharmacy_rank !== "" &&
                          datas.pharmacy_rank !== undefined &&
                          datas.pharmacy_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Pharmacy</h1>
                              <h1>#{datas.pharmacy_rank}</h1>
                            </div>
                          ) : (
                            ""
                          )}

                          {datas.overall_rank !== "" &&
                          datas.engineering_rank !== undefined &&
                          datas.engineering_rank !== null ? (
                            <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                              <h1>Overall</h1>
                              <h1>#{datas.overall_rank}</h1>
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
                    {(datas.institute_type !== "" &&
                      datas.institute_type !== undefined &&
                      datas.institute_type !== null) ||
                    (datas.approvals !== "" &&
                      datas.approvals !== undefined &&
                      datas.approvals !== null) ||
                    (datas.courses_offered !== "" &&
                      datas.courses_offered !== undefined &&
                      datas.courses_offered !== null) ||
                    (datas.college_campus !== "" &&
                      datas.college_campus !== undefined &&
                      datas.college_campus !== null) ||
                    (datas.ownership !== "" &&
                      datas.ownership !== undefined &&
                      datas.ownership !== null) ||
                    (datas.university_name !== "" &&
                      datas.university_name !== undefined &&
                      datas.university_name !== null) ||
                    (datas.college_admission !== "" &&
                      datas.college_admission !== undefined &&
                      datas.college_admission !== null) ||
                    (datas.entrance_exam !== "" &&
                      datas.entrance_exam !== undefined &&
                      datas.entrance_exam !== null) ||
                    (datas.tel !== "" &&
                      datas.tel !== undefined &&
                      datas.tel !== null) ||
                    (datas.email !== "" &&
                      datas.email !== undefined &&
                      datas.email !== null) ||
                    (datas.city !== "" &&
                      datas.city !== undefined &&
                      datas.city !== null) ||
                    (datas.district_name !== "" &&
                      datas.district_name !== undefined &&
                      datas.district_name !== null) ||
                    (datas.state_or_ut_name !== "" &&
                      datas.state_or_ut_name !== undefined &&
                      datas.state_or_ut_name !== null) ||
                    (datas.college_website !== "" &&
                      datas.college_website !== undefined &&
                      datas.college_website !== null) ||
                    (datas.college_rating !== "" &&
                      datas.college_rating !== undefined &&
                      datas.college_rating !== null) ||
                    (datas.college_details_brochure !== "" &&
                      datas.college_details_brochure !== undefined &&
                      datas.college_details_brochure !== null) ? (
                      <div className="w-full flex justify-center items-center flex-col md:text-base sm:text-sm text-xs md:mb-4 mb-2">
                        <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                          About College
                        </h2>
                        <div className="md:w-11/12 w-full flex justify-start items-center flex-wrap bg-white md:p-4 p-2 md:rounded-md sm:rounded-sm rounded">
                          {/* Institute-Type */}
                          {datas.institute_type !== "" &&
                          datas.institute_type !== undefined &&
                          datas.institute_type !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Institute-Type:{" "}
                              <span className="text-blue-700 pl-1 institute_type_preview">
                                {datas.institute_type}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Approvals */}
                          {datas.approvals !== "" &&
                          datas.approvals !== undefined &&
                          datas.approvals !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Approvals:{" "}
                              <span className="text-blue-700 pl-1 courses_offered_preview">
                                {datas.approvals}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Courses Offered */}
                          {datas.courses_offered !== "" &&
                          datas.courses_offered !== undefined &&
                          datas.courses_offered !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              <span className="w-auto">Courses: </span>
                              <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                                <span className="w-auto">
                                  {datas.courses_offered.split(",", 2)}{" "}
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
                                  display: mouse_enter_for_courses_offered,
                                }}
                              >
                                {datas.courses_offered
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
                          {datas.college_campus !== "" &&
                          datas.college_campus !== undefined &&
                          datas.college_campus !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Campus :{" "}
                              <span className="text-blue-700 text-pretty pl-1 college_campus_preview">
                                {datas.college_campus}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Ownership */}
                          {datas.ownership !== "" &&
                          datas.ownership !== undefined &&
                          datas.ownership !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Ownership:{" "}
                              <span className="text-blue-700 pl-1 institute_type_preview">
                                {datas.ownership}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* University Name */}
                          {datas.university_name !== "" &&
                          datas.university_name !== undefined &&
                          datas.university_name !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              University Name:{" "}
                              <span className="text-blue-700 pl-1 university_name_preview">
                                {datas.university_name}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Admission */}
                          {datas.college_admission !== "" &&
                          datas.college_admission !== undefined &&
                          datas.college_admission !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Admission:
                              <span className="text-blue-700 text-pretty pl-1 admission_preview">
                                {datas.college_admission}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Entrance-Exams */}
                          {datas.entrance_exam !== "" &&
                          datas.entrance_exam !== undefined &&
                          datas.entrance_exam !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              <span className="w-auto">Entrance-Exams: </span>
                              <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                                <span className="w-auto sm:flex hidden">
                                  {datas.entrance_exam.split(",", 2)}{" "}
                                </span>
                                <span className="w-auto sm:hidden flex">
                                  {datas.entrance_exam.split(",", 1)}{" "}
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
                                  display: mouse_enter_for_entrance_exams,
                                }}
                              >
                                {datas.entrance_exam
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
                          {datas.tel !== "" &&
                          datas.tel !== undefined &&
                          datas.tel !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Contact:
                              <span className="text-blue-700 pl-1 contact_preview">
                                {datas.tel}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Email */}
                          {datas.email !== "" &&
                          datas.email !== undefined &&
                          datas.email !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Email:
                              <span className="text-blue-700 pl-1 email_preview">
                                {datas.email}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* City */}
                          {datas.city !== "" &&
                          datas.city !== undefined &&
                          datas.city !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              City:
                              <span className="text-blue-700 pl-1 city_preview">
                                {datas.city}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* District */}
                          {datas.district_name !== "" &&
                          datas.district_name !== undefined &&
                          datas.district_name !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              District:
                              <span className="text-blue-700 pl-1 district_name_preview">
                                {datas.district_name}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* State/UT */}
                          {datas.state_or_ut_name !== "" &&
                          datas.state_or_ut_name !== undefined &&
                          datas.state_or_ut_name !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              State/UT Name:
                              <span className="text-blue-700 pl-1 state_or_ut_name_preview">
                                {datas.state_or_ut_name}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Website */}
                          {datas.college_website !== "" &&
                          datas.college_website !== undefined &&
                          datas.college_website !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Website:
                              <span className="text-blue-700 pl-1 website_preview">
                                {datas.college_website}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* College Rating */}
                          {datas.college_rating !== "" &&
                          datas.college_rating !== undefined &&
                          datas.college_rating !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              College Rating:
                              <span className="text-blue-700 pl-1 college_rating_preview">
                                {datas.college_rating}
                              </span>
                            </h2>
                          ) : (
                            ""
                          )}

                          {/* Brochure */}
                          {datas.college_details_brochure !== "" &&
                          datas.college_details_brochure !== undefined &&
                          datas.college_details_brochure !== null ? (
                            <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                              Brochure:
                              <span className="bg-white hover:bg-red-600 text-red-600 hover:text-white ml-1 website_preview border border-red-600 rounded-sm">
                                <a
                                  href={datas.college_details_brochure}
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
                    {datas.college_description !== "" &&
                    datas.college_description !== undefined &&
                    datas.college_description !== null ? (
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
                              {datas.college_description.slice(0, 200)}
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
                              {datas.college_description}
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
          ) : (
            <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-[#00000042]">
              <Pre_Loader />
            </div>
          )}
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
  );
};
