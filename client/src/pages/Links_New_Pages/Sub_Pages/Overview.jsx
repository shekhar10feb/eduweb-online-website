import React, { useEffect, useState } from "react";
import { BlogFormat } from "../BlogFormat";

export const Overview = ({ aboutOverview, filteredDatas, fieldname }) => {
  const [overviewDatas, setOverviewDatas] = useState([]);

  useEffect(() => {
    const filteredData = filteredDatas.filter(
      (item) =>
        item.writtenBlogsByAuthor.filter(
          (field) =>
            field.blogCategory.substring(6) === fieldname &&
            field.blogSubCategory === aboutOverview
        ).length !== 0
    );
    setOverviewDatas(filteredData);
  }, [filteredDatas]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-full flex justify-evenly items-start lg:flex-row flex-col bg-gray-300">
        <div className="w-full flex justify-center items-start">
          <div className="w-full flex justify-center items-center flex-col md:p-1 p-[0.3rem]">
            {overviewDatas.length > 0 ? (
              <ul className="w-full h-full flex justify-center items-center flex-col">
                {overviewDatas.map((item) =>
                  item.writtenBlogsByAuthor.map((topic) => {
                    if (
                      topic.blogCategory.substring(6) === fieldname &&
                      topic.blogSubCategory === aboutOverview
                    ) {
                      let blogContent_LessReading = topic.blogContent.slice(
                        0,
                        400
                      );
                      let blogContent_ContinueReading = topic.blogContent;
                      return (
                        <div
                          className="w-full h-full flex justify-center items-start flex-col bg-white md:p-4 sm:p-2 p-1 my-1 shadow-lg"
                          key={topic._id}
                        >
                          <BlogFormat
                            filename={item.profile_image}
                            name={item.name}
                            email={item.email}
                            blogTitle={topic.blogTitle}
                            blogContent={topic.blogContent}
                            blogContent_ContinueReading={
                              blogContent_ContinueReading
                            }
                            blogContent_LessReading={blogContent_LessReading}
                          />
                        </div>
                      );
                    }
                  })
                )}
              </ul>
            ) : (
              <div className="w-full h-full flex justify-center items-center flex-col">
                <div className="w-full h-full flex justify-center items-center">
                  <h2 className="text-gray-500 italic">Sorry, no query!</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
