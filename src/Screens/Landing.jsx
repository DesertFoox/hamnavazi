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
    <>
      <section className="top-landing container mx-auto h-80 ">
        <div className="grid justify-items-center  mt-xxl">
          <h2>اینجا زبان نخست موسیقی است !</h2>
          <h2 className="opacity-75">! Here,the first language is music</h2>
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
    </>
  );
};

export default Landing;
