import React, { useState, Fragment } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";

import "../Assets/Style/Landing.css";
const Landing = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!isOpen);

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
      <div className="top-landing h-60">
        {/* <div className="d-flex justify-content-end p-0 ">
        </div> */}
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
                require("../Assets/Images/header/favorite-baner.png").default
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
                require("../Assets/Images/header/favorite-baner.png").default
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
                require("../Assets/Images/header/favorite-baner.png").default
              }
              alt=""
            />
          </div>
        </div>

        <section className="landingtopsection container">
          <div className="grid justify-items-center ">
            <h2 className="text-white mt-xl">اینجا زبان نخست موسیقی است !</h2>
            <h2 className="opacity-75 text-white">
              ! Here,the first language is music
            </h2>
            <div className="selectSection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex flex-row mt-5 justify-content-center">
              {testSelectOption?.map((item, index) => (
                <div className="mr-ssm mt-ssm md:mt-zero">
                  <ButtonDropdown
                    className="bg-buttonbrown border-2 border-a88355 rounded-md"
                    size="md"
                    isOpen={toggle}
                    toggle={() => toggle(index)}
                  >
                    <Button
                      id="caret"
                      className={`px-sm border-2 border-a88355 border-none border-2 border-a88355 rounded-md selectbuttonWidth bg-buttonbrown`}
                    >
                      {item.title}
                    </Button>
                    {item.options && (
                      <>
                        <DropdownToggle
                          split
                          className={`bg-selectbrown  selectbuttonborder`}
                        />
                        <DropdownMenu>
                          <DropdownItem header>search</DropdownItem>
                          {item?.options?.map((option) => (
                            <Fragment>
                              {" "}
                              <DropdownItem key={option.id}>
                                {option.title}
                              </DropdownItem>
                              <DropdownItem divider />
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
      <div className="Chosemsi h-md">
        <section className="choseyourmusi h-zero container">
          <div className="grid justify-items-center">
            <h2 className="text-797a7c  mt-sm text-md md:text-lg">
              موزیسین مورد علاقه خود را پیدا کنید | Find your desired musician
            </h2>
          </div>
        </section>
      </div>
      <div className="main-content">
        <section className="content container-fluid ">
          <div className="category-holder shadow-img_shadow row">
            <div className="col-lg-9 col-9  col-sm-9 secol">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/melodi.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-3 col-sm-3 firstcol shape  grid justify-items-center">
              <div className="grid justify-items-center ">
                <div className="projects ">
                  <img
                    src={
                      require("../Assets/Images/landing/projects.svg").default
                    }
                    alt=""
                  />
                </div>
                <div className="text-center text-white services">
                  <h4>پـروژه‌هــا</h4>
                  <h4>Projects</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="category-holder shadow-img_shadow row">
            <div className="col-lg-9 col-9 col-sm-9 secol">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/mic.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-sm-3 col-3  secondcol  grid justify-items-center">
              <div className=" grid justify-items-center ">
                <div className="jobs">
                  <img
                    src={require("../Assets/Images/landing/job.svg").default}
                    alt=""
                  />
                </div>
                <div className="text-center  text-white  services">
                  <h4>فـرصت‌هـای شغـلی </h4>
                  <h4> Job Opportunities</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="category-holder shadow-img_shadow row">
            <div className="col-lg-9 col-9  col-sm-9 secol">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/band.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3 col-3 col-sm-3 thirdcol shape ">
              <div className=" grid justify-items-center lg:mt-sm">
                <div className="markte">
                  <img
                    src={require("../Assets/Images/landing/market.svg").default}
                    alt=""
                  />
                </div>
                <h4 className="text-center services text-white">
                  <h4>بازار</h4>
                  <h4>Market</h4>
                </h4>
              </div>
            </div>
          </div>
          <div className="category-holder shadow-img_shadow row">
            <div
              className="col-lg-9  
            col-9 col-sm-9 secol"
            >
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/saz.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3  col-3 col-sm-3 col-3 fourthcol ">
              <div className="grid justify-items-center lg:mt-sm ">
                <div className="servs">
                  <img
                    src={require("../Assets/Images/landing/serv.svg").default}
                    alt=""
                  />
                </div>
                <h4 className="text-white text-center services ">
                  <h4> خـدمـات ویــژه</h4>
                  <h4>Special Services</h4>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="about-us h-md">
        <section className="abt-us h-zero container">
          <div className="grid grid-cols-3">
            <div className="about-us-box sh  text-black fs-5 text-center mt-ssm justify-content-center">
              <img
                className={`about-us-icons `}
                src={
                  require("../Assets/Images/landing/instruction.png").default
                }
                alt=""
              />
              راهـنمــا | Instruction
            </div>
            <div className="about-us-box  text-black fs-5 text-center mt-ssm justify-content-center">
              <img
                className={`about-us-icons `}
                src={require("../Assets/Images/landing/rules.png").default}
                alt=""
              />
              قـوانیـن | Rules
            </div>
            <div className="about-us-box  text-black fs-5 text-center mt-ssm justify-content-center">
              <img
                className={`about-us-icons `}
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
