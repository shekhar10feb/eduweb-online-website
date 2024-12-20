import writing from "../assets/copy-writing.png";
import ranking from "../assets/top-three.png";
import predictor2 from "../assets/prediction.png";
import find from "../assets/findColleges.png";

const medicalDatas = [
    {
        id: 1,
        photo: writing,
        title: "ABOUT MEDICAL",
        description: "Want to know all about NEET and other Medical Exams? Find out details like important dates, prep tips and more.",
        descriptionForMobile: "Know key dates, prep tips, syllabus & many more.",
        src:`/about_medical`,
        alt: "writing",
    },
    {
        id: 2,
        photo: ranking,
        title: "MEDICAL RANKING",
        description: "Curious to know the top Medical Colleges? Check out latest college rankings from trusted sources.",
        descriptionForMobile: "Checking college rankings from trusted sources.",
        src:`/All_Colleges/Medical_colleges`,
        alt: "ranking",
    },
    {
        id: 3,
        photo: predictor2,
        title: "MEDICAL STATE-WISE COLLEGES",
        description: "Find your college, where you may get admission.",
        descriptionForMobile: "Find your college.",
        src:`/medical_state_wise_colleges`,
        alt: "predictor",
    },
    {
        id: 4,
        photo: find,
        title: "FIND MEDICAL COLLEGES",
        description: "Want to find the Best Medical College for you? Find colleges based on location, eligibility and more.",
        descriptionForMobile: "Find colleges based on location, branch and more.",
        src:`/find_medical_colleges`,
        alt: "find",
    },
];

export default medicalDatas;