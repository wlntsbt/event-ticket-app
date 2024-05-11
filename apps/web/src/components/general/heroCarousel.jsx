"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroCarousel() {
  const settings = {    
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    autoplaySpeed: 5000,
    draggable: true,
    cssEase: "linear",
  };
  return (
    <div className="h-full w-full my-5 lg:my-[20px]">
      <Slider {...settings}>
        <div className="px-5">
        <img className="h-[180px] w-full rounded-2xl object-cover lg:h-full" src="/sampleData1.png"></img>
        </div>
        <div className="px-5">
        <img className="h-[180px] w-full rounded-2xl object-cover lg:h-full" src="/sampleData2.jpg"></img>
        </div>
        <div className="px-5">
        <img className="h-[180px] w-full rounded-2xl object-cover lg:h-full" src="/sampleData3.png"></img>
        </div>
        <div className="px-5">
        <img className="h-[180px] w-full rounded-2xl object-cover lg:h-full" src="/sampleData4.jpg"></img>
        </div>
        <div className="px-5">
        <img className="h-[180px] w-full rounded-2xl object-cover lg:h-full" src="/sampleData5.jpg"></img>
        </div>
      </Slider>
    </div>
  );
}
