import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EditNoteIcon from "@mui/icons-material/EditNote";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Contact = () => {
  // For Author
  function redirectToRegisterPageForAuthor() {
    window.location.href = "/api/registerForAuthor";
  }

  function redirectToLoginPageForAuthor() {
    window.location.href = "/api/loginForAuthor";
  }

  // For Member
  function redirectToRegisterPageForMember() {
    window.location.href = "/api/registerForMember";
  }

  function redirectToLoginPageForMember() {
    window.location.href = "/api/loginForMember";
  }

  // For College
  function redirectToRegisterPageForCollege() {
    window.location.href = "/api/registerForCollege";
  }

  function redirectToLoginPageForCollege() {
    window.location.href = "/api/loginForCollege";
  }

  return (
    <>
      <div className="w-full bg-[#202020] p-2 py-6">
        <div className="w-full text-[#fff]">
          <div className="w-full flex justify-center items-start">
            <div className="w-full flex justify-center items-center flex-col">
              <div className="inline">
                <h1 className="font-bold md:text-base text-sm">About EduWeb</h1>
                <div className="w-full flex justify-center items-center flex-col md:text-sm text-xs my-2">
                  <NavLink to={"/aboutus"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      About Us
                    </button>
                  </NavLink>

                  {/* <NavLink to={"/managementeam"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      Management Team
                    </button>
                  </NavLink> */}

                  {/* Member's Signup and Login */}
                  <span className="w-full flex justify-between flex-row text-gray-500 text-left">
                    Member {"  "}
                    <button
                      className="pl-1 hover:text-[#fff]"
                      onClick={() => redirectToRegisterPageForMember()}
                    >
                      Signup
                    </button>
                    /
                    <button
                      className="hover:text-[#fff]"
                      onClick={() => redirectToLoginPageForMember()}
                    >
                      Login
                    </button>
                  </span>

                  {/* Author's Signup and Login */}
                  <span className="w-full flex justify-between flex-row text-gray-500 text-left">
                    Author {"  "}
                    <button
                      className="pl-1 hover:text-[#fff]"
                      onClick={() => redirectToRegisterPageForAuthor()}
                    >
                      Signup
                    </button>
                    /
                    <button
                      className="hover:text-[#fff]"
                      onClick={() => redirectToLoginPageForAuthor()}
                    >
                      Login
                    </button>
                  </span>

                  <NavLink to={"/careers"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      Careers
                    </button>
                  </NavLink>

                  {/* <NavLink to={"/eduwebauthors"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      EduWeb Authors
                    </button>
                  </NavLink> */}

                  <NavLink to={"/faqs"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      FAQs
                    </button>
                  </NavLink>

                  <NavLink to={"/contactus"} className="w-full">
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      Contact Us
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col">
              <div className="inline">
                <h1 className="font-bold md:text-base text-sm">Enterprise</h1>
                <div className="w-full flex justify-center items-center flex-col md:text-sm text-xs my-2">
                  <span className="w-full flex justify-start items-center flex-row text-gray-500">
                    <button className="w-full text-left text-gray-500">
                      College {"  "}
                      <button
                        className="pl-1 hover:text-[#fff]"
                        onClick={() => redirectToRegisterPageForCollege()}
                      >
                        Signup
                      </button>
                      /
                      <button
                        className="hover:text-[#fff]"
                        onClick={() => redirectToLoginPageForCollege()}
                      >
                        Login
                      </button>
                    </button>
                  </span>

                  <NavLink
                    to={"/advertisingorsalesenquiries"}
                    className="w-full"
                  >
                    <button className="w-full text-gray-500 hover:text-[#fff] text-left">
                      Advertising/Sales Enquireies
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around items-center md:flex-row flex-col px-2 mt-6">
            <div className="w-full md:w-[30%] flex justify-start md:justify-center items-center">
              <NavLink to={"/"}>
                <img
                  src={logo}
                  alt="Contact Us EduWeb Online Website"
                  className="w-[6rem] md:w-[10rem] lg:w-[11rem] object-cover aspect-auto rounded-xl"
                />
              </NavLink>
            </div>
            <div className="w-full md:w-[80%] flex justify-center lg:justify-around items-center flex-wrap md:p-3 p-1">
              <div className="flex justify-center items-center flex-col md:m-4 m-1 sm:mx-2">
                <h1 className="font-bold md:text-base text-sm">Get in Touch</h1>
                <button className="bg-[#000] md:text-sm text-xs py-2 px-3 rounded-md mt-2">
                  <WhatsAppIcon sx={{ fontSize: "1rem" }} /> 0987654321
                </button>
              </div>
              {/* <div className="flex justify-center items-center flex-col md:m-4 m-1 sm:mx-2">
                <h1 className="font-bold md:text-base text-sm">Contribute</h1>
                <button className="bg-[#000] md:text-sm text-xs md:py-2 py-1 md:px-3 px-2 rounded-md mt-2">
                  <EditNoteIcon /> Write Review
                </button>
              </div> */}
              <div className="flex justify-center items-center flex-col md:m-4 m-1 sm:mx-2">
                <h1 className="font-bold md:text-base text-sm">Follow Us</h1>
                <div className="flex justify-center items-center flex-row md:text-sm text-xs">
                  <button className="bg-[#000] text-sm md:p-2 p-1 rounded-md md:mt-2 mt-1 mx-1">
                    <FacebookOutlinedIcon />
                  </button>
                  <button className="bg-[#000] text-sm md:p-2 p-1 rounded-md md:mt-2 mt-1 mx-1">
                    <TwitterIcon />
                  </button>
                  <button className="bg-[#000] text-sm md:p-2 p-1 rounded-md md:mt-2 mt-1 mx-1">
                    <InstagramIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
