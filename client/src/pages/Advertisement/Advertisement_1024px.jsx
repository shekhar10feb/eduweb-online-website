import React, { useState, useEffect } from "react";
import axios from "axios";

export const Advertisement_1024px = () => {
  const [adsDatas, setAdsDatas] = useState([]);
  // console.log("Resolution: 1024px");

  useEffect(() => {
    try {
      axios.get("/api/getting_uploading_ads").then((data) => {
        // console.log(data);
        setAdsDatas(data?.data);
      });
    } catch (error) {
      console.log(
        "There is an error in UpdatedBlogs.jsx in client version",
        error
      );
    }
  }, []);

  return (
    <>
      <div className="w-[100%] flex justify-center items-center flex-col">
        {Array.isArray(adsDatas)
          ? adsDatas.map((data) => {
              if (data.image_resolution_value === "1024px") {
                // console.log("data",data);
                return (
                  <div
                    className="w-full flex justify-center items-center flex-col my-2"
                    key={data._id}
                  >
                    <img
                      src={data.filename}
                      className="min-w-[100%] min-h-[100%] object-fill aspect-auto advertisementPhoto" alt="Eduweb-Online-Website"
                    />
                  </div>
                );
              }
            })
          : "Loading..."}
      </div>
    </>
  );
};
