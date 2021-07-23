import React, { useState } from "react";
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
  return (
    <React.Fragment>
      <div className="top-landing h-60">
        <section className="landingtopsection container">
          <div className="grid justify-items-center ">
            <h2 className="text-white mt-xl">اینجا زبان نخست موسیقی است !</h2>
            <h2 className="opacity-75 text-white">
              ! Here,the first language is music
            </h2>
            <div className="selectSection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex flex-row mt-5 justify-content-center">
              <div className="mr-ssm mt-ssm md:mt-zero">
                <ButtonDropdown
                  className="bg-buttonbrown border-2 
                  border-gh rounded-lg"
                  size="md"
                  isOpen={isOpen}
                  toggle={toggle}
                >
                  <Button
                    id="caret"
                    className="px-sm border-2 
                    border-gh border-none border-2 
                    border-gh rounded-md selectbuttonWidth bg-buttonbrown"
                  >
                    کشور | Country
                  </Button>
                  <DropdownToggle
                    split
                    className="bg-selectbrown selectbuttonborder"
                  />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="mr-ssm mt-ssm md:mt-zero">
                <ButtonDropdown
                  className="bg-buttonbrown rounded-md border-2 
                  border-gh"
                  size="md"
                  isOpen={isOpen}
                  toggle={toggle}
                >
                  <Button
                    id="caret"
                    className="px-sm rounded-md border-2 
                    border-gh border-none selectbuttonWidth bg-buttonbrown"
                  >
                    ساز | Instrument
                  </Button>
                  <DropdownToggle
                    split
                    className="bg-selectbrown selectbuttonborder"
                  />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="mr-ssm mt-ssm md:mt-zero">
                <ButtonDropdown
                  className="bg-buttonbrown border-2 
                  border-gh rounded-md"
                  size="md"
                  isOpen={isOpen}
                  toggle={toggle}
                >
                  <Button
                    id="caret"
                    className="px-sm border-2 
                    border-gh border-none rounded-md selectbuttonWidth bg-buttonbrown"
                  >
                    سبک | Style
                  </Button>
                  <DropdownToggle
                    split
                    className="bg-selectbrown selectbuttonborder"
                  />
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <div className="mr-ssm mt-ssm md:mt-zero">
                <Button
                  size="md"
                  id="caret"
                  className="px-sm border-2 rounded-md border-gh  selectbuttonWidth bg-selectbrown"
                >
                  جستجو | Search
                </Button>
              </div>
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
              <div className="grid justify-items-center services ">
                <div className="projects ">
                  <img
                    src={
                      require("../Assets/Images/landing/projects.svg").default
                    }
                    alt=""
                  />
                </div>
                <div className="text-center text-white projectss">
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
              <div className=" grid justify-items-center services">
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
              <div className=" grid justify-items-center">
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
              <div className="grid justify-items-center ">
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
