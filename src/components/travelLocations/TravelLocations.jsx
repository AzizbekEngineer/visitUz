import React from "react";
import next from "../../assets/icons/next.svg";

import { MdArrowOutward } from "react-icons/md";
import "./travelLocations.scss";

const TravelLocations = ({ data, title, subtitle }) => {
  return (
    <div className="travelLocations">
      <div className="container">
        <h3 className="travelLocations__subtitle">{subtitle}</h3>
        <h2 className="travelLocations__title">{title}</h2>
        <p className="travelLocations__desc"></p>
        <button className="travelLocations__btn">
          <span>All reviews</span>
          <img src={next} alt="" />
        </button>
        <div className="travelLocations__cards">
          {data?.map((item) => (
            <div
              className="travelLocations__card"
              style={{
                background: `url(${item.img}) no-repeat center /cover`,
              }}
            >
              <button className="travelLocations__card-btn">
                <MdArrowOutward />
              </button>
              <div className="travelLocations__info">
                <h3 className="travelLocations__card-title">{item.title}</h3>
                <p className="travelLocations__card-desc">{item.desc}</p>
                <button className="travelLocations__info-btn"> </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelLocations;
