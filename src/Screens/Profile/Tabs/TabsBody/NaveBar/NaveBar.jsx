import React, { Fragment, useState } from "react";
import { BarChart2 } from "react-feather";
import { Nav, NavItem, NavLink } from "reactstrap";
import style from "./NaveBar.module.css";
const NaveBar = ({ naveBarData }) => {
  const [active, setActive] = useState(0);
  const sortStartLentgh = naveBarData?.title?.lentgh + 1;
  console.log(sortStartLentgh);
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
              href="#"
              className={`${style.a} ${active === index && style["bang"]}`}
              onClick={() => toggle(index)}
            >
              {item}
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
//     <Fragment>
//       <Nav className={`${style["navBar-bg"]} px-sssm py-ssm`}>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 1 && style["bang"]}`}
//             onClick={() => toggle(1)}
//           >
//             هـویت
//           </NavLink>
//         </NavItem>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 2 && style["bang"]} `}
//             onClick={() => toggle(2)}
//           >
//             اطلاعـات تمـاس
//           </NavLink>
//         </NavItem>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 3 && style["bang"]} `}
//             onClick={() => toggle(3)}
//           >
//             سـازهـا
//           </NavLink>
//         </NavItem>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 4 && style["bang"]} `}
//             onClick={() => toggle(4)}
//           >
//             تحصیـلات
//           </NavLink>
//         </NavItem>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 5 && style["bang"]} `}
//             onClick={() => toggle(5)}
//           >
//             دستـاوردهـا
//           </NavLink>
//         </NavItem>
//         <NavItem className={`mr-ssm`}>
//           <NavLink
//             href="#"
//             className={`${style.a} ${active === 6 && style["bang"]} `}
//             onClick={() => toggle(6)}
//           >
//             اهـداف
//           </NavLink>
//         </NavItem>
//         <button
//           className={`p-2 text-current text-xs  font-medium bg bg-white ${style["clipboard-button"]}`}
//         >
//           Copy Link
//         </button>
//       </Nav>
// </Fragment>
