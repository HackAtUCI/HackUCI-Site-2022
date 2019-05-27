import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import { AppNavbar } from "./app/components";
import {
  Application,
  Confirmation,
  Dashboard,
  Home,
  LiveExpo,
  LiveSchedule,
  Login,
  ResetPassword,
  Sponsorship,
  NotFound
} from "app/views";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/live-expo" component={LiveExpo} />
            <Route exact path="/live-schedule" component={LiveSchedule} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/sponsors" component={Sponsorship} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
