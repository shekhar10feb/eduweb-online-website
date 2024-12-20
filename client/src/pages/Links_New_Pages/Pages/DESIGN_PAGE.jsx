import React from "react";
import { Breadcrumb } from "../Sub_Pages/Breadcrumb";

export const DESIGN_PAGE = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center flex-col bg-white">
      <Breadcrumb
        fieldname="Design"
        coursenameFor_big_screen="Design: Course, Admission 2024, Fees, Syllabus, Entrance Exam, Top Colleges, Career Scope"
        coursenameFor_small_screen="Design: Course, Admission 2024.."
        overview="Overview"
        popular_courses="Courses"
        career="Career"
        admission="Admission"
        top_ranked_Colleges="Top Ranked Colleges"
        exams="Exams"
        college_by_location="Colleges By Location"
        college_reviews="College Reviews"
        aboutFieldname="About Design"
        aboutOverview="Overview"
        aboutCourses="Courses"
        aboutCareer="Career"
        aboutAdmission="Admission"
        aboutTop_Ranked_Colleges="Top Ranked Colleges"
        aboutExams="Exams"
        aboutColleges_By_Location="Colleges By Location"
        aboutCollege_Reviews="College Reviews"
      />
    </div>
  );
};
