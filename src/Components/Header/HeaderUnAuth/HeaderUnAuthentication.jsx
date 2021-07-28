import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "reactstrap";
import styles from "./HeaderUnAuthentication.module.scss";
const HeaderUnAuthentication = () => {
  const [tooltipOpen, setTooltipOpen] = useState(null);

  const toggle = (value) => setTooltipOpen(value);

  return (
    <Fragment>
      <div className={`${styles["header-unAuth-box"]}`}>
        <Link
          to="/register"
          className={`${styles["header-unAuth-icon"]} `}
          id="register"
        >
          <img
            className={`${styles.img}`}
            src={require("../../../Assets/Images/header/signUp.PNG").default}
            alt="logo"
          />
        </Link>
        <Tooltip
          placement="bottom"
          isOpen={tooltipOpen == "register" ? true : false}
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
              require("../../../Assets/Images/header/login-icon.png").default
            }
          />
        </Link>
        <Tooltip
          placement="bottom"
          isOpen={tooltipOpen == "login" ? true : false}
          target="login"
          toggle={() => toggle("login")}
          className={`text-xs p-3`}
        >
          ورود
        </Tooltip>
      </div>
    </Fragment>
  );
};

export default HeaderUnAuthentication;
