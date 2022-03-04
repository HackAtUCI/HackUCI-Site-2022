import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "utils/privateRoute";
import "./App.scss";
import "./globals/hack-styles.scss";

import { AppNavbar, CloudBackground, Footer } from "./app/components";
import {
  Application,
  Apply,
  Confirmation,
  Dashboard,
  Home,
  Schedule,
  LiveExpo,
  Login,
  ResetPassword,
  SendResetPassword,
  Sponsorship,
  NotFound,
  Verify,
  Statement,
  Resources
} from "./app/views";
import { redirects } from "./assets/data/redirects"

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <div className="app-content">
          <CloudBackground />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/resources" component={Resources} />
            <Route exact path="/resources/:optionalDirections" component={Resources} />
            <Route exact path="/statement" component={Statement} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/send-reset-password"
              component={SendResetPassword}
            />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/verify/:token" component={Verify} />
            <Route exact path="/sponsors" component={Sponsorship} />
            {/*dashboard must be accessible to accept the waiver*/}
            {/*<Route exact path="/dashboard" component={Dashboard} />*/}
            <PrivateRoute exact path="/dashboard" checkWaiver={false}>
              <Dashboard />
            </PrivateRoute>
            {/* schedule and stage require waiver to be signed */}
            <Route exact path="/live">
              <Redirect to="/schedule" />
            </Route>
            <PrivateRoute exact path="/schedule" checkWaiver={true}>
              <Schedule />
            </PrivateRoute>
            <PrivateRoute exact path="/stage" checkWaiver={true}>
              <LiveExpo />
            </PrivateRoute>
            {/*<Route exact path="/stage">*/}
            {/*  <LiveExpo />*/}
            {/*</Route>*/}
            {/* </PrivateRoute> */}
            {redirects.map(redirect => {
              return (
                <Route exact path={`/${redirect.path}`} component={()=>{
                  window.location.replace(redirect.url); 
                  return null;
                }}></Route>
              )
            })}
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
