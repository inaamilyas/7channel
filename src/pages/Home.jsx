import React from "react";
import Cities from "../components/Cities";
import Hero from "../components/home/Hero";



const offers = [
  {
    icon: "https://channel7.com.pk/wp-content/uploads/2023/05/BrandDevelopment.png",
    heading: "Brand Developmen",
    list: [
      "Brand Identity",
      "Brand Strategy",
      "Brand Messaging",
      "Marketing Strategy",
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
];


function Home() {
  return (
    <>
      {/* Hero  */}
      <Hero/>

      {/* why choose us  */}
      <section className="w-[100%] h-[calc(100vh-100px)]">
        <div className="container mx-auto h-full">
          <h4 className="uppercase text-red-700 font-medium text-lg">
            Why choose us
          </h4>

          <div className=" flex items-center justify-between gap-10 flex-wrap">
            <div className="py-5 flex-1">
              <h1 className="text-[35px] font-bold text-red-600 ">
                A Brief Intro
              </h1>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                With the dawn of human civilization, people have strived to
                communicate through signals, words, manuscripts, books till
                contemporary digital world. It is an essential part of what
                makes us human. The need to communicate continues to this day
                and we, at Channel 7 Communications since its inception in 1990,
                are here to cater to this essential need.
              </p>
              <a
                className="uppercase border-[2px] border-red-600 rounded-[5px] px-8   py-4 text-red-700 font-semibold  "
                href=""
              >
                Discover more
              </a>
            </div>

            <div className="py-5 flex-1">
              <img
                className="rounded-[20px] img-shadow"
                src="https://channel7.com.pk/wp-content/uploads/2023/03/Brief-Intro.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do  */}
      <section className="w-[100%] h-[calc(100vh-100px)]">
        <div className="container mx-auto h-full">
          <div className=" flex items-center justify-between gap-10 flex-wrap">
            <div className="py-5 flex-1">
              <img
                className=""
                src="https://channel7.com.pk/wp-content/uploads/2023/03/WhatPic.png"
                alt=""
              />
            </div>
            <div className="py-5 flex-1">
              <h1 className="text-[35px] font-bold text-red-600 ">
                What We Do
              </h1>
              <p className="text-[25px] my-8 text-[#6f6c8c] ">
                At Channel 7 Communications, we offer a wide range of essential
                services to meet all your communication needs. Our expertise
                includes brand development, conventional media productions,
                digital solutions, public relations, and media services. We have
                a proven track record to partner with you to achieve your dreams
                and objectives. Our ` yes we can` attitude enables us to deliver
                out of the box solutions tailored to your unique requirements.
              </p>
              <a
                className="uppercase border-[2px] border-red-600 rounded-[5px] px-8   py-4 text-red-700 font-semibold  "
                href=""
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer  */}
      <section className="w-[100%] h-[calc(100vh-100px)]">
        <div className="container mx-auto h-full">
          <h1 className="text-[35px] font-bold text-red-600 text-center">
            What We Offer
          </h1>
          <div className=" flex items-center justify-between flex-wrap">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="w-[24%] h-[500px] bg-red-600 rounded-[15px] text-white hover:scale-[1.05] hover:bg-[#3c4396] transition-all duration-500 "
              >
                <div className="flex flex-col items-center justify-around h-full gap-3">
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

                  <div>
                    <button className="font-bold text-lg px-8 rounded-[5px] py-3 bg-slate-500">
                      Read More
                      <svg
                        className="w-[20px] inline-block ml-3  "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="white"
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     <Cities/>
     
    </>
  );
}

export default Home;
