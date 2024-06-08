import React from "react";
import Cities from "../components/Cities";

const offers = [
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/BrandDevelopment.png",
    heading: "Brand Developmen",
    list: [
      "Brand Identity",
      "Brand Strategy",
      "Brand Messaging",
      "Marketing Strategy",
      "Content Strategy",
      "Print & Collateral",
      "Toolkit & Guidelines",
    ],
  },
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/Film.png",
    heading: "Production",
    list: [
      "Television commercials",
      "Corporate & digital promos",
      "Storyboarding & photography",
      "DVC (Digital Video Commercial)",
      "Documentaries",
      "2D & 3D Animations",
      "Infomercials",
      "Pre & Post Production",
    ],
  },
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/Digital.png",
    heading: "Digital",
    list: [
      "Digital strategy",
      "Web Design & Development",
      "E-Commerce",
      "Social Media Marketing",

      "SEO",
      "SEM",
    ],
  },
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/Media.png",
    heading: "Brand Development",
    list: [
      "Media & reach strategy",
      "Buying & planning",
      "Multichannel execution & placement",
      "Integration",
    ],
  },
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/RelationShiph.png",
    heading: "Relationship Management",
    list: [
      "Content development",
      "Events",
      "Crisis management",
      "Stakeholder engagement",
      "Media relations",
      "Client Services",
    ],
  },
];

function WhatWeOffer() {
  return (
    <>
      <section className="">
        <div className="w-[100%] h-[calc(100vh-88px)] flex items-center justify-center offer-bg ">
          <h1 className="text-[50px] text-white font-extrabold ">
            What We Offer
          </h1>
        </div>
      </section>

      <section className="w-[100%]">
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 flex-wrap">
            <div className="py-5 flex-1">
              <h1 className="text-[35px] font-bold text-primary">
                “Evidence based advertising that gets results”
              </h1>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                Is the corporate mantra of Channel 7 Communications that defines
                our mission and provides our clients with every reason to
                believe that the campaigns developed by us are based on well
                researched market insights driving the brand ahead of the
                competitors
              </p>
            </div>

            <div className="py-5 flex-1">
              <img
                className="rounded-[20px] img-shadow"
                src="https://channel7.com.pk/wp-content/uploads/2023/03/WhatWeDo.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%]">
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <p className="text-[25px] my-8 text-[#6f6c8c] text-center">
            Imagine if you could buy everything you needed at one shop. Channel
            7 Communications is that one top shop to fulfill all your
            contemporary communication needs, saving your time and energy. Once
            you are with us, you won’t need any other company.
          </p>
        </div>
      </section>

      <section className="w-[100%] h-fit">
        <div className="container w-full mx-auto h-full  px-5 py-[60px]">
          <h1 className="text-[35px] font-bold text-primary  text-center">
            What We Offer
          </h1>
          <div className="w[80%] flex items-center justify-center md:justify-start flex-wrap py-8 gap-[5%]">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="mb-10  w-[80%] md:w-[45%] lg:w-[30%] flex-none h-[500px] bg-[#6495ed9d] rounded-[15px] text-white hover:scale-[1.05] hover:bg-[#6495ed] transition-all duration-500 "
              >
                <div className="flex flex-col items-center justify-between h-full gap-3 py-10">
                  <div className="flex flex-col items-center gap-4">
                    <img className="w-[150px] " src={offer.icon} alt="" />
                    <h1 className="text-[25px] text-center font-bold ">
                      {offer.heading}
                    </h1>
                    <ul className=" text-center font-bold">
                      {offer.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center justify-center"
                        >
                          <div className="inline-block w-[6px] h-[6px] rounded-full bg-white mr-1 "></div>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cities />
    </>
  );
}

export default WhatWeOffer;
