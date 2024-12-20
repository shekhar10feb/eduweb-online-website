import React from "react";
import { Link } from "react-router-dom";

export const Btech = (props) => {
  const state = "engineering";
  const uppercase_state = state.trim().toUpperCase();
  return (
    <div className="w-[100%] flex justify-center flex-wrap">
      {props.btechDatas.map((btechData) => {
        return (
          <div
            className="md:w-[23%] w-[100%] flex justify-center items-start flex-row lg:p-1 lg:m-2 text-[#004aad] hover:text-green-600 md:rounded-md py-1 md:mx-2 mb-2"
            key={btechData.id}
          >
            <Link
              to={btechData.src}
              state={uppercase_state}
              className="w-[100%] flex justify-start items-center flex-row md:flex-col"
            >
              <div className="lg:w-[100%] md:w-[80%] flex justify-center items-center mx-4">
                <img
                  src={btechData.photo}
                  alt={btechData.alt}
                  className="lg:w-[3.5rem] w-[2rem] object-fit"
                />
              </div>
              <div className="lg:w-[100%] flex justify-center items-start md:items-center flex-col">
                <h2 className="text-center lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] lg:my-2 mx-[0.2rem]">
                  {btechData.title}
                </h2>
                <p className="hidden md:flex text-start lg:text-sm md:text-[0.7rem] md:leading-5 leading-6 font-normal lg:font-medium text-gray-600 pl-[0.2rem]">
                  {btechData.description}
                </p>
                <p className="flex md:hidden text-start lg:text-sm text-[0.6rem] font-normal lg:font-medium text-gray-600 pl-[0.2rem]">
                  {btechData.descriptionForMobile}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
