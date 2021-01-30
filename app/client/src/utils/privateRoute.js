import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

import useUser from "hooks/useUser";
import useAuth from "hooks/useAuth";

const LOGIN_PATH = "/login";

// wrapper for React Router <Route> which requires user to be logged in
// specify children instead of component property
function PrivateRoute({ children, checkWaiver }) {
  const { isLoggedIn } = useAuth();
  const { getCurrentUser } = useUser();

  const [waiverSigned, setWaiverSigned] = useState(false);
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then(response => {
        setWaiverSigned(response.data.confirmation.signatureLiability > 0);
      })
      .catch(err => {
        console.log("could not resolve user:", err);
      })
      .then(() => {
        // attempt to authenticate has completed
        setResolved(true);
      });
  }, [getCurrentUser]);

  if (checkWaiver && !resolved) {
    return (
      <div className="authentication">
        <h1>Authenticating...</h1>
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  const authorized = isLoggedIn && (!checkWaiver || waiverSigned);

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

export default PrivateRoute;
