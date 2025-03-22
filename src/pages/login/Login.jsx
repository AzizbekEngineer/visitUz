import React from "react";
import "./login.scss";
import img from "../../assets/images/google.png";
import img1 from "../../assets/images/fase.png";
import img2 from "../../assets/images/w.png";
import img3 from "../../assets/images/x.png";
import img4 from "../../assets/images/apple.png";
import img5 from "../../assets/images/play.png";

const Login = () => {
  return (
    <div className="login">
      <h3 className="login__title">Login</h3>
      <form className="login__form" action="">
        <input placeholder="login" type="text" />
        <input placeholder="password" type="text" />
        <button className="login__form-btn">Kirish</button>
      </form>
      <div className="login__logo">
        <img src={img} alt="" />
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <h3 className="login__desc">Ilovamiz orqali</h3>
      <div className="login__btn">
        <button className="login__btn-play">
          <img className="login__btn-play-img" src={img5} alt="" />
          <div className="login__btn-play-info">
            <h4 className="login__btn-play-info-title">Get It On</h4>
            <p className="login__btn-play-info-text">Google Play</p>
          </div>
        </button>
        <button className="login__btn-apple">
          <img className="login__btn-play-img" src={img4} alt="" />
          <div className="login__btn-apple-info">
            <h4 className="login__btn-apple-info-title">Avalible on the</h4>
            <p className="login__btn-apple-info-text">Apple Store</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
