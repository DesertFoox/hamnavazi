import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Header = lazy(() => import("../../Components/Header/Header"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const Landing = lazy(() => import("../../Screens/Landing"));
const SearchPage = lazy(() => import("../../Screens/SearchPage/SearchPage"));
const Profile = lazy(() => import("../../Screens/Profile/Profile"));
const Register = lazy(() => import("../../Screens/Auth/Register/Register"));

// import MyEvents from "../../Screens/Profile/MyEvents/MyEvents";
// import Gallery from "../../Screens/Profile/Gallery/Gallery";
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
                  {/* <Route exact path="/profile/myevents" component={MyEvents} />
                  <Route exact path="/profile/gallery" component={Gallery} /> */}
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
