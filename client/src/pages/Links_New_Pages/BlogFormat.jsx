import React, { useState } from "react";

export const BlogFormat = ({
  filename,
  name,
  email,
  blogTitle,
  blogContent_ContinueReading,
  blogContent_LessReading,
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="w-full flex justify-center items-center flex-col">
      <div className="w-full h-auto flex justify-start flex-row bg-gray-200 py-1">
        <div className="w-auto h-auto flex justify-start flex-row bg-gray-200 px-1">
          <img
            src={filename}
            className="md:w-14 sm:w-10 w-8 h-auto object-contain aspect-square rounded"
            alt="Blogs for Eduweb Online Website"
          />
        </div>
        <div className="w-auto ml-2">
          <h2 className="text-black lg:text-sm text-xs font-medium">{name}</h2>
          <p className="sm:text-[0.7rem] text-[0.6rem] text-gray-600 italic select-none">
            &#60;Email-id: {email}&#62;
          </p>
        </div>
      </div>
      <h1 className="w-full flex justify-start items-center md:text-sm text-xs text-gray-700 mt-2 md:font-bold font-semibold underline">
        {blogTitle}
      </h1>
      <div className="w-full flex justify-center mt-1 font-normal">
        <p className="w-full md:text-sm text-xs text-justify tracking-wide text-gray-600 md:px-2 p-1">
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
