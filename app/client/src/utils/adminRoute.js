import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";

const LOGIN_PATH = "/login";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function AdminRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { getCurrentUser } = useUser();

  const [isAdmin, setIsAdmin] = useState(false);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(response => {
        setIsAdmin(response.data.admin);
      })
      .catch(err => {
        console.log("could not resolve user:", err);
      })
      .then(() => {
        // attempt to authenticate has completed
        setResolved(true);
      });
  }, [getCurrentUser]);

  if (!resolved) {
    return (
      <div className="authentication">
        <h1>Authenticating...</h1>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  const authorized = isLoggedIn && isAdmin;
  return (
    <Route
      render={({ location }) =>
        authorized ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_PATH,
              state: { referrer: location }
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
