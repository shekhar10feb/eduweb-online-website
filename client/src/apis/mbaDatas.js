import writing from "../assets/copy-writing.png";
import ranking from "../assets/top-three.png";
import predictor2 from "../assets/prediction.png";
import find from "../assets/findColleges.png";
import salaryData from "../assets/salary.png";
import compare from "../assets/compare.png";

const mbaDatas = [
  {
    id: 1,
    photo: writing,
    title: "ABOUT MBA",
    description:
      "50+ MBA Exams. Do you know enough about them? Know important dates, prepration tips, syllabus and more.",
    descriptionForMobile: "Know key dates, prep tips, syllabus & more.",
    src: `/about_mba`,
    alt: "writing",
  },
  {
    id: 2,
    photo: ranking,
    title: "MBA RANKINGS",
    description:
      "Curious to know the top MBA colleges? Check out latest college rankings from trusted sources.",
    descriptionForMobile: "Check college rankings from trusted sources.",
    src: `/All_Colleges/Management_colleges`,
    alt: "ranking",
  },
  {
    id: 3,
    photo: predictor2,
    title: "MBA STATE-WISE COLLEGES",
    description: "Find your college, where you may get admission.",
    descriptionForMobile: "Find your college.",
    src: `/mba_state_wise_colleges`,
    alt: "find",
  },
  {
    id: 4,
    photo: find,
    title: "FIND MBA COLLEGES",
    description:
      "Want to find the right MBA college for you? Find colleges based on their location, fees, specialization and more.",
    descriptionForMobile: "Find colleges based on location, fee and more.",
    src: `/find_mba_colleges`,
    alt: "find",
  },
];

export default mbaDatas;
