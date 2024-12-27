import React, { useState, useEffect } from "react";

export const Format_For_FIND_Colleges = ({ data, field_rank, field }) => {
  const [mouse_enter_for_courses_offered, setMouse_enter_for_courses_offered] =
    useState("none");
  const [mouse_enter_for_entrance_exams, setMouse_enter_for_entrance_exams] =
    useState("none");
  const [readMore, setReadMore] = useState(false);

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

  if (field_rank) {
    return (
      <article className="w-[100%] flex justify-between items-center flex-col">
        {data.cover_image ? (
          <img
            className="w-full lg:h-48 md:h-36 sm:h-24 h-20 md:flex hidden justify-center items-center object-fill bg-white aspect-square"
            src={data.cover_image}
            alt="Find Colleges Eduweb Online Website"
          />
        ) : (
          ""
        )}

        <div className="w-full flex justify-center md:items-start items-center flex-row relative lg:top-2 bottom-3 md:mt-3 mt-4">
          <div className="w-11/12 h-full flex md:justify-start justify-center items-center text-center rounded-md">
            {data.profile_image ? (
              <div className="md:w-20 sm:w-16 w-12 md:flex hidden justify-center items-center md:p-1 bg-yellow-400 mr-5 rounded-md">
                <img
                  src={data.profile_image}
                  className="w-full object-contain aspect-square bg-white rounded-md"
                  alt=" Find Colleges Eduweb Online Website"
                />
              </div>
            ) : (
              ""
            )}

            <h1 className="w-auto flex justify-start items-center xl:text-2xl lg:text-xl md:text-base text-sm font-bold">
              {data.name ? data.name : <p>N/A</p>}
              {data.college_short_name ? (
                <span className=" md:flex hidden pl-1">
                  ({data.college_short_name})
                </span>
              ) : (
                ""
              )}
            </h1>
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
                    {data.latest_news_and_events.split("++ ").map((item) => {
                      return <li className="p-[0.8rem]">- {item}</li>;
                    })}
                  </ul>
                </div>

                <div
                  className="md:w-11/12 w-full md:hidden flex justify-start items-start flex-col text-black md:text-sm text-xs bg-white p-2 mb-2 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                  style={{ display: "0.7rem" }}
                >
                  <ul className="ml-1">
                    {data.latest_news_and_events.split("++ ").map((item) => {
                      return <li className="p-[0.4rem]">- {item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* Rank */}
            {field_rank || data.overall_rank ? (
              <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                  College Rank
                </h2>

                <div className="md:w-11/12 w-full flex justify-start items-center md:flex-row flex-wrap bg-white text-red-700 gap-1 p-2 md:rounded-md sm:rounded-sm rounded">
                  {field_rank ? (
                    <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                      <h1>{field}</h1>
                      <h1>#{field_rank}</h1>
                    </div>
                  ) : (
                    ""
                  )}

                  {data.overall_rank ? (
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
            {data.institute_type ||
            data.approvals ||
            data.courses_offered ||
            data.college_campus ||
            data.ownership ||
            data.university_name ||
            data.college_admission ||
            data.entrance_exam ||
            data.tel ||
            data.email ||
            data.city ||
            data.district_name ||
            data.state_or_ut_name ||
            data.college_website ||
            data.college_rating ||
            data.college_details_brochure ? (
              <div className="w-full flex justify-center items-center flex-col md:text-base sm:text-sm text-xs md:mb-4 mb-2">
                <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                  About College
                </h2>
                <div className="md:w-11/12 w-full flex justify-start items-center flex-wrap bg-white md:p-4 p-2 md:rounded-md sm:rounded-sm rounded">
                  Institute-Type
                  {data.institute_type ? (
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
                  {data.approvals ? (
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
                  {data.courses_offered ? (
                    <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                      <span className="w-auto">Courses: </span>
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
                          display: mouse_enter_for_courses_offered,
                        }}
                      >
                        {data.courses_offered.split(" ").map((item, index) => {
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
                  {data.college_campus ? (
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
                  {data.ownership ? (
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
                  {data.university_name ? (
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
                  {data.college_admission ? (
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
                  {data.entrance_exam ? (
                    <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                      <span className="w-auto">Entrance-Exams: </span>
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
                          display: mouse_enter_for_entrance_exams,
                        }}
                      >
                        {data.entrance_exam.split(" ").map((item, index) => {
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
                  {data.tel ? (
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
                  {data.email ? (
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
                  {data.city ? (
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
                  {data.district_name ? (
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
                  {data.state_or_ut_name ? (
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
                  {data.college_website ? (
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
                  {data.college_rating ? (
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
                  {data.college_details_brochure ? (
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
            {data.college_description ? (
              <div className="w-full flex justify-center items-center flex-col md:mb-4 mb-2">
                <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                  Description
                </h2>

                <div className="md:w-11/12 w-full flex justify-start items-center flex-row md:text-sm text-xs bg-white md:p-4 p-2 text-black md:rounded-md sm:rounded-sm rounded">
                  <p className="w-full md:text-sm text-xs text-justify text-black md:px-2 p-1">
                    {readMore
                      ? `${data.college_description}...`
                      : `${data.college_description.substring(0, 200)}...`}

                    <button
                      type="button"
                      className="text-purple-700 cursor-pointer"
                      onClick={() => setReadMore(!readMore)}
                    >
                      {readMore ? "Less Reading" : "Continue Reading"}
                    </button>
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </article>
    );
  }
};
