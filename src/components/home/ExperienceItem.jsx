import React from "react";

function ExperienceItem({ exp }) {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleReadMore = () => {
  //   setIsExpanded(!isExpanded);
  // };
  return (
    <div className="p-8 rounded-[10px] cursor-pointer transition-all transition-1000 hover:bg-[#e6e6e6] m-5 bg-[#f5f5f5] border-[#c0c0c0] border-[1px] flex justify-center gap-4">
      {/* `<div className="w-[300px] bg-red-300">
      <img src={exp.logo} className="w-[100px]" alt="" />
    </div>` */}
      <div className="">
        <h1 className="text-[30px]">{exp.role}</h1>
        <h4 className="text-[24px] font-bold">{exp.company}</h4>
        <p className="text-[24px]">{exp.location}</p>
        <h5 className="text-[24px]">{exp.date}</h5>
        <p
          className={`text-[20px] my-2 transition-all duration-1000 `}
        >
          {exp.desc}
        </p>
        {/* <button onClick={toggleReadMore} className="text-blue-500 text-lg mt-2">
          {isExpanded ? "Read Less" : "Read More"}
        </button> */}
      </div>
    </div>
  );
}

export default ExperienceItem;
