import React, { useEffect } from "react";
import Cities from "../components/Cities";
import Hero from "../components/home/Hero";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { clients, experience, featuredPosts, services } from "../constants";
import PostCard from "../components/PostCard";
import ServiceCard from "../components/ServiceCard";

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
  useEffect(() => {
    // Scroll to the top on initial render
    window.scrollTo(0, 0);
  }, []);
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
              {clients.map((client, index) => (
                <div key={index} className="mx-5">
                  <img src={client.img} className="h-[100px] mx-auto" />
                  <p className="text-center font-bold my-2">{client.name}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="w-[100%] py-[60px]">
        <div className="container mx-auto h-fit">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Our Services
          </h1>
          <div className="flex items-center justify-center flex-wrap mx-auto w-full">
            {/* <Slider {...settings} className="test"> */}
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
            {/* </Slider> */}
          </div>
        </div>
      </section>

      <section className="w-[100%] py-[60px]">
        <div className="container mx-auto h-fit">
          <h1 className="text-[35px] font-bold text-primary text-center mb-5">
            Experience
          </h1>
          <div className="flex items-center justify-center flex-wrap mx-auto w-full">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="p-8 rounded-[10px] cursor-pointer transition-all transition-1000 hover:bg-[#e6e6e6] m-5 bg-[#f5f5f5] border-[#c0c0c0] border-[1px] flex justify-center gap-4"
              >
                {/* `<div className="w-[300px] bg-red-300">
                  <img src={exp.logo} className="w-[100px]" alt="" />
                </div>` */}
                <div className="">
                  <h1 className="text-[30px]">{exp.role}</h1>
                  <h4 className="text-[24px] font-bold">{exp.company}</h4>
                  <p className="text-[24px]">{exp.location}</p>
                  <h5 className="text-[24px]">{exp.date}</h5>
                  <p className=" text-[20px] my-2 line-clamp-2">{exp.desc}</p>
                </div>
              </div>
            ))}
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

      {/* contact us  */}
      <section className="py-8">
        <div className="container mx-auto px-5 py-[60px]">
          <div className="w-full lg:w-[70%] h-full bg-gray-100 p-10 mx-auto">
            <h1 className="text-[35px] md:text-[50px] text-primary ">
              Drop Us a Line
            </h1>
            <p className="text-[20px] ">For any query and consultant</p>
            <form className="my-5">
              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px]  "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px]  "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px] "
                />
              </div>

              <div className="">
                <label htmlFor="" className="block w-full my-4">
                  Your Message (<span>Optional</span>)
                </label>
                <textarea
                  rows={4}
                  name="subject"
                  className="block w-full text-[20px] bg-transparent outline-none focus:outlline-none border-[black] focus:border-b-[#6494ed] border-b-[1px] "
                ></textarea>
              </div>

              <div className="flex flex-col md:flex-row text-center md:items-center justify-between my-10 gap-7">
                <button className="px-9 py-3 font-semibold bg-[#343434b5] hover:bg-[#000000] text-white transition-all duration-1000">
                  Submit
                </button>
                <a
                  href="#"
                  className="px-9 py-3 font-semibold bg-[#000000b5] hover:bg-[#000000b5] text-white  transition-all duration-1000"
                >
                  Contact Us on Whatsapp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Cities />
    </>
  );
}

export default Home;
