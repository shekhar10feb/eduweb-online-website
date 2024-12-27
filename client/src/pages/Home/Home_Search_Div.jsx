import React from "react";

export const Home_Search_Div = () => {
  return (
    <div className="w-[95%] flex justify-around items-center flex-col lg:p-2">
      <h2 className="text-[0.94rem] lg:text-lg md:text-base md:font-bold font-semibold">
        Find Colleges, Courses & Exams that are Best for You
      </h2>
      <p className="hidden sm:flex text-base md:font-semibold font-medium text-gray-300">
        61,000+ Colleges 3,85,000+ Courses 4,50,000+ Reviews 900+ Exams{" "}
      </p>
      <div className="w-[100%] sm:hidden flex justify-around items-center text-xs my-2">
        <p className="flex justify-center items-center flex-col border border-gray-400 p-1">
          <span>61,000+</span> <span>Colleges</span>
        </p>
        <p className="flex justify-center items-center flex-col border border-gray-400 p-1">
          <span>3,85,000+</span> <span>Courses</span>
        </p>
        <p className="flex justify-center items-center flex-col border border-gray-400 p-1">
          <span>4,50,000+</span> <span>Reviews</span>
        </p>
        <p className="flex justify-center items-center flex-col border border-gray-400 p-1">
          <span>Reviews</span> <span>900+ Exams</span>
        </p>
      </div>
    </div>
  );
};
