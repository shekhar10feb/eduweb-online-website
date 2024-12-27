import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Pre_Loader } from "./Home/Pre_Loader";
import axios from "axios";

export const Featured = () => {
  const [datas, setDatas] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      axios.get("/api/getting_List_of_Colleges").then((data) => {
        let filtered_college_info = [];
        
        data?.data.map((item) => {
          filtered_college_info.push(item);
        });

        let firstCollegeInfo = Math.floor(
          Math.random() * filtered_college_info.length
        );
        let secondCollegeInfo = Math.floor(
          Math.random() * filtered_college_info.length
        );
        let thirdCollegeInfo = Math.floor(
          Math.random() * filtered_college_info.length
        );
        let fourthCollegeInfo = Math.floor(
          Math.random() * filtered_college_info.length
        );

        if (
          firstCollegeInfo <= filtered_college_info.length - 1 &&
          firstCollegeInfo !== secondCollegeInfo &&
          firstCollegeInfo !== thirdCollegeInfo &&
          firstCollegeInfo !== fourthCollegeInfo &&
          secondCollegeInfo <= filtered_college_info.length - 1 &&
          secondCollegeInfo !== firstCollegeInfo &&
          secondCollegeInfo !== thirdCollegeInfo &&
          secondCollegeInfo !== fourthCollegeInfo &&
          thirdCollegeInfo <= filtered_college_info.length - 1 &&
          thirdCollegeInfo !== firstCollegeInfo &&
          thirdCollegeInfo !== secondCollegeInfo &&
          thirdCollegeInfo !== fourthCollegeInfo &&
          fourthCollegeInfo <= filtered_college_info.length - 1 &&
          fourthCollegeInfo !== firstCollegeInfo &&
          fourthCollegeInfo !== secondCollegeInfo &&
          fourthCollegeInfo !== thirdCollegeInfo
        ) {
          const collegeData = [
            filtered_college_info[firstCollegeInfo],
            filtered_college_info[secondCollegeInfo],
            filtered_college_info[thirdCollegeInfo],
            filtered_college_info[fourthCollegeInfo],
          ];
          setDatas(collegeData);
        } else {
          const collegeData = [
            filtered_college_info[0],
            filtered_college_info[1],
            filtered_college_info[2],
            filtered_college_info[3],
          ];
          setDatas(collegeData);
        }
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

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-auto flex justify-center items-center flex-col p-3 font-bold bg-[#f1f5f9] my-2">
      <div className="w-full h-auto">
        <h1 className="w-full text-left lg:text-2xl md:text-xl sm:text-lg text-base text-blue-800 font-extrabold lg:ml-[1.5rem] md:ml-[1.2rem] sm:ml-[0.9rem] ml-0.6rem py-2">
          Featured
        </h1>
      </div>
      <div className="w-full h-auto flex justify-center items-stretch md:flex-row flex-col">
        {Array.isArray(datas) ? (
          datas.map((data, index) => {
            return (
              <div
                className="md:w-[23%] w-full h-3/4 flex justify-center items-stretch flex-col bg-[#fff] md:border-2 border border-blue-600 rounded-md m-1 mx-auto shadow-md"
                key={index}
              >
                <div className="w-full flex justify-around items-start flex-row bg-[#fff] p-[0.2rem] lg:py-2 md:p-1">
                  <div className="w-[2rem] lg:flex md:hidden flex justify-center items-start border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="md:w-[2.5rem] lg:hidden md:flex hidden justify-center items-start border border-blue-600 rounded">
                    <img
                      src={data.profile_image}
                      className="w-full object-contain aspect-square"
                      alt="Featured Colleges on Eduweb Online Website"
                    />
                  </div>
                  <div className="w-[90%] flex justify-start items-start flex-col">
                    <h1 className="lg:flex hidden text-start xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.6rem] text-[0.5rem] text-blue-600 mx-[0.2rem]">
                      {data.name.slice(0, 30).toUpperCase()}
                    </h1>
                    <h1 className="lg:hidden md:flex hidden text-start xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.6rem] text-[0.5rem] text-blue-600 mx-[0.2rem]">
                      {data.name.slice(0, 20).toUpperCase()}
                    </h1>
                    <h1 className="md:hidden flex text-start xl:text-[0.8rem] lg:text-[0.7rem] md:text-[0.6rem] text-[0.5rem] text-blue-600 mx-[0.2rem]">
                      {data.name.slice(0, 40).toUpperCase()}
                    </h1>
                    <div className="w-full flex justify-between items-center flex-row font-light text-gray-600 text-xs md:mt-[0.1rem] mt-[0.2rem]">
                      <p className="w-auto flex justify-between items-center text-start lg:text-[0.7rem] text-[0.6rem] font-normal mr-2 lg:my-0 md:my-1 my-0 lg:font-medium text-gray-600">
                        <LocationOnIcon sx={{ fontSize: "0.8rem" }} />{" "}
                        {data.city.slice(0, 10)}
                      </p>
                      <Link
                        to={`/featured/${data.name}`}
                        state={{ data: data }}
                        className="w-auto flex justify-start items-start flex-row p-1 cursor-pointer"
                        key={data._id}
                      >
                        <span className="w-full text-end lg:text-[0.7rem] text-[0.6rem] font-normal ml-2 lg:font-medium text-gray-600 pl-[0.2rem] hover:text-black hover:font-semibold cursor-pointer">
                          Learn More
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <h2 className="w-full md:hidden flex justify-start items-center text-[0.5rem] font-bold text-[#fff] p-[0.2rem] bg-blue-600">
                    {data.college_admission}
                  </h2>
                  <h2 className="w-full lg:hidden md:flex hidden justify-start items-center text-[0.6rem] font-bold text-[#fff] p-[0.3rem] bg-blue-600">
                    {data.college_admission.slice(0, 25)}
                  </h2>
                  <h2 className="w-full lg:flex hidden justify-start items-center xl:text-[0.7rem] lg:text-[0.6rem] font-bold text-[#fff] p-[0.3rem] bg-blue-600">
                    {data.college_admission}
                  </h2>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
              <h2 className="text-gray-500 italic lg:text-base sm:text-sm text-xs font-medium">Sorry, no query!</h2>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center items-center bg-slate-50 hover:bg-slate-200 mt-4 p-3 border-t-2 border-purple-500">
        <Link
          to={"/featuredlist"}
          className="w-full flex justify-center items-center"
        >
          <span className="text-sm md:text-base lg:text-lg font-semibold text-purple-500">
            View More
          </span>
        </Link>
      </div>
    </div>
  );
};
