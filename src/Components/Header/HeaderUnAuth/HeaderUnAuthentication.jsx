import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";

import { Tooltip } from "reactstrap";
import styles from "./HeaderUnAuthentication.module.scss";
const HeaderUnAuthentication = ({ history, logged, setlogged }) => {
  const [tooltipOpen, setTooltipOpen] = useState(null);

  const toggle = (value) => setTooltipOpen(value);

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles["header-container"]}>
          {/* header-logo */}
          <div className={styles["header-logo"]}>
            <Link className={styles.a} to="/">
              <img
                className={styles.logoImg}
                alt="logo"
                src={require("../../../Assets/Images/header/logo.png").default}
              />
            </Link>
          </div>

          <div className={styles["header-options"]}>
            <div
              className={`${styles["menu-iconBox"]} grid text-center justify-items-center cursor-pointer`}
              onClick={() => setlogged(!logged)}
            >
              <img
                className={styles["menu-icon"]}
                src={require("../../../Assets/Images/header/menu.png").default}
                alt=""
              />
            </div>
            <div className={`${styles["header-unAuth-box"]}`}>
              <Link
                to="/register"
                className={`${styles["header-unAuth-icon"]} `}
                id="register"
              >
                <img
                  className={`${styles.img}`}
                  src={
                    require("../../../Assets/Images/header/signUp.PNG").default
                  }
                  alt="logo"
                />
              </Link>
              <Tooltip
                placement="bottom"
                isOpen={tooltipOpen === "register" ? true : false}
                target="register"
                toggle={() => toggle("register")}
                className={`text-xs p-3`}
                autohide={true}
              >
                ثبت نام
              </Tooltip>
              <Link
                to="/login"
                className={`ml-1 mr-ssm ${styles["header-unAuth-icon"]} `}
                id="login"
              >
                <img
                  alt="logo"
                  className={styles.img}
                  src={
                    require("../../../Assets/Images/header/login-icon.png")
                      .default
                  }
                />
              </Link>
              <Tooltip
                placement="bottom"
                isOpen={tooltipOpen === "login" ? true : false}
                target="login"
                toggle={() => toggle("login")}
                className={`text-xs p-3`}
              >
                ورود
              </Tooltip>
            </div>
            <div className={`${styles["search-box"]}`}>
              <Link to="/search" className={`${styles["search-box-icon"]}`}>
                <img
                  className={`${styles.img}`}
                  src={
                    require("../../../Assets/Images/header/search-icon.png")
                      .default
                  }
                  alt=""
                />
              </Link>
              <Input
                className={`form-control form-control-sm  mr-ssm  ${styles["search-box-input"]}`}
                placeholder={"جست‌وجو سریع"}
              />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderUnAuthentication;
