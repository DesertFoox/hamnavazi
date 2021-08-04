import React, { Fragment } from "react";
import {
  Card,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "reactstrap";
import style from "./SearchTop.module.scss";
import LandingStyle from "../../../Assets/Style/Landing.module.scss";

const SearchTop = ({ selectOptionData, isOpen, toggle }) => {
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
    <Fragment>
      <section className={`${style["top-section"]} container `}>
        <div className="grid mb-md justify-items-center ">
          <h2 className="text-white mt-lg text-1half sm:text-2">
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
                  className="bg-dark_buttonbrown border-dark_gh border-2  rounded-md"
                  size="md"
                  isOpen={isOpen == index ? true : false}
                  toggle={() => toggle(index)}
                >
                  <Button
                    id="caret"
                    className={`px-sm  text-1 border-none rounded-md  ${
                      item.options
                        ? style.selectbuttonWidth
                        : style["search-buttonWidth"]
                    }  ${
                      item.options ? "" : "border-dark_gh"
                    }  bg-dark_buttonbrown`}
                  >
                    {item.title}
                  </Button>
                  {item.options && (
                    <>
                      <DropdownToggle
                        split
                        className={`bg-dark_selectbrown  border-dark_gh ${style.selectbuttonborder}`}
                      />
                      <DropdownMenu
                        className={` ${style["top-drop-down-menu"]}`}
                      >
                        <DropdownItem header>
                          {" "}
                          <Input
                            type="text"
                            className={`${style["top-drop-down-input"]} text-1 `}
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
    </Fragment>
  );
};

export default SearchTop;
