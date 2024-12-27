import { useNavigate, useParams, Link } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:w-2/3 w-full flex justify-center items-center flex-col bg-gray-100 lg:mt-5 md:mt-3 mt-1 py-10 lg:rounded-md rounded-none mx-auto">
        <h1 className="w-full md:text-2xl sm:text-xl text-lg lg:font-extrabold font-bold text-center text-gray-600">
          404 Error
        </h1>
        <h2 class="w-full lg:text-xl md:text-lg sm:text-base text-sm lg:font-bold text-semibold text-center text-gray-600">
          Page not found!!
        </h2>
        <div className="w-full flex justify-end items-center md:mt-3">
          <button
            className="w-auto md:text-base sm:text-sm text-xs lg:font-bold md:text-semibold bg-green-500 md:p-2 p-1 md:mx-2 mx-1 text-[#fff] md:rounded-md sm:rounded rounded-sm"
            onClick={() => navigate("/")}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </>
  );
};
