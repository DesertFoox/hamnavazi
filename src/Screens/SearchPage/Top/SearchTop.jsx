import React, { Fragment } from "react";
import {
  Card,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import style from "./SearchTop.module.scss";
const SearchTop = ({ selectOptionData, isOpen, toggle }) => {
  return (
    <Fragment>
      <section className={`${style["landingtopsection"]} container `}>
        <div
          className={`${style["search-TopCenter-option"]} grid justify-items-center mt-md2 `}
        >
          <h2 className="text-white ">اینجا زبان نخست موسیقی است !</h2>
          <h2 className="opacity-75 text-white">
            ! Here,the first language is music
          </h2>
          <div className="selectSection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex flex-row mt-5 justify-content-center">
            {selectOptionData?.map((item, index) => (
              <div className="mr-ssm mt-ssm md:mt-zero">
                <ButtonDropdown
                  className="bg-dark_buttonbrown border-2 
                  border-dark_gh rounded-md"
                  size="md"
                  isOpen={isOpen == index ? true : false}
                  toggle={() => toggle(index)}
                >
                  <Button
                    id="caret"
                    className={`px-sm border-2 
                    border-dark_gh border-none border-2 
                    border-dark_gh rounded-md ${style["selectbuttonWidth"]} bg-dark_buttonbrown`}
                  >
                    {item.title}
                  </Button>
                  <DropdownToggle
                    split
                    className={`bg-dark_selectbrown   ${style["selectbuttonborder"]}`}
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
                </ButtonDropdown>
              </div>
            ))}
            <div className="mr-ssm mt-ssm md:mt-zero">
              <Button
                size="md"
                id="caret"
                className={`px-sm border-2 
                    border-dark_gh  
                     rounded-md ${style["selectbuttonWidth"]} bg-dark_buttonbrown`}
              >
                {" "}
                جستجو | Search
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SearchTop;
