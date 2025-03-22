import React from "react";
import { TOURS } from "../../static";
import img1 from "../../assets/images/tours1.png";
import img2 from "../../assets/images/star.png";
import img3 from "../../assets/images/207.png";
import { FaArrowRight } from "react-icons/fa6";

import "./card.scss";

const Card = ({ count }) => {
  const toursData = TOURS?.slice(0, count).map((el) => (
    <div key={el.id} className="tours__card">
      <div className="tours__card__left">
        <img src={el.img} alt="" />
      </div>
      <div className="tours__card__right">
        <h2 className="tours__card__right-title">{el?.name}</h2>
        <p className="tours__card__right-text">{el?.text}</p>
        <div className="tours__card__right-btns">
          <div className="tours__card__right-btns-imgs">
            <img
              className="tours__card__right-btns-imgs-img"
              src={img1}
              alt=""
            />
            <img
              className="tours__card__right-btns-imgs-img1"
              src={img1}
              alt=""
            />
            <img
              className="tours__card__right-btns-imgs-img2"
              src={img1}
              alt=""
            />
          </div>
          <div className="tours__card__right-btns-info">
            <p className="tours__card__right-btns-info-text">Satisfied users</p>
            <div className="tours__card__right-btns-info-imgs">
              <img src={img2} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="tours__card__right-btns-view">
            <button className="tours__card__right-btns-view-one">
              BATAFSIL
            </button>
            <button className="tours__card__right-btns-view-two">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="tours container">
      <div className="tours__cards">{toursData}</div>
    </div>
  );
};

export default Card;
