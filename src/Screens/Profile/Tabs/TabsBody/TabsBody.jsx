import React, { Fragment } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import NaveBar from "./NaveBar/NaveBar";
const TabsBody = ({ activeTab }) => {
  const NaveBarTitles = {
    Tab1: {
      title: [
        "هـویت",
        "اطلاعـات تمـاس",
        "سـازهـا",
        "تحصیـلات",
        "دستـاوردهـا",
        "اهـداف",
      ],
      copyLink: "http/..",
    },
    Tab2: {
      title: ["همه رویدادهـا | All Events", "رویدادهـای من | My Events"],
    },
    Tab3: {
      title: [
        "تصـاویـر  | Pictures",
        " موسیقی‌هـا | Musics",
        " ویـدیـوهـا | Videos",
      ],
      sorting: ["قدیمی‌ترین  |  Oldest", " جدیدترین  |  Newest"],
    },
  };
  return (
    <Fragment>
      <TabContent className="py-50" activeTab={activeTab}>
        <TabPane tabId="1">
          <NaveBar naveBarData={NaveBarTitles.Tab1} />
          <p>
            Candy canes donut chupa chups candy canes lemon drops oat cake
            wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps
            lemon drops candy marzipan donut brownie tootsie roll. Icing
            croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum
            cookie chocolate cake powder croissant.
          </p>
          <p>
            Carrot cake tiramisu danish candy cake muffin croissant tart
            dessert. Tiramisu caramels candy canes chocolate cake sweet roll
            liquorice icing cupcake. Candy cookie sweet roll bear claw sweet
            roll.
          </p>
        </TabPane>
        <TabPane tabId="2">
          <NaveBar naveBarData={NaveBarTitles.Tab2} />
          <p>
            Dragée jujubes caramels tootsie roll gummies gummies icing bonbon.
            Candy jujubes cake cotton candy. Jelly-o lollipop oat cake
            marshmallow fruitcake candy canes toffee. Jelly oat cake pudding
            jelly beans brownie lemon drops ice cream halvah muffin. Brownie
            candy tiramisu macaroon tootsie roll danish.
          </p>
          <p>
            Croissant pie cheesecake sweet roll. Gummi bears cotton candy tart
            jelly-o caramels apple pie jelly danish marshmallow. Icing caramels
            lollipop topping. Bear claw powder sesame snaps.
          </p>
        </TabPane>
        <TabPane tabId="3">
          <NaveBar naveBarData={NaveBarTitles.Tab3} />

          <p>
            Gingerbread cake cheesecake lollipop topping bonbon chocolate sesame
            snaps. Dessert macaroon bonbon carrot cake biscuit. Lollipop lemon
            drops cake gingerbread liquorice. Sweet gummies dragée. Donut bear
            claw pie halvah oat cake cotton candy sweet roll. Cotton candy sweet
            roll donut ice cream.
          </p>
          <p>
            Halvah bonbon topping halvah ice cream cake candy. Wafer gummi bears
            chocolate cake topping powder. Sweet marzipan cheesecake jelly-o
            powder wafer lemon drops lollipop cotton candy.
          </p>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default TabsBody;
