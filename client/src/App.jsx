import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";
import { Pre_Loader } from "./pages/Home/Pre_Loader.jsx";

// Pages > Main
import {
  Home,
  Contact,
  MainLayout,
  Exams,
  SingleExam,
  ErrorPage,
  ExamList,
  TrendingCourses,
  CourseList,
  SingleCourse,
  Grievances,
  NoticesOrSummons,
  Privacy,
  // Sitemap,
  TermsAndConditions,
  // LearnMoreAboutCollege,
  FeaturedList,
  UpdatedBlogs,
} from "./pages/index.jsx";

// LearnMoreAboutCollege Folder > LearnMoreAboutCollege
import { LearnMoreAboutCollege } from "./pages/LearnMoreAboutCollege Folder/index.jsx";

// Pages > Contact > About EduWeb
import {
  About_Us,
  Contact_Us,
  Careers,
  FAQs,
  EduWeb_Authors,
  Management_Team,
} from "./pages/Contact/About_EduWeb/index.jsx";

// Pages > Contact > Enterprise
import {
  Client_Login,
  AdvertisingOrSalesEnquiries,
} from "./pages/Contact/Enterprise/index.jsx";

// Pages > Header for Design
import {
  College_Reviews_for_Design,
  Colleges_By_Location_for_Design,
  Exams_for_Design,
  Popular_Courses_for_Design,
  Top_Ranked_Colleges_for_Design,
} from "./pages/Headers/Header_For_Design/index.jsx";

// Pages > Header for Engg
import {
  College_Reviews_for_Engg,
  Colleges_By_Location_for_Engg,
  Exams_for_Engg,
  Popular_Courses_for_Engg,
  Top_Ranked_Colleges_for_Engg,
} from "./pages/Headers/Header_For_Engg/index.jsx";

// Pages > Header for Medical
import {
  College_Reviews_for_Medical,
  Colleges_By_Location_for_Medical,
  Exams_for_Medical,
  Popular_Courses_for_Medical,
  Top_Ranked_Colleges_for_Medical,
} from "./pages/Headers/Header_For_Medical/index.jsx";

// Pages > Header for MBA
import {
  College_Reviews_for_MBA,
  Colleges_By_Location_for_MBA,
  Exams_for_MBA,
  Popular_Courses_for_MBA,
  Top_Ranked_Colleges_for_MBA,
} from "./pages/Headers/Header_For_MBA/index.jsx";

// Pages > Header for Study Abroad
import {
  Application_Process_for_Study_Abroad,
  Colleges_for_Study_Abroad,
  Countries_for_Study_Abroad,
  Scholarships_for_Study_Abroad,
} from "./pages/Headers/Header_For_Study_Abroad/index.jsx";

// Pages > EduWeb_Online
import {
  Creativity_And_Desining,
  Data_Science,
  Degree_Programs,
  Emerging_Technologies,
  Energy_And_Environment,
  Finance,
  Healthcare,
  Management,
  Personal_Development,
  Social_Sciences,
  Technology,
  Humanity,
} from "./pages/Headers/Header_For_Eduweb_Online/index.jsx";

// More Section in Header
import {
  Animation,
  Accounting_And_Commerce,
  Architecture_And_Planning,
  Arts,
  Aviation,
  Banking_Finance_And_Insurance,
  Beauty_And_Fitness,
  Hospitality_And_Travel,
  IT_And_Software,
  Law,
  Mass_Communication_And_Media,
  Nursing,
  Sarkaari_Exams,
  Science,
  Teaching_And_Education,
  Universities_And_Colleges,
} from "./pages/Headers/Header_For_More/index.jsx";

// Pages > Links_Pages
import {
  DESIGN_PAGE,
  EDUWEB_ONLINE,
  ENGINEERING_PAGE,
  MBA_PAGE,
  MEDICAL_PAGE,
  MORE_PAGE,
  STUDY_ABROAD_PAGE,
} from "./pages/Links_New_Pages/Pages/index.jsx";

// Pages > Home
import {
  UniversityTwelfthTenthQuestionPapers,
  UniversityTwelfthTenthBoard_or_University,
  All_Colleges_in_Home_Folder,
  College_searched_through_Find_all_query,
  Engineering_colleges_in_Home_Folder,
  Medical_colleges_in_Home_Folder,
  Management_colleges_in_Home_Folder,
  Law_colleges_in_Home_Folder,
  Fashion_Design_colleges_in_Home_Folder,
  Pharmacy_colleges_in_Home_Folder,
  Courses_offered_in_Home_Folder,
  Colleges_in_City_District_State_UT_in_Home_Folder,
  University_in_Home_Folder,
} from "./pages/Home/index.jsx";

