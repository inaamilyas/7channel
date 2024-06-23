import React from "react";
import { experience } from "../../constants";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  return (
    <>
      <section className="w-[100%] py-[60px]">
        <div className="container mx-auto h-fit">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Experience
          </h1>
          <div className="flex items-center justify-center flex-wrap mx-auto w-full">
            {experience.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
