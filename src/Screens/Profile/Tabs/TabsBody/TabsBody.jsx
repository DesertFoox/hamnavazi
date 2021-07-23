import React, { Fragment } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge } from "reactstrap";
import Event from "../../MyEvents/MyEvents";
import Gallery from "../../Gallery/Gallery";
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
            <div className="mb-sm ml-ssm py-4 px-5 rounded bg-white shadow-lg">
              <div className="name mb-2rm">
                <p className="text-textcolor text-13">نام | Name</p>
                <p className="text-13">عارف طلوعی</p>
              </div>
              <div className="username mb-2rm">
                <p className="text-textcolor text-13">نام کاربری | Username</p>
                <p className="text-black text-13">Aref Too</p>
              </div>
              <div className="gender mb-2rm">
                <p className="text-textcolor text-13"> جنسیت | Gender</p>
                <p className="text-black text-13">مرد </p>
              </div>
              <div className="birthdate mb-2rm">
                <p className="text-textcolor text-13">
                  {" "}
                  تاریخ تولد | Date Of Birth
                </p>
                <p className="text-black text-13">1983-25-02 </p>
              </div>
              <div className="languages mb-2rm">
                <p className="text-textcolor text-13">
                  تاریخ تولد | Languages{" "}
                </p>
                <p className="text-black text-13">فارس | انگلیسی | عربی</p>
              </div>
              <div className="location mb-2rm">
                <p className="text-textcolor text-13">
                  {" "}
                  موقعیت مکانی | Location{" "}
                </p>
                <p className="text-black text-13">ایران | تهران | هفت تیر</p>
              </div>
            </div>
            <div className="mb-sm ml-ssm py-4 px-5 rounded bg-white shadow-lg">
              <div className="email">
                <p className="text-textcolor text-13">ایمیل | Email</p>
                <p className="text-black text-13">
                  Email | پست الکترونیک areftoloei@gmail.com
                </p>
              </div>
              <div className="website">
                <p className="text-textcolor text-13">وبسایت | Website</p>
                <p className="text-black text-13">www.chavoosh.info</p>
              </div>
              <div className="links">
                <p className="text-textcolor text-13">
                  لینک های ارتباطی | Links
                </p>
                <p className="text-black text-13">@areftoo</p>
              </div>
              <div className="links">
                <p className="text-textcolor text-13">تلفن همراه | Cell</p>
                <p className="text-black text-13">09123235676</p>
              </div>
              <div className="secgender">
                <p className="text-textcolor text-13">جنسیت | Gender</p>
                <p className="text-black text-13">مرد</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4  gap-4 p-3">
            <div className="instruments grid grid-cols-1 md:grid-cols-2 gap 4 mb-sm ml-ssm py-4 px-5 rounded bg-white shadow-lg">
              <div className="saz mb-ssm">
                <p className="text-textcolor text-13">
                  ساز اصلی | Main instruments{" "}
                  <Badge className="bg-572a47 rounded-full">
                    حرفه ای | Pro
                  </Badge>
                </p>
                <p className="text-black text-13"> _تار | Tar</p>
                <p className="text-black text-13">_1988 | 1366</p>
                <p className="text-black text-13">
                  _بداهه نوازی | Improvisation
                </p>
                <p className="text-black text-13">_کلاسیک | Classic</p>
                <p className="text-black text-13">_تلفیقی |Fusion</p>
              </div>
              <div className="saz-2">
                <p className="text-textcolor text-13">
                  ساز دوم | Second instruments
                  <Badge className="rounded-full bg-gold">
                    مبتدی | begginer
                  </Badge>
                </p>
                <p className="text-black text-13"> _طبلا | Tabla</p>
                <p className="text-black text-13">_1988 | 1366</p>
                <p className="text-black text-13">_هندوستامی | Hindustani</p>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <NaveBar naveBarData={NaveBarTitles.Tab2} />
          <Event />
        </TabPane>
        <TabPane tabId="3">
          <NaveBar naveBarData={NaveBarTitles.Tab3} />
          <div className="container mt-ssm">
            <Gallery />
          </div>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

export default TabsBody;
