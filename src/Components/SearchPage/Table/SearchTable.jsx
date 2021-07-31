import React, { Fragment, useState } from "react";
import ReactPaginate from "react-paginate";
import { ChevronsLeft, ChevronsRight, User } from "react-feather";
import { Badge, Table } from "reactstrap";
import style from "./SearchTable.module.scss";

const SearchTable = ({
  tableHeadTitles,
  tableBodyData,
  badgeColor,
  customPageSize,
  pageCountList,
  onPageChanges,
  setInitialPage,
  initialPage,
}) => {
  return (
    <Fragment>
      <div className={`${style["table-holder"]}   `}>
        <Table responsive className={`${style["table-box"]} my-3`}>
          <thead className={`${style["table-header"]} `}>
            <tr className={`${style["table-header-tr"]} `}>
              <th className="text-transparent py-3"></th>
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
                  className={`${style["table-body-td"]} d-flex justify-content-center py-4 `}
                >
                  {item?.UserImg ? (
                    <div className={`${style["table-body-pic-box"]}`}>
                      <img
                        className={`img-fluid ${style["table-body-pic"]}`}
                        src={
                          require("../../../Assets/Images/profile/user/small/1.jpg")
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
                <td
                  className={`${style["table-body-td"]} py-4 leading-13`}
                  title={item?.UserName}
                >
                  {item.UserName?.length > 23
                    ? item.UserName.substr(0, 23) + " " + "..."
                    : item.UserName}
                </td>
                <td
                  className={`${style["table-body-td"]} py-4 leading-13`}
                  title={item?.Location}
                >
                  {item.Location?.length > 15
                    ? item.Location.substr(0, 15) + " " + "..."
                    : item.Location}
                </td>
                <td
                  className={`${style["table-body-td"]} py-4 leading-13`}
                  title={item?.MainInstrument}
                >
                  {item.MainInstrument.length > 15
                    ? item.MainInstrument.substr(0, 15) + " " + "..."
                    : item.MainInstrument}
                </td>
                <td className={`${style["table-body-td"]} py-4 leading-13`}>
                  <Badge
                    className={`${style["table-body-badge"]} text-md ${
                      badgeColor[item?.Level?.LevelNumber]
                    }`}
                    color="warning"
                    title={item?.Leve?.title}
                  >
                    {item?.Level?.title?.length > 15
                      ? item.Level.title.substr(0, 15) + " " + "..."
                      : item.Level.title}
                  </Badge>
                </td>
                <td
                  className={`${style["table-body-td"]} py-4 leading-13`}
                  title={item?.Style}
                >
                  {item?.Style?.length > 15
                    ? item?.Style.substr(0, 15) + " " + "..."
                    : item?.Style}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div
          className={`${style["table-pagination"]} d-flex justify-content-center`}
        >
          <ReactPaginate
            previousLabel={
              <span className={`${style["page-prev"]}`}>
                <ChevronsRight
                  className={`${style["page-prev"]} mr-sssm`}
                  size={30}
                />
              </span>
            }
            nextLabel={
              <span className={`${style["page-prev"]}`}>
                <ChevronsLeft
                  className={`${style["page-prev"]} mr-sssm`}
                  size={30}
                />
              </span>
            }
            breakLabel="..."
            breakClassName="break-me"
            pageClassName={`${style["page-button"]} mr-sssm`}
            pageCount={pageCountList}
            containerClassName={`disabled-pagination-btn d-flex ${style["pagination-holder"]}`}
            activeClassName={`${style["page-active"]}`}
            forcePage={initialPage}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={(page) => {
              setInitialPage(page.selected);
              onPageChanges(page.selected + 1);
            }}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SearchTable;
