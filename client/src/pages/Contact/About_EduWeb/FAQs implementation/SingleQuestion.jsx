import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

export const SingleQuestion = ({ _id, question, answer, activeId, toggleQuestion }) => {
  const isActive = _id === activeId;
  // console.log(_id);
  return (
    <article className="md:w-[70%] w-full flex justify-center items-center flex-col border border-black md:p-2 p-1 md:my-2 my-1 rounded md:shadow-md shadow">
      <header className="w-full flex justify-between items-center">
        <h5 className="w-[80%] sm:text-base text-sm md:font-medium font-normal text-black">{question ? question.trim() : 'N/A'}</h5>
        <button className="w-[10%] flex justify-center items-center" onClick={() => toggleQuestion(_id)}>
          {isActive ? (
            <FaCircleMinus style={{ fontSize: "1rem" }} />
          ) : (
            <FaCirclePlus style={{ fontSize: "1rem" }} />
          )}
        </button>
      </header>
      {isActive && <p className="sm:text-base text-sm md:font-medium font-normal text-gray-600">{answer ? answer.trim() : 'N/A'}</p>}
    </article>
  );
};
