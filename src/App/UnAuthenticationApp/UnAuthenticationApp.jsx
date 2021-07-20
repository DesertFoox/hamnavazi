import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Landing from "../../Screens/Landing";
import Profile from '../../Screens/Profile'

const UnAuthenticationApp = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default UnAuthenticationApp;
