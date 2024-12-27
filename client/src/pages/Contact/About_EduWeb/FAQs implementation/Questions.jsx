import React from "react";
import { SingleQuestion } from "./SingleQuestion";

export const Questions = ({ datas, activeId, toggleQuestion }) => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      {datas.map((data) => {
        return (
          <SingleQuestion
            key={data.id}
            {...data}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          ></SingleQuestion>
        );
      })}
    </section>
  );
};
