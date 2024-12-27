import React from "react";
// import { useNavigate } from 'react-router-dom'

export const Sitemap = () => {
  // const navigate = useNavigate();
  return (
    <>
      <div className="w-[90%] text-right my-2">
        <button className="bg-green-500 p-3 text-[#fff] font-bold rounded-md">
          <a href="http://localhost:3001/sitemap/sitemap.xml.gz" download>
            Sitemap
          </a>
        </button>
      </div>
    </>
  );
};
