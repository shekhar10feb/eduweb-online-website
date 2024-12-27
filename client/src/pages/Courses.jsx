import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import mbaDatas from "../apis/mbaDatas";
import btechDatas from "../apis/btechDatas";
import designDatas from "../apis/designDatas";
import medicalDatas from "../apis/medicalDatas";
import moreDatas from "../apis/moreDatas";
import moreDatasPartOne from "../apis/moreDatasPartOne";
import moreDatasPartTwo from "../apis/moreDatasPartTwo";
import { Mba } from "./Mba";
import { Btech } from "./Btech";
import { Medical } from "./Medical";
import { Design } from "./Design";

export const Courses = () => {
  const [activescreen, setActivescreen] = useState("1");
  const [details, setDetails] = useState("details");
  const [active, setActive] = useState("flex");
  const [active1, setActive1] = useState("none");
  const [animate, setAnimate] = useState("none");
  const [animate1, setAnimate1] = useState("none");

  const takeId = (event) => {
    setActivescreen(event.target.id);
    setDetails("close");
  };

  const handleClick = () => {
    if (active === "none") {
      setActive("flex");
      setActive1("none");
      setAnimate("0.8s ease-in-out -0.1s 1 testKeyword");
    } else {
      setActive("none");
      setActive1("flex");
      setAnimate1("0.8s ease-in-out -0.1s 1 testKeyword");
    }
  };

  const handleClick1 = () => {
    if (active1 === "none") {
      setActive1("flex");
      setActive("none");
      setAnimate1("0.8s ease-in-out -0.1s 1 testKeyword1");
    } else {
      setActive1("none");
      setActive("flex");
      setAnimate("0.8s ease-in-out -0.1s 1 testKeyword1");
    }
  };

  return (
    <div className="flex w-[100%] lg:h-[35em] h-[33em] justify-start items-center flex-col  bg-[#f1f5f9] text-[#004aad] lg:pt-[1rem] py-[0.1rem] lg:px-[2rem] border-b-2 border-gray-300" name="courses">
      <div className="w-[100%] flex justify-center items-center flex-row lg:text-lg md:text-base text-sm font-bold border-b-2 border-gray-300 courses-btns">
        <button
          className={activescreen === "1" ? "activescreen" : ""}
          id={1}
          onClick={takeId}
        >
          MBA
        </button>
        <button
          className={activescreen === "2" ? "activescreen" : ""}
          id={2}
          onClick={takeId}
        >
          B.TECH
        </button>
        <button
          className={activescreen === "3" ? "activescreen" : ""}
          id={3}
          onClick={takeId}
        >
          MEDICAL
        </button>
        <button
          className={activescreen === "4" ? "activescreen" : ""}
          id={4}
          onClick={takeId}
        >
          DESIGN
        </button>
        <button
          className={activescreen === "5" ? "activescreen" : ""}
          id={5}
          onClick={takeId}
        >
          MORE
        </button>
      </div>
      <div className="courses-divs boxShadow rounded-b-md">
        <ul
          className={activescreen === "1" ? "details" : "close"}
          id="courses-divs_ul1"
        >
          <Mba mbaDatas={mbaDatas} />
        </ul>
        <ul
          className={activescreen === "2" ? "details" : "close"}
          id="courses-divs_ul2"
        >
          <Btech btechDatas={btechDatas} />
        </ul>
        <ul
          className={activescreen === "3" ? "details" : "close"}
          id="courses-divs_ul3"
        >
          <Medical medicalDatas={medicalDatas} />
        </ul>
        <ul
          className={activescreen === "4" ? "details" : "close"}
          id="courses-divs_ul4"
        >
          <Design designDatas={designDatas} />
        </ul>
        <ul
          className={activescreen === "5" ? "details" : "close"}
          id="carousel-container"
        >
          <div className="hidden w-[100%] md:flex justify-center items-center">
            <div
              onClick={handleClick}
              className="absolute left-5 cursor-pointer z-100 arrows overflow-x-hidden"
            >
              <NavigateBeforeIcon
                sx={{ fontSize: "5rem", color: "#9f9f9f8f" }}
                className="hover:text-gray-600"
              />
            </div>
            <div
              onClick={handleClick1}
              className="absolute right-5 cursor-pointer z-100 arrows overflow-x-hidden"
            >
              <NavigateNextIcon
                sx={{ fontSize: "5rem", color: "#9f9f9f8f" }}
                className="hover:text-gray-600"
              />
            </div>

            <ul
              style={{ display: active, animation: animate }}
              className="w-[100%] h-[26em] flex justify-center items-start flex-wrap text-base font-bold text-[#000] my-2 lg:py-0"
            >
              {moreDatasPartOne.map((moreDataOne) => {
                return (
                  <li
                    className="w-[23%] text-[#004aad] hover:text-green-600 p-1 m-2 rounded-md"
                    key={moreDataOne.id}
                  >
                    <a
                      href={moreDataOne.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[100%]"
                    >
                      <div className="lg:w-[100%] md:w-[80%] flex justify-center items-center mx-4">
                        <img
                          src={moreDataOne.photo}
                          alt={moreDataOne.alt}
                          className="lg:w-[3.5rem] w-[2rem] object-fit"
                        />
                      </div>
                      <h2 className="text-center lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] lg:my-2 mx-[0.2rem]">
                        {moreDataOne.title}
                      </h2>
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul
              style={{ display: active1, animation: animate1 }}
              className="w-[100%] h-[26em] flex justify-center items-start flex-wrap text-base font-bold text-[#000] my-2"
            >
              {moreDatasPartTwo.map((moreDataTwo) => {
                return (
                  <li
                    className="w-[23%] text-[#004aad] hover:text-green-600 p-1 m-2 rounded-md"
                    key={moreDataTwo.id}
                  >
                    <a
                      href={moreDataTwo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[100%]"
                    >
                      <div className="lg:w-[100%] md:w-[80%] flex justify-center items-center mx-4">
                        <img
                          src={moreDataTwo.photo}
                          alt={moreDataTwo.alt}
                          className="lg:w-[3.5rem] w-[2rem] object-fit"
                        />
                      </div>
                      <h2 className="text-center lg:text-[1rem] md:text-[0.8rem] text-[0.7rem] lg:my-2 mx-[0.2rem]">
                        {moreDataTwo.title}
                      </h2>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:hidden w-[100%] flex justify-center items-center">
            <ul className="w-[100%] carousel-container_more-ul">
              {moreDatas.map((moreData) => {
                return (
                  <li
                    className="w-[100%] flex justify-center items-center text-[#004aad] hover:text-green-600"
                    key={moreData.id}
                  >
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[100%] flex justify-start items-center flex-row"
                    >
                      <div className="flex justify-center items-center mx-4">
                        <img
                          src={moreData.photo}
                          alt={moreData.alt}
                          className="w-[2rem] object-fit"
                        />
                      </div>
                      <h2 className="text-center text-[0.7rem] my-2">
                        {moreData.title}
                      </h2>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};
