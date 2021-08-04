import React, { Fragment } from "react";
import { Badge } from "reactstrap";
import styled from "./LevelBadge.module.scss";
const LevelBadge = ({
  cell: {
    row: {
      values: { Level },
      original: {},
    },
  },
  flow,
}) => {
  const badgeColor = [
    "bg bg-warning",
    "bg bg-average ",
    "bg bg-advanced ",
    "bg bg-zereshki",
  ];
  return (
    <Fragment>
      <Badge
        className={`${styled["table-body-badge"]} py-1 text-md  ${
          badgeColor[Level?.LevelNumber]
        }`}
        color="warning"
        title={Level?.title}
      >
        {Level?.title}
      </Badge>
    </Fragment>
  );
};

export { LevelBadge };
