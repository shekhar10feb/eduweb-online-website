import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Pre_Loader } from "./Pre_Loader";
import axios from "axios";

export const Form_Div = ({ showUserConsellingFunc }) => {
  const [datas, setDatas] = useState([]);
  const [text, setText] = useState("");
  const [errorMsg, setErrorMsg] = useState("hidden");
  const navigate = useNavigate();

  let text_from_user;
  let about_courses = [];
  let matching_from_databse_and_getting_answer = [];
  let matching_name_from_database_and_getting_answer = [];
  let matching_city_district_name_state_ut_from_databse_and_getting_answer = [];
  let matching_btech_from_databse_and_getting_answer = [];
  let matching_medical_from_databse_and_getting_answer = [];
  let matching_management_from_databse_and_getting_answer = [];
  let matching_law_from_databse_and_getting_answer = [];
  let matching_fashion_design_from_databse_and_getting_answer = [];
  let matching_pharmacy_from_databse_and_getting_answer = [];
  let matching_university_name_from_database_and_getting_answer = [];
  let matching_courses_offered_with_text = [];

  useEffect(() => {
    try {
      axios.get("/api/getting_List_of_Colleges").then((data) => {
        setDatas(data?.data);
      });
    } catch (error) {
      return null;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text !== "" && text !== undefined && text !== null) {
      Array.isArray(datas) ? (
        datas.map((item) => {
          let courses_offered = item.courses_offered.split(", ");

          for (let i = 0; i < courses_offered.length; i++) {
            if (courses_offered[i].toUpperCase() === text.toUpperCase()) {
              about_courses.push("yes");
            }
          }
          if (item.name.toUpperCase() === text.toUpperCase()) {
            matching_name_from_database_and_getting_answer.push("yes");
          } else if (
            item.city.toUpperCase() === text.toUpperCase() ||
            item.district_name.toUpperCase() === text.toUpperCase() ||
            item.state_or_ut_name.toUpperCase() === text.toUpperCase()
          ) {
            matching_city_district_name_state_ut_from_databse_and_getting_answer.push(
              "yes"
            );
          } else if (
            text.toUpperCase().includes("ENGINEERING") ||
            text.toUpperCase().includes("ENGG.") ||
            text.toUpperCase().includes("B.TECH.") ||
            text.toUpperCase().includes("B.TECH") ||
            text.toUpperCase().includes("BTECH") ||
            text.toUpperCase().includes("B.E.") ||
            text.toUpperCase().includes("B.E") ||
            text.toUpperCase().includes("M.E") ||
            text.toUpperCase().includes("M.E.") ||
            text.toUpperCase().includes("BACHELOR OF TECHNOLOGY") ||
            text.toUpperCase().includes("BACHELOR OF ENGINEERING") ||
            text.toUpperCase().includes("BACHELOR OF ENGINEERING") ||
            text.toUpperCase().includes("MASTER OF ENGINEERING") ||
            text.toUpperCase().includes("MASTERS OF ENGINEERING")
          ) {
            matching_btech_from_databse_and_getting_answer.push("yes");
          } else if (text.toUpperCase().includes("MEDICAL")) {
            matching_medical_from_databse_and_getting_answer.push("yes");
          } else if (
            text.toUpperCase().includes("MBA") ||
            text.toUpperCase().includes("M.B.A.") ||
            text.toUpperCase().includes("M.B.A") ||
            text.toUpperCase().includes("BBA") ||
            text.toUpperCase().includes("B.B.A.") ||
            text.toUpperCase().includes("B.B.A") ||
            text.toUpperCase().includes("MANAGEMENT")
          ) {
            matching_management_from_databse_and_getting_answer.push("yes");
          } else if (
            text.toUpperCase().includes("LAW") ||
            text.toUpperCase().includes("LLB") ||
            text.toUpperCase().includes("L.L.B.") ||
            text.toUpperCase().includes("L.L.B") ||
            text.toUpperCase().includes("LLM") ||
            text.toUpperCase().includes("L.L.M.") ||
            text.toUpperCase().includes("L.L.M")
          ) {
            matching_law_from_databse_and_getting_answer.push("yes");
          } else if (
            text.toUpperCase().includes("FASHION DESIGN") ||
            text.toUpperCase().includes("DESIGN") ||
            text.toUpperCase().includes("DESIGNING") ||
            text.toUpperCase().includes("FASHION") ||
            text.toUpperCase().includes("B.DES.") ||
            text.toUpperCase().includes("BDES") ||
            text.toUpperCase().includes("B.DES") ||
            text.toUpperCase().includes("BACHELOR OF DESIGNING") ||
            text.toUpperCase().includes("M.DES.") ||
            text.toUpperCase().includes("MDES") ||
            text.toUpperCase().includes("M.DES") ||
            text.toUpperCase().includes("MASTERS OF DESIGNING") ||
            text.toUpperCase().includes("MASTER OF DESIGNING")
          ) {
            matching_fashion_design_from_databse_and_getting_answer.push("yes");
          } else if (
            text.toUpperCase().includes("PHARMA") ||
            text.toUpperCase().includes("PHARMACY") ||
            text.toUpperCase().includes("B.PHARMA.") ||
            text.toUpperCase().includes("B.PHARMA") ||
            text.toUpperCase().includes("BACHELOR OF PHARMACY") ||
            text.toUpperCase().includes("M.PHARMA.") ||
            text.toUpperCase().includes("MASTERS OF PHARMACY")
          ) {
            matching_pharmacy_from_databse_and_getting_answer.push("yes");
          } else if (
            item.university_name.toUpperCase() === text.toUpperCase()
          ) {
            matching_university_name_from_database_and_getting_answer.push(
              "yes"
            );
          } else if (
            text.toUpperCase() === "COLLEGE" ||
            text.toUpperCase() === "COLLEGES" ||
            text.toUpperCase() === "ANY COLLEGES" ||
            text.toUpperCase() === "ANY COLLEGE" ||
            text.toUpperCase() === "ALL COLLEGE" ||
            text.toUpperCase() === "ALL COLLEGES"
          ) {
            matching_from_databse_and_getting_answer.push("yes");
          } else if (
            about_courses.length > 0 &&
            about_courses.includes("yes")
          ) {
            matching_courses_offered_with_text.push("yes");
          }
        })
      ) : (
        <div className="w-full h-full flex justify-center align-center absolute top-0 right-0 bg-[#00000042]">
          <Pre_Loader />
        </div>
      );

      if (matching_name_from_database_and_getting_answer.includes("yes")) {
        text_from_user = text.toUpperCase();
        datas?.map((item) => {
          if (item.name.toUpperCase() === text_from_user) {
            // const data = { name: "John", age: 30 };
            let data = {
              text_from_All_Colleges: "All Colleges",
              searching_from_All_Colleges: text_from_user,
              goto_url: "/",
              directly_from_All_Colleges: "Directly from All Colleges page",
              data: item,
            };
            setErrorMsg("hidden");
            navigate(`/${text_from_user}`, {
              state: data,
            });
          }
        });
      } else if (
        matching_city_district_name_state_ut_from_databse_and_getting_answer.includes(
          "yes"
        )
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/List_of_Colleges", {
          state: text_from_user,
        });
      } else if (
        matching_btech_from_databse_and_getting_answer.includes("yes")
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Engineering_colleges", {
          state: text_from_user,
        });
      } else if (
        matching_medical_from_databse_and_getting_answer.includes("yes")
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Medical_colleges", {
          state: text_from_user,
        });
      } else if (
        matching_management_from_databse_and_getting_answer.includes("yes")
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Management_colleges", {
          state: text_from_user,
        });
      } else if (matching_law_from_databse_and_getting_answer.includes("yes")) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Law_colleges", {
          state: text_from_user,
        });
      } else if (
        matching_fashion_design_from_databse_and_getting_answer.includes("yes")
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Fashion_Design_colleges", {
          state: text_from_user,
        });
      } else if (
        matching_pharmacy_from_databse_and_getting_answer.includes("yes")
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Pharmacy_colleges", {
          state: text_from_user,
        });
      } else if (
        matching_university_name_from_database_and_getting_answer.includes(
          "yes"
        )
      ) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/University", {
          state: text_from_user,
        });
      } else if (matching_from_databse_and_getting_answer.includes("yes")) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges", {
          state: text_from_user,
        });
      } else if (matching_courses_offered_with_text.includes("yes")) {
        text_from_user = text;
        setErrorMsg("hidden");
        navigate("/All_Colleges/Course_Offered_By_Colleges", {
          state: text_from_user,
        });
      } else {
        setErrorMsg("visible");

        setTimeout(() => {
          setErrorMsg("hidden");
        }, 2000);
      }
    } else {
      setErrorMsg("visible");

      setTimeout(() => {
        setErrorMsg("hidden");
      }, 2000);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <form
        className="w-[100%] flex justify-center items-center my-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search Colleges, Exams, Courses..."
          className="md:w-[70%] sm:w-[60%] w-[70%] text-[#000] md:text-bold text-semibold md:rounded-l-lg rounded-l-sm lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-0"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="w-[24%] flex justify-center items-center sm:bg-[#004aad] bg-[#16a34a] hover:bg-blue-700 md:font-semibold font-medium md:rounded-r-lg rounded-r-sm lg:px-4 md:px-3 px-2 lg:py-3 md:py-2 py-0"
        >
          Search
        </button>
      </form>
      <div className="w-[95%] flex justify-center items-center text-center">
        <div
          className="w-1/2 flex md:text-sm sm:text-xs text-[0.5rem] font-bold"
          style={{ visibility: errorMsg }}
        >
          <h1 className="w-full">Enter a valid query!</h1>
        </div>
        <div className="w-1/2 lg:flex hidden justify-center items-center">
          <div className="w-[94%] flex justify-end items-center">
            <button
              className="w-1/2 sm:bg-[#004aad] bg-[#16a34a] hover:bg-blue-700 md:text-sm sm:text-xs text-[0.5rem] font-normal rounded-sm p-[0.2rem] cursor-pointer"
              onClick={showUserConsellingFunc}
            >
              Need Conselling?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
