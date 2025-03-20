import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import hero1 from "../../assets/images/hero1.svg";
import hero2 from "../../assets/images/hero2.svg";
import hero3 from "../../assets/images/hero3.svg";
import hero4 from "../../assets/images/hero4.svg";
import arrow from "../../assets/icons/arrow.svg";
import "./hero.scss";

const slides = [
  {
    id: 1,
    title: "UZBEKISTAN",
    image: hero1,
  },
  {
    id: 2,
    title: "UZBEKISTAN",
    image: hero2,
  },
  {
    id: 3,
    title: "UZBEKISTAN",
    image: hero3,
  },
  {
    id: 4,
    title: "UZBEKISTAN",
    image: hero4,
  },
];

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container container">
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="hero__swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="hero__card"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero__overlay"></div>
              <h1 className="hero__title">{slide.title}</h1>
              <div className="hero__btns">
                <button className="hero__btn">More</button>
                <button className="hero__btn-arrow">
                  <img src={arrow} alt="" />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
