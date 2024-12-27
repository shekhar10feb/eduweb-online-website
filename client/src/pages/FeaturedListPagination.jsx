import React from "react";

export const FeaturedListPagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <nav className="w-full my-2">
        <ul className="w-full flex justify-center items-center">
          <li className="md:w-20 w-16 bg-blue-600 hover:bg-blue-700 text-center text-white lg:text-[0.9rem] md:text-[0.7rem] text-[0.6rem] md:font-bold font-semibold md:px-2 md:py-1 p-1 md:rounded-md rounded mx-4 border-none md:shadow-md shadow cursor-pointer">
            <a href="#" className="page-link" onClick={goToPrevPage}>
              Previous
            </a>
          </li>
          {pageNumbers.map((pgNumber) => {
            <li
              key={pgNumber}
              className={`page-item ${currentPage == pgNumber ? "active" : ""}`}
            >
              <a
                href="#"
                onClick={() => setCurrentPage(pgNumber)}
                className="page-link"
              >
                {pgNumber}
              </a>
            </li>;
          })}
          <li className="md:w-20 w-16 bg-blue-600 hover:bg-blue-700 text-center text-white lg:text-[0.9rem] md:text-[0.7rem] text-[0.6rem] md:font-bold font-semibold md:px-2 md:py-1 p-1 md:rounded-md rounded mx-4 border-none md:shadow-md shadow cursor-pointer">
            <a href="#" className="page-link" onClick={goToNextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default FeaturedListPagination;
