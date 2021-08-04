import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "reactstrap";

import styled from "./HeaderAuthentication.module.scss";
const HeaderAuthentication = ({ history, logged, setlogged }) => {
  return (
    <Fragment>
      <header className={styled.header}>
        <div className={styled["header-container"]}>
          {/* header-logo */}
          <div className={styled["header-logo"]}>
            <Link className={styled.a} to="/">
              <img
                className={styled.logoImg}
                alt="logo"
                src={require("../../../Assets/Images/header/logo.png").default}
              />
            </Link>
          </div>

          <div className={styled["header-options"]}>
            <div
              className={`${styled["menu-iconBox"]} grid text-center justify-items-center cursor-pointer`}
              onClick={() => setlogged(!logged)}
            >
              <img
                className={styled["menu-icon"]}
                src={require("../../../Assets/Images/header/menu.png").default}
                alt=""
              />
            </div>
            <div className={`${styled["header-auth-box"]}`}>
              <Link to="/profile" className={`${styled["header-auth-icon"]} `}>
                <img
                  className={`${styled.img}`}
                  src={
                    require("../../../Assets/Images/header/tar-icon.png")
                      .default
                  }
                  alt="logo"
                />
              </Link>
              <Link
                to="/"
                className={`ml-1 mr-ssm ${styled["header-auth-icon"]} `}
              >
                <img
                  alt="logo"
                  className={styled.img}
                  src={
                    require("../../../Assets/Images/header/aux-icon.png")
                      .default
                  }
                />
              </Link>
              <Link
                to="/"
                className={`ml-1 mr-ssm ${styled["header-auth-icon"]} `}
              >
                <img
                  alt="logo"
                  className={styled.img}
                  src={
                    require("../../../Assets/Images/header/favorite-icon.png")
                      .default
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
            <div className={`${styled["search-box"]}`}>
              <Link to="/search" className={`${styled["search-box-icon"]}`}>
                <img
                  className={`${styled.img}`}
                  src={
                    require("../../../Assets/Images/header/search-icon.png")
                      .default
                  }
                  alt=""
                />
              </Link>
              <Input
                className={`form-control form-control-sm  mr-ssm  ${styled["search-box-input"]}`}
                placeholder={"جست‌وجو سریع"}
              />
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderAuthentication;
