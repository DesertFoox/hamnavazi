import React from "react";
import { Link } from "react-router-dom";

import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.icons}>
        <a href="#" className={style.icon}>
          <img
            className={style.img}
            src={
              require("../../Assets/Images/footer/instagram-icon.png").default
            }
          />
        </a>
        <a href="#" className={style.icon}>
          <img
            className={style.img}
            src={
              require("../../Assets/Images/footer/facebook-icon.png").default
            }
          />
        </a>
        <a href="#" className={style.icon}>
          <img
            className={style.img}
            src={require("../../Assets/Images/footer/linkdin-icon.png").default}
          />
        </a>
        <a href="#" className={style.icon}>
          <img
            className={style.img}
            src={require("../../Assets/Images/footer/twiter-icon.png").default}
          />
        </a>
      </div>

      <div className={style["footer-link"]}>
        <Link className={style.a} to="/home">
          HOME
        </Link>
        |
        <a className={style.a} href="#">
          ABOUT US
        </a>
        |
        <a className={style.a} href="#">
          GALLERY
        </a>
        <a className={style.a} href="#">
          SHORT CODES
        </a>
        |
        <a className={style.a} href="#">
          SERVICES
        </a>
        |
        <a className={style.a} href="#">
          CONTACT
        </a>
      </div>
      <p className={style.copyright}>© 2020 . All rights reserved </p>
    </footer>
  );
};

export default Footer;
