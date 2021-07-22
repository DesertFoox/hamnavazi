import React, { Fragment } from "react";
import { Badge, Card, CardBody, CardImg, Button, Input } from "reactstrap";
import style from "./ProfileSideNave.module.css";
import { ChevronLeft } from "react-feather";
const ProfileSideNave = ({ isOpen }) => {
  return (
    <Fragment>
      <div
        className={`${style["profile-card"]} w-100 d-flex justify-items-start`}
      >
        <img
          className={`${style["profile-image"]} img-fluid grid `}
          src={require("../../../Assets/Images/profile/profileImg.png").default}
        />
        <Card className={`w-100 border-0 pb-sssm`}>
          <CardBody className={`${style["profile-personality"]}  `}>
            <div
              className={`${style["close-icon-box"]} grid justify-items-end`}
              onClick={() => isOpen(false)}
            >
              <img
                className={`${style["sideNave-close-icon"]} img-fluid`}
                src={
                  require("../../../Assets/Images/profile/close.png").default
                }
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
                className={`${style["fallow-col"]} col-lg-6 col-md-6 col-6  d-flex justify-content-center `}
              >
                <img
                  className={`${style["profile-fallow-icon"]}`}
                  src={
                    require("../../../Assets/Images/profile/fallower.png")
                      .default
                  }
                  alt=""
                />
                <sapn className={`${style["profile-fallow-number"]} mr-sssm`}>
                  15
                </sapn>
              </div>
              <div
                className={`${style["fallow-col"]} col-lg-6 col-md-6 col-6  d-flex justify-content-center `}
              >
                <img
                  className={`${style["profile-fallow-icon"]}`}
                  src={
                    require("../../../Assets/Images/profile/fallower.png")
                      .default
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
              <div
                className={`${style["proflie-options-col"]} col-lg-3 col-3 `}
              >
                <img
                  className={`${style["proflie-options-icon"]} img-fluid `}
                  src={
                    require("../../../Assets/Images/profile/block.png").default
                  }
                  alt=""
                />
              </div>

              <div
                className={`${style["proflie-options-col"]} col-lg-3 col-3 `}
              >
                <img
                  className={`${style["proflie-options-icon"]} img-fluid `}
                  src={
                    require("../../../Assets/Images/profile/message.png")
                      .default
                  }
                  alt=""
                />
              </div>

              <div
                className={`${style["proflie-options-col"]} col-lg-3 col-3 `}
              >
                <img
                  className={`${style["proflie-options-icon"]} img-fluid `}
                  src={
                    require("../../../Assets/Images/profile/share.png").default
                  }
                  alt=""
                />
              </div>
              <div
                className={`${style["proflie-options-col"]} col-lg-3 col-3 `}
              >
                <img
                  className={`${style["proflie-options-icon"]} img-fluid `}
                  src={
                    require("../../../Assets/Images/profile/add.png").default
                  }
                  alt=""
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Card className={`px-ssm border-0 ${style["card-shadow"]}`}>
        <div className={` py-ssm row ${style["card-border-bottom"]} `}>
          <div className={`col-6 grid justify-items-start  `}>
            <img
              className={`${style["profile-Collapse-icon"]} img-fluid`}
              src={require("../../../Assets/Images/profile/tar.png").default}
              alt=""
            />
            <span className="mt-sssm font-bold">
              تار | Tar{" "}
              <Badge
                className={`${style["badge-radius"]} mr-sssm p-ssm bg bg-zereshki`}
                color="warning"
              >
                حرفه ای | Pro
              </Badge>
            </span>
            <span className={`mt-sssm font-medium`}>1367 |1988</span>
            <span className={`mt-sssm font-medium`}>
              بداهه‌نوازی | Improvisation
            </span>
            <span className={`mt-sssm font-medium`}>کلاسیک | Classic</span>
            <span className={`mt-sssm font-medium`}>تلفیـقی | Fusion </span>
          </div>
          <div className={`col-5 grid justify-items-start `}>
            <img
              className={`${style["profile-Collapse-icon"]} img-fluid`}
              src={require("../../../Assets/Images/profile/tabla.png").default}
              alt=""
            />
            <span className="mt-sssm font-bold text-xs">
              طبلا | Tabla{" "}
              <Badge
                className={`${style["badge-radius"]} text-xs mr-sssm p-ssm bg bg-warning`}
                color="warning"
              >
                مبتدی | Beginner
              </Badge>
            </span>
            <span className={` font-medium`}>1388 |2009</span>
            <span className={` font-medium text-sm`}>
              هندوستانی | Hindustani
            </span>
            <span className={` font-medium text-white`}>
              هندوستانی | Hindustani
            </span>
            <span className={` font-medium text-white`}>
              هندوستانی | Hindustani
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>

        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-6 grid justify-items-start  `}>
            <img
              className={`${style["profile-Collapse-icon"]} img-fluid`}
              src={
                require("../../../Assets/Images/profile/location.png").default
              }
              alt=""
            />
            <span className={`mt-sssm font-medium`}>ایـران |Iran </span>
            <span className={`mt-sssm font-medium`}>تهـران | Tehran</span>
            <span className={`mt-sssm font-medium text-sm`}>
              میدان هفت تیر | Haft-e Tir Sq
            </span>
          </div>
          <div className={`col-5 grid justify-items-start `}>
            <img
              className={`${style[""]} img-fluid`}
              src={require("../../../Assets/Images/profile/map.png").default}
              alt=""
            />
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>

        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <img
              className={`${style["profile-Collapse-icon"]} img-fluid`}
              src={
                require("../../../Assets/Images/profile/teaching.png").default
              }
              alt=""
            />
            <span className={`mt-sssm font-medium`}>تدریس |Teaching </span>
            <span className={`mt-sssm font-bold text-xs`}>
              مدیر داخلی آموزشگاه چاووش | Executive Manager of Cahvoosh
              Institute
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>

        <div className={` py-ssm row `}>
          <div className={`col-11 grid justify-items-start  `}>
            <img
              className={`${style["profile-Collapse-icon"]} img-fluid`}
              src={require("../../../Assets/Images/profile/note.png").default}
              alt=""
            />
            <span className={`mt-sssm font-medium text-sm`}>
              تدریس ساز و مباحث بداهه | Instrument and Improvisation Teaching
            </span>
            <span className={`mt-sssm font-medium text-sm`}>
              تحقیقات شخصی |Personal Research{" "}
            </span>
            <span className={`mt-sssm font-medium text-sm`}>
              ارتقـا وبسـایت همنـوازی | Development of Hamnavazi Website{" "}
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
      </Card>
      {/* {group-collapse2} */}
      <Card
        className={`px-ssm border-0 ${style["card2-shadow"]} ${style["bg-fafafa"]} `}
      >
        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>
              نمونه آثار | Sample Works{" "}
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>اهداف | Goals </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>
              دسترسی | Availability{" "}
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>امکانات | Facilities </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
        <div className={` py-ssm row ${style["card-border-bottom"]}`}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>
              علاقه‌مندی‌ها | Interests{" "}
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
        <div className={` py-ssm row `}>
          <div className={`col-11 grid justify-items-start  `}>
            <span className={`mt-sssm font-medium`}>
              اطلاعات تماس | Contact Info{" "}
            </span>
          </div>
          <div className={`col-1`}>
            <ChevronLeft
              size={16}
              className={`${style["Collapse-chevron-position"]}`}
            />
          </div>
        </div>
      </Card>
      <Card className={`p-ssm border-0  ${style["bg-f1f2f2"]}`}>
        <div className={`row grid justify-items-center  `}>
          <div className={`col-9 grid justify-items-center  px-sssm  `}>
            <input
              className={`${style["clipboard-input"]} text-left text-sm px-3 w-100`}
              value="https://www.hamnavazi.com/profile/areftoo/"
              disabled
            />
          </div>
          <div className={`col-3 grid justify-items-start`}>
            <button
              className={`p-2 text-current text-xs  font-medium bg bg-white ${style["clipboard-button"]}`}
            >
              Copy Link
            </button>
          </div>
        </div>
      </Card>
      <div className={`${style["bg-sideNave"]}`}>
        <div
          className={` grid justify-items-start ${style["bg-spider"]} `}
        ></div>
      </div>
      {/* <SideNaveCollaps /> */}
    </Fragment>
  );
};

export default ProfileSideNave;
