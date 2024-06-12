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
      img: "/images/newspaper/new-york-times-image.webp",
      name: "The New York Times",
    },
    {
      img: "/images/newspaper/globe-and-mail-canada.jpg",
      name: "⁠The Globe and Mail, Canada",
    },
    {
      img: "/images/newspaper/South-China-Morning-Post.jpg",
      name: "South China Morning Post",
    },
  ];
  return (
    <>
      <section className="w-[100%] h-[calc(100vh-100px)]">
        <div className="h-full w-full image-slider-container overflow-hidden relative">
          <Slider {...settings} className="test w-[100%]">
            {newsPaperSlider.map((item, idx) => (
              <div key={idx} className="h-[calc(100vh-100px)] w-full relative">
                <div className="image-container w-[100%] h-[100%] object-cover absolute inset-0 z-[-20]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-[110%] h-full object-cover"
                  />
                  <div className="overlay absolute inset-0"></div>
                </div>
                <div className="flex flex-col h-full items-center justify-center absolute inset-0 z-10 px-5">
          <h1 className="text-[20px] sm:text-[30px] lg:text-[40px] text-wrap px-5 text-white  text-center w-full">
            Official Advertising Representative of
          </h1>
                  <h1 className="text-center text-[35px] md:text-[50px] lg:text-[60px] xl:text-[80px] tracking-[5px] font-bold text-white">
                    {item.name}
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
