import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const Hero = () => {
  return (
    <>
      <div className="container">
        <Swiper
          pagination={true}
          loop={true}
          autoplay={{
            delay: 3000, // 3 soniya (3000ms) har bir slayd davomiyligi
            disableOnInteraction: false, // Foydalanuvchi slayder bilan o‘zaro ta’sir qilgandan keyin ham davom etishi uchun
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper hero__swiper"
        >
          <SwiperSlide>
            <h1>UZBEKISTAN</h1>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
