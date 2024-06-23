import React from "react";
import { featuredPosts } from "../../constants";
import PostCard from "../PostCard";
import Slider from "react-slick";

function PostsSlider() {
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
    </>
  );
}

export default PostsSlider;
