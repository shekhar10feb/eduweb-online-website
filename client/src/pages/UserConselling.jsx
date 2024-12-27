import React, { useState } from "react";
import logo from "../assets/logoPre.png";
import axios from "axios";

export const UserConselling = ({ closeUserConsellingFunc }) => {
  let [matchingCaptcha, setMatchingCaptcha] = useState("");
  const [displayCaptchaDiv, setDisplayCaptchaDiv] = useState("flex");
  const [displayCaptchaMessage, setDisplayCaptchaMessage] = useState("none");
  const [fillAllOptions, setFillAllOptions] = useState("");
  const [displayFillAllOptionsDiv, setDisplayFillAllOptionsDiv] =
    useState("none");

  let firstNum = 0;
  firstNum = Math.floor(Math.random() * 10);

  let secondNum = 0;
  secondNum = Math.floor(Math.random() * 10);

  let rotateFirstNum = 0;
  rotateFirstNum = Math.floor(Math.random() * 30);

  let rotateSecondNum = 0;
  rotateSecondNum = Math.floor(Math.random() * -30);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      const { user, mobileNumber, selectedOption, userInput } =
        event.target.elements;

      // console.log("user: ", user.value);
      // console.log("mobileNumber: ", mobileNumber.value);
      // console.log("selectedOption: ", selectedOption.value);
      // console.log("num1: ", firstNum);
      // console.log("num2: ", secondNum);
      let sum = firstNum + secondNum;
      // console.log("Sum of two nums: ", sum);
      // console.log("userInput: ", userInput.value);

      if (
        firstNum !== undefined &&
        secondNum !== undefined &&
        sum !== undefined &&
        user.value !== undefined &&
        mobileNumber.value !== undefined &&
        selectedOption.value !== undefined &&
        userInput.value !== undefined &&
        firstNum !== null &&
        secondNum !== null &&
        sum !== null &&
        user.value !== null &&
        mobileNumber.value !== null &&
        selectedOption.value !== null &&
        userInput.value !== null &&
        firstNum !== "" &&
        secondNum !== "" &&
        sum !== "" &&
        user.value !== "" &&
        mobileNumber.value !== "" &&
        selectedOption.value !== "" &&
        userInput.value !== ""
      ) {
        if (
          sum == userInput.value &&
          user.value &&
          mobileNumber.value &&
          selectedOption.value
        ) {
          const formData = {
            user: user.value,
            mobile: mobileNumber.value,
            selectedOption: selectedOption.value,
          };

          await axios
            .post("/postMethodForUserConselling", formData)
            .then((response) => {
              setMatchingCaptcha(response.data);
            })
            .catch((error) => {
              console.error(error);
            });

          // console.log("user: ", user.value);
          // console.log("mobileNumber: ", mobileNumber.value);
          // console.log("selectedOption: ", selectedOption.value);

          setDisplayCaptchaDiv("none");
          setDisplayCaptchaMessage("flex");

          setTimeout(() => {
            setDisplayCaptchaDiv("flex");
            setDisplayCaptchaMessage("none");
          }, 5000);

          user.value = "";
          mobileNumber.value = "";
          selectedOption.value = "";
          userInput.value = "";
        } else {
          setDisplayCaptchaDiv("none");
          setDisplayCaptchaMessage("flex");
          setMatchingCaptcha("Captcha is wrong!!");

          setTimeout(() => {
            setDisplayCaptchaDiv("flex");
            setDisplayCaptchaMessage("none");
          }, 5000);

          user.value = "";
          mobileNumber.value = "";
          selectedOption.value = "";
          userInput.value = "";
        }
      } else {
        setDisplayFillAllOptionsDiv("flex");
        setFillAllOptions("** Please fill all options!! **");
        setTimeout(() => {
          setDisplayFillAllOptionsDiv("none");
        }, 5000);

        user.value = "";
        mobileNumber.value = "";
        selectedOption.value = "";
        userInput.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="sm:w-[25rem] w-[90%] h-auto flex justify-center items-center bg-white lg:rounded-lg md:rounded-md rounded z-50 sm:p-3 p-2 md:my-8 sm:my-4 my-2">
      <div className="w-full h-full flex justify-center items-center flex-col md:p-2 p-1 lg:rounded-lg md:rounded-md rounded border border-gray-300">
        <div className="w-full flex justify-center items-start flex-row">
          <div className="w-[95%] h-[4.5rem] flex justify-between items-center sm:flex-row flex-col text-black md:p-2 sm:p-1">
            <div className="sm:w-[35%] w-[6rem] inline-block bg-blue-800 py-1 md:rounded-md rounded sm:-skew-y-12">
              <img
                src={logo}
                alt="User Conselling on EduWeb Online Website"
                className="w-32 object-cover aspect-auto"
              />
            </div>
            <div className="sm:w-[65%] w-full inline-block text-center lg:text-lg md:text-base text-sm text-gray-600 font-semibold sm:mt-0 mt-4">
              <h2>
                Wecome to <span className="underline">EduWeb!!</span>
              </h2>
            </div>
          </div>
          <div className="w-[5%] flex justify-end items-center">
            <button
              className="text-sm transition ease-in-out delay-150 font-semibold text-gray-500 hover:text-black cursor-pointer"
              onClick={closeUserConsellingFunc}
            >
              X
            </button>
          </div>
        </div>
        <div className="w-full flex justify-start items-center flex-row md:mt-4 sm:mt-3 mt-2">
          <h1 className="text-blue-800 sm:text-base text-sm font-semibold mx-2">
            Need Conselling?
          </h1>
          <p className="text-gray-500 sm:text-sm text-xs font-semibold">
            Register here!
          </p>
        </div>
        <div
          className="flex items-center text-sm text-red-500"
          style={{ display: displayFillAllOptionsDiv }}
        >
          <h2>{fillAllOptions}</h2>
        </div>

        {/* Form */}
        <form
          action=""
          className="w-full flex justify-center items-center flex-col text-black md:text-base sm:text-sm text-xs"
          onSubmit={(event) => handleSubmit(event)}
        >
          <input
            type="text"
            placeholder="Enter your name here..."
            className="w-[97%] md:p-2 sm:p-1 p-[0.1rem] pl-[0.4rem] border border-gray-300 md:mt-4 sm:mt-3 mt-2 rounded-md shadow-lg"
            name="user"
            style={{ boxShadow: "0px 0px 10px 0px #939999" }}
          />
          <input
            type="text"
            placeholder="Enter your mobile here..."
            className="w-[97%] md:p-2 sm:p-1 p-[0.1rem] pl-[0.4rem] border border-gray-300 md:mt-4 sm:mt-3 mt-2 rounded-md shadow-lg"
            name="mobileNumber"
            style={{ boxShadow: "0px 0px 10px 0px #939999" }}
          />

          {/* Student's Interest */}
          <div
            className="w-[97%] md:p-2 sm:p-1 p-[0.1rem] pl-[0.4rem] border border-gray-300 md:mt-4 sm:mt-3 mt-2 rounded-md shadow-lg"
            style={{ boxShadow: "0px 0px 10px 0px #939999" }}
          >
            <div className="w-full flex justify-between items-center text-gray-500">
              <label htmlFor="interest">Interested in:</label>
              <select
                name="selectedOption"
                id="interest"
                className="border border-black-600 bg-white rounded-sm p-0.5 cursor-pointer"
              >
                <option value="">Please choose an option</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Arts">Arts</option>
                <option value="Science">Science</option>
                <option value="Engineering">Engineering</option>
                <option value="MBA">MBA</option>
                <option value="MBBS">MBBS</option>
              </select>
            </div>
          </div>

          {/* Captcha Part */}
          <div
            className="flex justify-around md:mt-4 sm:mt-3 mt-2 bg-gray-400 w-[97%] md:p-3 sm:p-2 p-[0.1rem] pl-[0.4rem] rounded-md shadow-lg"
            style={{
              display: displayCaptchaDiv,
              boxShadow: "0px 0px 10px 0px #939999",
            }}
          >
            <div className="w-full flex justify-around font-semibold flex-col">
              <h2 className="my-1 underline">Captcha</h2>
              <div className="w-full flex justify-start flex-row md:p-2 p-1">
                <p
                  className="w-12 text-center text-white m-1"
                  value={firstNum}
                  style={{ transform: `rotate(${rotateFirstNum}deg)` }}
                >
                  {firstNum}
                </p>{" "}
                <p className="text-white">+</p>{" "}
                <p
                  className="w-12 text-center text-white m-1"
                  value={secondNum}
                  style={{ transform: `rotate(${rotateSecondNum}deg)` }}
                >
                  {secondNum}
                </p>{" "}
                <p className="text-white mr-2">=</p>{" "}
                <input
                  type="text"
                  className="w-12 text-center rounded-md shadow-lg outline outline-transparent"
                  name="userInput"
                />
              </div>
            </div>
          </div>

          {/* Captcha message */}
          <div
            className="flex justify-around md:mt-4 sm:mt-3 mt-2 bg-gray-400 w-[97%] md:p-3 sm:p-2 p-[0.1rem] pl-[0.4rem] rounded-md shadow-lg"
            style={{
              display: displayCaptchaMessage,
              boxShadow: "0px 0px 10px 0px #939999",
            }}
          >
            <p className="text-white">{matchingCaptcha}</p>
          </div>

          {/* Send button */}
          <div className="w-[97%] flex justify-start items-center">
            <button
              type="submit"
              className="lg:text-base md:text-sm text-xs text-white font-semibold py-1 px-2 rounded-md shadow-lg md:mt-4 sm:mt-3 mt-2 bg-blue-800 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
