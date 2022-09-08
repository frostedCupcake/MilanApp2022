import * as React from "react";
import "../sass/main.css";
import logo from "../assets/logo/milan_logo2.png";

const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img src={logo} alt="header__logo" class="header__logo" />
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Milan </span>
          <span class="heading-primary--sub">
            annual techno-cultural sports General Championship of IITH
          </span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
