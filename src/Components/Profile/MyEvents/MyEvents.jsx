import React from "react";
import { Badge } from "reactstrap";

import style from "../SideNav/ProfileSideNave.module.scss";
import EventStyle from "./event.module.scss";
const MyEvents = ({ ProfileStyle }) => {
  return (
    <>
      <div className={`${ProfileStyle["profile-bg-scroll"]} `}>
        <div className={`py-2 ${ProfileStyle.bg_opa_white}`}>
          <div
            className={`event   grid grid-cols-1 ${ProfileStyle["bg-white-profile"]} rounded border-r-6 border-textcolor mt-ssm mx-sssm`}
          >
            <div className="grid py-4 px-4 grid-cols-1 md:mx-auto lg:grid-cols-2">
              <div className="right-side-event">
                <div className="flex flex-row flex-wrap">
                  <div className="title ml-ssm">
                    <h3 className="text-16">طرح نما یا لورم ایپسوم</h3>
                  </div>
                  <div className="time-hour  ml-ssm text-center">
                    <p className="text-13">18 pm - 21 pm</p>
                  </div>
                  <div className="time-day  ml-ssm text-center">
                    <p className="text-13">Monday</p>
                  </div>
                  <div className="time-miladi  ml-ssm text-center">
                    <p className="text-13">2021-05-10</p>
                  </div>
                  <div className="time-miladi   ml-ssm text-center">
                    <p className="text-13">1400-02-20</p>
                  </div>
                </div>
                <p className="text-13 mt-ssm">
                  طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت
                  چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این
                  نوشتار به عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائه
                  اولیه شکل ظاهری و کلی طرح سفارش‌گرفته‌شده ‌استفاده می‌کند، تا
                  ازنظر گرافیکی نشان‌گر چگونگی نوع و اندازه قلم و ظاهرِ متن
                  باشد. معمولاً طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های
                  آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا
                  صاحب‌کار خود نشان دهند که صفحه طراحی یا صفحه‌بندی‌شده، بعد از
                  این‌که متن در آن قرار گیرد، چگونه به نظر می‌رسد و قلم‌ها و
                  اندازه‌بندی‌ها چگونه در نظر گرفته شده است.
                </p>
              </div>
              <div className="left-side-event">
                <div className="grid sm:grid-cols-1 md:grid-cols-2">
                  <div className="ltr">
                    <div className="mb-ssm">
                      <Badge className="px-2 bg-b6b8bb rounded-full ml-ssm text-10 bg-c79c69">
                        مجانی | Free
                      </Badge>
                    </div>
                    <div className="mb-ssm">
                      {" "}
                      <Badge className="px-2 bg-b6b8bb rounded-full ml-ssm text-10 bg-b6b8bb">
                        کنسرت | Consert
                      </Badge>
                    </div>
                    <div className="mb-ssm">
                      {" "}
                      <Badge className="px-2 bg-b6b8bb ml-ssm rounded-full text-10 bg-d48c8c ">
                        راک پیشرو | ProgressiveRock
                      </Badge>
                    </div>
                    <div className="mb-ssm">
                      <Badge className="px-2 ml-ssm bg-white text-black shadow-lg yt-link rounded-full text-10 ltr">
                        www.youtube.com/...
                      </Badge>
                    </div>
                    <div className="address-event mt-sm ml-ssm grid grid-cols-3">
                      <p className="text-707070 text-12">Tehran | تهـران </p>
                      <p className="text-707070 text-12">Haft-e. | میدان .</p>
                      <p className="text-707070 text-12">Iran | ایـران </p>
                    </div>
                  </div>
                  <div
                    className={`bg-white shadow-md grid mt-sm mx-auto justify-items-center ${EventStyle["event-image-holder"]} rounded`}
                  >
                    <img
                      src={
                        require("../../../Assets/Images/profile/Event.webp")
                          .default
                      }
                      alt="event"
                      className={`object-contain ${EventStyle["event-image"]}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="eventdown bg-e8e8e9 py-2 px-4 flex justify-between">
              <div className="categories-event mt-2 mb-3">
                <Badge className="bg-b6b8bb rounded-full ml-ssm text-10">
                  کاور | Cover
                </Badge>
                <Badge className="bg-b6b8bb rounded-full ml-ssm text-10">
                  Quartet | کـوارتـت
                </Badge>
                <Badge className="bg-b6b8bb rounded-full text-10">
                  Film Music | موسیقی فیلم
                </Badge>
              </div>
              <div className="abilities">
                <div
                  className={`${style["proflie-options-box"]} mt-2 mx-3 row d-flex`}
                >
                  <div
                    className={`${style["proflie-options-col"]} p-zero sm:px-ssm col-6 col-md-3 col-lg-3`}
                  >
                    <img
                      className={`${style["proflie-options-icon"]} img-fluid `}
                      src={
                        require("../../../Assets/Images/profile/block.png")
                          .default
                      }
                      alt=""
                    />
                  </div>

                  <div
                    className={`${style["proflie-options-col"]} p-zero sm:px-ssm col-6 col-sm-3 col-md-3 col-lg-3`}
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
                    className={`${style["proflie-options-col"]} p-zero sm:px-ssm col-6 col-sm-3 col-md-3 col-lg-3`}
                  >
                    <img
                      className={`${style["proflie-options-icon"]} img-fluid `}
                      src={
                        require("../../../Assets/Images/profile/share.png")
                          .default
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className={`${style["proflie-options-col"]} p-zero sm:px-ssm col-6 col-sm-3 col-md-3 col-lg-3`}
                  >
                    <img
                      className={`${style["proflie-options-icon"]} img-fluid `}
                      src={
                        require("../../../Assets/Images/profile/add.png")
                          .default
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-sm justify-content-center">
            <img
              className="ml-ssm mb-ssm"
              src={require("../../../Assets/Images/plus.svg").default}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEvents;
