import React from "react";
import Cities from "../components/Cities";
import Hero from "../components/home/Hero";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import featuredPosts from "../constants";
import PostCard from "../components/PostCard";

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

const settings = {
  arrows: false,
  dots: false,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
      },
    },
  ],
};

const clientImages = [
  { img: "public/images/clients/bahria-town.png", name: "Bahria Town" },
  {
    img: "public/images/clients/Coat_of_arms_of_Punjab.png",
    name: "Government of Punjab ",
  },
  {
    img: "public/images/clients/Coat_of_arms_of_Sindh_Province.png",
    name: "Government of Sindh",
  },
  { img: "public/images/clients/Ispr.jpg", name: "ISPR" },
  { img: "public/images/clients/KP_logo.png", name: "Government of KPK" },
  {
    img: "public/images/clients/ministry-of-privatation.jpeg",
    name: "Privatisation Commission of Pakistan",
  },
  {
    img: "public/images/clients/OGDCL_logo.png",
    name: "Oil and Gas Development Company Limited ",
  },
  { img: "public/images/clients/PakTelecom.png", name: "PTA" },
  {
    img: "public/images/clients/ppib_logo.png",
    name: "Private Power and Infrastructure Board ",
  },
  {
    img: "public/images/clients/pseb.png",
    name: "Pakistan Software Export Board",
  },
  {
    img: "public/images/clients/board-of-investment.png",
    name: "Board of Investmen",
  },
];

const heroSectionContent = [
  {
    img: "https://channel7.com.pk/wp-content/uploads/2023/04/Jawad-Humayun.jpg",
    designation: "Group Chairman",
    desc: "Advertising, to me, is more than just a profession, it is a life one has to live, a discipline that transcends the boundaries of commerce and reaches the very core of our humanity. Advertising is not just about selling products or services but about creating a connection with people on a deeper level, one that speaks to their values, aspirations, and dreams.",
    name: "Jawad Humayun",
  },
  {
    img: "https://channel7.com.pk/wp-content/uploads/2023/03/Sayyed-Ahmad-Masud1.png",
    designation: "Managing Director",
    desc: "Advertising is a non-personal effort to increase the volume of sales by utilizing media vehicles through owned, earned, and paid media. We create a brand identity for a client with distinction, enabling it to stay on top of emerging trends.",
    name: "Sayyed Ahmed Masud",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="w-[100%]">
        <div className="container py-[60px] px-5 mx-auto">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Featured Posts{" "}
          </h1>
          <div className="image-slider-container overflow-hidden py-4">
            <Slider {...settings} pauseOnHover={true} className="test">
              {featuredPosts.map((post, idx) => (
                <PostCard post={post} key={idx} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="w-[100%] py-[60px]">
        <div className="container w-[60%] mx-auto h-fit">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Our Clients
          </h1>
          <div className="image-slider-container overflow-hidden">
            <Slider {...settings} className="test">
              {clientImages.map((client, index) => (
                <div key={index} className="mx-5">
                  <img src={client.img} className="h-[100px] mx-auto" />
                  <p className="text-center font-bold my-2">{client.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="w-[100%] gradient-bg ">
        <div className="container mx-auto h-full px-5 py-[60px]">
          <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-10">
            {heroSectionContent.map((card, idx) => (
              <div
                key={idx}
                className="flex-1 h-[550px] xl:h-[500px] p-5 rounded-[20px] shadow-lg bg-gray-100 hover:bg-gray-200"
              >
                <div className="flex flex-col md:flex-row items-center h-full">
                  <div className="w-full md:w-[30%] h-full p-3">
                    <img
                      className="w-full rounded-full"
                      src={card.img}
                      alt=""
                    />
                  </div>
                  <div className="w-full md:w-[70%] h-full p-5 flex flex-col justify-between  items-center">
                    <div>
                      <svg
                        className="w-[50px] h-[50px] "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#6495ed"
                          d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
                        />
                      </svg>
                      <p className="text-justify text-[18px]">{card.desc}</p>
                    </div>

                    <div>
                      <h1 className="my-5 text-[24px] text-primary font-bold text-center w-full">
                        {card.name}
                      </h1>
                      <a className="text-[18px] px-5 py-2 block mx-auto rounded-full text-center font-bold text-white background-color">
                        {card.designation}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why choose us  */}
      {/* <section className="w-[100%]">
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <h4 className="uppercase text-primary font-medium text-lg">
            Why choose us
          </h4>

          <div className=" flex flex-col lg:flex-row items-center justify-between gap-10 flex-wrap">
            <div className="py-5 flex-1">
              <h1 className="text-[35px] font-bold text-primary ">
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
                className="my-6 cursor-pointer uppercase border-[2px] border-[#000000] text-[#000000] rounded-[5px] px-8 py-4 font-semibold hover:bg-[#000000] hover:text-[white] transition-all duration-1000"
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
      </section> */}

      {/* What we do  */}
      {/* <section className="w-[100%] ">
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <div className=" flex flex-col-reverse lg:flex-row items-center justify-between gap-10 flex-wrap">
            <div className="py-5 flex-1">
              <img
                className=""
                src="https://channel7.com.pk/wp-content/uploads/2023/03/WhatPic.png"
                alt=""
              />
            </div>
            <div className="py-5 flex-1">
              <h1 className="text-[35px] font-bold text-primary ">
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
                className="my-6 cursor-pointer uppercase border-[2px] border-[#000000] text-[#000000] rounded-[5px] px-8 py-4 font-semibold hover:bg-[#000000] hover:text-[white] transition-all duration-1000"
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* What We Offer  */}
      {/* <section className="w-[100%] min-h-[100vh]">
        <div className="container mx-auto h-full  px-5 py-[60px]">
          <h1 className="text-[35px] font-bold text-primary text-center">
            What We Offer
          </h1>
          <div className=" flex items-center justify-between flex-wrap py-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="mb-10  w-[100%] md:w-[48%] lg:w-[30%] xl:w-[24%] flex-none h-[500px] bg-[#0000009d] rounded-[15px] text-white hover:scale-[1.05] hover:bg-[#000000] transition-all duration-500 "
              >
                <div className="flex flex-col items-center justify-between py-7 h-full gap-3">
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
                    <button className="font-bold text-lg px-8 text-center border-white border-[2px] hover:bg-white hover:text-[#000000] rounded-[5px] py-3 group transition-all duration-1000">
                      Read More
                      <svg
  
                        className="w-[20px] fill-white group-hover:fill-[#000000] inline-block ml-3  "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        stroke="currentColor"
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
      </section> */}

      <Cities />
    </>
  );
}

export default Home;
