import writing from "../assets/copy-writing.png";
import expert from "../assets/expert-guidance.png";
import compare from "../assets/compare.png";
import ranking from "../assets/top-three.png";
import find from "../assets/findColleges.png";
import predictor2 from "../assets/prediction.png";

const designDatas = [
    {
        id: 1,
        photo: writing,
        title: "ABOUT DESIGN",
        description: "Want to pursue design, but not sure which exams to take? Find out details like important dates, prep tips and more.",
        descriptionForMobile: "Know key dates, prep tips, syllabus and more.",
        src:`/about_design`,
        alt: "writing",
    },
    {
        id: 2,
        photo: ranking,
        title: "DESIGN RANKINGS",
        description:
          "Curious to know the top MBA colleges? Check out latest college rankings from trusted sources.",
        descriptionForMobile: "Check college rankings from trusted sources.",
        src:`/All_Colleges/Fashion_Design_colleges`,
        alt: "ranking",
      },
      {
        id: 3,
        photo: predictor2,
        title: "DESIGN STATE-WISE COLLEGES",
        description: "Find your college, where you may get admission.",
        descriptionForMobile: "Find your college.",
        src:`/fashion_design_state_wise_colleges`,
        alt: "find",
      },
    {
        id: 4,
        photo: find,
        title: "FIND DESIGN COLLEGES",
        description: "Want to find the Best Medical College for you? Find colleges based on location, eligibility and more.",
        descriptionForMobile: "Find colleges based on fees & specialization.",
        src:`/find_design_colleges`,
        alt: "find",
    },
];

export default designDatas;