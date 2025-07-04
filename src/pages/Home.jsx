import React, { useEffect } from "react";
import Hero from "../components/home/Hero";
import PostsSlider from "../components/home/PostsSlider";
import ClientsSlider from "../components/home/ClientsSlider";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import ContactForm from "../components/home/ContactForm";
import Aos from "aos";
import "aos/dist/aos.css";

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
    window.scrollTo(0, 0);
    Aos.init({
      duration: 0,
      easing: "ease-in",
      once: true,
    });
  }, []);
  
  return (
    <>
      <Hero />
      <PostsSlider />
      <ClientsSlider />
      <Services />
      <About />
      <Experience />

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

      <ContactForm />
    </>
  );
}

export default Home;
