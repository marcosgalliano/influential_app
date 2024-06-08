import style from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_influential.png";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <img src={logo} alt="logo" />
      <div className={style.h1DivNavbar}>
        <h1>Influencers</h1>
        <ion-icon name="caret-down-outline"></ion-icon>
      </div>
      <ion-icon name="person-circle-outline"></ion-icon>
    </div>
  );
};

export default NavBar;
