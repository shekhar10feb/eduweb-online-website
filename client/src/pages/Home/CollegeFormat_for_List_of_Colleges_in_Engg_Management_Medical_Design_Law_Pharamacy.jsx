import React from "react";
import { Link } from "react-router-dom";

export const CollegeFormat_for_List_of_Colleges_in_Engg_Management_Medical_Design_Law_Pharamacy =
  ({
    data,
    uppercase_state,
    link,
    text_from_All_Colleges,
    goto_url,
    rank,
    field,
    fees,
    course,
  }) => {
    return (
      <div className="w-full flex justify-center items-center" key={data._id}>
        <Link
          to={link}
          state={{
            text_from_All_Colleges: text_from_All_Colleges,
            searching_from_All_Colleges: uppercase_state,
            goto_url: goto_url,
            data: data,
          }}
          className="w-[100%] flex justify-start items-start flex-row p-1 hover:bg-gray-200 cursor-pointer"
        >
          <div className="w-[100%] flex justify-start items-start flex-col md:ml-2 ml-1">
            {/* Name */}
            <div className="w-[100%] flex justify-start items-center md:text-lg text-[0.8rem] text-blue-800 md:font-bold font-semibold">
              <h1 className="w-auto">
                {data.name}{" "}
                {data.college_short_name ? (
                  <span>({data.college_short_name})</span>
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
                    <span className="text-blue-800">{data.ownership}</span>
                  </h2>
                </div>
              ) : (
                ""
              )}

              {/* Rank */}
              {rank ? (
                <div className="w-[100%] flex justify-start items-center flex-col md:text-sm text-xs md:font-semibold font-medium md:mt-2 mt-1">
                  <h2 className="w-[100%]">Rank by NIRF</h2>

                  <div className="w-[100%] flex justify-start items-center flex-wrap text-red-700 md:text-sm text-xs font-medium">
                    {rank ? (
                      <div className="w-24 flex justify-center items-center flex-col p-[0.06rem] md:m-2 md:ml-0 m-1 ml-0 border border-red-700 sm:rounded-sm rounded">
                        <h2>{field} </h2>
                        <p>#{rank}</p>
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
              {fees ? (
                <div className="w-[100%] flex justify-start items-center flex-col md:text-sm text-xs md:font-semibold font-medium md:mt-2 mt-1">
                  <h2 className="w-[100%]">Fees</h2>

                  <div className="w-[100%] flex justify-start items-center flex-wrap">
                    {fees ? (
                      <div className="w-auto flex justify-center items-center flex-row ml-0 mr-3">
                        <h2 className="text-black">{course}: </h2>
                        <p className="text-blue-800 pl-[0.4rem]">{fees}</p>
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
              {data.college_website || data.city || data.state_or_ut_name ? (
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
                      City: <span className="text-blue-800">{data.city}</span>
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
  };
