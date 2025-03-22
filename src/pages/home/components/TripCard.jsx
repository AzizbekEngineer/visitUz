import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import tripCard from "../../../assets/images/tripCard.png";
import arrow from "../../../assets/icons/arrow.svg";

import "./tripCard.scss";

const TripCard = () => {
  const slides = [
    {
      id: 1,
      title: "Nice beach",
      image: tripCard,
    },
    {
      id: 2,
      title: "Nice beach",
      image: tripCard,
    },
    {
      id: 3,
      title: "Nice beach",
      image: tripCard,
    },
    {
      id: 4,
      title: "Nice beach",
      image: tripCard,
    },
  ];
  return (
    <div className="tripCard">
      <div className="container">
        <div className="tripCard__top">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="tripCard__swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="tripCard__card"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* <div className="tripCard__overlay"></div> */}
                <h1 className="tripCard__name">{slide.title}</h1>
                <div className="tripCard__btns">
                  <button className="tripCard__btn">More</button>
                  <button className="tripCard__btn-arrow">
                    <img src={arrow} alt="" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="tripCard__info">
            <h3 className="tripCard__subtitle">
              TUR: Your Trusted <span>Travel Partners</span>
            </h3>
            <div className="tripCard__title">
              Hotel ? Discover the Difference in Every Journey
            </div>
            <p className="tripCard__desc">
              we believe that travel is more than just visiting new places —
              it’s about creating lasting memories and meaningful experiences.
              With years of experience in the travel industry, we specialize in
              crafting personalized travel itineraries that cater to individual
              needs, family vacations, and group adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
