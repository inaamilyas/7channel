import React from "react";
import Slider from "react-slick";
import Cities from "../components/Cities";

function AboutUs() {
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
    pauseOnHover: true,
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

  const images = [
    "https://channel7.com.pk/wp-content/uploads/2023/06/logo26.png",
    "https://channel7.com.pk/wp-content/uploads/2023/06/logo25.png",
    "https://channel7.com.pk/wp-content/uploads/2023/06/logo26.png",
    "https://channel7.com.pk/wp-content/uploads/2023/06/logo27.png",
    "https://channel7.com.pk/wp-content/uploads/2023/06/logo28.png",
  ];

  const achievements = [
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award1.jpg",
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award2.jpg",
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award1.jpg",
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award2.jpg",
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award1.jpg",
      "https://channel7.com.pk/wp-content/uploads/2023/03/Award2.jpg",
  ];
  return (
    <>
      <section className="">
        <div className="w-[100%] h-[50vh] flex items-center justify-center about-bg ">
          <h1 className="text-[50px] text-white  font-bold ">About Us</h1>
        </div>
      </section>

      <section className="w-[100%] py-[60px] gradient-bg ">
        <div className="container mx-auto h-full">
          <p className="text-[20px] text-center leading-[30px] my-5">
            Since 1990, we’re a value-led advertising agency that creates
            concepts to empower brands and ideas that positively impact
            individuals, communities and nations. Based in Islamabad, Lahore,
            Karachi, Peshawar and Dubai, we’re a tight, passionate team driven
            by the desire to deliver progressive thinking ideas to our clients.
            Together, we create brand identities, communication designs, and
            advertising for all possible segments of society across the board
            with cutting edge campaigns.
          </p>
          <br />
          <p className="text-[20px] text-center leading-[30px] my-5">
            We’re a value-led advertising agency that creates concepts to
            empower brands and ideas that positively impact individuals,
            communities and nations. Based in Islamabad, Lahore, Karachi,
            Peshawar and Dubai, we’re a tight, passionate team driven by the
            desire to deliver forward thinking ideas to our clients. Together,
            we create brand identities, communication design, and advertising
            for all touch points and deliver campaigns that make an impact.
          </p>
        </div>
      </section>

      <section className="w-[100%] py-[60px]">
        <div className="container w-[60%] mx-auto h-fit">
          <div className="image-slider-container overflow-hidden">
            <Slider {...settings} className="test">
              {images.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="w-[100%] py-[60px]">
        <div className="container mx-auto h-fit">
          <div className="image-slider-container overflow-hidden">
            <Slider {...settings} pauseOnHover={true} className="test">
              {achievements.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Logo ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <Cities/>
    </>
  );
}

export default AboutUs;
