import React, { Fragment } from "react";
import { Badge, Card, CardBody, CardImg } from "reactstrap";
import style from "./ProfileSideNave.module.css";
const ProfileSideNave = () => {
  return (
    <Fragment>
      <img
        className={`${style["profile-image"]} img-fluid grid`}
        src={require("../../../Assets/Images/profile/profileImg.png").default}
      />
      <Card className={`${style["profile-card"]} border-0`}>
        <CardBody className={`${style["profile-personality"]}  `}>
          <div className={`${style["close-icon-box"]} grid justify-items-end`}>
            <img
              className={`${style["sideNave-close-icon"]} img-fluid`}
              src={require("../../../Assets/Images/profile/close.png").default}
              alt=""
            />
          </div>
          <h6
            className={`${style["profile-userName"]} mb-0 grid justify-items-center`}
          >
            Aref Too
          </h6>
          <span
            className={`${style["profile-activity-time"]} grid justify-items-center`}
          >
            04 روز قبل
          </span>
          <div className={`${style["profile-fallow-box"]} mx-1 row`}>
            <div
              className={`${style["fallow-col"]} col-6 d-flex justify-content-center `}
            >
              <img
                className={`${style["profile-fallow-icon"]}`}
                src={
                  require("../../../Assets/Images/profile/fallower.png").default
                }
                alt=""
              />
              <sapn className={`${style["profile-fallow-number"]} mr-sssm`}>
                15
              </sapn>
            </div>
            <div
              className={`${style["fallow-col"]} col-6 d-flex justify-content-center `}
            >
              <img
                className={`${style["profile-fallow-icon"]}`}
                src={
                  require("../../../Assets/Images/profile/fallower.png").default
                }
                alt=""
              />
              <sapn className={`${style["profile-fallow-number"]} mr-sssm`}>
                256
              </sapn>
            </div>
          </div>
          <div
            className={`${style["proflie-options-box"]} mt-2 mx-3 row d-flex`}
          >
            <div className={`${style["proflie-options-col"]} col-3`}>
              <img
                className={`${style["proflie-options-icon"]} img-fluid `}
                src={
                  require("../../../Assets/Images/profile/block.png").default
                }
                alt=""
              />
            </div>

            <div className={`${style["proflie-options-col"]} col-3`}>
              <img
                className={`${style["proflie-options-icon"]} img-fluid `}
                src={
                  require("../../../Assets/Images/profile/message.png").default
                }
                alt=""
              />
            </div>

            <div className={`${style["proflie-options-col"]} col-3`}>
              <img
                className={`${style["proflie-options-icon"]} img-fluid `}
                src={
                  require("../../../Assets/Images/profile/share.png").default
                }
                alt=""
              />
            </div>
            <div className={`${style["proflie-options-col"]} col-3`}>
              <img
                className={`${style["proflie-options-icon"]} img-fluid `}
                src={require("../../../Assets/Images/profile/add.png").default}
                alt=""
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default ProfileSideNave;
