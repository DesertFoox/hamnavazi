import React from "react";
import { Badge } from "reactstrap";

import ProfileSideNave from "../SideNav/ProfileSideNave";

const Profile = () => {
  return (
    <section className="profile container-fluid profile-bg">
      <div className="row">
        <div className="col-lg-4 d-flex justify-content-start bg-white p-0">
          <ProfileSideNave />
        </div>
        <div className="col-lg-8 bg-selectbrown">
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
        </div>
      </div>
    </section>
  );
};

export default Profile;
