import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Landing from "../../Screens/Landing";
import Profile from '../../Screens/Profile/Profile/Profile'
import MyEvents from '../../Screens/Profile/MyEvents/MyEvents'
const UnAuthenticationApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/myevents" component={MyEvents} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default UnAuthenticationApp;
