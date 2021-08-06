import React, { Fragment } from "react";
import { ChevronUp, ChevronDown, HelpCircle, XCircle } from "react-feather";
import { Badge } from "reactstrap";

import style from "./SearchFilter.module.scss";
const Filter = ({
  filterButton,
  setfilterButton,
  filterItems,
  filterItemId,
  toggleFilter,
}) => {
  return (
    <Fragment>
      <div
        className={`container-fluid bg bg-eeeeee ${style["filter-container"]}`}
      >
        <div
          className={`${style["filter-box"]} d-flex justify-content-start px-ssm py-sssm`}
        >
          <img
            className={`img-fluid ml-ssm`}
            src={
              require("../../../Assets/Images/search/filter-icon.png").default
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
    </Fragment>
  );
};

export default Filter;
