import React from "react";
import Slider from "react-slick";

function Hero() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
  };

  const newsPaperSlider = [
    {
      img: "/images/newspaper/New-York-Times-Logo-PNG-File.png",
      name: "The New York Times",
    },
    {
      img: "/images/newspaper/the_new_york_times_cover.jpeg",
      name: "The New York Times",
    },
    {
      img: "/images/newspaper/New-York-Times-Logo-PNG-File.png",
      name: "The New York Times",
    },
  ];
  return (
    <>
      <section className="w-[100%] h-[calc(100vh-100px)] bg-home-hero">
        <div className="h-full w-full image-slider-container overflow-hidden bg-[#00000033]">
          <Slider {...settings} className="test">
            {newsPaperSlider.map((item, idx) => (
              <div className="h-[calc(100vh-100px)] w-[100%] relative">
                {/* <img src={item.img} alt="" className="w-full h-full z-[-10] absolute "/> */}
                <div className="flex flex-col h-full items-center justify-center z-100">
                  <h1 className="text-[40px] font-bold text-[#ffffff]">
                    Official Advertising Representative of{" "}
                  </h1>
                  <h1 className="text-[60px] tracking-[5px] font-bold text-[#ffffff]">
                    The New York Times
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Hero;
