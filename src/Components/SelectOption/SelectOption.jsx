import React, { useRef, useEffect, useState } from "react";
import "../../Assets/Style/SelectOption.scss";

const SelectOption = (props) => {
  const [showList, setShowList] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [snackOpen, setSnackOpen] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const [slicedList, setSlicedList] = useState({ root: [] });

  let showError = "";
  if (!props.isValid) {
    showError = (
      <div className="register-validation-message">
        <span> {props.validationMessage} </span>
      </div>
    );
  }

  let Style = { backgroundColor: "#fffcf" };
  if (props.searchStyle) {
    Style = { backgroundColor: "#fff" };
  }

  useEffect(() => {
    setSlicedList(props.data);
  }, [props.data]);

  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowList(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const listShowHandler = () => {
    if (showList) {
      setShowList(false);
    } else {
      setShowList(true);
    }
  };

  const listClickHandler = (event, id) => {
    props.onValueChanged(id);
    setShowList(false);
  };

  const KeyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (searchValue.trim() === "") {
        setSnackOpen({ open: true, vertical: "bottom", horizontal: "right" });
      }
    }
  };

  const searchChangeHandler = (event) => {
    if (event.target.value.trim() === "") {
      setSlicedList(props.data);
      //setSnackOpen({ open: true, vertical: "bottom", horizontal: "right" });
    } else {
      let ListArray = props.data;
      let newSlicedList = [];
      Object.keys(slicedList).forEach((it, ind) => {
        newSlicedList[it] = ListArray[it].filter((item) =>
          item.title.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });

      setSlicedList(newSlicedList);
    }
    setSearchValue(event.target.value);
  };

  const List = (
    <ul
      style={Style}
      className={showList ? "dropdown opened" : "dropdown"}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <li style={Style} className="so-search-box">
        <input
          value={searchValue}
          onKeyPress={KeyDownHandler}
          onChange={searchChangeHandler}
          placeholder="search"
        />
      </li>
      {props.value != null ? (
        <li style={Style} onClick={(event) => listClickHandler(event, null)}>
          هیچکدام | None
        </li>
      ) : (
        ""
      )}
      {Object.keys(slicedList).map((key, i) => {
        return (
          <React.Fragment key={i}>
            {props.showCategory ? (
              <li className="is-title">{Object.keys(slicedList)[i]}</li>
            ) : (
              ""
            )}
            {slicedList[key].map((obj, index) => {
              if (props.value == null) {
                return (
                  <li
                    key={index}
                    style={Style}
                    onClick={(event) => listClickHandler(event, obj)}
                  >
                    {obj.title}
                  </li>
                );
              } else {
                return (
                  <React.Fragment key={index}>
                    {obj.id !== props.value.id ? (
                      <li
                        style={Style}
                        onClick={(event) => listClickHandler(event, obj)}
                      >
                        {obj.title}
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                );
              }
            })}
          </React.Fragment>
        );
      })}
    </ul>
  );

  var tiContainerStyle = props.isValid ? {} : { paddingBottom: "15px" };
  var tiContainerClass = "textinput-container";
  if (props.selectType === "top-search") {
    tiContainerClass = "textinput-container ti-ts";
  }
  return (
    <div
      style={{ ...props.tiContainerStyle, tiContainerStyle }}
      className={tiContainerClass}
      ref={wrapperRef}
    >
      <div
        style={props.titleContainerStyle}
        className={
          props.isRequired
            ? "textinput-title-container field-required"
            : "textinput-title-container"
        }
      >
        <span className={props.isRequired ? "is-required" : ""}>
          {props.title}
          {props.hasHint ? (
            <span className="show-hint" onClick={props.hintClickHandler}></span>
          ) : (
            ""
          )}
        </span>
      </div>
      <div
        style={Style}
        className={
          props.isValid
            ? "selectoption-input-container"
            : "selectoption-input-container dotted-outline"
        }
        onClick={listShowHandler}
      >
        <span className="title">
          {props.value == null
            ? props.placeholder.length > 13
              ? props.placeholder.slice(0, 13) + "..."
              : props.placeholder
            : props.value.title.length > 13
            ? props.value.title.slice(0, 13) + "..."
            : props.value.title}
        </span>
        <span
          style={props.searchStyle && { backgroundColor: "#d8d8d8" }}
          className={showList ? "icon up-arrow" : "icon down-arrow"}
          onClick={listShowHandler}
        ></span>
        {List}
      </div>
      {showError}
    </div>
  );
};

export default SelectOption;
