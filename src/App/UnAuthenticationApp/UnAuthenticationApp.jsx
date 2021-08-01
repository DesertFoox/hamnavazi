import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Landing from "../../Screens/Landing";
import SearchPage from "../../Screens/SearchPage/SearchPage";
import Profile from "../../Screens/Profile/Profile/Profile";
import MyEvents from "../../Screens/Profile/MyEvents/MyEvents";
import Gallery from "../../Screens/Profile/Gallery/Gallery";
import Register from "../../Screens/Auth/Register/Register";
const UnAuthenticationApp = () => {
  return (
    <Router>
      <Route
        exact
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="fade"
              timeout={300}
            >
              <div className="App">
                <Header />
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/search" component={SearchPage} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/profile/myevents" component={MyEvents} />
                  <Route exact path="/profile/gallery" component={Gallery} />
                </Switch>
                <Footer />
              </div>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};

export default UnAuthenticationApp;
