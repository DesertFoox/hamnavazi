import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import { List } from "react-feather";
import { Input, Label } from "reactstrap";
import HeaderUnAuthentication from "./HeaderUnAuth/HeaderUnAuthentication";
import HeaderAuthentication from "./HeaderAuth/HeaderAuthentication";
import style from "./Header.module.scss";
const Header = () => {
  const [logged, setlogged] = useState(false);
  const history = useHistory();
  const accessToken = "nott found";
  // const profile = true;
  const setting = null;
  return (
    <div className={` container-fluid ${style["nav-container"]} `}>
      {logged == true ? (
        <HeaderAuthentication
          history={history}
          logged={logged}
          setlogged={setlogged}
        />
      ) : (
        <HeaderUnAuthentication
          history={history}
          logged={logged}
          setlogged={setlogged}
        />
      )}
    </div>
  );
};

export default Header;
