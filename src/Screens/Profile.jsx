// import React, { useState, useEffect } from "react";
// import ProfileSideNave from "./Profile/SideNav/ProfileSideNave";
// import style from "./Profile/SideNav/ProfileSideNave.module.css";
// import "../Assets/Style/profile.css";
// import TabsNave from "./Profile/Tabs/TabsNaves/TabsNave";
// const Profile = () => {
//   const [windowWidth, setwindowWidth] = useState(null);
//   const [sidebarOpen, setsidebarOpen] = useState(true);

//   // if (sidebarOpen && windowWidth < 990) {
//   //   setsidebarOpen(false);
//   // } else if (windowWidth > 990) {
//   //   setsidebarOpen(true);
//   // }

//   const updateWidth = () => {
//     setwindowWidth(window.innerWidth);
//     console.log(windowWidth);
//   };
//   useEffect(() => {
//     if (windowWidth !== undefined) {
//       updateWidth();
//       window.addEventListener("resize", updateWidth);
//     }
//   }, []);
//   // const resizeStyle =
//   //   windowWidth &&
//   //   ((windowWidth < 769
//   //     ? style["profile-sideNave"] + " " + "col-6"
//   //     : "col-4") ||
//   //     (windowWidth < 576
//   //       ? style["profile-sideNave"] + " " + "col-6"
//   //       : "col-4"));
//   const resizeStyle2 = () => {
//     if (windowWidth > 990) {
//       return "col-4";
//     } else if (windowWidth <= 990) {
//       return style["profile-sideNave"] + " " + "col-10";
//     } else if (windowWidth < 576) {
//       return style["profile-sideNave"] + " " + "col-8";
//     } else if (windowWidth < 470) {
//       return style["profile-sideNave"] + " " + "col-10";
//     } else if (windowWidth < 375) {
//       return style["profile-sideNave"] + " " + "col-10";
//     }
//   };
//   return (
//     <section className="profile container-fluid profile-bg">
//       <div className={`${style[""]} row h-100`}>
//         <div
//           className={`${resizeStyle2()} SideNave  bg-white p-0`}
//           style={sidebarOpen ? { display: "grid" } : { display: "none" }}
//         >
//           <ProfileSideNave isOpen={setsidebarOpen} />
//         </div>
//         <div className="col-lg-8 bg-selectbrown p-0">
//           <TabsNave screenWidth={windowWidth} isOpen={setsidebarOpen} />
//           222
//           <div className="row">
//             <div className="col-lg-6 bg-white"></div>
//             <div className="col-lg-6 bg-white"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Profile;
