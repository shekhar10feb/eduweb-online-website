import React from "react";
import { Link } from "react-router-dom";

export const FormatFor_State_UT_wise_Colleges = ({
  data,
  uppercase_state,
  state_ut_wise_colleges,
  text_fromm_All_Colleges,
  field_rank,
  field,
  fees,
}) => {
  if (field_rank) {
    if (
      data.name ||
      data.profile_image ||
      data.college_website ||
      data.district_name ||
      data.courses_offered
    ) {
      //   console.log("state_ut_wise_colleges: ", state_ut_wise_colleges);
      //   console.log("text_fromm_All_Colleges: ", text_fromm_All_Colleges);
      //   console.log("field_rank: ", data[`${field_rank}`]);
      //   console.log("field: ", field);
      //   console.log("fees: ", fees);
      // console.log("data: ", data);
      return (
        <>
          <Link
            to={`/${state_ut_wise_colleges}/${data.name}`}
            state={{
              text_from_All_Colleges: `${text_fromm_All_Colleges}`,
              searching_from_All_Colleges: uppercase_state,
              goto_url: `${state_ut_wise_colleges}`,
            }}
            className="w-full flex justify-start items-start flex-row bg-white hover:bg-gray-200 p-1 md:rounded-md rounded-sm cursor-pointer"
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
                {field_rank ? (
                  <div className="w-[100%] flex justify-start items-center flex-col md:text-sm text-xs md:font-semibold font-medium md:mt-2 mt-1">
                    <h2 className="w-[100%]">Rank by NIRF</h2>

                    <div className="w-[100%] flex justify-start items-center flex-wrap text-red-700 md:text-sm text-xs font-medium">
                      {field_rank ? (
                        <div className="w-24 flex justify-center items-center flex-col p-[0.06rem] md:m-2 md:ml-0 m-1 ml-0 border border-red-700 sm:rounded-sm rounded">
                          <h2>{field} </h2>
                          <p>#{field_rank}</p>
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
                          <h2 className="text-black">{field}: </h2>
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
                  <div className="w-[100%] flex justify-start items-center flex-wrap text-xs md:mt-2 mt-1 md:text-sm md:font-semibold font-medium">
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
        </>
      );
    }
  }
};
