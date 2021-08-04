import React, { Fragment, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { ChevronsLeft, ChevronsRight, User } from "react-feather";
import {
  useFilters,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useTable,
} from "react-table";
import { Badge, Table } from "reactstrap";
import style from "./SearchTable.module.scss";

const SearchTable = ({
  tableHeadTitles,
  tableData,
  badgeColor,
  customPageSize,
  pageCountList,
  onPageChanges,

  isLoading,
  columns,
  children,
  setPageSize,
  getCustomProps,
  setPageCountList,
  isSccess,
  setInitialPage = (val) => {},
  initialPage = 0,
}) => {
  const defaultColumn = useMemo(
    () => ({
      maxWidth: 400,
    }),
    []
  );
  const defaultData = useMemo(() => [], []);
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns,
        data: isLoading ? defaultData : tableData,
        defaultColumn,
      },
      useResizeColumns,
      useFilters,
      usePagination,
      useFlexLayout
    );
  // useEffect(() => {
  //   if (tableData.length > 0) {
  //     onPageChanges(0);
  //   }
  // }, [tableData, customPageSize]);

  // useEffect(() => {
  //   setPageCountList(Math.ceil(tableData.length) / customPageSize);
  // }, [customPageSize]);
  return (
    <Fragment>
      <div className={`${style["table-holder"]}   `}>
        <Table
          responsive
          hover
          {...getTableProps()}
          className={`${style["table-box"]} my-3 rounded position-relative overflow-hidden`}
        >
          <thead className={`${style["table-header"]} `}>
            {headerGroups.map((headerGroup) => (
              <tr
                className={`${style["table-header-tr"]} `}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column, index) => (
                  <th className=" py-3" {...column.getHeaderProps()}>
                    <div className="d-flex justify-content-center align-items-center">
                      {column.render("Header")}
                    </div>
                    {/* {column.canResize && (
                      <div
                        {...column.getResizerProps()}
                        className={`resizer ${
                          column.isResizing ? "isResizing" : ""
                        }`}
                      />
                    )} */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* <tr className={`${style["table-header-tr"]} `}>
              <th className="text-transparent py-3"></th>
              {tableHeadTitles?.map((item, index) => (
                <th
                  className={`${style["table-header-th"]}  font-black py-3`}
                  key={index}
                >
                  {item}
                </th>
              ))}
            </tr> */}
          <tbody
            className={`${style["table-body"]} position-relative overflow-hidden`}
            {...getTableBodyProps()}
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={`${style["table-body-tr"]} font-black `}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`text-center ${style["table-body-td"]}  d-flex justify-content-center py-4 `}
                      >
                        {cell.render("Cell", {
                          ...getCustomProps,
                          setInitialPage: setInitialPage,
                        })}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {/* {tableBodyData?.map((item, index) => (
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
            ))} */}
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
