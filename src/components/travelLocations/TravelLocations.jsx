import React from "react";
import next from "../../assets/icons/next.svg";
import sam from "../../assets/images/sam.png";
import bux from "../../assets/images/bux.png";
import xor from "../../assets/images/xor.png";
import nuk from "../../assets/images/nuk.png";
import { MdArrowOutward } from "react-icons/md";
import "./travelLocations.scss";

const TravelLocations = () => {
  const travelData = [
    {
      title: "SAMARQAND",
      img: sam,
      desc: "Experience the stunning beaches, rich culture, and tranquil nature of Bali. Ideal for both adventure seekers and those looking to unwind.",
    },
    {
      title: "BUKXARA",
      img: bux,
      desc: "Experience the stunning beaches, rich culture, and tranquil nature of Bali. Ideal for both adventure seekers and those looking to unwind.",
    },
    {
      title: "XORAZM",
      img: xor,
      desc: "Experience the stunning beaches, rich culture, and tranquil nature of Bali. Ideal for both adventure seekers and those looking to unwind.",
    },
    {
      title: "NUKS",
      img: nuk,
      desc: "Experience the stunning beaches, rich culture, and tranquil nature of Bali. Ideal for both adventure seekers and those looking to unwind.",
    },
  ];
  return (
    <div className="travelLocations">
      <div className="container">
        <h3 className="travelLocations__subtitle">
          TUR: Your Trusted Travel Partners
        </h3>
        <h2 className="travelLocations__title">
          THE BEST LOKATIONS IN UZBEKISTAN
        </h2>
        <p className="travelLocations__desc">
          we believe that travel is more than just visiting new places — it’s
          about creating lasting memories and meaningful experiences. With years
          of experience in the travel industry, we specialize in crafting
          personalized travel itineraries that cater to individual needs, family
          vacations, and group adventures.
        </p>
        <button className="travelLocations__btn">
          <span>All reviews</span>
          <img src={next} alt="" />
        </button>
        <div className="travelLocations__cards">
          {travelData?.map((item) => (
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
