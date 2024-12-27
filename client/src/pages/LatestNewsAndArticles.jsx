import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pre_Loader } from "./Home/Pre_Loader";

export const LatestNewsAndArticles = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      axios.get("/api/eduweb-news").then((data) => {
        setNews(data?.data);
      });
    } catch (error) {
      return null;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    try {
      fetchBlogs();
    } catch (error) {
      console.log(error);
      return null;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Pre_Loader />
      </div>
    );
  }

  return (
    <div
      className="w-full flex justify-center items-start flex-col my-[1rem]"
      name="latestnews"
    >
      {/* Main Part  */}
      <div className="w-full h-auto flex justify-around items-start bg-slate-200 flex-col py-2">
        <h1 className="w-full text-left lg:text-2xl md:text-xl sm:text-lg text-base text-blue-800 font-extrabold lg:ml-[1.5rem] md:ml-[1.2rem] sm:ml-[0.9rem] ml-0.6rem py-2 p-3">
          Latest Articles & Blogs
        </h1>
        <div className="w-full lg:h-[20rem] h-[10rem] flex justify-center items-center flex-wrap overflow-y-auto">
          {news.length > 0 ? (
            <ul className="w-full h-full flex justify-center items-center flex-wrap">
              {news.map((article) => {
                return (
                  <li
                    className="lg:w-[45%] sm:w-[45%] w-full flex justify-between md:items-start items-center flex-row bg-white lg:m-2 m-[0.2rem] lg:p-2 p-[0.2rem] lg:rounded-md md:rounded-sm rounded shadow-lg"
                    key={article.article_id}
                  >
                    <div className="md:w-[12%] w-[15%] flex justify-center items-center md:rounded-sm rounded border border-gray-300">
                      <img
                        src={article.image_url}
                        className="w-full object-contain aspect-square"
                        alt="Latest News and Articles on Eduweb Online Website"
                      />
                    </div>
                    <div className="w-[84%] flex justify-center items-center flex-col">
                      <h2 className="w-full hidden md:flex text-left lg:text-[1rem] md:text-[0.8rem] text-[#353535] font-bold">
                        {article.title.slice(0, 40)}
                      </h2>
                      <h2 className="w-full flex md:hidden text-left text-[0.7rem] text-[#353535] font-bold">
                        {article.title.slice(0, 30)}
                      </h2>
                      <p className="w-[100%] hidden md:flex justify-center items-start flex-col text-start lg:text-sm md:text-[0.7rem] md:leading-5 leading-6 font-normal lg:font-medium text-gray-600">
                        {article.content.substring(0, 90)}...
                      </p>
                      <p className="w-[100%] flex md:hidden text-start lg:text-sm text-[0.6rem] font-normal lg:font-medium text-gray-600 md:pl-[0.2rem]">
                        {article.content.substring(0, 45)}...
                      </p>
                      <div className="w-full flex justify-between items-center flex-row">
                        <a
                          href={article.link}
                          className="flex text-start lg:text-sm md:text-[0.7rem] text-[0.6rem] font-normal lg:font-medium text-purple-500"
                          target="_blank"
                        >
                          Continue reading
                        </a>
                        <p className="flex md:text-[0.7rem] text-[0.6rem] font-normal lg:font-medium text-gray-600 text-right">
                          Published on: {article.pubDate.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="w-full h-full flex justify-center items-center flex-col">
              <div className="lg:w-[77%] w-full flex justify-center items-center flex-col lg:p-4">
                <h2 className="text-gray-500 italic">Sorry, no query!</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
