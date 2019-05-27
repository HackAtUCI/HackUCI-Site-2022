import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import './App.scss';

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
       p     <Route exact path="/live-schedule" component={LiveSchedule} />
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
