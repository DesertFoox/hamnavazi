import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { List } from "react-feather";
import { Input, Label } from "reactstrap";
import HeaderUnAuthentication from "./HeaderUnAuth/HeaderUnAuthentication";
import HeaderAuthentication from "./HeaderAuth/HeaderAuthentication";
import style from "./Header.module.css";
const Header = () => {
  const [logged, setlogged] = useState(false);
  const history = useHistory();
  const accessToken = "nott found";
  // const profile = true;
  const setting = null;
  return (
    <div className={` container-fluid ${style["nav-container"]} `}>
      <header className={style.header}>
        <div className={style["header-container"]}>
          <Fragment>
            {/* header-logo */}
            <div className={style["header-logo"]}>
              <Link className={style.a} to="/">
                <img
                  className={style.logoImg}
                  alt="logo"
                  src={require("../../Assets/Images/header/logo.png").default}
                />
              </Link>
            </div>

            <div className={style["header-options"]}>
              <div
                className={`${style["menu-iconBox"]} grid text-center justify-items-center cursor-pointer`}
                onClick={() => setlogged(!logged)}
              >
                <img
                  className={style["menu-icon"]}
                  src={require("../../Assets/Images/header/menu.png").default}
                  alt=""
                />
              </div>
              {logged == true ? (
                <HeaderAuthentication history={history} />
              ) : (
                <HeaderUnAuthentication />
              )}

              <div className={`${style["search-box"]}`}>
                <Link to="/search" className={`${style["search-box-icon"]}`}>
                  <img
                    className={`${style.img}`}
                    src={
                      require("../../Assets/Images/header/search-icon.png")
                        .default
                    }
                    alt=""
                  />
                </Link>
                <Input
                  className={`form-control form-control-sm  mr-ssm  ${style["search-box-input"]}`}
                  placeholder={"جست‌وجو سریع"}
                />
              </div>
            </div>
          </Fragment>
        </div>
      </header>
    </div>
  );
};

export default Header;
