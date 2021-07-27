import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";

import ProfileSideNave from "../SideNav/ProfileSideNave";
import TabsNave from "../Tabs/TabsNaves/TabsNave";
<<<<<<< HEAD
import style from "../SideNav/ProfileSideNave.module.css";
import ProfileStyle from "../../../Assets/Style/profile.module.scss";
=======
import style from "../SideNav/ProfileSideNave.module.scss";
import "../../../Assets/Style/profile.css";
>>>>>>> cbe5e59ea5e9d62bb6617361e09450b058686cf3
const Profile = () => {
  const [windowWidth, setwindowWidth] = useState(null);
  const [sidebarOpen, setsidebarOpen] = useState(true);

  // if (sidebarOpen && windowWidth < 990) {
  //   setsidebarOpen(false);
  // } else if (windowWidth > 990) {
  //   setsidebarOpen(true);
  // }
  if (!sidebarOpen && windowWidth > 990) {
    setsidebarOpen(true);
  }

  const updateWidth = () => {
    setwindowWidth(window.innerWidth);
    console.log(windowWidth);
  };
  useEffect(() => {
    if (windowWidth !== undefined) {
      updateWidth();
      window.addEventListener("resize", updateWidth);
    }
  }, []);
  // const resizeStyle =
  //   windowWidth &&
  //   ((windowWidth < 769
  //     ? style["profile-sideNave"] + " " + "col-6"
  //     : "col-4") ||
  //     (windowWidth < 576
  //       ? style["profile-sideNave"] + " " + "col-6"
  //       : "col-4"));
  // useEffect(() => {
  //   resizeStyle2();
  // }, [windowWidth]);
  const resizeStyle2 = () => {
    // console.log(windowWidth);

    if (windowWidth > 990) {
      // setsidebarOpen(true);
      return "col-4";
    } else if (windowWidth <= 990) {
      return style["profile-sideNave"] + " " + "col-8";
    } else if (windowWidth < 576) {
      return style["profile-sideNave"] + " " + "col-8";
    } else if (windowWidth < 470) {
      return style["profile-sideNave"] + " " + "col-10";
    } else if (windowWidth < 375) {
      return style["profile-sideNave"] + " " + "col-10";
    }
  };

  return (
    <section
      className={`${ProfileStyle.profile} container-fluid ${ProfileStyle["profile-bg"]}`}
    >
      <div className={`${style[""]} row h-100`}>
        {" "}
        <div
          className={`${resizeStyle2()} SideNave  bg-white p-0`}
          style={sidebarOpen ? { display: "grid" } : { display: "none" }}
        >
          <ProfileSideNave isOpen={setsidebarOpen} windowWidth={windowWidth} />
        </div>
        <div className="col-lg-8 p-0">
          <TabsNave screenWidth={windowWidth} isOpen={setsidebarOpen} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
