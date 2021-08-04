import React, { Fragment, useState } from "react";
import { BarChart2 } from "react-feather";
import { Nav, NavItem, NavLink } from "reactstrap";
import style from "./NaveBar.module.scss";
const NaveBar = ({ naveBarData }) => {
  const [active, setActive] = useState(0);
  const sortStartLentgh = naveBarData?.title?.lentgh + 1;
  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <Fragment>
      <Nav className={`${style["navBar-bg"]} px-sssm py-ssm `}>
        {naveBarData?.title.map((item, index) => (
          <NavItem className={`mr-ssm`}>
            <NavLink
              href={item.link}
              className={`${style.a} ${active === index && style["bang"]}`}
              onClick={() => toggle(index)}
            >
              {item.title}
            </NavLink>
          </NavItem>
        ))}
        {naveBarData?.copyLink && (
          <button
            className={`p-2 text-current text-xs  font-medium bg bg-white ${style["clipboard-button"]}`}
          >
            Copy Link
          </button>
        )}
        {naveBarData?.sorting && (
          <Fragment>
            <NavItem className={`mr-ssm d-flex `}>
              <img
                className={`img-fluid ${style.sortImg}`}
                src={
                  require("../../../../../Assets/Images/profile/sort1.png")
                    .default
                }
                alt=""
              />
              <NavLink
                href="#"
                className={`${style.a} ${
                  active === sortStartLentgh - 1 && style["bang"]
                } border-1`}
                // onClick={() => toggle(index + sortStartLentgh)}
              >
                مـرتب‌سـازی | :Sorting
              </NavLink>
            </NavItem>
            {naveBarData?.sorting?.map((item, index) => (
              <NavItem className={`mr-ssm`}>
                <NavLink
                  href="#"
                  className={`${style.a} ${
                    active === index + sortStartLentgh && style["bang"]
                  }`}
                  onClick={() => toggle(index + sortStartLentgh)}
                >
                  {item}
                </NavLink>
              </NavItem>
            ))}
          </Fragment>
        )}
      </Nav>
    </Fragment>
  );
};

export default NaveBar;
