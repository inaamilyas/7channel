import React from "react";
import Slider from "react-slick";
import { clients } from "../../constants/";

function ClientsSlider() {
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
  return (
    <>
      <section className="w-[100%] py-[60px] gradient-bg">
        <div className="container w-[80%] md:w-[60%] mx-auto h-fit">
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
    </>
  );
}

export default ClientsSlider;
