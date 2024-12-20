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

export const BTECH_State_wise_Colleges = () => {
  const [datas, setDatas] = useState([]);
  const [state, setState] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [search_state, setSearch_state] = useState("");
  const [showUserConselling, setShowUserConselling] = useState("none");
  const [displayErrMsg, setDisplayErrMsg] = useState("hidden");
  const [filteredDatas, setFilteredDatas] = useState([]);
  const getting_yes_or_no_in_arr = [];

  // useEffect(() => {
  //   try {
  //     axios.get("/getting_List_of_Colleges").then((data) => {
  //       const approvedBlogs = data?.data.sort((a, b) =>
  //         +a.engineering_rank > +b.engineering_rank ? 1 : -1
  //       );
  //       setDatas(approvedBlogs);
  //       console.log(approvedBlogs);
  //     });
  //   } catch (error) {
  //     return null;
  //   }
  // }, []);

  const uppercase_state = state.toUpperCase();
  console.log("Working in the starting!");
  // console.log(uppercase_state);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      axios.get("/api/getting_List_of_Colleges").then((data) => {
        // setDatas(data?.data);
        const approvedBlogs = data?.data.sort((a, b) =>
          +a.engineering_rank > +b.engineering_rank ? 1 : -1
        );
        setDatas(approvedBlogs);
      });
    } catch (error) {
      return null;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchBlogs();
    } catch (error) {
      return null;
    }
  }, []);

  // console.log(datas);

  // useEffect(() => {
  //   const filteredData = datas.filter(
  //     (item) =>
  //       item.writtenBlogsByAuthor.filter(
  //         (field) => field.blogCategory === "About Engineering"
  //       ).length !== 0
  //   );

  //   setFilteredDatas(filteredData);
  // }, [datas]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (
    //   uppercase_state !== "" &&
    //   uppercase_state !== undefined &&
    //   uppercase_state !== null
    // ) {
    //   {
    //     Array.isArray(datas)
    //       ? datas.map((data) => {
    //           if (uppercase_state === data.state_or_ut_name.toUpperCase()) {
    //             getting_yes_or_no_in_arr.push("yes");
    //             console.log("data.state_or_ut_name: ", data.state_or_ut_name);
    //           } else {
    //             getting_yes_or_no_in_arr.push("no");
    //             console.log("Not working!");
    //           }
    //         })
    //       : "";
    //   }
    // }

    // if (getting_yes_or_no_in_arr.includes("yes")) {
    //   setDisplayErrMsg("hidden");
    //   setSearch_state(uppercase_state);
    // } else if (getting_yes_or_no_in_arr.includes("no")) {
    //   setDisplayErrMsg("visible");
    //   setTimeout(() => {
    //     setDisplayErrMsg("hidden");
    //   }, 2000);
    // }

    // useEffect(() => {
    // if (uppercase_state && datas) {
    //   const filteredData =
    //     datas.filter(
    //       (field) =>
    //         field.state_or_ut_name.toUpperCase() === uppercase_state
    //     ).length !== 0;

    //   setFilteredDatas(filteredData);
    // }
    // }, [datas]);

  };
  console.log('filteredDatas: ', filteredDatas);

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
                State-wise Engineering Colleges
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

      <div className="w-full flex justify-between items-center sm:flex-row flex-col bg-white md:border md:border-gray-200">
        <div className="w-auto md:flex hidden justify-start items-center text-xl font-bold m-4">
          <h1 className="w-full lg:text-lg md:text-base underline text-wrap">
            State-wise Engineering Colleges
          </h1>
        </div>
        <div className="w-auto md:hidden flex justify-center items-center text-xl font-bold sm:mx-2 mx-1 sm:my-4 my-2">
          <h1 className="w-full text-center sm:text-base text-sm underline text-wrap">
            State-wise Engineering Colleges
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
              value={state}
              placeholder="Search your State/UT"
              onChange={(e) => {
                setState(e.currentTarget.value);
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

      <div className="w-full flex justify-center items-start">
        <div className="lg:w-[77%] w-full h-full flex justify-start items-start lg:flex-row flex-col bg-gray-300">
          <div className="w-full flex justify-center items-center flex-col lg:p-4 p-1">
            <div className="w-full flex justify-center items-center flex-row">
              {search_state !== "" ? (
                <div className="w-full flex justify-center items-center flex-row">
                  <div className="w-full flex justify-center items-center flex-col">
                    {Array.isArray(datas) ? (
                      datas.map((data) => {
                        // State name matching mechanism
                        if (
                          data.state_or_ut_name.toUpperCase() === search_state
                        ) {
                          if (data.engineering_rank) {
                            if (
                              data.name ||
                              data.profile_image ||
                              data.college_website ||
                              data.district_name ||
                              data.courses_offered
                            ) {
                              return (
                                <div
                                  className="w-full flex justify-start items-start flex-row bg-white md:mb-2 mb-1 md:p-2 p-1 hover:bg-gray-100 cursor-pointer"
                                  key={data._id}
                                >
                                  <Link
                                    to={`/engineering_state_wise_colleges/${data.name}`}
                                    state={{
                                      text_from_All_Colleges:
                                        "State-wise Engineering Colleges",
                                      searching_from_All_Colleges:
                                        uppercase_state,
                                      goto_url:
                                        "/engineering_state_wise_colleges",
                                    }}
                                    className="w-[100%] flex justify-start items-start flex-row p-1"
                                  >
                                    <div className="w-[100%] flex justify-start items-start flex-col md:ml-2 ml-1">
                                      {/* Name */}
                                      <div className="w-[100%] flex justify-start items-center md:text-lg text-[0.8rem] text-blue-800 md:font-bold font-semibold">
                                        <h1 className="w-auto">
                                          {data.name}{" "}
                                          {data.college_short_name ? (
                                            <span>
                                              ({data.college_short_name})
                                            </span>
                                          ) : (
                                            ""
                                          )}
                                        </h1>
                                      </div>

                                      <div className="w-[100%] flex justify-start items-start flex-col md:mt-2 mt-1">
                                        {/* Ownership */}
                                        {data.ownership ? (
                                          <div className="w-[100%] flex justify-start items-start flex-row">
                                            <h2 className="w-auto md:text-sm text-xs md:font-semibold font-medium">
                                              Ownership:{" "}
                                              <span className="text-blue-800">
                                                {data.ownership}
                                              </span>
                                            </h2>
                                          </div>
                                        ) : (
                                          ""
                                        )}

                                        {/* Rank */}
                                        {data.management_rank ? (
                                          <div className="w-[100%] flex justify-start items-center flex-col md:text-sm text-xs md:font-semibold font-medium md:mt-2 mt-1">
                                            <h2 className="w-[100%]">
                                              Rank by NIRF
                                            </h2>

                                            <div className="w-[100%] flex justify-start items-center flex-wrap text-red-700 md:text-sm text-xs font-medium">
                                              {data.management_rank ? (
                                                <div className="w-24 flex justify-center items-center flex-col p-[0.06rem] md:m-2 md:ml-0 m-1 ml-0 border border-red-700 sm:rounded-sm rounded">
                                                  <h2>Management </h2>
                                                  <p>#{data.management_rank}</p>
                                                </div>
                                              ) : (
                                                ""
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          ""
                                        )}

                                        {/* Fees */}
                                        {data.management_fees ? (
                                          <div className="w-[100%] flex justify-start items-center flex-col md:text-sm text-xs md:font-semibold font-medium md:mt-2 mt-1">
                                            <h2 className="w-[100%]">Fees</h2>

                                            <div className="w-[100%] flex justify-start items-center flex-wrap">
                                              {data.management_fees ? (
                                                <div className="w-auto flex justify-center items-center flex-row ml-0 mr-3">
                                                  <h2 className="text-black">
                                                    Management:{" "}
                                                  </h2>
                                                  <p className="text-blue-800 pl-[0.4rem]">
                                                    {data.management_fees}
                                                  </p>
                                                </div>
                                              ) : (
                                                ""
                                              )}
                                            </div>
                                          </div>
                                        ) : (
                                          ""
                                        )}

                                        {/* Other Info */}
                                        {data.college_website ||
                                        data.city ||
                                        data.state_or_ut_name ? (
                                          <div className="w-[100%] flex justify-start items-center flex-wrap md:mt-2 mt-1 md:text-sm text-xs md:font-semibold font-medium">
                                            {data.college_website ? (
                                              <h1 className="sm:w-1/2 w-full my-1">
                                                Website:{" "}
                                                <span className="text-blue-800">
                                                  {data.college_website}
                                                </span>
                                              </h1>
                                            ) : (
                                              ""
                                            )}

                                            {data.city ? (
                                              <h1 className="sm:w-1/2 w-full my-1">
                                                City:{" "}
                                                <span className="text-blue-800">
                                                  {data.city}
                                                </span>
                                              </h1>
                                            ) : (
                                              ""
                                            )}

                                            {data.district_name ? (
                                              <h1 className="sm:w-1/2 w-full my-1">
                                                District:{" "}
                                                <span className="text-blue-800">
                                                  {data.district_name}
                                                </span>
                                              </h1>
                                            ) : (
                                              ""
                                            )}

                                            {data.state_or_ut_name ? (
                                              <h1 className="sm:w-1/2 w-full my-1">
                                                State/UT:{" "}
                                                <span className="text-blue-800">
                                                  {data.state_or_ut_name}
                                                </span>
                                              </h1>
                                            ) : (
                                              ""
                                            )}
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              );
                            }
                          }
                        }
                      })
                    ) : (
                      <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-gray-200">
                        <Pre_Loader />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <h1 className="text-gray-500">Search your query.</h1>
              )}
            </div>
          </div>
        </div>
        <div className="lg:w-[23%] hidden h-full lg:flex justify-center items-start lg:p-4 lg:pl-0">
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
