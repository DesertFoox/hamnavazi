import React from "react";
import { Badge } from "reactstrap";

import ProfileSideNave from "../SideNav/ProfileSideNave";

import style from "../SideNav/ProfileSideNave.module.css";
import "./event.css";
const MyEvents = () => {
  return (
    <>
      <section className="profile-myevents container-fluid profile-bg">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-start bg-white p-0">
            <ProfileSideNave />
          </div>
          <div className="col-lg-8 bg-selectbrown p-3">
            <div className="event   grid grid-cols-1 bg-white rounded border-r-6 border-textcolor">
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
                    {/* <div
                      className={`${style["close-icon-box"]} grid justify-items-end`}
                    >
                      <img
                        className={`${style["sideNave-close-icon"]} img-fluid`}
                        src={
                          require("../../../Assets/Images/profile/close.png")
                            .default
                        }
                        alt=""
                      />
                    </div> */}
                  </div>
                  <p className="text-13 mt-ssm">
                    طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت
                    چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از
                    این نوشتار به عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و
                    ارائه اولیه شکل ظاهری و کلی طرح سفارش‌گرفته‌شده ‌استفاده
                    می‌کند، تا ازنظر گرافیکی نشان‌گر چگونگی نوع و اندازه قلم و
                    ظاهرِ متن باشد. معمولاً طراحان گرافیک برای صفحه‌آرایی، نخست
                    از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفاً به
                    مشتری یا صاحب‌کار خود نشان دهند که صفحه طراحی یا
                    صفحه‌بندی‌شده، بعد از این‌که متن در آن قرار گیرد، چگونه به
                    نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده
                    است.
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
                    <div className="bg-white shadow-md grid justify-items-center  event-image-holder rounded">
                      <img
                        src={
                          require("../../../Assets/Images/profile/Event.webp")
                            .default
                        }
                        alt="event"
                        className="object-contain event-image"
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
                    <div className={`${style["proflie-options-col"]} col-3`}>
                      <img
                        className={`${style["proflie-options-icon"]} img-fluid `}
                        src={
                          require("../../../Assets/Images/profile/block.png")
                            .default
                        }
                        alt=""
                      />
                    </div>

                    <div className={`${style["proflie-options-col"]} col-3`}>
                      <img
                        className={`${style["proflie-options-icon"]} img-fluid `}
                        src={
                          require("../../../Assets/Images/profile/message.png")
                            .default
                        }
                        alt=""
                      />
                    </div>

                    <div className={`${style["proflie-options-col"]} col-3`}>
                      <img
                        className={`${style["proflie-options-icon"]} img-fluid `}
                        src={
                          require("../../../Assets/Images/profile/share.png")
                            .default
                        }
                        alt=""
                      />
                    </div>
                    <div className={`${style["proflie-options-col"]} col-3`}>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default MyEvents;
