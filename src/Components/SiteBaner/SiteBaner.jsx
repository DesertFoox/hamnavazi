import React, { Fragment } from "react";
import BanerStyle from "./Baner.module.scss";
const SiteBaner = () => {
  return (
    <Fragment>
      <div className={`${BanerStyle["baner-box"]} ml-ssm`}>
        <div
          className={`${BanerStyle["baner-box-item"]} ${BanerStyle["baner-musice-box"]} d-flex justify-content-between`}
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
          className={`${BanerStyle["baner-box-item"]} ${BanerStyle["baner-service-box"]} d-flex justify-content-between`}
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
          className={`${BanerStyle["baner-box-item"]} ${BanerStyle["baner-bands-box"]} d-flex justify-content-between`}
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
