import React, { useState, useEffect, Fragment } from "react";
import { Badge } from "reactstrap";

import ProfileSideNave from "../SideNav/ProfileSideNave";
import Slider from "../../../Components/Slider/Slider";

import style from "../SideNav/ProfileSideNave.module.scss";
import "../MyEvents/event.css";

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [showGallery, setShowGallery] = useState(true);

  const toggle = () => setModal(!modal);

  const checkWidth = () => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 600) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  };
  useEffect(() => {
    checkWidth();
  });
  return (
    <>
      {" "}
      <div className="container">
        <Slider toggle={toggle} modal={modal} />
      </div>
      <div className=" event grid grid-cols-1 bg-white rounded border-r-6 border-textcolor">
        <div className="grid py-4 px-4 grid-cols-1 md:mx-auto lg:grid-cols-2">
          {showImage === false && (
            <div
              onClick={() => toggle()}
              className="bg-white shadow-md mb-sm grid justify-items-center mx-auto  event-image-holder rounded"
            >
              <img
                src={
                  require("../../../Assets/Images/profile/Event.webp").default
                }
                alt="event"
                className="object-contain event-image"
              />
            </div>
          )}
          <div className="right-side-event">
            <div className="flex flex-row flex-wrap">
              <div className="title ml-ssm">
                <h3 className="text-16">طرح نما یا لورم ایپسوم</h3>
              </div>
              <div className="time-hour  ml-ssm text-center">
                <p className="text-13">2 days ago</p>
              </div>
              <div className="time-day  ml-ssm text-center">
                <p className="text-13">2021-05-10</p>
              </div>
              <div className="time-miladi  ml-ssm text-center">
                <p className="text-13">2021-05-10</p>
              </div>
            </div>
            <p className="text-13 mt-ssm">
              طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ،
              صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار
              به عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائه اولیه شکل
              ظاهری و کلی طرح سفارش‌گرفته‌شده ‌استفاده می‌کند، تا ازنظر گرافیکی
              نشان‌گر چگونگی نوع و اندازه قلم و ظاهرِ متن باشد. معمولاً طراحان
              گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده
              می‌کنند تا صرفاً به مشتری یا صاحب‌کار خود نشان دهند که صفحه طراحی
              یا صفحه‌بندی‌شده، بعد از این‌که متن در آن قرار گیرد، چگونه به نظر
              می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده است.
            </p>
          </div>
          <div className="left-side-event">
            <div className="grid sm:grid-cols-1 md:grid-cols-2">
              <div className="ltr">
                <div className="mb-ssm">
                  <Badge className="px-2 bg-b6b8bb rounded-full ml-ssm text-10 bg-c79c69">
                    تصاویر | Gallery
                  </Badge>
                </div>
                <div className="mb-ssm">
                  <Badge className="px-2 ml-ssm bg-white text-buttonbrown shadow-lg yt-link rounded-full text-10 ltr">
                    www.youtube.com/...
                  </Badge>
                </div>
                <div className="mb-ssm">
                  <Badge className="px-2 ml-ssm bg-white text-buttonbrown shadow-lg yt-link rounded-full text-10 ltr">
                    www.youtube.com/...
                  </Badge>
                </div>
                <div className="mb-ssm">
                  <Badge className="px-2 ml-ssm bg-white text-buttonbrown shadow-lg yt-link rounded-full text-10 ltr">
                    www.youtube.com/...
                  </Badge>
                </div>
                <div className="address-event mt-sm ml-ssm grid grid-cols-3">
                  <p className="text-707070 text-12">Tehran | تهـران </p>
                  <p className="text-707070 text-12">Haft-e. | میدان .</p>
                  <p className="text-707070 text-12">Iran | ایـران </p>
                </div>
                <div
                  className={`float-right`}
                  onClick={() => setShowGallery(!showGallery)}
                >
                  <img
                    className={` transition duration-500 transform ${
                      showGallery && "rotate-180"
                    }`}
                    src={
                      require("../../../Assets/Images/gallery/arrowup.svg")
                        .default
                    }
                    alt=""
                  />
                </div>
              </div>
              {showImage && (
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
              )}
            </div>
          </div>
        </div>
        <div className="grid py-4 px-4 grid-cols-1 hidden sm:hidden md:grid  sm:grid-cols-2 justify-items-center  sm:justify-items-center s md:grid-cols-2 lg:grid-cols-4">
          {showGallery && (
            <Fragment>
              <div
                onClick={() => toggle()}
                className="bg-white shadow-md grid justify-items-center  event-image-holder rounded"
              >
                <img
                  src={
                    require("../../../Assets/Images/profile/Event.webp").default
                  }
                  alt="event"
                  className="object-contain event-image"
                />
              </div>
              <div className="bg-white  shadow-md grid justify-items-center  event-image-holder rounded">
                <img
                  src={
                    require("../../../Assets/Images/profile/Event.webp").default
                  }
                  alt="event"
                  className="object-contain event-image"
                />
              </div>
              <div className="bg-white shadow-md grid justify-items-center  event-image-holder rounded">
                <img
                  src={
                    require("../../../Assets/Images/profile/Event.webp").default
                  }
                  alt="event"
                  className="object-contain event-image"
                />
              </div>
              <div className="bg-white shadow-md grid justify-items-center  event-image-holder rounded">
                <img
                  src={
                    require("../../../Assets/Images/profile/Event.webp").default
                  }
                  alt="event"
                  className="object-contain event-image"
                />
              </div>
            </Fragment>
          )}
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
                    require("../../../Assets/Images/profile/block.png").default
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
                    require("../../../Assets/Images/profile/share.png").default
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
                    require("../../../Assets/Images/profile/add.png").default
                  }
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
