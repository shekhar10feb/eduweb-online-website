import { Link } from "react-router-dom";
import examsAPI from "../apis/examsAPI";

export const Exams = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center flex-col p-3 bg-[#f1f5f9] my-2">
        <div className="w-full flex justify-center items-center flex-col md:p-4">
          <h1 className="w-full text-left lg:text-2xl md:text-xl sm:text-lg text-base text-blue-800 font-extrabold lg:ml-[1.5rem] md:ml-[1.2rem] sm:ml-[0.9rem] ml-0.6rem py-2">
            Top Exams of this Month
          </h1>
          <div className="w-[100%] md:w-[80%] flex justify-center items-center flex-col bg-[#fff] rounded-md boxShadow">
            <div className="w-[100%] inline sm:flex sm:justify-center sm:items-center items-start flex-wrap md:p-4">
              {examsAPI.map((examAPI) => {
                return (
                  <Link to={`/exams/${examAPI.name}`} key={examAPI.id}>
                    <button
                      className="m-3 py-1 px-4 bg-green-600 hover:bg-green-700 text-[#fff] text-xs md:text-sm lg:text-base rounded-md"
                      key={examAPI.id}
                    >
                      {examAPI.name}
                    </button>
                  </Link>
                );
              })}
            </div>
            <Link to={"/examlist"} className="w-full">
              <div className="w-full flex justify-center items-center bg-slate-50 hover:bg-slate-200 mt-4 p-3 border-t-2 border-purple-500">
                <h2 className="text-sm md:text-base lg:text-lg font-semibold text-purple-500">
                  View More
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
