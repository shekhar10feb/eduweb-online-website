import React from "react";
import { useNavigate } from 'react-router-dom'

export const Grievances = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Grievances</div>
      <div className="w-[90%] text-right my-2">
        <button
          className="bg-green-500 p-3 text-[#fff] font-bold rounded-md"
          onClick={() => navigate("/")}
        >
          Back to Homepage
        </button>
      </div>
    </>
  );
};
