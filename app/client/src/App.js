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

import { AppNavbar, Footer } from "./app/components";
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
  StarterPacks
} from "./app/views";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNavbar />
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/starter-packs" component={StarterPacks} />
            <Route
              exact
              path="/starter-packs/:optionalDirections"
              component={StarterPacks}
            />
            <PrivateRoute exact path="/stage">
              <LiveExpo />
            </PrivateRoute>
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/send-reset-password"
              component={SendResetPassword}
            />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/verify/:token" component={Verify} />
            <Route exact path="/sponsors" component={Sponsorship} />

            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/live">
              <Redirect to="/schedule" />
            </Route>
            <PrivateRoute exact path="/schedule">
              <Schedule />
            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
