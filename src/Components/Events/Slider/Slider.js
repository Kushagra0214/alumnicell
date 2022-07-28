import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

// import required modules
import { Navigation } from "swiper";

const event_post = [
  {
    id: 1,
    image: "/img/event/IIT_GOA_BG.png",
    title: "IIT Goa holds its 3rd Convocation",
    date: "30 July 2022",
    description: "Since its inception in 2016, IIT Goa has consistently worked towards achieving excellence with its students playing a vital role in achieving the goal. And as we all celebrate this progress, the much anticipated Third Convocation is here! Convocation is one of the most important events in not only a student’s life but also in the lives of people who’ve connected with them throughout their university years. It also doubles as a reunion! Students come together one final time to exchange memories and hugs, give valuable advice to their juniors, and take blessings from their teachers and the staff members who’ve watched them grow into the people they are today. <br><br> With the same in mind, we hope that the Batch of 2022 gives us a chance to bid them adieu at <strong>Rajiv Gandhi Kala Mandir</strong>, Ponda as they step forward into their futures. We’ll be looking forward to seeing you all, dressed in pure white, adorning smiles brighter than the color itself on <strong>July 30, ‘22</strong> at <strong>11 a.m.</strong>"
  }
]

export default function Slider() {
  return (
    <div className="slider-component">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {event_post.map((item, i) => (
          <SwiperSlide className="swiper-slide">
            <img src={item.image} alt="image1"></img>
            <Link to={{
              pathname: "/events/" + item.title,
              hash: item.id.toString(),
            }}>
            <div className="text">
              <span>{item.title}</span>
              <p>{item.date}</p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider-styling-dots">
        <div className="single-dot" />
        <div className="single-dot" />
        <div className="single-dot" />
      </div>
    </div>
  );
}
