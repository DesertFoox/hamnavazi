import React, { Fragment, useEffect, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import Event from "../../MyEvents/MyEvents";
import Gallery from "../../Gallery/Gallery";
import NaveBar from "./NaveBar/NaveBar";
import Specifications from "../../Specifications/Specifications";

import ProfileStyle from "../../../../Assets/Style/profile.module.scss";

const TabsBody = ({ activeTab }) => {
  const [showedit, setShowedit] = useState(false);

  const checkWidth = () => {
    window.innerWidth < 640 ? setShowedit(true) : setShowedit(false);
  };

  useEffect(() => {
    checkWidth();
  });

  const NaveBarTitles = {
    Tab1: {
      title: [
        { title: "هـویت", link: "#profile" },
        { title: " اطلاعـات تمـاس", link: "#callinfo" },
        { title: "سـازهـا", link: "#saz" },
        { title: "تحصیـلات", link: "#education" },
        { title: "دستـاوردهـا", link: "#dastavard" },
        { title: "اهـداف", link: "#target" },
      ],
      copyLink: "http/..",
    },
    Tab2: {
      title: [
        { title: "همه رویدادهـا | All Events", link: "#allevents" },
        { title: "رویدادهـای من | My Events", link: "#myevents" },
      ],
    },
    Tab3: {
      title: [
        {
          title: "تصـاویـر  | Pictures",
          link: "picture",
        },
        {
          title: " موسیقی‌هـا | Musics",
          link: "musics",
        },
        {
          title: " ویـدیـوهـا | Videos",
          link: "#videos",
        },
      ],
      sorting: ["قدیمی‌ترین  |  Oldest", " جدیدترین  |  Newest"],
    },
  };

  return (
    <Fragment>
      <TabContent
        className={`py-50 ${ProfileStyle["profile-tab-content"]} `}
        activeTab={activeTab}
      >
        <TabPane tabId="1">
          <NaveBar naveBarData={NaveBarTitles.Tab1} />
          <Specifications showedit={showedit} ProfileStyle={ProfileStyle} />
        </TabPane>
        <TabPane tabId="2">
          <NaveBar naveBarData={NaveBarTitles.Tab2} />
          <Event ProfileStyle={ProfileStyle} />
        </TabPane>
        <TabPane tabId="3">
          <NaveBar naveBarData={NaveBarTitles.Tab3} />
          <Gallery ProfileStyle={ProfileStyle} />
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default TabsBody;
