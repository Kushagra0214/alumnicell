import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="slider-component">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="swiper-slide">
          <img src="img/event/IIT_GOA_BG.png" alt="image1"></img>
          <div className="text">
            <span>Two lines for the Event</span>
            <p>00 Month 20XX</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="img/event/img2.jpg" alt="image1"></img>
          <div className="text">
            <span>Two lines for the Event</span>
            <p>00 Month 20XX</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="img/event/img1.jpg" alt="image1"></img>
          <div className="text">
            <span>Two lines for the Event</span>
            <p>00 Month 20XX</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="img/event/img2.jpg" alt="image1"></img>
          <div className="text">
            <span>Two lines for the Event</span>
            <p>00 Month 20XX</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="img/event/img1.jpg" alt="image1"></img>
          <div className="text">
            <span>Two lines for the Event</span>
            <p>00 Month 20XX</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="slider-styling-dots">
        <div className="single-dot" />
        <div className="single-dot" />
        <div className="single-dot" />
      </div>
    </div>
  );
}
