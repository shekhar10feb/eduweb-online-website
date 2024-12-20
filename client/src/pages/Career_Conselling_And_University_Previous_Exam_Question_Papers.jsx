import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserConselling } from "./UserConselling";

export const Career_Conselling_And_University_Previous_Exam_Question_Papers = ({
  showUserConsellingFunc,
}) => {
  return (
    <div className="w-full flex justify-center items-center flex-col lg:px-6 px-1">
      <button
        className="w-full lg:flex hidden justify-center items-center md:text-sm text-xs bg-blue-800 text-white hover:bg-green-600 lg:font-bold md:font-semibold font-medium lg:p-2 p-1 lg:my-2 my-1 sm:rounded-sm rounded"
        onClick={showUserConsellingFunc}
      >
        Career Conselling
      </button>
      <Link
        to={"/University_Twelfth_Tenth_Question_Papers"}
        className="w-full md:text-sm text-xs text-center bg-blue-800 text-white hover:bg-green-600 lg:font-bold md:font-semibold font-medium lg:p-2 p-1 lg:my-2 my-1 sm:rounded-sm rounded"
      >
        <button className="w-full">
          University Previous Exam Question Papers
        </button>
      </Link>
    </div>
  );
};
