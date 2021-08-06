import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HeaderUnAuthentication from "./HeaderUnAuth/HeaderUnAuthentication";
import HeaderAuthentication from "./HeaderAuth/HeaderAuthentication";

import style from "./Header.module.scss";
const Header = () => {
  const [logged, setlogged] = useState(false);
  const history = useHistory();
  return (
    <div className={` container-fluid ${style["nav-container"]} `}>
      {logged === true ? (
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
