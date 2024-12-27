import React from "react";
import { NavLink } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const Footer = () => {
  return (
    <div className="w-full flex justify-around items-center lg:flex-row flex-col bg-[#000] text-[#fff] md:text-xs text-[0.55rem] lg:py-3 py-2">
      <div className="lg:w-1/2 w-full flex justify-center items-center flex-wrap my-1">
        <NavLink
          to={"/grienvances"}
          className="text-gray-400 hover:text-[#fff]"
        >
          Grievances
        </NavLink>
        <FiberManualRecordIcon
          sx={{
            fontSize: "0.5rem",
            marginLeft: "0.3rem",
            marginRight: "0.3rem",
            color: "gray",
          }}
        />{" "}
        <NavLink
          to={"/noticesorsummons"}
          className="text-gray-400 hover:text-[#fff]"
        >
          Notices / Summons
        </NavLink>
        <FiberManualRecordIcon
          sx={{
            fontSize: "0.5rem",
            marginLeft: "0.3rem",
            marginRight: "0.3rem",
            color: "gray",
          }}
        />{" "}
        <NavLink to={"/privacy"} className="text-gray-400 hover:text-[#fff]">
          Privacy
        </NavLink>
        <FiberManualRecordIcon
          sx={{
            fontSize: "0.5rem",
            marginLeft: "0.3rem",
            marginRight: "0.3rem",
            color: "gray",
          }}
        />{" "}
        {/* <NavLink to={"/sitemap"} className="text-gray-400 hover:text-[#fff]">
          Sitemap
        </NavLink> */}
        <NavLink className="text-gray-400 hover:text-[#fff]">
          <a href="/sitemap/sitemap.xml.gz" download>
            Sitemap
          </a>
        </NavLink>
        <FiberManualRecordIcon
          sx={{
            fontSize: "0.5rem",
            marginLeft: "0.3rem",
            marginRight: "0.3rem",
            color: "gray",
          }}
        />{" "}
        <NavLink
          to={"/termsandconditions"}
          className="text-gray-400 hover:text-[#fff]"
        >
          Terms & Conditions
        </NavLink>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center flex-wrap text-center my-1">
        <p className="text-gray-400">
          Trade Marks belong to the respective owners. Copyright © 2023
          EduWeb.com. All rights reserved.
        </p>
      </div>
    </div>
  );
};
