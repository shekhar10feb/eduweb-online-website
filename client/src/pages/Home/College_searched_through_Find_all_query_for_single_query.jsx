import React, { useState } from "react";

export const College_searched_through_Find_all_query_for_single_query = ({
  filteredData,
  Pre_Loader,
  mouse_enter_for_courses_offered,
  mouse_enter_for_entrance_exams,
  mouse_enter_for_courses_offered_func,
  mouse_leave_for_courses_offered_func,
  mouse_enter_for_entrance_exams_func,
  mouse_leave_for_entrance_exams_func,
}) => {
  const [readMoreDescription, setReadMoreDescription] = useState(false);
  const [readMoreComment, setReadMoreComment] = useState(false);

  let description_LessReading = filteredData?.college_description.slice(0, 400);
  let description_ContinueReading = filteredData?.college_description;

  return (
    <section className="w-full flex justify-center items-center">
      {filteredData.name ? (
        <div className="w-[100%] flex justify-center items-center flex-col">
          <div className="w-[100%] flex justify-between items-center flex-col lg:p-4 p-2l bg-blue-300">
            {filteredData.cover_image ? (
              <img
                className="w-full lg:h-48 md:h-36 sm:h-24 h-20 md:flex hidden justify-center items-center object-fill bg-white aspect-square"
                src={filteredData.cover_image}
                alt="College search on Eduweb Online Website"
              />
            ) : (
              ""
            )}

            <div className="w-full flex justify-center md:items-start items-center flex-row relative lg:top-2 bottom-3 md:mt-3 mt-4">
              <div className="w-11/12 h-full flex md:justify-start justify-center items-center text-center rounded-md">
                {filteredData.profile_image ? (
                  <div className="md:w-20 sm:w-16 w-12 md:flex hidden justify-center items-center md:p-1 bg-yellow-400 mr-5 rounded-md">
                    <img
                      src={filteredData.profile_image}
                      className="w-full object-contain aspect-square bg-white rounded-md"
                      alt="College search on Eduweb Online Website"
                    />
                  </div>
                ) : (
                  ""
                )}

                <h1 className="w-auto flex justify-start items-center xl:text-2xl lg:text-xl md:text-base text-sm font-bold">
                  {filteredData.name ? filteredData.name : <p>N/A</p>}
                  {filteredData.college_short_name ? (
                    <span className=" md:flex hidden pl-1">
                      ({filteredData.college_short_name})
                    </span>
                  ) : (
                    <p>N/A</p>
                  )}
                </h1>
              </div>
            </div>

            <div className="w-full flex justify-center items-center flex-col">
              <div className="w-full flex justify-start items-start flex-col lg:mt-6 md:mt-2">
                {/* Latest News and Events */}
                {filteredData.latest_news_and_events ? (
                  <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                    <div className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                      Latest News and Events
                    </div>

                    <div
                      className="md:w-11/12 w-full md:flex hidden justify-start items-start flex-col text-black md:text-sm text-xs bg-white md:p-2 sm:mb-3 md:rounded-md sm:rounded-sm rounded latest_news_and_events"
                      style={{ display: "0.8rem" }}
                    >
                      <ul className="ml-3">
                        {filteredData.latest_news_and_events
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
                        {filteredData.latest_news_and_events
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
                {filteredData.engineering_rank ||
                filteredData.medical_rank ||
                filteredData.law_rank ||
                filteredData.management_rank ||
                filteredData.fashion_design_rank ||
                filteredData.pharmacy_rank ? (
                  <div className="w-full flex justify-start items-center flex-col md:mb-4 mb-2">
                    <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                      College Rank
                    </h2>

                    <div className="md:w-11/12 w-full flex justify-start items-center md:flex-row flex-wrap bg-white text-red-700 gap-1 p-2 md:rounded-md sm:rounded-sm rounded">
                      {filteredData.engineering_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Engineering</h1>
                          <h1>#{filteredData.engineering_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.medical_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Medical</h1>
                          <h1>#{filteredData.medical_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.law_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Law</h1>
                          <h1>#{filteredData.law_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.management_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Management</h1>
                          <h1>#{filteredData.management_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.fashion_design_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Fashion Design</h1>
                          <h1>#{filteredData.fashion_design_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.pharmacy_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Pharmacy</h1>
                          <h1>#{filteredData.pharmacy_rank}</h1>
                        </div>
                      ) : (
                        ""
                      )}

                      {filteredData.overall_rank ? (
                        <div className="w-28 flex justify-start items-center flex-col md:text-sm text-xs sm:rounded-sm rounded latest_news_and_events border border-red-700">
                          <h1>Overall</h1>
                          <h1>#{filteredData.overall_rank}</h1>
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
                {filteredData.institute_type ||
                filteredData.approvals ||
                filteredData.courses_offered ||
                filteredData.college_campus ||
                filteredData.ownership ||
                filteredData.university_name ||
                filteredData.college_admission ||
                filteredData.entrance_exam ||
                filteredData.tel ||
                filteredData.email ||
                filteredData.city ||
                filteredData.district_name ||
                filteredData.state_or_ut_name ||
                filteredData.college_website ||
                filteredData.college_rating ||
                filteredData.college_details_brochure ? (
                  <div className="w-full flex justify-center items-center flex-col md:text-base sm:text-sm text-xs md:mb-4 mb-2">
                    <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                      About College
                    </h2>
                    <div className="md:w-11/12 w-full flex justify-start items-center flex-wrap bg-white md:p-4 p-2 md:rounded-md sm:rounded-sm rounded">
                      {/* Institute-Type */}
                      {filteredData.institute_type ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Institute-Type:{" "}
                          <span className="text-blue-700 pl-1 institute_type_preview">
                            {filteredData.institute_type}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Approvals */}
                      {filteredData.approvals ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Approvals:{" "}
                          <span className="text-blue-700 pl-1 courses_offered_preview">
                            {filteredData.approvals}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Courses Offered */}
                      {filteredData.courses_offered ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          <span className="w-auto">Courses: </span>
                          <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                            <span className="w-auto">
                              {filteredData.courses_offered.split(",", 2).join(', ')}{" "}
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
                            {filteredData.courses_offered
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
                      {filteredData.college_campus ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Campus :{" "}
                          <span className="text-blue-700 text-pretty pl-1 college_campus_preview">
                            {filteredData.college_campus}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Ownership */}
                      {filteredData.ownership ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Ownership:{" "}
                          <span className="text-blue-700 pl-1 institute_type_preview">
                            {filteredData.ownership}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* University Name */}
                      {filteredData.university_name ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          University Name:{" "}
                          <span className="text-blue-700 pl-1 university_name_preview">
                            {filteredData.university_name}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Admission */}
                      {filteredData.college_admission ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Admission:
                          <span className="text-blue-700 text-pretty pl-1 admission_preview">
                            {filteredData.college_admission}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Entrance-Exams */}
                      {filteredData.entrance_exam ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          <span className="w-auto">Entrance-Exams: </span>
                          <span className="w-auto flex justify-start items-center flex-row text-blue-700 pl-1">
                            <span className="w-auto sm:flex hidden">
                              {filteredData.entrance_exam.split(",", 2).join(', ')}{" "}
                            </span>
                            <span className="w-auto sm:hidden flex">
                              {filteredData.entrance_exam.split(",", 1).join(', ')}{" "}
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
                            {filteredData.entrance_exam
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
                      {filteredData.tel ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Contact:
                          <span className="text-blue-700 pl-1 contact_preview">
                            {filteredData.tel}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Email */}
                      {filteredData.email ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Email:
                          <span className="text-blue-700 pl-1 email_preview">
                            {filteredData.email}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* City */}
                      {filteredData.city ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          City:
                          <span className="text-blue-700 pl-1 city_preview">
                            {filteredData.city}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* District */}
                      {filteredData.district_name ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          District:
                          <span className="text-blue-700 pl-1 district_name_preview">
                            {filteredData.district_name}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* State/UT */}
                      {filteredData.state_or_ut_name ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          State/UT Name:
                          <span className="text-blue-700 pl-1 state_or_ut_name_preview">
                            {filteredData.state_or_ut_name}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Website */}
                      {filteredData.college_website ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Website:
                          <span className="text-blue-700 pl-1 website_preview">
                            {filteredData.college_website}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* College Rating */}
                      {filteredData.college_rating ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          College Rating:
                          <span className="text-blue-700 pl-1 college_rating_preview">
                            {filteredData.college_rating}
                          </span>
                        </h2>
                      ) : (
                        ""
                      )}

                      {/* Brochure */}
                      {filteredData.college_details_brochure ? (
                        <h2 className="sm:w-1/2 w-full flex jutify-start items-center text-left text-black md:text-sm text-xs my-1 sm:px-1">
                          Brochure:
                          <span className="bg-white hover:bg-red-600 text-red-600 hover:text-white ml-1 website_preview border border-red-600 rounded-sm">
                            <a
                              href={filteredData.college_details_brochure}
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
                {filteredData.college_description ? (
                  <div className="w-full flex justify-center items-center flex-col md:mb-4 mb-2">
                    <h2 className="md:w-11/12 w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                      Description
                    </h2>

                    <div className="md:w-11/12 w-full flex justify-start items-center flex-row md:text-sm text-xs bg-white md:p-4 p-2 text-black md:rounded-md sm:rounded-sm rounded latest_news_and_events">
                      <p className="w-full md:text-sm text-xs text-justify text-pretty tracking-wide line-clamp-auto text-gray-600 md:px-2 p-1">
                        {readMoreDescription
                          ? `${description_ContinueReading}...`
                          : `${description_LessReading}...`}
                        <button
                          type="button"
                          className="text-purple-500"
                          onClick={() =>
                            setReadMoreDescription(!readMoreDescription)
                          }
                        >
                          {readMoreDescription
                            ? "Less Reading"
                            : "Continue Reading"}
                        </button>
                      </p>
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>
            </div>
          </div>

          {filteredData.college_comment_related.length > 0 ? (
            <article className="w-full flex justify-center items-center md:mt-4 mt-2">
              <div className="md:w-11/12 w-full flex justify-center items-center flex-col lg:p-4 p-2 md:mb-4 mb-2 md:rounded-md sm:rounded-sm rounded">
                <h3 className="w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                  Reviews by the users <span className="font-light md:text-sm text-xs">(Please Register/Login to give review)</span>:
                </h3>
                <div className="w-full grid place-items-center bg-gray-100 md:rounded-md sm:rounded-sm rounded">
                  <ul className="w-full flex justify-center items-center flex-col">
                    {filteredData.college_comment_related.map((item1) => {
                      let comment_LessReading =
                        item1?.comment_about_college.slice(0, 100);
                      let comment_ContinueReading =
                        item1?.comment_about_college;

                      return (
                        <li
                          className="w-full grid place-items-start bg-white p-4 pl-4 mb-2 md:rounded-md sm:rounded-sm rounded"
                          key={item1._id}
                        >
                          <div className="w-full flex justify-between items-center sm:text-sm text-xs md:font-semibold font-medium">
                            <p>{item1.username}</p>
                            <p className="md:text-sm text-xs text-gray-600">
                              Rating: {item1.college_rating}
                            </p>
                          </div>
                          <span className="md:text-sm text-xs text-gray-600 md:mt-2 mt-1">
                            {readMoreComment
                              ? `${comment_ContinueReading}...`
                              : `${comment_LessReading}...`}
                            <button
                              type="button"
                              className="text-purple-500"
                              onClick={() =>
                                setReadMoreComment(!readMoreComment)
                              }
                            >
                              {readMoreComment
                                ? "Less Reading"
                                : "Continue Reading"}
                            </button>
                          </span>
                          <div className="w-full flex justify-end items-center">
                            <p className="text-xs text-gray-400">
                              Posted on: {item1.date_created.slice(0, 10)}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>
          ) : (
            <article className="w-full flex justify-center items-center md:mt-4 mt-2">
              <div className="md:w-11/12 w-full flex justify-center items-center flex-col lg:p-4 md:mb-4 mb-2 md:rounded-md sm:rounded-sm rounded">
                <h3 className="w-full sm:text-sm text-xs md:font-semibold font-medium text-left my-1">
                  Reviews by the users <span className="font-light md:text-sm text-xs">(Please Register/Login to give review)</span>:
                </h3>
                <div className="w-full grid place-items-center bg-gray-100 md:rounded-md sm:rounded-sm rounded">
                  <p className="italic text-gray-700 font-light md:text-sm text-xs my-10">
                    Sorry, no reviews by users!
                  </p>
                </div>
              </div>
            </article>
          )}
        </div>
      ) : (
        <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-[#00000042]">
          <Pre_Loader />
        </div>
      )}
    </section>
  );
};
