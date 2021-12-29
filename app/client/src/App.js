import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import PrivateRoute from "utils/privateRoute";
import AdminRoute from "utils/adminRoute";
import "./App.scss";
import "./globals/hack-styles.scss";

import { AppNavbar, Footer } from "./app/components";
import {
  Admin,
  Queue,
  Settings,
  Stats,
  Users,
  Application,
  Apply,
  Confirmation,
  Dashboard,
  Home,
  Schedule,
  LiveExpo,
  Login,
  Recruit,
  ResetPassword,
  SendResetPassword,
  Sponsorship,
  NotFound,
  Verify,
  StarterPacks,
  Marketing,
  Corporate,
  Logistics,
  Technology,
  Graphics
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
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/send-reset-password"
              component={SendResetPassword}
            />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/verify/:token" component={Verify} />
            <Route exact path="/sponsors" component={Sponsorship} />
            {/* */}
            <Route exact path="/recruit" component={Recruit} />
            <Route exact path="/recruit/corporate" component={Corporate} />
            <Route exact path="/recruit/logistics" component={Logistics} />
            <Route exact path="/recruit/marketing" component={Marketing} />
            <Route exact path="/recruit/technology" component={Technology} />
            <Route exact path="/recruit/graphics" component={Graphics} />
            {/* dashboard must be accessible to accept the waiver */}
            <PrivateRoute exact path="/dashboard" checkWaiver={false}>
              <Dashboard />
            </PrivateRoute>

            {/* admin only stuff */}
            <AdminRoute exact path="/admin">
              <Admin />
            </AdminRoute>
            <AdminRoute exact path="/admin/stats">
              <Stats />
            </AdminRoute>
            <AdminRoute exact path="/admin/users">
              <Users />
            </AdminRoute>
            <AdminRoute exact path="/admin/queue">
              <Queue />
            </AdminRoute>
            <AdminRoute exact path="/admin/user">
              <Graphics />
            </AdminRoute>
            <AdminRoute exact path="/admin/settings">
              <Settings />
            </AdminRoute>

            {/* schedule and stage require waiver to be signed */}
            <Route exact path="/live">
              <Redirect to="/schedule" />
            </Route>
            {/* <PrivateRoute exact path="/schedule" checkWaiver={true}> */}
            <Route exact path="/schedule">
              <Schedule />
            </Route>
            {/* </PrivateRoute> */}
            {/* <PrivateRoute exact path="/stage" checkWaiver={true}> */}
            <Route exact path="/stage">
              <LiveExpo />
            </Route>
            {/* </PrivateRoute> */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
      <Router></Router>
    </div>
  );
}

export default App;
