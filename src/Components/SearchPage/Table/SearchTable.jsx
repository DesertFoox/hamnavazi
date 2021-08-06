import React, { Fragment, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import {
  useFilters,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useTable,
} from "react-table";
import { Table } from "reactstrap";
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
                  </th>
                ))}
              </tr>
            ))}
          </thead>
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
