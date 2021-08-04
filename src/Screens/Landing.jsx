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
  const imgg = "melodi.jpg";

  return (
    <React.Fragment>
      <div className={`${LandingStyle["top-landing"]} h-60`}>
        <SiteBaner />
        <section className={`${LandingStyle.landingtopsection} container`}>
          <div className="grid justify-items-center ">
            <h2 className="text-white mt-xl text-1half sm:text-2">
              اینجا زبان نخست موسیقی است !
            </h2>
            <h2 className="opacity-75 text-white text-1half sm:text-2">
              ! Here,the first language is music
            </h2>
            <div
              className={`${LandingStyle.selectSection} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 flex flex-row mt-5 justify-content-center`}
            >
              {testSelectOption?.map((item, index) => (
                <div className="mr-ssm  mt-ssm md:mt-ssm">
                  <ButtonDropdown
                    className="bg-buttonbrown border-b522d border-2  rounded-md"
                    size="md"
                    isOpen={isOpen == index ? true : false}
                    toggle={() => toggle(index)}
                  >
                    <Button
                      id="caret"
                      className={`px-sm  text-1 border-none rounded-md  ${
                        item.options
                          ? LandingStyle.selectbuttonWidth
                          : LandingStyle.searchbuttonwidth
                      }  ${item.options ? "" : "border-b522d"}  bg-buttonbrown`}
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
                              className={`${LandingStyle["landing-top-drop-down-input"]} text-1 `}
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
            <h2 className="text-797a7c  mt-sm text-md md:text-1half1">
              موزیسین مورد علاقه خود را پیدا کنید | Find your desired musician
            </h2>
          </div>
        </section>
      </div>
      <div className={`${LandingStyle["main-content"]}`}>
        <section className={`${LandingStyle["content"]} container-fluid p-0`}>
          <div
            className={`${LandingStyle["category-holder"]}  shadow-img_shadow `}
          >
            <div
              className={` ${LandingStyle.firstcol} ${LandingStyle["ssssss"]} shape grid justify-items-center`}
            >
              <div className={`${LandingStyle["firstcol-img-box"]}`}>
                <img
                  src={require("../Assets/Images/landing/projects.svg").default}
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

            <div className={` ${LandingStyle.secol} p-0`}>
              <img
                className={`${LandingStyle["fullimage"]}`}
                src={require(`../Assets/Images/landing/${imgg}`).default}
                alt=""
              />
            </div>
          </div>

          <div
            className={`${LandingStyle["category-holder"]}  shadow-img_shadow `}
          >
            <div
              className={` ${LandingStyle.firstcol} ${LandingStyle["jobss"]} shape grid justify-items-center`}
            >
              <div className={`${LandingStyle["firstcol-img-box"]}`}>
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

            <div className={` ${LandingStyle.secol} p-0`}>
              <img
                className={`${LandingStyle["fullimage"]}`}
                src={require("../Assets/Images/landing/job.png").default}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${LandingStyle["category-holder"]}  shadow-img_shadow `}
          >
            <div
              className={` ${LandingStyle.firstcol} ${LandingStyle["jobss"]} shape grid justify-items-center`}
            >
              <div className={`${LandingStyle["firstcol-img-box"]}`}>
                <img
                  src={require("../Assets/Images/landing/market.svg").default}
                  alt=""
                />
              </div>
              <div
                className={`text-center text-white ${LandingStyle.services}`}
              >
                <h4>بازار</h4>
                <h4>Market</h4>
              </div>
            </div>
            <div className={` ${LandingStyle.secol} p-0`}>
              <img
                className={`${LandingStyle["fullimage"]}`}
                src={require("../Assets/Images/landing/band.jpg").default}
                alt=""
              />
            </div>
          </div>
          <div
            className={`${LandingStyle["category-holder"]}  shadow-img_shadow `}
          >
            <div
              className={` ${LandingStyle.firstcol} ${LandingStyle["jobss"]} shape grid justify-items-center`}
            >
              <div className={`${LandingStyle["firstcol-img-box"]}`}>
                <img
                  src={require("../Assets/Images/landing/serv.svg").default}
                  alt=""
                />
              </div>
              <div
                className={`text-center text-white ${LandingStyle.services}`}
              >
                <h4> خـدمـات ویــژه</h4>
                <h4>Special Services</h4>
              </div>
            </div>
            <div className={` ${LandingStyle.secol} p-0`}>
              <img
                className={`${LandingStyle["fullimage"]}`}
                src={require("../Assets/Images/landing/saz.jpg").default}
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
      <div className={`${LandingStyle["about-us"]} h-md`}>
        <section className={`${LandingStyle["abt-us"]} h-zero container`}>
          <div className="grid grid-cols-3">
            <div
              className={`${LandingStyle["about-us-box"]} ${LandingStyle.sh}   text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]} mb-3 `}
                src={
                  require("../Assets/Images/landing/instruction.png").default
                }
                alt=""
              />
              راهـنمــا | Instruction
            </div>
            <div
              className={`${LandingStyle["about-us-box"]}   text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]} mb-3`}
                src={require("../Assets/Images/landing/rules.png").default}
                alt=""
              />
              قـوانیـن | Rules
            </div>
            <div
              className={`${LandingStyle["about-us-box"]}   text-center mt-ssm justify-content-center`}
            >
              <img
                className={`${LandingStyle["about-us-icons"]} mb-3`}
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
