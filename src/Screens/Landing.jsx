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
                  className=""
                  size="md"
                  isOpen={isOpen}
                  toggle={toggle}
                >
                  <Button
                    id="caret"
                    className="px-sm rounded-md selectbuttonWidth bg-buttonbrown"
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
                <ButtonDropdown size="md" isOpen={isOpen} toggle={toggle}>
                  <Button
                    id="caret"
                    className="px-sm rounded-md selectbuttonWidth bg-buttonbrown"
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
                <ButtonDropdown size="md" isOpen={isOpen} toggle={toggle}>
                  <Button
                    id="caret"
                    className="px-sm rounded-md selectbuttonWidth bg-buttonbrown"
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
                  className="px-sm rounded-md selectbuttonWidth bg-selectbrown"
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
            <h2 className="text-white mt-sm ">
              موزیسین مورد علاقه خود را پیدا کنید | Find your desired musician
            </h2>
          </div>
        </section>
      </div>
      <div className="main-content">
        <section className="content container-fluid ">
          <div className="category-holder row">
            <div className="col-lg-9">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/melodi.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="category-holder">
            <div className="col-lg-9">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/mic.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="category-holder">
            <div className="col-lg-9">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/band.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="category-holder">
            <div className="col-lg-9">
              <img
                className="fullimage"
                src={require("../Assets/Images/landing/saz.jpg").default}
                alt=""
              />
            </div>
            <div className="col-lg-3"></div>
          </div>
        </section>
      </div>
      <div className="about-us h-md">
        <section className="abt-us h-zero container">
          <div className="flex flex-nowrap justify-content-center">
            <div className="about-us-box md:mr-md text-white fs-5 text-center mt-ssm justify-content-center">
              <img
                className={`about-us-icons `}
                src={
                  require("../Assets/Images/landing/instruction.png").default
                }
                alt=""
              />
              راهـنمــا | Instruction
            </div>
            <div className="about-us-box md:mr-md text-white fs-5 text-center mt-ssm justify-content-center">
              <img
                className={`about-us-icons `}
                src={require("../Assets/Images/landing/rules.png").default}
                alt=""
              />
              قـوانیـن | Rules
            </div>
            <div className="about-us-box md:mr-md text-white fs-5 text-center mt-ssm justify-content-center">
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
