import React, { useState } from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export const BlogFormatForUpdatedBlogs = ({
  item,
  data,
  category,
  blogContent_ContinueReading,
  blogContent_LessReading,
  blogSubCategory,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="w-full flex justify-center items-center flex-col">
      <div className="w-full flex justify-start items-center flex-row text-blue-800">
        <div className="flex md:hidden">
          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "small" }} />
        </div>
        <div className="hidden md:flex lg:hidden">
          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "medium" }} />
        </div>
        <div className="hidden lg:flex">
          <KeyboardDoubleArrowRightIcon sx={{ fontSize: "large" }} />
        </div>
        <h1 className="lg:text-base md:text-sm text-xs my-2 md:font-bold font-semibold">
          {category.slice(6)}
        </h1>
      </div>
      <div className="w-full flex justify-start items-center flex-row bg-gray-200 py-1">
        <div className="flex justify-start items-center flex-row bg-gray-200 px-1">
          <img
            src={data.profile_image}
            className="md:w-14 sm:w-10 w-8 object-fill aspect-square rounded"
            alt="Updated blogs for Eduweb Online Website"
          />
        </div>
        <div className="ml-2">
          <h2 className="text-black lg:text-sm text-xs font-medium">
            {data.name}
          </h2>
          <p className="sm:text-[0.7rem] text-[0.6rem] text-gray-600 italic select-none">
            &#60;Email-id: {data.email}&#62;
          </p>
        </div>
      </div>
      <p className="w-full text-start md:text-sm text-xs text-gray-700 my-1 md:font-bold font-semibold">
        Category: {blogSubCategory}
      </p>
      <h1 className="w-full md:text-sm text-xs text-gray-700 my-1 md:font-bold font-semibold underline">
        {item.blogTitle}
      </h1>
      <div className="w-full flex text-jutify md:mt-2 mt-1 font-normal">
        <p className="w-full md:text-sm text-xs text-justify text-gray-600">
          {readMore
            ? `${blogContent_ContinueReading}...`
            : `${blogContent_LessReading}...`}
          <button
            type="button"
            className="text-purple-500"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Less Reading" : "Continue Reading"}
          </button>
        </p>
      </div>
    </article>
  );
};
