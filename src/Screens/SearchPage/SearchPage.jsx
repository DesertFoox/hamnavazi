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
import SiteBaner from "../../Components/SiteBaner/SiteBaner";
import SearchTop from "../../Components/SearchPage/Top/SearchTop";
import SearchTable from "../../Components/SearchPage/Table/SearchTable";
import Filter from "../../Components/SearchPage/Filter/Filter";
import style from "./SearchPage.module.scss";
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
      console.log(currentDataList);
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
        <Filter
          filterButton={filterButton}
          setfilterButton={setfilterButton}
          filterItems={filterItems}
          filterItemId={filterItemId}
          toggleFilter={toggleFilter}
        />
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
