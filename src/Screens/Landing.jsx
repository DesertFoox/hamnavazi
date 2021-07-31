import React, { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "reactstrap";

import LandingStyle from "../Assets/Style/Landing.module.scss";
import SiteBaner from "../Components/SiteBaner/SiteBaner";

const Landing = () => {
  const [isOpen, setOpen] = useState(null);
  const history = useHistory();
  const toggle = (id) => {
    if (id === isOpen) {
      setOpen(null);
      return;
    }
    setOpen(id);
  };

  const testSelectOption = [
    {
      title: "کشور | Country",
      options: [
        { id: 1, title: "Iran" },
        { id: 2, title: "Us" },
        { id: 3, title: "chine" },
        { id: 4, title: "kjfvfv" },
      ],
    },
    {
      title: "ساز | Instrument",
      options: [
        { id: 1, title: "Iran" },
        { id: 2, title: "Us" },
        { id: 3, title: "chine" },
        { id: 4, title: "kjfvfv" },
      ],
    },
    {
      title: "سبک | Style",
      options: [
        { id: 1, title: "Iran" },
        { id: 2, title: "Us" },
        { id: 3, title: "chine" },
        { id: 4, title: "kjfvfv" },
      ],
    },
    {
      title: "جستجو  | Search",
    },
  ];

  return (
    <React.Fragment>
      <div className={`${LandingStyle["top-landing"]} h-60`}>
        <SiteBaner />
        <section className={`${LandingStyle.landingtopsection} container`}>
          <div className="grid justify-items-center ">
            <h2 className="text-white mt-xl">اینجا زبان نخست موسیقی است !</h2>
            <h2 className="opacity-75 text-white">
              ! Here,the first language is music
            </h2>
            <div
              className={`${LandingStyle.selectSection} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex flex-row mt-5 justify-content-center`}
            >
              {testSelectOption?.map((item, index) => (
                <div className="mr-ssm mt-ssm md:mt-zero">
                  <ButtonDropdown
                    className="bg-buttonbrown border-2 border-a88355 rounded-md"
                    size="md"
                    isOpen={isOpen == index ? true : false}
                    toggle={() => toggle(index)}
                  >
                    <Button
                      id="caret"
                      className={`px-sm border-2 border-a88355 border-none border-2 border-a88355 rounded-md ${LandingStyle.selectbuttonWidth} bg-buttonbrown`}
                      onClick={() => history.push("/search")}
                    >
                      {item.title}
                    </Button>
                    {item.options && (
                      <>
                        <DropdownToggle
                          split
                          className={`bg-selectbrown  ${LandingStyle.selectbuttonborder}`}
                        />
                        <DropdownMenu
                          className={`${LandingStyle["landing-top-drop-down-menu"]}`}
                        >
                          <DropdownItem header>
                            {" "}
                            <Input
                              type="text"
                              className={`${LandingStyle["landing-top-drop-down-input"]}`}
                              placeholder="search"
                            />{" "}
                          </DropdownItem>
                          {item?.options?.map((option) => (
                            <Fragment>
                              {" "}
                              <DropdownItem key={option.id}>
                                {option.title}
                              </DropdownItem>
                            </Fragment>
                          ))}
                        </DropdownMenu>
                      </>
                    )}
                  </ButtonDropdown>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className={`${LandingStyle.Chosemsi} h-md`}>
        <section className={`${LandingStyle.choseyourmusi} h-zero container`}>
          <div className="grid justify-items-center">
            <h2 className="text-797a7c  mt-sm text-md md:text-lg">
              موزیسین مورد علاقه خود را پیدا کنید | Find your desired musician
            </h2>
          </div>
        </section>
      </div>
      <div className="main-content">
        <section className="content container-fluid ">
          <div
            className={`${LandingStyle["category-holder"]} shadow-img_shadow row`}
          >
            <div className={`col-lg-9 col-9  col-sm-9 ${LandingStyle.secol}`}>
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/melodi.jpg").default}
                alt=""
              />
            </div>
            <div
              className={`col-lg-3 col-3 col-sm-3 ${LandingStyle.firstcol} shape grid justify-items-center`}
            >
              <div className="grid justify-items-center ">
                <div className={`${LandingStyle.projects}`}>
                  <img
                    src={
                      require("../Assets/Images/landing/projects.svg").default
                    }
                    alt=""
                  />
                </div>
                <div
                  className={`text-center text-white ${LandingStyle.services}`}
                >
                  <h4>پـروژه‌هــا</h4>
                  <h4>Projects</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${LandingStyle["category-holder"]} shadow-img_shadow row`}
          >
            <div className={`col-lg-9 col-9 col-sm-9 ${LandingStyle.secol}`}>
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/mic.jpg").default}
                alt=""
              />
            </div>
            <div
              className={`col-lg-3 col-sm-3 col-3  ${LandingStyle.secondcol}  grid justify-items-center`}
            >
              <div className=" grid justify-items-center ">
                <div className={`${LandingStyle.jobs}`}>
                  <img
                    src={require("../Assets/Images/landing/job.svg").default}
                    alt=""
                  />
                </div>
                <div
                  className={`text-center text-white ${LandingStyle.services}`}
                >
                  <h4>فـرصت‌هـای شغـلی </h4>
                  <h4> Job Opportunities</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${LandingStyle["category-holder"]} shadow-img_shadow row`}
          >
            <div className={`col-lg-9 col-9  col-sm-9 ${LandingStyle.secol}`}>
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/band.jpg").default}
                alt=""
              />
            </div>
            <div
              className={`"col-lg-3 col-3 col-sm-3 ${LandingStyle.thirdcol} ${LandingStyle.shape}`}
            >
              <div className=" grid justify-items-center lg:mt-sm">
                <div className={`${LandingStyle.markte}`}>
                  <img
                    src={require("../Assets/Images/landing/market.svg").default}
                    alt=""
                  />
                </div>
                <h4
                  className={`text-center ${LandingStyle.services} text-white`}
                >
                  <h4>بازار</h4>
                  <h4>Market</h4>
                </h4>
              </div>
            </div>
          </div>
          <div
            className={`${LandingStyle["category-holder"]} shadow-img_shadow row`}
          >
            <div
              className={`col-lg-9  
            col-9 col-sm-9 ${LandingStyle.secol}`}
            >
              <img
                className={`${LandingStyle.fullimage}`}
                src={require("../Assets/Images/landing/saz.jpg").default}
                alt=""
              />
            </div>
            <div
              className={`col-lg-3  col-3 col-sm-3 col-3 ${LandingStyle.fourthcol}`}
            >
              <div className="grid justify-items-center lg:mt-sm ">
                <div className={`${LandingStyle.servs}`}>
                  <img
                    src={require("../Assets/Images/landing/serv.svg").default}
                    alt=""
                  />
                </div>
                <h4
                  className={`text-white text-center ${LandingStyle.services}`}
                >
                  <h4> خـدمـات ویــژه</h4>
                  <h4>Special Services</h4>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={`${LandingStyle["about-us"]} h-md`}>
        <section className={`${LandingStyle["abt-us"]} h-zero container`}>
          <div className="grid grid-cols-3">
            <div
              className={`${LandingStyle["about-us-box"]} ${LandingStyle.sh}  text-black fs-5 text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]} `}
                src={
                  require("../Assets/Images/landing/instruction.png").default
                }
                alt=""
              />
              راهـنمــا | Instruction
            </div>
            <div
              className={`${LandingStyle["about-us-box"]}  text-black fs-5 text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]}`}
                src={require("../Assets/Images/landing/rules.png").default}
                alt=""
              />
              قـوانیـن | Rules
            </div>
            <div
              className={`${LandingStyle["about-us-box"]}  text-black fs-5 text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]}`}
                src={require("../Assets/Images/landing/aboutUs.png").default}
                alt=""
              />
              دربـاره مـا | About Us
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Landing;
