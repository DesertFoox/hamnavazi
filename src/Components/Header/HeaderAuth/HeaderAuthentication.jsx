import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styled from "./HeaderAuthentication.module.scss";
const HeaderAuthentication = ({ history }) => {
  return (
    <Fragment>
      <div className={`${styled["header-auth-box"]}`}>
        <Link to="/" className={`${styled["header-auth-icon"]} `}>
          <img
            className={`${styled.img}`}
            src={require("../../../Assets/Images/header/tar-icon.png").default}
            alt="logo"
          />
        </Link>
        <Link to="/" className={`ml-1 mr-ssm ${styled["header-auth-icon"]} `}>
          <img
            alt="logo"
            className={styled.img}
            src={require("../../../Assets/Images/header/aux-icon.png").default}
          />
        </Link>
        <Link to="/" className={`ml-1 mr-ssm ${styled["header-auth-icon"]} `}>
          <img
            alt="logo"
            className={styled.img}
            src={
              require("../../../Assets/Images/header/favorite-icon.png").default
            }
          />
        </Link>

        <h6
          className={`ml-1 mr-ssm ${styled["header-auth-userName"]} cursor-pointer`}
          onClick={() => history.push("/profile")}
        >
          Aref Too
        </h6>
      </div>
    </Fragment>
  );
};

export default HeaderAuthentication;
