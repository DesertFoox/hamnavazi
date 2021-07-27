import React, { Fragment } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Badge } from "reactstrap";
import Event from "../../MyEvents/MyEvents";
import Gallery from "../../Gallery/Gallery";
import NaveBar from "./NaveBar/NaveBar";
import ProfileStyle from "../../../../Assets/Style/profile.module.scss";

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
      <TabContent
        className={`py-50 ${ProfileStyle.bg_opa_white}`}
        activeTab={activeTab}
      >
        <TabPane tabId="1">
          <NaveBar naveBarData={NaveBarTitles.Tab1} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
            <div className="mb-sm ml-ssm  grid grid-cols-12 rounded bg-white-profile shadow-lg">
              <div className="col-span-1 flex align-items-center">
                <div
                  className={`${ProfileStyle.identity} shadow-md text-center  bg-white	transform float-right `}
                >
                  <p>ID</p>
                </div>
              </div>
              <div className="col-span-11 py-4 px-5">
                <div className="name mb-2rm grid grid-cols-12">
                  <div className="col-span-11">
                    <p className="text-textcolor text-13">نام | Name</p>
                    <p className="text-13">عارف طلوعی</p>
                  </div>
                  <div className="col-span-1">
                    <div className="col-span-1">
                      <img
                        src={
                          require("../../../../Assets/Images/profile/Edit.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="username mb-2rm">
                  <p className="text-textcolor text-13">
                    نام کاربری | Username
                  </p>
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
            </div>
            <div className="mb-sm ml-ssm  grid grid-cols-12 rounded bg-white-profile shadow-lg">
              <div className="col-span-1 flex align-items-center">
                <div
                  className={`${ProfileStyle.identity} text-center shadow-md bg-white	transform float-right `}
                >
                  <p>Contact Info</p>
                </div>
              </div>
              <div className="col-span-11 py-4 px-5">
                <div className="email">
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <p className="text-textcolor text-13">ایمیل | Email</p>
                      <p className="text-black text-13">
                        Email | پست الکترونیک areftoloei@gmail.com
                      </p>
                    </div>
                    <div className="col-span-1">
                      <img
                        src={
                          require("../../../../Assets/Images/profile/Edit.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
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
          </div>
          <div className="grid grid-cols-1 gap-4  gap-4 p-3">
            <div className="instruments grid grid-cols-1 md:grid-cols-12 gap 4 mb-sm ml-ssm  rounded bg-white-profile shadow-lg">
              <div className="flex align-items-center ">
                <div
                  className={`${ProfileStyle.identity} text-center shadow-md bg-white	transform float-right `}
                >
                  <p>Instruments</p>
                </div>
              </div>

              <div className="col-span-4 py-4">
                <div className="saz mb-ssm">
                  <p className="text-textcolor text-13">
                    ساز اصلی | Main instruments{" "}
                    <Badge className="bg-572a47 mr-ssm rounded-full">
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
              </div>
              <div className="col-span-7 py-4 px-5">
                <div className="saz-2">
                  <div className="grid grid-cols-12">
                    <div className="col-span-11">
                      <p className="text-textcolor text-13">
                        ساز دوم | Second instruments
                        <Badge className="rounded-full mr-ssm bg-gold">
                          مبتدی | begginer
                        </Badge>
                      </p>
                    </div>
                    <div className="col-span-1">
                      <img
                        src={
                          require("../../../../Assets/Images/profile/Edit.svg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>

                  <p className="text-black text-13"> _طبلا | Tabla</p>
                  <p className="text-black text-13">_1988 | 1366</p>
                  <p className="text-black text-13">_هندوستامی | Hindustani</p>
                </div>
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
        <div className="flex justify-content-center">
          <img
            className="ml-ssm mb-ssm"
            src={require("../../../../Assets/Images/profile/share.svg").default}
            alt=""
          />
          <img
            className="mb-ssm"
            src={
              require("../../../../Assets/Images/profile/Download.svg").default
            }
            alt=""
          />
        </div>
      </TabContent>
    </Fragment>
  );
};

export default TabsBody;
