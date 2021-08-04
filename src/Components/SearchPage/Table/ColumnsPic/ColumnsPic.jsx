import React, { Fragment } from "react";
import { User } from "react-feather";
import styled from "./ColumnsPic.module.scss";
const ColumnsPic = ({
  cell: {
    row: {
      values: { UserImg },
      original: { UserId },
    },
  },
  flow,
}) => {
  return (
    <Fragment>
      {UserImg ? (
        <div className={`${styled["table-body-pic-box"]}`}>
          <img
            className={`img-fluid ${styled["table-body-pic"]}`}
            src={
              require(`../../../../Assets/Images/profile/user/small/1.jpg`)
                .default
            }
            alt=""
          />
        </div>
      ) : (
        <div className={`${styled["table-body-icon-box"]}`}>
          <User size={30} />
        </div>
      )}
    </Fragment>
  );
};

export { ColumnsPic };
