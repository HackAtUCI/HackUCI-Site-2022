import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

//Component imports
import AppNavbar from "./app/components/app-navbar/AppNavbar";
import Application from "./app/views/application/Application";
import Confirmation from "./app/views/confirmation/Confirmation";
import Dashboard from "./app/views/dashboard/Dashboard";
import Home from "./app/views/home/Home";
import LiveExpo from "./app/views/live-expo/LiveExpo";
import LiveSchedule from "./app/views/live-schedule/LiveSchedule";
import Login from "./app/views/login/Login";
import ResetPassword from "./app/views/reset-password/ResetPassword";
import Sponsorship from "./app/views/sponsorship/Sponsorship";
import NotFound from "./app/views/not-found/NotFound";

const router = (
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
);

ReactDOM.render(router, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
