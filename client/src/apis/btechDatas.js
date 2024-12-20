import writing from "../assets/copy-writing.png";
import ranking from "../assets/top-three.png";
import predictor2 from "../assets/prediction.png";
import find from "../assets/findColleges.png";
import compare from "../assets/compare.png";

const btechDatas = [
    {
        id: 1,
        photo: writing,
        title: "ABOUT B.TECH",
        description: "30+ state-level and private college exams you could apply for! Kow eligibility, important dates, prep tips and more.",
        descriptionForMobile: "Know key dates, prep tips, syllabus & more.",
        src:`/about_btech`,
        alt: "writing",
    },
    {
        id: 2,
        photo: ranking,
        title: "B.TECH RANKINGS",
        description: "3,400+ AICTE approved B.Tech colleges across India. Start your college search with top colleges in your city and state.",
        descriptionForMobile: "Check college rankings from trusted sources.",
        src:`/All_Colleges/Engineering_colleges`,
        alt: "predictor",
    },
    {
        id: 3,
        photo: predictor2,
        title: "B.TECH. STATE-WISE COLLEGES",
        description: "Find your college, where you may get admission.",
        descriptionForMobile: "Find your college.",
        src:`/engineering_state_wise_colleges`,
        alt: "find",
    },
    {
        id: 4,
        photo: find,
        title: "FIND B.TECH COLLEGES",
        description: "Less than 1% B.Tech aspirants get into IITs. Discover 3,000+ colleges based on location, branch & other preferences.",
        descriptionForMobile: "Find colleges based on location, branch and more.",
        src:`/find_btech_colleges`,
        alt: "Salary Data",
    },
];

export default btechDatas;