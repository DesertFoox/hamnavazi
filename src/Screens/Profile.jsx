import React from "react";
import ProfileSideNave from "./Profile/SideNav/ProfileSideNave";

const Profile = () => {
  return (
    <section className="profile container-fluid profile-bg">
      <div className="row">
        <div className="col-lg-4 d-flex justify-content-start bg-white p-0">
          <ProfileSideNave />
        </div>
        <div className="col-lg-8 bg-selectbrown">
          <div className="row">
            <div className="col-lg-6 bg-white"></div>
            <div className="col-lg-6 bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
