import React from "react";
import { Badge } from "reactstrap";

import ProfileSideNave from "../SideNav/ProfileSideNave";

const MyEvents = () => {
  return (
    <>
      <section className="profile-myevents container-fluid profile-bg">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-start bg-white p-0">
            <ProfileSideNave />
          </div>
          <div className="col-lg-8 bg-selectbrown">
            <div className="event py-4 px-5 grid grid-cols-1 bg-white rounded border-r-2 border-fuchsia-600">
                qwe
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyEvents;
