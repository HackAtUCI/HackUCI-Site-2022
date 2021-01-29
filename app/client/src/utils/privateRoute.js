import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "hooks/useAuth";
import useDashboardUser from "hooks/useDashboardUser";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const { dashboardUser } = useDashboardUser();
  return (
    <Route
      render={({ location }) =>
        isLoggedIn && dashboardUser.waiverSigned ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { referrer: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
