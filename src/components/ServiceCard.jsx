import React from "react";

function ServiceCard({ icon, title, desc }) {
  return (
    <div
      className="p-5 rounded-[10px] cursor-pointer hover:scale-[1.10] transition-all transition-1000 hover:bg-[#e6e6e6] m-5 w-[400px] h-[400px] bg-[#f5f5f5] border-[#c0c0c0] border-[1px] flex items-center justify-center flex-col gap-4"
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div
        className="icon service-icon"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
      <h4 className="text-center text-[24px] font-bold my-2">{title}</h4>
      <p className="text-center text-[20px] my-2">{desc}</p>
    </div>
  );
}

export default ServiceCard;
