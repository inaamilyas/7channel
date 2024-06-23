import React from "react";

function About() {
  return (
    <>
      <section
        className="w-[100%]"
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            About
          </h1>
          <div className=" flex flex-col-reverse lg:flex-row items-start justify-between gap-10 flex-wrap">
            <div
              className="flex-1 border-[2px shadow-md"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <img
                className="w-full"
                src="https://channel7.com.pk/wp-content/uploads/2023/03/WhatPic.png"
                alt=""
              />
            </div>
            <div
              className="flex-1"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <p className="text-[25px] mb-8 text-[#6f6c8c] ">
                An experienced advertising professional with experience
                exceeding 8+ Years in Media and Public Relations Industry along
                with expertise in managing Government Relations.{" "}
              </p>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                I have the honor for being{" "}
                <b>
                  first ever Exclusive Representative of The New York Times for
                  Pakistan
                </b>{" "}
                and successfully managFed other top media brands like The Globe
                and Mail (AJR Media Group) and South China Morning Post.{" "}
              </p>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                My experience and skills speak for themselves as managing
                International Brands on Country Level and maintaining efficient
                government relations is something which is rare to find.
              </p>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                For any queries or questions relevant to International
                Marketing, please message me at LinkedIn or email me at:
                waqarahmedsalam@gmail.com{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
