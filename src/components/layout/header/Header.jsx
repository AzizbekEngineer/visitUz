import React, { useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import Module from "../../module/Module";
import Login from "../../../pages/login/Login";

const Header = () => {
  const [hide, setHide] = useState(false);
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <h2>Logo</h2>
        </div>
        <nav className="header__navbar">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to={"/"} className={"header__item__link"}>
                Home
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"about"} className={"header__item__link"}>
                About
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"tours"} className={"header__item__link"}>
                Tours & Packages
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to={"destination/all"} className={"header__item__link"}>
                Destinations
              </NavLink>
            </li>
          </ul>
          <div className="header__btns">
            <button className="header__btn-contact">Contact us</button>
            <button onClick={() => setHide(true)} className="header__btn-login">
              Login
            </button>
            {hide ? (
              <>
                <Module close={setHide} bg={"fff6"} width={500}>
                  <Login />
                </Module>
              </>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
