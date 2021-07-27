import React, { Fragment, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ChevronUp,
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
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
import SearchTop from "./Top/SearchTop";
import SearchTable from "./Table/SearchTable";
import SiteBaner from "../../Components/SiteBaner/SiteBaner";
import style from "./SearchPage.module.css";
import "../../Assets/Style/Landing.module.scss";
const SearchPage = () => {
  const [isOpen, setOpen] = useState(null);
  const [filterButton, setfilterButton] = useState(false);
  const [filterItemId, setfilterItemId] = useState(null);
  const [initialPage, setInitialPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
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
    {
      UserId: 5,
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
  useEffect(() => {
    onPageChanges(1);
  }, []);
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
  const customPageSize = 4;
  const pageCountList =
    tableBodyData.length % 4 == 0
      ? tableBodyData.length / 4
      : parseInt(tableBodyData.length / 4) + 1;
  console.log(pageCountList);
  const onPageChanges = (page) => {
    const pageSize = 4;
    const currentDataList = [];
    if (tableBodyData.length > 0) {
      const data = tableBodyData.map((item, index) => {
        if (
          (page + 1) * pageSize - 1 >= index &&
          (page + 1) * pageSize - pageSize <= index
        ) {
          currentDataList.push(item);
        }
      });
      setCurrentData(currentDataList);
    }
  };
  return (
    <React.Fragment>
      <div className={`${style["top-SearchPage"]}`}>
        {/* <div className="d-flex justify-content-end p-0 ">
        </div> */}
        <SiteBaner />
        <SearchTop
          selectOptionData={testSelectOption}
          toggle={toggle}
          isOpen={isOpen}
        />
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
        <SearchTable
          tableHeadTitles={tableHeadTitles}
          tableBodyData={tableBodyData}
          badgeColor={badgeColor}
          customPageSize={customPageSize}
          pageCountList={pageCountList}
          onPageChanges={onPageChanges}
          setInitialPage={setInitialPage}
          initialPage={initialPage}
        />
      </section>
    </React.Fragment>
  );
};

export default SearchPage;
