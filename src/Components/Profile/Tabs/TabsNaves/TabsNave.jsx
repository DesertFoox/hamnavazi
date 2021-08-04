import { Fragment, useState } from "react";

import {
  Home,
  Settings,
  EyeOff,
  User,
  AlertCircle,
  Info,
  Calendar,
  Video,
  MessageSquare,
  Zap,
  Star,
  VolumeX,
  Volume,
  Flag,
  Grid,
} from "react-feather";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import TabsBody from "../TabsBody/TabsBody";
import style from "./TabsNave.module.scss";
const TabsNave = ({ isOpen, screenWidth }) => {
  const [active, setActive] = useState("1");

  const toggle = (tab) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  const tabNavBg = ["bg-green", "bg-898989", "bg-276e95"];
  return (
    <Fragment>
      <Nav
        tabs
        className={` ${style["tabs-box"]} ${
          style[tabNavBg[parseInt(active / 3)]]
        } pt-sssm`}
      >
        {screenWidth < 991 && (
          <NavItem
            className={`${style["sideNav-open"]} mr-ssm mt-1`}
            onClick={() => isOpen(true)}
          >
            <Grid size={18} />
          </NavItem>
        )}
        <NavItem
          className={`${
            active === "1" && style["tabs-naveItem-active"]
          }  mr-sm `}
        >
          <NavLink
            className={`${
              active === "1"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            onClick={() => {
              toggle("1");
            }}
          >
            <Info
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "2" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "2"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            } ${style.a}`}
            onClick={() => {
              toggle("2");
            }}
          >
            <Calendar size={26} />
            {/* <img
              className={`${style["tabs-naveItem-navLink-icon"]}`}
              //   src={
              //     require("../../../Assets/Images/profile/" +
              //       (active === "12"
              //         ? "callhistory-active.png"
              //         : "callhistory.png")).default
              //   }
              src={
                require("../../../Assets/Images/profile/callhistory.png")
                  .default
              }
            /> */}
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "3" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "3"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            onClick={() => {
              toggle("3");
            }}
          >
            <Video
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "4" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "4"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            // onClick={() => {
            //   toggle("4");
            // }}
          >
            <MessageSquare
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "5" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "5"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            // onClick={() => {
            //   toggle("5");
            // }}
          >
            <Zap
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "6" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "6"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            // onClick={() => {
            //   toggle("6");
            // }}
          >
            <Star
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "7" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "7"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            // onClick={() => {
            //   toggle("7");
            // }}
          >
            <Volume
              size={26}
              //   className={`${style["tabs-naveItem-navLink-icon"]}`}
            />
          </NavLink>
        </NavItem>
        <NavItem
          className={`${
            active === "8" && style["tabs-naveItem-active"]
          }  mr-ssm `}
        >
          <NavLink
            className={`${
              active === "8"
                ? style["tabs-naveItem-navLink-active"]
                : style["tabs-naveItem-navLink"]
            }  ${style.a}`}
            // onClick={() => {
            //   toggle("8");
            // }}
          >
            <Flag size={26} />
          </NavLink>
        </NavItem>
      </Nav>
      <TabsBody activeTab={active} />
    </Fragment>
  );
};
export default TabsNave;
