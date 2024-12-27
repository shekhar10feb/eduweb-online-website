import React from "react";
import { Link } from "react-router-dom";

export const UniversityTwelfthTenthQuestionPapersButton = () => {
  return (
    <div className="w-full flex justify-end items-center">
      <button className="max-w-[18rem] text-center text-white sm:bg-blue-800 sm:hover:bg-blue-700 bg-green-600 hover:bg-green-500 md:text-sm sm:text-xs text-[0.7rem] font-medium p-[0.3rem] lg:p-2 lg:my-2 rounded-sm cursor-pointer">
        <Link to={"/University_Twelfth_Tenth_Question_Papers"}>
          University/12th/10th Previous Exam Question Papers
        </Link>
      </button>
    </div>
  );
};
