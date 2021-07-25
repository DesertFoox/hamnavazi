import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ChevronUp,
  ChevronDown,
  HelpCircle,
  XCircle,
  User,
} from "react-feather";
import {
  Card,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge,
  Table,
} from "reactstrap";
import style from "./SearchPage.module.css";
import "../../Assets/Style/Landing.css";
const SearchPage = () => {
  const [isOpen, setOpen] = useState(null);
  const [filterButton, setfilterButton] = useState(false);
  const [filterItemId, setfilterItemId] = useState(null);
  const history = useHistory();
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
  ];
  const filterItems = [
    { id: 1, title: "اطلاعـات | Info" },
    { id: 2, title: "مرتب‌سـازی  |  Sort" },
    { id: 3, title: "دستـاوردهـا  |  Achievements" },
    { id: 4, title: "کلیـدهـا، زمیـنه‌هـا  |  Badges, Keywords", icon: true },
  ];
  const tableHeadTitles = [
    "نـام کـاربـری  |  Username",
    "مکـان  |  Location",
    "ســاز اصلی  |  Main Instrument",
    "سطـح  |  Level",
    "سـبـک  |  Style",
  ];
  const tableBodyData = [
    {
      UserId: 1,
      UserImg: "../../Assets/Images/profile/user/small/1.jpg",
      UserName: "مهـرداد خضـریـان  |  Mehrdad Khezrian",
      Location: "تهـران  |  Tehran",
      MainInstrument: "گیـتـار  |  Guitar",
      Level: { title: "مبتدی  |  Beginner", LevelNumber: 0 },
      Style: "کـلاسیـک  |  Classical",
    },
    {
      UserId: 2,
      UserImg: null,
      UserName: "مهـرداد خضـریـان  |  Mehrdad Khezrian",
      Location: "تهـران  |  Tehran",
      MainInstrument: "گیـتـار  |  Guitar",
      Level: { title: "مبتدی  |  Beginner", LevelNumber: 1 },
      Style: "کـلاسیـک  |  Classical",
    },
    {
      UserId: 3,
      UserImg: null,
      UserName: "مهـرداد خضـریـان  |  Mehrdad Khezrian",
      Location: "تهـران  |  Tehran",
      MainInstrument: "گیـتـار  |  Guitar",
      Level: { title: "مبتدی  |  Beginner", LevelNumber: 2 },
      Style: "کـلاسیـک  |  Classical",
    },
    {
      UserId: 4,
      UserImg: null,
      UserName: "مهـرداد خضـریـان  |  Mehrdad Khezrian",
      Location: "تهـران  |  Tehran",
      MainInstrument: "گیـتـار  |  Guitar",
      Level: { title: "مبتدی  |  Beginner", LevelNumber: 3 },
      Style: "کـلاسیـک  |  Classical",
    },
  ];
  const badgeColor = [
    "bg bg-warning",
    "bg bg-average ",
    "bg bg-advanced ",
    "bg bg-zereshki",
  ];
  const toggle = (id) => {
    if (id === isOpen) {
      setOpen(null);
      return;
    }
    setOpen(id);
  };
  const toggleFilter = (id) => {
    if (id === filterItemId) {
      setfilterItemId(null);
      return;
    }
    setfilterItemId(id);
  };
  return (
    <React.Fragment>
      <div className={`${style["top-SearchPage"]}`}>
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
                require("../../Assets/Images/header/favorite-baner.png").default
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
                require("../../Assets/Images/header/favorite-baner.png").default
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
                require("../../Assets/Images/header/favorite-baner.png").default
              }
              alt=""
            />
          </div>
        </div>

        <section className={`${style["landingtopsection"]} container `}>
          <div
            className={`${style["search-TopCenter-option"]} grid justify-items-center mt-md2 `}
          >
            <h2 className="text-white ">اینجا زبان نخست موسیقی است !</h2>
            <h2 className="opacity-75 text-white">
              ! Here,the first language is music
            </h2>
            <div className="selectSection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 flex flex-row mt-5 justify-content-center">
              {testSelectOption?.map((item, index) => (
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
      </div>
      <section className={`${style["Chosemsi"]} h-md`}>
        <div
          className={`container-fluid bg bg-eeeeee ${style["filter-container"]}`}
        >
          <div
            className={`${style["filter-box"]} d-flex justify-content-start px-ssm py-sssm`}
          >
            <img
              className={`img-fluid ml-ssm`}
              src={
                require("../../Assets/Images/search/filter-icon.png").default
              }
              alt=""
            />
            <h6 className={`${style["filter-title"]} ml-ssm`}>
              فیـلتـرهــا | Filters
            </h6>
            <div
              className={`${style["collapse-button"]} grid justify-items-center mt-1`}
              onClick={() => setfilterButton(!filterButton)}
            >
              {filterButton ? (
                <ChevronUp className="mt-1" size={14} />
              ) : (
                <ChevronDown className="mt-1" size={14} />
              )}
            </div>
          </div>
        </div>

        <div
          className={`${style["filter-card"]} px-2 pt-2`}
          style={!filterButton ? { display: "none" } : { display: "grid" }}
        >
          {filterItems?.map((item, index) => (
            <div
              className={`${style["filter-card-item"]}  d-flex justify-content-between p-2`}
              onClick={() => toggleFilter(item?.id)}
            >
              <div className={`text-707070 text-sm d-flex`} key={item.id}>
                {item.title}

                {item?.icon && (
                  <HelpCircle className="ml-2 mt-1 text-707070" size={15} />
                )}
              </div>
              <div>
                {filterItemId === item.id ? (
                  <ChevronUp className="mt-1 text-707070" size={14} />
                ) : (
                  <ChevronDown className="mt-1 text-707070" size={14} />
                )}
              </div>
            </div>
          ))}
        </div>
        <div
          className={`${style["search-results"]}   container grid justify-items-center`}
        >
          <div
            className={`${style["search-results-top"]} container mt-sssm d-flex justify-content-center`}
          >
            <div className={`d-flex`}>
              <div
                className={`${style["search-results-title"]} mt-ssm text-C4b4a4c font-bold`}
              >
                نتـایـج جسـت‌وجـو | Search Results{" "}
              </div>
              <Badge
                className={`${style["filter-badge"]}  h-50 d-flex text-xs mt-ssm pt-1  mr-ssm bg bg-eeeeee`}
              >
                <XCircle className="ml-sssm" size={18} />
                حـذف فیـلـتـر | Close Filter
              </Badge>
            </div>
          </div>
        </div>
        <div className={`${style["table-holder"]} container mt-2  `}>
          <Table responsive className={`${style["table-box"]} my-3`}>
            <thead className={`${style["table-header"]} `}>
              <tr className={`${style["table-header-tr"]} `}>
                <th className="text-transparent py-3">userImageProfile</th>
                {tableHeadTitles?.map((item, index) => (
                  <th
                    className={`${style["table-header-th"]}  font-black py-3`}
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`${style["table-body"]} `}>
              {tableBodyData?.map((item, index) => (
                <tr
                  className={`${style["table-body-tr"]} font-black `}
                  key={index}
                >
                  <td
                    className={`${style["table-body-td"]} d-flex justify-content-center py-4`}
                  >
                    {item?.UserImg ? (
                      <div className={`${style["table-body-pic-box"]}`}>
                        <img
                          className={`img-fluid ${style["table-body-pic"]}`}
                          src={
                            require("../../Assets/Images/profile/user/small/1.jpg")
                              .default
                          }
                          alt=""
                        />
                      </div>
                    ) : (
                      <div className={`${style["table-body-icon-box"]}`}>
                        <User size={30} />
                      </div>
                    )}
                  </td>
                  <td className={`${style["table-body-td"]} py-4 leading-13`}>
                    {item.UserName}
                  </td>
                  <td className={`${style["table-body-td"]} py-4 leading-13`}>
                    {item.Location}
                  </td>
                  <td className={`${style["table-body-td"]} py-4 leading-13`}>
                    {item.MainInstrument}
                  </td>
                  <td className={`${style["table-body-td"]} py-4 leading-13`}>
                    <Badge
                      className={`${style["table-body-badge"]} text-md ${
                        badgeColor[item?.Level?.LevelNumber]
                      }`}
                      color="warning"
                    >
                      {item?.Level?.title}
                    </Badge>
                  </td>
                  <td className={`${style["table-body-td"]} py-4 leading-13`}>
                    {item.Style}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div
            className={`${style["table-pagination"]} d-flex justify-content-center`}
          ></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