// Courses > B.Tech
import {
  ABOUT_BTECH,
  BTECH_State_wise_Colleges,
  FIND_BTECH_Colleges,
} from "./pages/Courses/BTECH_Course/index.jsx";

// Courses > MBA
import {
  ABOUT_MBA,
  MBA_State_wise_Colleges,
  FIND_MBA_College,
} from "./pages/Courses/MBA_Course/index.jsx";

// Courses > DESIGN
import {
  ABOUT_DESIGN,
  DESIGN_State_wise_Colleges,
  FIND_DESIGN_Colleges,
} from "./pages/Courses/DESIGN_Course/index.jsx";

// Courses > MEDICAL
import {
  ABOUT_MEDICAL,
  MEDICAL_State_wise_Colleges,
  FIND_MEDICAL_College,
} from "./pages/Courses/MEDICAL_Course/index.jsx";

// Get the full detail of College in Courses section
import { Get_College_Full_Detail } from "./pages/Courses/Get_College_Full_Detail.jsx";

// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.withCredentials = true;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Pages > Main Route */}
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="exams" element={<Exams />} />
            <Route path="examlist" element={<ExamList />} />
            <Route path="/exams/:examName" element={<SingleExam />} />
            <Route path="trendingcourses" element={<TrendingCourses />} />
            <Route path="courselist" element={<CourseList />} />
            <Route
              path="/trendingcourses/:courseName"
              element={<SingleCourse />}
            />
            <Route path="featuredlist" element={<FeaturedList />} />
            <Route
              path="/featured/:learnmoreaboutcollege"
              element={<LearnMoreAboutCollege />}
            />

            <Route path="grienvances" element={<Grievances />} />
            <Route path="noticesorsummons" element={<NoticesOrSummons />} />
            <Route path="privacy" element={<Privacy />} />
            {/* <Route path="sitemap" element={<Sitemap />} /> */}
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="updatedblogs" element={<UpdatedBlogs />} />
            <Route path="*" element={<ErrorPage />} />
            {/* Pages > Contact > About EduWeb Route */}
            <Route path="aboutus" element={<About_Us />} />
            <Route path="contactus" element={<Contact_Us />} />
            <Route path="careers" element={<Careers />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="eduwebauthors" element={<EduWeb_Authors />} />
            <Route path="managementeam" element={<Management_Team />} />
            {/* Pages > Contact > Enterprise Route */}
            <Route path="clientlogin" element={<Client_Login />} />
            <Route
              path="advertisingorsalesenquiries"
              element={<AdvertisingOrSalesEnquiries />}
            />
            {/* Pages > Header for Design Route */}
            <Route
              path="College_Reviews_For_Design"
              element={<College_Reviews_for_Design />}
            />
            <Route
              path="Colleges_By_Location_For_Design"
              element={<Colleges_By_Location_for_Design />}
            />
            <Route path="Exams_For_Design" element={<Exams_for_Design />} />
            <Route
              path="Popular_Courses_For_Design"
              element={<Popular_Courses_for_Design />}
            />
            <Route
              path="Top_Ranked_Colleges_For_Design"
              element={<Top_Ranked_Colleges_for_Design />}
            />
            {/* Pages > Header for Engg Route */}
            <Route
              path="College_Reviews_For_Engg"
              element={<College_Reviews_for_Engg />}
            />
            <Route
              path="Colleges_By_Location_For_Engg"
              element={<Colleges_By_Location_for_Engg />}
            />
            <Route path="Exams_For_Engg" element={<Exams_for_Engg />} />
            <Route
              path="Popular_Courses_For_Engg"
              element={<Popular_Courses_for_Engg />}
            />
            <Route
              path="Top_Ranked_Colleges_For_Engg"
              element={<Top_Ranked_Colleges_for_Engg />}
            />
            {/* Pages > Header for Medical Route */}
            <Route
              path="College_Reviews_For_Medical"
              element={<College_Reviews_for_Medical />}
            />
            <Route
              path="Colleges_By_Location_For_Medical"
              element={<Colleges_By_Location_for_Medical />}
            />
            <Route path="Exams_For_Medical" element={<Exams_for_Medical />} />
            <Route
              path="Popular_Courses_For_Medical"
              element={<Popular_Courses_for_Medical />}
            />
            <Route
              path="Top_Ranked_Colleges_For_Medical"
              element={<Top_Ranked_Colleges_for_Medical />}
            />
            {/* Pages > Header for MBA Route */}
            <Route
              path="College_Reviews_For_MBA"
              element={<College_Reviews_for_MBA />}
            />
            <Route
              path="Colleges_By_Location_For_MBA"
              element={<Colleges_By_Location_for_MBA />}
            />
            <Route path="Exams_For_MBA" element={<Exams_for_MBA />} />
            <Route
              path="Popular_Courses_For_MBA"
              element={<Popular_Courses_for_MBA />}
            />
            <Route
              path="Top_Ranked_Colleges_For_MBA"
              element={<Top_Ranked_Colleges_for_MBA />}
            />
            {/* Pages > Study Abroad Route */}
            <Route
              path="Application_Process_For_Study_Abroad"
              element={<Application_Process_for_Study_Abroad />}
            />
            <Route
              path="Colleges_For_Study_Abroad"
              element={<Colleges_for_Study_Abroad />}
            />
            <Route
              path="Countries_For_Study_Abroad"
              element={<Countries_for_Study_Abroad />}
            />
            <Route
              path="Scholarships_For_Study_Abroad"
              element={<Scholarships_for_Study_Abroad />}
            />
            {/* Pages > EduWeb_Online Route */}
            <Route
              path="Creativity_And_Desining"
              element={<Creativity_And_Desining />}
            />
            <Route path="Data_Science" element={<Data_Science />} />
            <Route path="Degree_Programs" element={<Degree_Programs />} />
            <Route
              path="Emerging_Technologies"
              element={<Emerging_Technologies />}
            />
            <Route
              path="Energy_And_Environment"
              element={<Energy_And_Environment />}
            />
            <Route path="Finance" element={<Finance />} />
            <Route path="Healthcare" element={<Healthcare />} />
            <Route path="Management" element={<Management />} />
            <Route
              path="Personal_Development"
              element={<Personal_Development />}
            />
            <Route path="Social_Sciences" element={<Social_Sciences />} />
            <Route path="Technology" element={<Technology />} />
            <Route path="Humanity" element={<Humanity />} />

            {/* Pages > Links_Pages Route */}
            <Route path="design" element={<DESIGN_PAGE />} />
            <Route path="eduwebonline" element={<EDUWEB_ONLINE />} />
            <Route path="engineering" element={<ENGINEERING_PAGE />} />
            <Route path="mba" element={<MBA_PAGE />} />
            <Route path="medical" element={<MEDICAL_PAGE />} />
            <Route path="more" element={<MORE_PAGE />} />
            <Route path="studyabroad" element={<STUDY_ABROAD_PAGE />} />

            {/* Pages > More Route */}
            <Route path="Animation" element={<Animation />} />
            <Route
              path="Accounting_And_Commerce"
              element={<Accounting_And_Commerce />}
            />
            <Route
              path="Architecture_And_Planning"
              element={<Architecture_And_Planning />}
            />
            <Route path="Arts" element={<Arts />} />
            <Route path="Aviation" element={<Aviation />} />
            <Route
              path="Banking_Finance_And_Insurance"
              element={<Banking_Finance_And_Insurance />}
            />
            <Route path="Beauty_And_Fitness" element={<Beauty_And_Fitness />} />
            <Route
              path="Hospitality_And_Travel"
              element={<Hospitality_And_Travel />}
            />
            <Route path="IT_And_Software" element={<IT_And_Software />} />
            <Route path="Law" element={<Law />} />
            <Route
              path="Mass_Communication_And_Media"
              element={<Mass_Communication_And_Media />}
            />
            <Route path="Nursing" element={<Nursing />} />
            <Route path="Sarkaari_Exams" element={<Sarkaari_Exams />} />
            <Route path="Science" element={<Science />} />
            <Route
              path="Teaching_And_Education"
              element={<Teaching_And_Education />}
            />
            <Route
              path="Universities_And_Colleges"
              element={<Universities_And_Colleges />}
            />

            {/* Pages > Home Route */}
            <Route
              path="University_Twelfth_Tenth_Question_Papers"
              element={<UniversityTwelfthTenthQuestionPapers />}
            />
            <Route
              path="/University_Twelfth_Tenth_Question_Papers/:specificboard"
              element={<UniversityTwelfthTenthBoard_or_University />}
            />

            {/* Specific College directly from Main Website */}
            <Route
              path="/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />

            {/* All_Colleges */}
            <Route
              path="All_Colleges"
              element={<All_Colleges_in_Home_Folder />}
            />

            {/* All_Colleges > specificcollege */}
            <Route
              path="/All_Colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />

            {/* All_Colleges > List_of_Colleges */}
            <Route
              path="/All_Colleges/List_of_Colleges"
              element={<Colleges_in_City_District_State_UT_in_Home_Folder />}
            />

            {/* All_Colleges > List_of_Colleges > specificcollege */}
            <Route
              path="/All_Colleges/List_of_Colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />

            {/* Engineering_colleges */}
            <Route
              path="/All_Colleges/Engineering_colleges"
              element={<Engineering_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Engineering_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Engineering_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Medical_colleges */}
            <Route
              path="/All_Colleges/Medical_colleges"
              element={<Medical_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Medical_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Medical_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Management_colleges */}
            <Route
              path="/All_Colleges/Management_colleges"
              element={<Management_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Management_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Management_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Law_colleges */}
            <Route
              path="/All_Colleges/Law_colleges"
              element={<Law_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Law_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Law_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Fashion_Design_colleges */}
            <Route
              path="/All_Colleges/Fashion_Design_colleges"
              element={<Fashion_Design_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Fashion_Design_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Fashion_Design_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Pharmacy_colleges */}
            <Route
              path="/All_Colleges/Pharmacy_colleges"
              element={<Pharmacy_colleges_in_Home_Folder />}
            />
            {/* All_Colleges > Pharmacy_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Pharmacy_colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            <Route
              path="/All_Colleges/Course_Offered_By_Colleges"
              element={<Courses_offered_in_Home_Folder />}
            />
            {/* All_Colleges > Pharmacy_colleges > specificcollege */}
            <Route
              path="/All_Colleges/Course_Offered_By_Colleges/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />

            <Route
              path="/All_Colleges/University"
              element={<University_in_Home_Folder />}
            />
            {/* All_Colleges > Pharmacy_colleges > specificcollege */}
            <Route
              path="/All_Colleges/University/:specificcollege"
              element={<College_searched_through_Find_all_query />}
            />
            {/* Courses > B.Tech */}
            <Route path="about_btech" element={<ABOUT_BTECH />} />
            <Route
              path="engineering_state_wise_colleges"
              element={<BTECH_State_wise_Colleges />}
            />
            <Route
              path="/engineering_state_wise_colleges/:getcollegefulldetail"
              element={<Get_College_Full_Detail />}
            />

            <Route
              path="find_btech_colleges"
              element={<FIND_BTECH_Colleges />}
            />
            {/* Courses > MBA */}
            <Route path="about_mba" element={<ABOUT_MBA />} />
            <Route
              path="mba_state_wise_colleges"
              element={<MBA_State_wise_Colleges />}
            />
            <Route
              path="/mba_state_wise_colleges/:getcollegefulldetail"
              element={<Get_College_Full_Detail />}
            />

            <Route path="find_mba_colleges" element={<FIND_MBA_College />} />
            {/* Courses > Design */}
            <Route path="about_design" element={<ABOUT_DESIGN />} />
            <Route
              path="fashion_design_state_wise_colleges"
              element={<DESIGN_State_wise_Colleges />}
            />
            <Route
              path="/fashion_design_state_wise_colleges/:getcollegefulldetail"
              element={<Get_College_Full_Detail />}
            />

            <Route
              path="find_design_colleges"
              element={<FIND_DESIGN_Colleges />}
            />
            {/* Courses > Medical */}
            <Route path="about_medical" element={<ABOUT_MEDICAL />} />
            <Route
              path="medical_state_wise_colleges"
              element={<MEDICAL_State_wise_Colleges />}
            />
            <Route
              path="/medical_state_wise_colleges/:getcollegefulldetail"
              element={<Get_College_Full_Detail />}
            />

            <Route
              path="find_medical_colleges"
              element={<FIND_MEDICAL_College />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
