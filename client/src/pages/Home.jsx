import React, { useState, useEffect } from "react";
import { Exams } from "./Exams";
import { Courses } from "./Courses";
import { LatestNewsAndArticles } from "./LatestNewsAndArticles";
import { TrendingCourses } from "./TrendingCourses";
import { Featured } from "./Featured";
import { Links } from "./Links";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { UserConselling } from "./UserConselling";
import { Home_Search_Div } from "./Home/Home_Search_Div";
import { Form_Div } from "./Home/Form_Div";
import { UniversityTwelfthTenthQuestionPapersButton } from "./Home/UniversityTwelfthTenthQuestionPapersButton";

export const Home = () => {
  const [showUserConselling, setShowUserConselling] = useState("none");

  const showUserConsellingFunc = () => {
    if (showUserConselling === "none") {
      setShowUserConselling("flex");
    }
  };

  const closeUserConsellingFunc = () => {
    if (showUserConselling === "flex") {
      setShowUserConselling("none");
    }
  };

  // Timer set when the website will upload UserConselling.jsx page will display upon the main website
  useEffect(() => {
    const timer = setTimeout(function () {
      if (showUserConselling === "none") {
        setShowUserConselling("flex");
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col website_background_image">
      <div
        className="w-[100%] flex justify-around items-center flex-col text-white lg:mt-12 md:mt-[3.04rem] sm:mt-[2.4rem] mt-[2.4rem] header_div"
        name="home"
      >
        <div className="w-full sm:flex hidden justify-center items-center p-1 md:p-2">
          <UniversityTwelfthTenthQuestionPapersButton />
        </div>
        <div
          className="w-full h-[100vh] justify-center items-center flex-col absolute top-0 bg-[#000000ab] md:z-20"
          style={{ display: showUserConselling }}
        >
          <UserConselling closeUserConsellingFunc={closeUserConsellingFunc} />
        </div>
        <div className="w-full h-full flex justify-center items-center xl:p-[6rem] lg:p-[5rem] md:p-[3rem] sm:p-[4rem] p-[1rem]">
          <div className="w-full flex justify-center items-center flex-col text-white lg:py-3 sm:py-1 md:py-5 lg:px-2 lg:rounded-lg md:rounded-md rounded-sm header_sub-div">
            <div className="w-full xl:w-[60%] lg:w-[70%] md:w-[70%] sm:w-[90%] flex justify-around items-center flex-col sm:bg-[#00000082] text-white lg:py-3 sm:py-1 md:py-5 lg:px-2 lg:rounded-lg md:rounded-md rounded-sm header_sub-div">
              <Home_Search_Div />
              <Form_Div showUserConsellingFunc={showUserConsellingFunc} />
              <div className="w-[94%] flex sm:hidden justify-center items-center py-1">
                <UniversityTwelfthTenthQuestionPapersButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden justify-center items-center flex-col md:flex">
        <Featured />
      </div>
      <Courses />
      <div className="w-full flex justify-center items-center flex-col md:hidden">
        <Featured />
      </div>
      <LatestNewsAndArticles />
      {/* <Exams /> */}
      {/* <TrendingCourses /> */}
      <Links />
      <Contact />
      <Footer />
    </div>
  );
};
