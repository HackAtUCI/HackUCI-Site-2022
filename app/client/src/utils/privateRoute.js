import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "hooks/useAuth";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  return (
    <Route
      render={({ location }) =>
        isLoggedIn ? (
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
