import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "hooks/useAuth";
import useDashboardUser from "hooks/useDashboardUser";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { dashboardUser } = useDashboardUser();

  let willRedirect = false;

  if (checkWaiver) {
    willRedirect = isLoggedIn && dashboardUser.waiverSigned;
  } else {
    willRedirect = isLoggedIn;
  }

  return (
    <Route
      render={({ location }) =>
        willRedirect ? (
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
