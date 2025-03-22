import React from "react";
import "./searchSection.scss";
import all from "../../assets/icons/all.svg";
import home from "../../assets/icons/home.svg";
import food from "../../assets/icons/food.svg";
import map from "../../assets/icons/map.svg";
import camera from "../../assets/icons/camera.svg";
import search from "../../assets/icons/search.png";
import { FaSearch } from "react-icons/fa";
import { NavLink, useLocation, useParams } from "react-router-dom";

const SearchSection = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const dataSearch = [
    {
      id: 1,
      icon: all,
      title: "Hammasi",
    },
    {
      id: 2,
      icon: home,
      title: "Otel",
    },
    {
      id: 3,
      icon: food,
      title: "Ovqat",
    },
    {
      id: 4,
      icon: map,
      title: "MAP",
    },
    {
      id: 5,
      icon: camera,
      title: "Hordiq",
    },
  ];
  return (
    <div className="searchSection">
      <div className="container">
        <h2 className="searchSection__title">QAYERGA BORASIZ</h2>
        <div className="searchSection__items">
          <NavLink to={`/${path}/all`} className="searchSection__item">
            <img src={all} alt="" />
            <span>Hammasi</span>
          </NavLink>
          <NavLink to={`/${path}/otel`} className="searchSection__item">
            <img src={home} alt="" />
            <span>Otel</span>
          </NavLink>
          <NavLink to={`/${path}/food`} className="searchSection__item">
            <img src={food} alt="" />
            <span>Ovqat</span>
          </NavLink>
          <NavLink to={`/${path}/map`} className="searchSection__item">
            <img src={map} alt="" />
            <span>Xarita</span>
          </NavLink>
          <NavLink to={`/${path}/relax`} className="searchSection__item">
            <img src={camera} alt="" />
            <span>Hordiq</span>
          </NavLink>
        </div>
        <div className="searchSection__box">
          <FaSearch />
          <form action="" className="searchSection__form">
            <input
              color="#FFFFFF"
              placeholder="Qidirishni hohlagan narsangizni yozing"
              type="text"
            />
            <button>QIDIRISH</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
