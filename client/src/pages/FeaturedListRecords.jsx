import { Link } from "react-router-dom";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Pre_Loader } from "./Home/Pre_Loader";

export const FeaturedListRecords = ({ datas }) => {
  return (
    <div>
      <div className="w-[100%] h-auto flex justify-start items-stretch flex-col mx-auto md:p-2 p-1 overflow-y-auto md:rounded-sm rounded">
        {Array.isArray(datas) ? (
          datas.map((data, index) => {
            return (
              <div
                className="w-full flex justify-between items-stretch flex-col bg-[#fff] md:border border border-gray-300 rounded-md lg:my-3 md:my-2 my-1 mx-auto shadow-md"
                key={data.index}
              >
                <div className="w-full flex justify-center items-center flex-row bg-[#fff] sm:p-2 p-1 md:pt-4 pt-2 md:pb-2 pb-1">
                  <div className="w-[2.7rem] lg:flex hidden justify-center items-start mr-4 border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="md:w-[2.5rem] lg:hidden md:flex hidden justify-center items-start mr-4 border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="sm:w-[2.2rem] md:hidden sm:flex hidden justify-center items-start mr-3 border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="w-[2rem] sm:hidden flex justify-center items-start mr-2 border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="w-[90%] flex justify-start items-start flex-col">
                    <h1 className="w-full text-start xl:text-base lg:text-[0.9rem] md:text-[0.8rem] text-[0.6rem] text-black md:font-bold font-semibold lg:my-2 mx-[0.2rem]">
                      {data.index} {data.name.slice(0, 30).toUpperCase()}
                    </h1>
                    <div className="w-full flex justify-between items-center flex-row font-light text-gray-600 text-xs">
                      <p className="w-auto flex justify-between items-center text-start lg:text-[0.8rem] md:text-[0.7rem] text-[0.6rem] font-normal mr-2 lg:font-medium text-gray-600">
                        <LocationOnIcon sx={{ fontSize: "0.9rem" }} />{" "}
                        {data.city.slice(0, 10)}
                      </p>
                      <Link
                        to={`/featured/${data.name}`}
                        state={{ data: data }}
                        className="w-auto flex justify-start items-start flex-row p-1 cursor-pointer"
                        key={data._id}
                      >
                        <span className="w-auto text-end lg:text-[0.7rem] text-[0.6rem] font-normal ml-2 lg:font-medium text-gray-600 pl-[0.2rem] hover:text-black hover:font-semibold cursor-pointer">
                          Learn More
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full md:h-1/4 h-auto flex jutify-start items-center">
                  <h2 className="w-full md:hidden flex justify-start items-center text-[0.5rem] font-bold text-[#fff] p-1 pl-2 bg-blue-600">
                    {data.college_admission}
                  </h2>
                  <h2 className="w-full lg:hidden md:flex hidden justify-start items-center text-[0.6rem] font-bold text-[#fff] p-1 pl-3 bg-blue-600">
                    {data.college_admission}
                  </h2>
                  <h2 className="w-full lg:flex hidden justify-start items-center xl:text-[0.8rem] lg:text-[0.7rem] font-bold text-[#fff] p-2 pl-4 bg-blue-600">
                    {data.college_admission}
                  </h2>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-[#00000042]">
            <Pre_Loader />
          </div>
        )}
      </div>
    </div>
  );
};
