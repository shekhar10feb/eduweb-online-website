import React from "react";
import { Breadcrumb } from "../Sub_Pages_for_Study_Abroad/Breadcrumb";

export const STUDY_ABROAD_PAGE = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col bg-white">
      <Breadcrumb
        fieldname="Study Abroad"
        coursenameFor_big_screen="Study Abroad: Colleges, Countries, Scholarships, etc."
        coursenameFor_small_screen="Study Abroad: Colleges, Countries,.."
        overview="Overview"
        colleges="Colleges"
        countries="Countries"
        application_process="Application Process"
        scholarships="Scholarships"
        aboutFieldname="About Study Abroad"
        aboutOverview="Overview in Study Abroad"
        aboutCountries="Countries in Study Abroad"
        aboutColleges="Colleges in Study Abroad"
        aboutApplicationProcess="Application Process in Study Abroad"
        aboutScholarships="Scholarships in Study Abroad"
      />
    </div>
  );
};
