import React from "react";
import style from "./Header.module.css";
const Header = () => {
  const accessToken = "nott found";
  const profile = "mohsen";
  const setting = null;
  return (
    <div className={style["container-fluid"]}>
      <header className={style.header}>
        <div className={style["header-container"]}>
          {accessToken && accessToken !== "not found" ? (
            profile ? (
              <Fragment>
                <div className={style["header-logo"]}>
                  <Link className={style.a} to="/home">
                    <img
                      className={style.img}
                      alt="logo"
                      src={require("../../assets/images/logo.png")}
                    />
                  </Link>
                </div>

                <div className={style["header-options"]}>
                  <div
                    className={`${style.setting} ${
                      setting ? style["enabled"] : ""
                    }`}
                  ></div>
                  {/* <SearchBox /> */}
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className={style["header-logo"]}>
                  <Link className={style.a} to="/home">
                    <img
                      className={style.img}
                      alt="logo"
                      src={require("../../../assets/images/logo.png")}
                    />
                  </Link>
                </div>

                <div className={style["header-options"]}>
                  <Link className={style.menu} to={"/profile?id="}>
                    <img
                      src={require("../../../assets/images/header/profile-icon.png")}
                      alt="Profile"
                      className={style["header-icon"]}
                    />
                    <span
                      className={`${style["profile-title"]} ${style["user-full-name"]}`}
                    >
                      {/* {loggedUser.firstName ? usrerName : "User Name"} */}
                    </span>
                  </Link>
                  {/* <SearchBox /> */}
                </div>
              </Fragment>
            )
          ) : (
            <Fragment>
              <div className={style["header-logo"]}>
                <Link className={style.a} to="/home">
                  <img
                    className={style.img}
                    alt="logo"
                    src={require("../../../assets/images/logo.png")}
                  />
                </Link>
              </div>

              <div className={style["header-options"]}>
                <Link
                  to="/auth/registration"
                  className={style["header-signup"]}
                >
                  <img
                    alt="logo"
                    className={style.image}
                    src={require("../../../assets/images/sign-up-icon.jpg")}
                  />
                  <span className={style["header-signup-hover"]}>
                    ثبت نام | Sign up
                  </span>
                </Link>
                <Link to="/auth/login" className={style["header-login"]}>
                  <img
                    alt="logo"
                    className={style.image}
                    src={require("../../../assets/images/login-icon.png")}
                  />
                  <span className={style["header-login-hover"]}>
                    {" "}
                    ورود | Login
                  </span>
                </Link>
                <SearchBox />
              </div>
            </Fragment>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
