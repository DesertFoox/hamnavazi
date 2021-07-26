import React, { Fragment } from "react";
// import style from "."
import "./Baner.scss";
const SiteBaner = () => {
  return (
    <Fragment>
      <div className={`baner-box m-0`}>
        <div
          className={`baner-box-item baner-musice-box d-flex justify-content-between`}
        >
          <div className={`text-white px-3 py-1`}>
            <h6>موسیـقی‌دان‌هـا</h6>
            <h6>Musicians</h6>
          </div>
          <img
            className={`img-fluid `}
            src={
              require("../../Assets/Images/header/favorite-baner.png").default
            }
            alt=""
          />
        </div>

        <div
          className={`baner-box-item baner-service-box d-flex justify-content-between`}
        >
          <div className={`text-white px-3 py-1`}>
            <h6>پیـراموسیـقی</h6>
            <h6>Service Providers</h6>
          </div>
          <img
            className={`img-fluid`}
            src={
              require("../../Assets/Images/header/favorite-baner.png").default
            }
            alt=""
          />
        </div>

        <div
          className={`baner-box-item baner-bands-box d-flex justify-content-between`}
        >
          <div className={`text-white px-3 py-1`}>
            <h6>گــروه‌هـا</h6>
            <h6>Bands</h6>
          </div>
          <img
            className={`img-fluid`}
            src={
              require("../../Assets/Images/header/favorite-baner.png").default
            }
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SiteBaner;
